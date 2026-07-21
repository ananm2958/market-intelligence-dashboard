import { Router } from "express";
import { requireAuth, AuthRequest } from "../middleware/auth";
import * as marketService from "../services/market.service";
import type { AssetTypeParam } from "../types/market.types";

const router = Router();

router.use(requireAuth);

function parseAssetType(value: string): AssetTypeParam {
  const upper = value.toUpperCase();
  if (upper !== "STOCK" && upper !== "CRYPTO") {
    const err: any = new Error("type must be STOCK or CRYPTO");
    err.status = 400;
    throw err;
  }
  return upper;
}

router.get("/quote/:type/:symbol", async (req, res, next) => {
  try {
    const assetType = parseAssetType(req.params.type);
    const quote = await marketService.getQuote(req.params.symbol, assetType);

    if (!quote) {
      return res.status(404).json({ error: `No data available for ${req.params.symbol}` });
    }
    res.json(quote);
  } catch (err) {
    next(err);
  }
});

router.get("/history/:type/:symbol", async (req, res, next) => {
  try {
    const assetType = parseAssetType(req.params.type);
    const days = req.query.days ? parseInt(req.query.days as string, 10) : 30;
    const history = await marketService.getHistory(req.params.symbol, assetType, days);
    res.json(history);
  } catch (err) {
    next(err);
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const query = (req.query.q as string) ?? "";
    if (!query.trim()) {
      return res.status(400).json({ error: "q query param is required" });
    }
    const assetType = req.query.type ? parseAssetType(req.query.type as string) : undefined;
    const results = await marketService.search(query, assetType);
    res.json(results);
  } catch (err) {
    next(err);
  }
});

export default router;