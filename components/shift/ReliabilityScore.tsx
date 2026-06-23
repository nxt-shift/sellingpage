import React from "react";

/**
 * Reliability score — the Shift moat. Renders the score (1–5), optional star
 * count, and a "FIABLE" badge when the score is high enough.
 */
export function ReliabilityScore({ score = 5.0, shifts, size = "md", showLabel = true }) {
  const sizes = {
    sm: { num: 14, label: 9,  gap: 6  },
    md: { num: 22, label: 10, gap: 8  },
    lg: { num: 34, label: 11, gap: 10 },
  };
  const z = sizes[size];
  const isFiable = score >= 4.5;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: z.gap }}>
      <div style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}>
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: z.num,
          letterSpacing: "-0.02em",
          color: "var(--text-strong)",
          lineHeight: 1,
        }}>{score.toFixed(1)}</span>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: z.label, color: "var(--text-muted)",
        }}>/ 5.0</span>
      </div>
      {showLabel && isFiable && (
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: z.label, letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--reliable-700)",
          background: "var(--reliable-50)",
          padding: "3px 7px", borderRadius: 3,
          border: "1px solid var(--reliable-500)",
        }}>FIABLE</span>
      )}
      {shifts != null && (
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: z.label,
          color: "var(--text-muted)",
        }}>· {shifts} shifts</span>
      )}
    </div>
  );
}
