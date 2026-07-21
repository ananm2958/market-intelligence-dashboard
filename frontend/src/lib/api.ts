import axios from 'axios';
import type { HistoryBar, Quote, SearchResult, Watchlist } from './types';
const client = axios.create({ baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api' });
client.interceptors.request.use((config) => { const token = sessionStorage.getItem('market-token'); if (token) config.headers.Authorization = `Bearer ${token}`; return config; });
export const api = { quote: (symbol: string, type = 'STOCK') => client.get<Quote>(`/market/quote/${type}/${symbol}`).then((r) => r.data), history: (symbol: string, type = 'STOCK') => client.get<{ bars: HistoryBar[] }>(`/market/history/${type}/${symbol}`).then((r) => r.data.bars), search: (q: string) => client.get<SearchResult[]>('/market/search', { params: { q } }).then((r) => r.data), watchlists: () => client.get<Watchlist[]>('/watchlists').then((r) => r.data) };
