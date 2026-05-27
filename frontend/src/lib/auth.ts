const AUTH_KEY = 'auth';

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === 'mock';
}

export function signIn(): void {
  sessionStorage.setItem(AUTH_KEY, 'mock');
}

export function signOut(): void {
  sessionStorage.removeItem(AUTH_KEY);
}
