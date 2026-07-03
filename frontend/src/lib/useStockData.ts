import { useEffect, useState } from "react";
import { getQuote, getDailyPrices } from "./alphaVantage";

export function useStockData(symbol: string) {
  const [quote, setQuote] = useState<any>(null);
  const [prices, setPrices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!symbol) return;

    async function fetch() {
      try {
        setLoading(true);
        const [quoteData, priceData] = await Promise.all([
          getQuote(symbol),
          getDailyPrices(symbol),
        ]);

        setQuote(quoteData);

        const formatted = Object.entries(priceData)
          .slice(0, 30) 
          .map(([date, values]: [string, any]) => ({
            date,
            close: parseFloat(values["4. close"]),
          }))
          .reverse(); 

        setPrices(formatted);
      } catch (err) {
        setError("Failed to fetch stock data");
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, [symbol]);

  return { quote, prices, loading, error };
}