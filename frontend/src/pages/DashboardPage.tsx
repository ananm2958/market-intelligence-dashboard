import { useState } from "react";
import { Layout } from "../components/Layout";
import { TickerSearch } from "../components/TickerSearch";
import { QuoteCard } from "../components/QuoteCard";
import { StockChart } from "../components/StockChart";
import { WatchlistPanel } from "../components/WatchlistPanel";
import { useStockData } from "../lib/useStockData";

export function DashboardPage() {
  const [symbol, setSymbol] = useState("AAPL");
  const { quote, prices, loading, error } = useStockData(symbol);

  return (
    <Layout>
      <div className="dashboard-grid">
        <main><TickerSearch onSelect={setSymbol} />{loading && <p>Loading market data…</p>}{error && <p className="error-message">{error}</p>}{quote && <QuoteCard quote={quote} />}{prices.length > 0 && <StockChart data={prices} symbol={symbol} />}</main>
        <WatchlistPanel onSelect={setSymbol} />
      </div>
    </Layout>
  );
}
