import * as React from "react";

/**
 * Shift's primary action button. Industrial type, hard borders, brand stamp
 * shadow on the accent variant.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `accent` carries the brand stamp shadow — use for the single hero CTA. */
  variant?: "primary" | "accent" | "ink" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
