import React from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: InputSize;
  leadingIcon?: React.ReactNode;
  trailingSlot?: React.ReactNode;
}

/**
 * Text input. Includes optional label, hint, and error. Mobile-first sizing.
 */
export function Input({
  label,
  hint,
  error,
  leadingIcon,
  trailingSlot,
  id,
  size = "md",
  style,
  ...rest
}: InputProps) {
  const inputId = id || (label ? `inp-${String(label).toLowerCase().replace(/\W+/g, "-")}` : undefined);
  const heights: Record<InputSize, number> = { sm: 36, md: 44, lg: 52 };
  const wrap: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: heights[size],
    padding: "0 14px",
    background: "var(--bg-surface)",
    border: `1.5px solid ${error ? "var(--danger-500)" : "var(--asphalt-200)"}`,
    borderRadius: "var(--radius-md)",
    transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
  };
  const input = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "var(--font-body)",
    fontSize: size === "sm" ? 13 : 15,
    color: "var(--text-strong)",
    minWidth: 0,
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--text-muted)",
        }}>{label}</label>
      )}
      <div
        style={wrap}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--shift-cobalt-500)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--shift-cobalt-100)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = error ? "var(--danger-500)" : "var(--asphalt-200)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        {leadingIcon}
        <input id={inputId} style={input} {...rest} />
        {trailingSlot}
      </div>
      {(hint || error) && (
        <span style={{
          fontSize: 12, fontFamily: "var(--font-body)",
          color: error ? "var(--danger-500)" : "var(--text-muted)",
        }}>{error || hint}</span>
      )}
    </div>
  );
}
