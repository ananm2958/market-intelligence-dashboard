import { useEffect, useState } from 'react';
import { api } from './api';
import type { HistoryBar, Quote } from './types';

export function useStockData(symbol: string) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [prices, setPrices] = useState<HistoryBar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!symbol) return;

    async function load() {
      try {
        setLoading(true); setError(null);
        const [quoteData, history] = await Promise.all([api.quote(symbol), api.history(symbol)]);
        setQuote(quoteData); setPrices(history);
      } catch {
        setError("Failed to fetch stock data");
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, [symbol]);

  return { quote, prices, loading, error };
}
