import type { ButtonHTMLAttributes } from 'react';
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean };
export function Button({ loading, className = '', children, disabled, ...props }: Props) { return <button {...props} disabled={disabled || loading} className={`btn btn-primary ${className}`.trim()}>{loading && <span className="spinner" />}{children}</button>; }
