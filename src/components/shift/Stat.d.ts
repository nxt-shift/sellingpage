import * as React from "react";

/** Big mono KPI block. */
export interface StatProps {
  value: React.ReactNode;
  label: string;
  sublabel?: string;
  tone?: "ink" | "brand" | "accent" | "reliable";
  align?: "left" | "center";
}
export function Stat(props: StatProps): JSX.Element;
