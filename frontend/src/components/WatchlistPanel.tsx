const defaults = ['AAPL', 'NVDA', 'MSFT', 'bitcoin'];
export function WatchlistPanel({ onSelect }: { onSelect: (symbol: string) => void }) { return <aside className="market-card watchlist"><h2>Watchlist</h2>{defaults.map((symbol) => <button key={symbol} onClick={() => onSelect(symbol)}>{symbol}</button>)}</aside>; }
