import * as React from "react";

/** Caution-tape divider. */
export interface HazardDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  variant?: "orange" | "yellow";
}
export function HazardDivider(props: HazardDividerProps): JSX.Element;
