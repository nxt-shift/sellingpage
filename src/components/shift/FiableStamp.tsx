import React from "react";

export type FiableStampSize = "sm" | "md" | "lg";

export interface FiableStampProps extends React.HTMLAttributes<HTMLSpanElement> {
  rotate?: number;
  size?: FiableStampSize;
}

/**
 * The FIABLE stamp — the rotated, orange-bordered seal that anchors Shift
 * marketing surfaces. Use sparingly; max one per screen.
 */
export function FiableStamp({ children = "FIABLE", rotate = -3, size = "md", style, ...rest }: FiableStampProps) {
  const sizes: Record<FiableStampSize, { font: number; pad: string; border: number }> = {
    sm: { font: 18, pad: "8px 12px", border: 2 },
    md: { font: 28, pad: "12px 18px", border: 2.5 },
    lg: { font: 48, pad: "18px 24px", border: 3 },
  };
  const z = sizes[size];
  return (
    <span
      style={{
        display: "inline-block",
        background: "var(--shift-orange-500)",
        color: "var(--asphalt-900)",
        border: `${z.border}px solid var(--asphalt-900)`,
        boxShadow: "var(--shadow-stamp)",
        padding: z.pad,
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: z.font,
        letterSpacing: "0.04em",
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
      {...rest}
    >{children}</span>
  );
}
