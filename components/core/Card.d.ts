import * as React from "react";

/** Surface with a variant. */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "paper" | "flat" | "stamp" | "ink" | "brand" | "accent";
  padding?: number | string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
