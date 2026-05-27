import { useState, type FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { isAuthenticated, signIn } from '../lib/auth';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value: string): string | undefined {
  if (!value.trim()) return 'Email is required';
  if (!EMAIL_PATTERN.test(value)) return 'Enter a valid email address';
  return undefined;
}

function validatePassword(value: string): string | undefined {
  if (!value) return 'Password is required';
  if (value.length < 8) return 'Password must be at least 8 characters';
  return undefined;
}

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [loading, setLoading] = useState(false);

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextEmailError = validateEmail(email);
    const nextPasswordError = validatePassword(password);
    setEmailError(nextEmailError);
    setPasswordError(nextPasswordError);
    if (nextEmailError || nextPasswordError) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    signIn();
    setLoading(false);
    navigate('/dashboard');
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-header">
          <div className="auth-logo" aria-hidden="true">
            MI
          </div>
          <h1 className="auth-title">Market Intelligence</h1>
          <p className="auth-subtitle">Sign in to your workspace</p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="you@company.com"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(undefined);
            }}
            error={emailError}
          />

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="form-input-wrap">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className={[
                  'form-input',
                  'form-input--with-toggle',
                  passwordError ? 'form-input--error' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError(undefined);
                }}
                aria-invalid={passwordError ? true : undefined}
                aria-describedby={passwordError ? 'password-error' : undefined}
              />
              <button
                type="button"
                className="form-toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {passwordError && (
              <p id="password-error" className="form-error" role="alert">
                {passwordError}
              </p>
            )}
          </div>

          <div className="form-footer">
            <button
              type="button"
              className="btn btn-link"
              onClick={(e) => e.preventDefault()}
            >
              Forgot password?
            </button>
          </div>

          <div className="form-actions">
            <Button type="submit" loading={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}


