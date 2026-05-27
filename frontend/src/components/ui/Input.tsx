import { type InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, id, className = '', ...props }, ref) {
    const errorId = error ? `${id}-error` : undefined;
    const inputClass = [
      'form-input',
      error ? 'form-input--error' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="form-group">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={inputClass}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          {...props}
        />
        {error && (
          <p id={errorId} className="form-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);
