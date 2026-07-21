import { prisma } from "../config/prisma";
import { setCache, cacheKeys, CACHE_TTL, acquireLock, releaseLock } from "../services/cache.service";
import * as alphaVantage from "../providers/alphaVantage.provider";
import * as coinGecko from "../providers/coinGecko.provider";
import { AssetType } from "../generated/prisma";
import type { QuoteResponse } from "../types/market.types";

const STOCK_DELAY_MS = 12_000; // Alpha Vantage free tier: 5 req/min -> 12s spacing

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Handles two job types on the quote-fetch queue:
 * - "fetch-all-tracked": runs every 60s, refreshes all active TrackedSymbol rows
 *   plus any symbol present in a user watchlist
 * - "refresh-single": triggered on-demand from market.service when a cached
 *   value goes stale (stale-while-revalidate)
 */
export async function processQuoteFetchJob(jobName: string, data: any) {
  if (jobName === "refresh-single") {
    await refreshSingle(data.symbol, data.assetType);
    return;
  }

  await fetchAllTracked();
}

async function refreshSingle(symbol: string, assetType: AssetType) {
  const lockKey = cacheKeys.lock(assetType, symbol);
  const acquired = await acquireLock(lockKey, 30);
  if (!acquired) return; // another worker is already refreshing this symbol

  try {
    const provider = assetType === AssetType.STOCK ? alphaVantage : coinGecko;
    const quote = await provider.fetchQuote(symbol);
    await persistQuote(symbol, assetType, quote);
  } catch (err) {
    console.error(`refresh-single failed for ${assetType}:${symbol}`, err);
  } finally {
    await releaseLock(lockKey);
  }
}

async function fetchAllTracked() {
  const tracked = await prisma.trackedSymbol.findMany({ where: { active: true } });
  const watchlistItems = await prisma.watchlistItem.findMany({
    select: { symbol: true, assetType: true },
    distinct: ["symbol", "assetType"],
  });

  const allSymbols = new Map<string, AssetType>();
  for (const t of tracked) allSymbols.set(`${t.assetType}:${t.symbol}`, t.assetType);
  for (const w of watchlistItems) allSymbols.set(`${w.assetType}:${w.symbol}`, w.assetType);

  const stockSymbols: string[] = [];
  const cryptoSymbols: string[] = [];

  for (const [key, assetType] of allSymbols.entries()) {
    const symbol = key.split(":")[1];
    if (assetType === AssetType.STOCK) stockSymbols.push(symbol);
    else cryptoSymbols.push(symbol);
  }

  console.log(`Quote fetch: ${stockSymbols.length} stocks, ${cryptoSymbols.length} crypto`);

  // Crypto: single batched call, up to 250 ids
  if (cryptoSymbols.length > 0) {
    try {
      const batches = chunk(cryptoSymbols, 250);
      for (const batch of batches) {
        const quotes = await coinGecko.fetchQuotesBatch(batch);
        for (const [symbol, quote] of Object.entries(quotes)) {
          await persistQuote(symbol, AssetType.CRYPTO, quote);
        }
      }
    } catch (err) {
      console.error("CoinGecko batch fetch failed", err);
    }
  }

  // Stocks: sequential with rate-limit spacing
  for (const symbol of stockSymbols) {
    const lockKey = cacheKeys.lock(AssetType.STOCK, symbol);
    const acquired = await acquireLock(lockKey, 30);
    if (!acquired) continue;

    try {
      const quote = await alphaVantage.fetchQuote(symbol);
      await persistQuote(symbol, AssetType.STOCK, quote);
    } catch (err) {
      console.error(`Stock fetch failed for ${symbol}`, err);
    } finally {
      await releaseLock(lockKey);
      await sleep(STOCK_DELAY_MS);
    }
  }
}

async function persistQuote(symbol: string, assetType: AssetType, quote: { price: number; change: number; changePct: number; volume: number }) {
  await prisma.priceSnapshot.create({
    data: {
      symbol,
      assetType,
      price: quote.price,
      change: quote.change,
      changePct: quote.changePct,
      volume: BigInt(Math.floor(quote.volume ?? 0)),
    },
  });

  const cacheValue: QuoteResponse = {
    symbol,
    assetType: assetType as "STOCK" | "CRYPTO",
    price: quote.price,
    change: quote.change,
    changePct: quote.changePct,
    volume: quote.volume,
    high: quote.price,
    low: quote.price,
    source: "live",
    fetchedAt: new Date().toISOString(),
  };

  await setCache(cacheKeys.quote(assetType, symbol), cacheValue, CACHE_TTL.QUOTE);
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}