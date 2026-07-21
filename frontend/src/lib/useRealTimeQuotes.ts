import { useEffect, useState } from 'react';
import { api } from './api';
import type { Quote } from './types';

export function useRealTimeQuotes(symbols: string[]) {
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});
  useEffect(() => {
    let active = true;
    const refresh = async () => {
      const results = await Promise.all(symbols.map(async (symbol) => {
        try { return await api.quote(symbol); } catch { return null; }
      }));
      if (active) setQuotes(Object.fromEntries(results.filter((quote): quote is Quote => quote !== null).map((quote) => [quote.symbol, quote])));
    };
    void refresh();
    const timer = window.setInterval(() => void refresh(), 30_000);
    return () => { active = false; window.clearInterval(timer); };
  }, [symbols.join(',')]);
  return quotes;
}
