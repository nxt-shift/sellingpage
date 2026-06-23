import * as React from "react";

/** Compact uppercase label. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "brand" | "accent" | "ink" | "reliable" | "hazard" | "danger";
  shape?: "square" | "pill";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
