import { env } from "../config/env";
type Quote = { price: number; change: number; changePct: number; volume: number; high: number; low: number };
type Bar = { date: string; open: number; high: number; low: number; close: number; volume: number };
const base = "https://www.alphavantage.co/query";
async function request(params: Record<string, string>) {
  if (!env.ALPHA_VANTAGE_API_KEY) throw new Error("ALPHA_VANTAGE_API_KEY is not configured");
  const response = await fetch(`${base}?${new URLSearchParams({ ...params, apikey: env.ALPHA_VANTAGE_API_KEY })}`);
  if (!response.ok) throw new Error(`Alpha Vantage request failed (${response.status})`);
  const data = await response.json() as Record<string, unknown>;
  if (data.Note || data["Error Message"]) throw new Error(String(data.Note ?? data["Error Message"]));
  return data;
}
export async function fetchQuote(symbol: string): Promise<Quote> {
  const data = await request({ function: "GLOBAL_QUOTE", symbol }); const q = data["Global Quote"] as Record<string, string> | undefined;
  if (!q?.["05. price"]) throw new Error(`No quote found for ${symbol}`);
  return { price: Number(q["05. price"]), change: Number(q["09. change"] ?? 0), changePct: Number((q["10. change percent"] ?? "0").replace("%", "")), volume: Number(q["06. volume"] ?? 0), high: Number(q["03. high"] ?? q["05. price"]), low: Number(q["04. low"] ?? q["05. price"]) };
}
export async function searchSymbols(keywords: string) { const data = await request({ function: "SYMBOL_SEARCH", keywords }); return ((data.bestMatches ?? []) as Record<string, string>[]).map((r) => ({ symbol: r["1. symbol"], name: r["2. name"] })); }
export async function fetchDailySeries(symbol: string, days: number): Promise<Bar[]> { const data = await request({ function: "TIME_SERIES_DAILY", symbol, outputsize: "compact" }); return Object.entries((data["Time Series (Daily)"] ?? {}) as Record<string, Record<string, string>>).slice(0, days).map(([date, v]) => ({ date, open: Number(v["1. open"]), high: Number(v["2. high"]), low: Number(v["3. low"]), close: Number(v["4. close"]), volume: Number(v["5. volume"] ?? 0) })); }
