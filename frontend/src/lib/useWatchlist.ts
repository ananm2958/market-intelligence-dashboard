import { useEffect, useState } from 'react';
import { api } from './api';
import type { Watchlist } from './types';

export function useWatchlist() {
  const [watchlists, setWatchlists] = useState<Watchlist[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { void api.watchlists().then(setWatchlists).catch(() => setError('Unable to load watchlists.')); }, []);
  return { watchlists, error };
}
