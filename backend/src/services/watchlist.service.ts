import { AssetType } from "../generated/prisma";
import { prisma } from "../config/prisma";
import type { AssetTypeParam } from "../types/market.types";

const includeItems = { items: { orderBy: { symbol: "asc" as const } } };
export function getUserWatchlists(userId: string) { return prisma.watchlist.findMany({ where: { userId }, include: includeItems, orderBy: { name: "asc" } }); }
export function createWatchlist(userId: string, name: string) { return prisma.watchlist.create({ data: { userId, name: name.trim() }, include: includeItems }); }
async function owned(id: string, userId: string) {
  const watchlist = await prisma.watchlist.findFirst({ where: { id, userId } });
  if (!watchlist) { const error = new Error("Watchlist not found"); Object.assign(error, { status: 404 }); throw error; }
}
export async function addItem(watchlistId: string, userId: string, symbol: string, assetType: AssetTypeParam) {
  await owned(watchlistId, userId);
  return prisma.watchlistItem.create({ data: { watchlistId, symbol: symbol.trim(), assetType: AssetType[assetType] } });
}
export async function removeItem(watchlistId: string, userId: string, itemId: string) {
  await owned(watchlistId, userId);
  const item = await prisma.watchlistItem.findFirst({ where: { id: itemId, watchlistId } });
  if (!item) { const error = new Error("Watchlist item not found"); Object.assign(error, { status: 404 }); throw error; }
  await prisma.watchlistItem.delete({ where: { id: itemId } });
}
