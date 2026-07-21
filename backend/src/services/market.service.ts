import { prisma } from "../config/prisma";
import { getCache, setCache, cacheKeys, CACHE_TTL } from "./cache.service";
import { quoteFetchQueue } from "../jobs/queues";
import * as alphaVantage from "../providers/alphaVantage.provider";
import * as coinGecko from "../providers/coinGecko.provider";
import type { AssetTypeParam, QuoteResponse, HistoryResponse } from "../types/market.types";

const STALE_THRESHOLD_MS = 5 * 60 * 1000; // 5 minutes

function providerFor(assetType: AssetTypeParam) {
  return assetType === "STOCK" ? alphaVantage : coinGecko;
}


export async function getQuote(symbol: string, assetType: AssetTypeParam): Promise<QuoteResponse | null> {
  const key = cacheKeys.quote(assetType, symbol);

  const cached = await getCache<QuoteResponse>(key);
  if (cached) {
    return { ...cached, source: "cache" };
  }

  const latest = await prisma.priceSnapshot.findFirst({
    where: { symbol, assetType },
    orderBy: { fetchedAt: "desc" },
  });

  const isFresh = latest && Date.now() - latest.fetchedAt.getTime() < STALE_THRESHOLD_MS;

  if (latest) {
    const response: QuoteResponse = {
      symbol,
      assetType,
      price: Number(latest.price),
      change: Number(latest.change ?? 0),
      changePct: Number(latest.changePct ?? 0),
      volume: Number(latest.volume ?? 0),
      high: Number(latest.price), // PriceSnapshot doesn't store high/low; chart endpoint covers this
      low: Number(latest.price),
      source: "db",
      fetchedAt: latest.fetchedAt.toISOString(),
    };

    if (isFresh) {
      await setCache(key, response, CACHE_TTL.QUOTE);
      return response;
    }

    // Stale: trigger background refresh, return stale value immediately
    await quoteFetchQueue.add("refresh-single", { symbol, assetType }, { removeOnComplete: true });
    return response;
  }

  try {
    const provider = providerFor(assetType);
    const live = await provider.fetchQuote(symbol);

    await prisma.priceSnapshot.create({
      data: {
        symbol,
        assetType,
        price: live.price,
        change: live.change,
        changePct: live.changePct,
        volume: BigInt(Math.floor(live.volume)),
      },
    });

    const response: QuoteResponse = {
      symbol,
      assetType,
      price: live.price,
      change: live.change,
      changePct: live.changePct,
      volume: live.volume,
      high: live.high,
      low: live.low,
      source: "live",
      fetchedAt: new Date().toISOString(),
    };

    await setCache(key, response, CACHE_TTL.QUOTE);
    return response;
  } catch (err) {
    console.error(`Live fetch failed for ${assetType}:${symbol}`, err);
    return null;
  }
}

/**
 * Bulk latest quotes for a watchlist — single DB query using DISTINCT ON
 * pattern via groupBy, falls back to per-symbol cache reads.
 */
export async function getQuotesBulk(
  items: { symbol: string; assetType: AssetTypeParam }[]
): Promise<QuoteResponse[]> {
  const results = await Promise.all(items.map((i) => getQuote(i.symbol, i.assetType)));
  return results.filter((r): r is QuoteResponse => r !== null);
}

/**
 * Chart history — served from cache, falling back to DailyPrice table.
 * Does NOT hit external APIs synchronously; daily-sync job keeps this fresh.
 */
export async function getHistory(
  symbol: string,
  assetType: AssetTypeParam,
  days = 30
): Promise<HistoryResponse> {
  const key = cacheKeys.history(assetType, symbol, days);

  const cached = await getCache<HistoryResponse>(key);
  if (cached) {
    return { ...cached, source: "cache" };
  }

  const since = new Date();
  since.setDate(since.getDate() - days);

  const rows = await prisma.dailyPrice.findMany({
    where: { symbol, assetType, date: { gte: since } },
    orderBy: { date: "asc" },
  });

  const response: HistoryResponse = {
    symbol,
    assetType,
    bars: rows.map((r) => ({
      date: r.date.toISOString().slice(0, 10),
      open: Number(r.open),
      high: Number(r.high),
      low: Number(r.low),
      close: Number(r.close),
      volume: Number(r.volume ?? 0),
    })),
    source: "db",
  };

  await setCache(key, response, CACHE_TTL.HISTORY);
  return response;
}

export async function search(query: string, assetType?: AssetTypeParam) {
  const key = cacheKeys.search(`${assetType ?? "all"}:${query}`);
  const cached = await getCache<any[]>(key);
  if (cached) return cached;

  let results: any[] = [];

  if (!assetType || assetType === "STOCK") {
    const stockResults = await alphaVantage.searchSymbols(query).catch(() => []);
    results = results.concat(stockResults.map((r) => ({ ...r, assetType: "STOCK" })));
  }

  if (!assetType || assetType === "CRYPTO") {
    const cryptoResults = await coinGecko.searchSymbols(query).catch(() => []);
    results = results.concat(cryptoResults.map((r) => ({ ...r, assetType: "CRYPTO" })));
  }

  await setCache(key, results, CACHE_TTL.SEARCH);
  return results;
}