import { useState } from "react";
import { useStockData } from "../lib/useStockData";
import StockChart from "../components/StockChart";
import QuoteCard from "../components/QuoteCard";
import TickerSearch from "../components/TickerSearch";

export default function Dashboard() {
  const [symbol, setSymbol] = useState("AAPL");
  const { quote, prices, loading, error } = useStockData(symbol);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Market Dashboard</h1>

      <TickerSearch onSelect={setSymbol} />

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {quote && <QuoteCard quote={quote} symbol={symbol} />}
      {prices.length > 0 && <StockChart data={prices} symbol={symbol} />}
    </div>
  );
}