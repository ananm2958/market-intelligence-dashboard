export type AssetTypeParam = "STOCK" | "CRYPTO";

export interface QuoteResponse {
  symbol: string;
  assetType: AssetTypeParam;
  price: number;
  change: number;
  changePct: number;
  volume: number;
  high: number;
  low: number;
  source: "cache" | "db" | "live";
  fetchedAt: string;
}

export interface HistoryBar {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface HistoryResponse {
  symbol: string;
  assetType: AssetTypeParam;
  bars: HistoryBar[];
  source: "cache" | "db";
}