const AUTH_KEY = 'market-authenticated';

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === 'true';
}

export function signIn(): void {
  sessionStorage.setItem(AUTH_KEY, 'true');
}

export function signOut(): void {
  sessionStorage.removeItem(AUTH_KEY);
}
