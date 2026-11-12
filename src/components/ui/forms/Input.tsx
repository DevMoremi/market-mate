
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="mm-input-wrapper">
      <label htmlFor={inputId} className="mm-input-label">
        {label}
      </label>

      <input
        id={inputId}
        className={`mm-input ${error ? "mm-input--error" : ""} ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />

      {error && (
        <p id={`${inputId}-error`} className="mm-input-error">
          {error}
        </p>
      )}
    </div>
  );
}
