import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`mm-button mm-button--${variant} ${
        fullWidth ? "mm-button--full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
