import * as React from "react";

/** The brand FIABLE stamp — rotated orange seal. */
export interface FiableStampProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  rotate?: number;
  size?: "sm" | "md" | "lg";
}
export function FiableStamp(props: FiableStampProps): JSX.Element;
