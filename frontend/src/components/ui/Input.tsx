import type { InputHTMLAttributes } from 'react';
type Props = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };
export function Input({ label, error, id, className = '', ...props }: Props) { return <div className="form-group"><label htmlFor={id} className="form-label">{label}</label><input id={id} className={`form-input ${error ? 'form-input--error' : ''} ${className}`.trim()} aria-invalid={Boolean(error) || undefined} {...props} />{error && <p className="form-error" role="alert">{error}</p>}</div>; }
