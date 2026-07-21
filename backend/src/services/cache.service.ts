import { redis } from "../config/redis";
import type { AssetTypeParam } from "../types/market.types";

export const CACHE_TTL = { QUOTE: 60, HISTORY: 900, SEARCH: 300 } as const;
export const cacheKeys = {
  quote: (type: AssetTypeParam, symbol: string) => `quote:${type}:${symbol.toLowerCase()}`,
  history: (type: AssetTypeParam, symbol: string, days: number) => `history:${type}:${symbol.toLowerCase()}:${days}`,
  search: (query: string) => `search:${query.toLowerCase()}`,
  lock: (type: AssetTypeParam, symbol: string) => `lock:${type}:${symbol.toLowerCase()}`,
};
export async function getCache<T>(key: string): Promise<T | null> {
  const value = await redis.get(key);
  return value ? JSON.parse(value) as T : null;
}
export async function setCache(key: string, value: unknown, seconds: number) {
  await redis.set(key, JSON.stringify(value), "EX", seconds);
}
export async function acquireLock(key: string, seconds: number) {
  return (await redis.set(key, "1", "EX", seconds, "NX")) === "OK";
}
export async function releaseLock(key: string) { await redis.del(key); }
