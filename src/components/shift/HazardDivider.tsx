import React from "react";

export interface HazardDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  variant?: "orange" | "yellow";
}

/**
 * Diagonal hazard-tape divider — orange × ink by default.
 */
export function HazardDivider({ height = 28, variant = "orange", style, ...rest }: HazardDividerProps) {
  const cls = variant === "yellow" ? "shift-hazard-stripes--yellow" : "shift-hazard-stripes";
  return <div className={cls} style={{ height, width: "100%", ...style }} {...rest} />;
}
