import React from "react";

/**
 * Diagonal hazard-tape divider — orange × ink by default.
 */
export function HazardDivider({ height = 28, variant = "orange", style, ...rest }) {
  const cls = variant === "yellow" ? "shift-hazard-stripes--yellow" : "shift-hazard-stripes";
  return <div className={cls} style={{ height, width: "100%", ...style }} {...rest} />;
}
