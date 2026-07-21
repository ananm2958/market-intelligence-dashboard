import type { Quote } from '../lib/types';
import { formatCurrency, formatPercent } from '../lib/formatters';
export function QuoteCard({ quote }: { quote: Quote }) { const positive = quote.change >= 0; return <section className="market-card quote-card"><span>{quote.symbol}</span><strong>{formatCurrency(quote.price)}</strong><span className={positive ? 'positive' : 'negative'}>{positive ? '+' : ''}{formatCurrency(quote.change)} ({formatPercent(quote.changePct)})</span></section>; }
