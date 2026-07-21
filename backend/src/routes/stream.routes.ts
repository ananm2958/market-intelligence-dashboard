import { Router } from "express";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { getCache, cacheKeys } from "../services/cache.service";
import type { AssetTypeParam, QuoteResponse } from "../types/market.types";

const router = Router();

const POLL_INTERVAL_MS = 5_000;

router.get("/quotes", requireAuth, async (req: AuthRequest, res) => {
  // Expected: ?symbols=AAPL:STOCK,bitcoin:CRYPTO
  const symbolsParam = (req.query.symbols as string) ?? "";
  const subscriptions = symbolsParam
    .split(",")
    .filter(Boolean)
    .map((entry) => {
      const [symbol, assetType] = entry.split(":");
      return { symbol, assetType: (assetType ?? "STOCK") as AssetTypeParam };
    });

  if (subscriptions.length === 0) {
    return res.status(400).json({ error: "symbols query param is required, e.g. ?symbols=AAPL:STOCK" });
  }

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const lastSent = new Map<string, number>();

  const sendUpdates = async () => {
    for (const { symbol, assetType } of subscriptions) {
      const key = cacheKeys.quote(assetType, symbol);
      const quote = await getCache<QuoteResponse>(key);
      if (!quote) continue;

      const fetchedAtMs = new Date(quote.fetchedAt).getTime();
      const prevSent = lastSent.get(key) ?? 0;

      // Only push if the value actually changed since last push
      if (fetchedAtMs > prevSent) {
        lastSent.set(key, fetchedAtMs);
        res.write(`data: ${JSON.stringify(quote)}\n\n`);
      }
    }
  };

  // Send an initial snapshot immediately
  await sendUpdates();

  const interval = setInterval(sendUpdates, POLL_INTERVAL_MS);

  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
});

export default router;