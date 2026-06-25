import React from "react";

export type BadgeTone = "neutral" | "brand" | "accent" | "ink" | "reliable" | "hazard" | "danger";
export type BadgeShape = "square" | "pill";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  shape?: BadgeShape;
  icon?: React.ReactNode;
}

const tones: Record<BadgeTone, { bg: string; fg: string }> = {
  neutral: { bg: "var(--asphalt-100)", fg: "var(--asphalt-700)" },
  brand:   { bg: "var(--shift-cobalt-500)", fg: "var(--cream-50)" },
  accent:  { bg: "var(--shift-orange-500)", fg: "var(--asphalt-900)" },
  ink:     { bg: "var(--asphalt-900)", fg: "var(--cream-50)" },
  reliable:{ bg: "var(--reliable-50)", fg: "var(--reliable-700)" },
  hazard:  { bg: "var(--hazard-yellow-500)", fg: "var(--asphalt-900)" },
  danger:  { bg: "var(--danger-500)", fg: "var(--cream-50)" },
};

/**
 * Compact label — sector tags, status, counters. Pill or square per `shape`.
 */
export function Badge({ tone = "neutral", shape = "square", icon, children, style, ...rest }: BadgeProps) {
  const t = tones[tone];
  const s = {
    display: "inline-flex", alignItems: "center", gap: 6,
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
    letterSpacing: "0.1em", textTransform: "uppercase",
    padding: "5px 9px",
    background: t.bg, color: t.fg,
    borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-xs)",
    ...style,
  };
  return <span style={s} {...rest}>{icon}{children}</span>;
}
