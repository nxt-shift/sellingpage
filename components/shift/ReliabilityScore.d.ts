import * as React from "react";

/** The Shift moat — reliability score (1.0–5.0) with a FIABLE seal at ≥4.5. */
export interface ReliabilityScoreProps {
  score?: number;
  shifts?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}
export function ReliabilityScore(props: ReliabilityScoreProps): JSX.Element;
