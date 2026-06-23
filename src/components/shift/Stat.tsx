import React from "react";

/**
 * Numeric KPI block — big mono number, label, optional delta.
 */
export function Stat({ value, label, sublabel, tone = "ink", align = "left" }) {
  const tones = {
    ink: { color: "var(--text-strong)" },
    brand: { color: "var(--shift-cobalt-600)" },
    accent: { color: "var(--shift-orange-600)" },
    reliable: { color: "var(--reliable-700)" },
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: align, alignItems: align === "center" ? "center" : "flex-start" }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: 56,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        ...tones[tone],
      }}>{value}</div>
      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
      }}>{label}</div>
      {sublabel && (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>
          {sublabel}
        </div>
      )}
    </div>
  );
}
