export type AssetType = 'STOCK' | 'CRYPTO';
export interface Quote { symbol: string; assetType: AssetType; price: number; change: number; changePct: number; volume: number; high: number; low: number; fetchedAt: string; }
export interface HistoryBar { date: string; close: number; }
export interface SearchResult { symbol: string; name: string; assetType: AssetType; }
export interface WatchlistItem { id: string; symbol: string; assetType: AssetType; }
export interface Watchlist { id: string; name: string; items: WatchlistItem[]; }
