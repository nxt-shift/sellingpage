import React from "react";

export type CardVariant = "paper" | "flat" | "stamp" | "ink" | "brand" | "accent";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  padding?: number | string;
  as?: keyof JSX.IntrinsicElements;
}

const variants: Record<CardVariant, React.CSSProperties> = {
  paper: { background: "var(--bg-surface)", color: "var(--text-body)", border: "1.5px solid var(--asphalt-200)", boxShadow: "var(--shadow-sm)" },
  flat:  { background: "var(--bg-surface)", color: "var(--text-body)", border: "1.5px solid var(--asphalt-200)" },
  stamp: { background: "var(--bg-surface)", color: "var(--text-body)", border: "2px solid var(--asphalt-900)", boxShadow: "var(--shadow-stamp)" },
  ink:   { background: "var(--asphalt-900)", color: "var(--cream-50)", border: "2px solid var(--asphalt-900)" },
  brand: { background: "var(--shift-cobalt-500)", color: "var(--cream-50)", border: "2px solid var(--shift-cobalt-500)" },
  accent:{ background: "var(--shift-orange-500)", color: "var(--asphalt-900)", border: "2px solid var(--asphalt-900)", boxShadow: "var(--shadow-stamp)" },
};

/**
 * Generic surface. `variant="stamp"` carries the offset hard shadow — use for
 * featured tiles. `variant="ink"` for inverted surfaces.
 */
export function Card({ variant = "paper", padding = 20, as = "div", children, style, ...rest }: CardProps) {
  return React.createElement(
    as,
    { style: { borderRadius: "var(--radius-lg)", padding, ...variants[variant], ...style }, ...rest },
    children
  );
}
