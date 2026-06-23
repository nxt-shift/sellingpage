import React from "react";

const sizes = {
  sm: { fontSize: 13, padding: "8px 14px", height: 32, gap: 6 },
  md: { fontSize: 14, padding: "10px 18px", height: 40, gap: 8 },
  lg: { fontSize: 16, padding: "14px 22px", height: 48, gap: 10 },
  xl: { fontSize: 18, padding: "18px 28px", height: 60, gap: 12 },
};

const variants = {
  primary: {
    background: "var(--shift-cobalt-500)",
    color: "var(--cream-50)",
    border: "1.5px solid var(--shift-cobalt-500)",
  },
  accent: {
    background: "var(--shift-orange-500)",
    color: "var(--asphalt-900)",
    border: "1.5px solid var(--asphalt-900)",
    boxShadow: "var(--shadow-stamp)",
  },
  ink: {
    background: "var(--asphalt-900)",
    color: "var(--cream-50)",
    border: "1.5px solid var(--asphalt-900)",
  },
  outline: {
    background: "transparent",
    color: "var(--asphalt-900)",
    border: "1.5px solid var(--asphalt-900)",
  },
  ghost: {
    background: "transparent",
    color: "var(--asphalt-900)",
    border: "1.5px solid transparent",
  },
};

/**
 * Shift's primary action button. Default size = md, default variant = primary.
 * Accent variant carries the brand stamp shadow — use sparingly for the single
 * hero CTA (e.g. "Join the waitlist").
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  disabled,
  children,
  style,
  ...rest
}) {
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    letterSpacing: "-0.005em",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  return (
    <button
      {...rest}
      disabled={disabled}
      style={s}
      onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(1px)"; rest.onMouseDown?.(e); }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ""; rest.onMouseUp?.(e); }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; rest.onMouseLeave?.(e); }}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
