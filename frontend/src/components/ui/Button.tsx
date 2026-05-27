import { type ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'link';
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const variantClass =
    variant === 'ghost'
      ? 'btn btn-ghost'
      : variant === 'link'
        ? 'btn btn-link'
        : 'btn btn-primary';

  return (
    <button
      className={`${variantClass} ${className}`.trim()}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}
