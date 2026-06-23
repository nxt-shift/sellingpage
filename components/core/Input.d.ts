import * as React from "react";

/**
 * Single-line text input with optional label, hint, and error.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  leadingIcon?: React.ReactNode;
  trailingSlot?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
