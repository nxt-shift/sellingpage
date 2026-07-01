import { Button } from "../../../src/components/core/Button";

import type { LandingStrings, OnJoin } from "../types";

export interface HeroProps {
  onJoin: OnJoin;
  joined: string | null;
  submitting?: boolean;
  error?: string | null;
  t: LandingStrings;
}

export function Hero({ onJoin, joined, submitting, error, t }: HeroProps) {
  const h = t.hero;

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--asphalt-900)",
        borderBottom: "2px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >


      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
        padding: "120px 64px 100px",
        boxSizing: "border-box",
      }}>
        {/* Tags */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 48,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
        }}>
          <span style={{ padding: "5px 10px", background: "var(--shift-cobalt-500)", color: "white" }}>
            {h.tag1}
          </span>
          <span style={{ padding: "5px 10px", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.55)" }}>
            {h.tag2}
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(52px, 7.5vw, 104px)",
          lineHeight: 0.96,
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "var(--cream-50)",
          margin: "0 0 32px",
          maxWidth: "14ch",
          textShadow: "0 2px 32px rgba(0,0,0,0.5)",
        }}>
          {h.h1a}{" "}
          <span style={{
            color: "var(--shift-cobalt-400)",
            borderBottom: "5px solid var(--shift-cobalt-500)",
            paddingBottom: 2,
          }}>
            {h.h1b}
          </span>
          <br />
          {h.h1c}
        </h1>

        {/* Cobalt rule */}
        <div style={{ width: 52, height: 3, background: "var(--shift-cobalt-500)", marginBottom: 36 }} />

        {/* Lede + CTA row */}
        <div style={{ display: "flex", gap: 72, alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Lede */}
          <p style={{
            fontSize: 17,
            lineHeight: 1.72,
            color: "var(--cream-50)",
            opacity: 0.72,
            margin: 0,
            maxWidth: 380,
            flex: "0 0 auto",
            textShadow: "0 1px 12px rgba(0,0,0,0.6)",
          }}>
            {h.lede}
          </p>

          {/* CTA */}
          <div style={{ flex: "1 1 280px", maxWidth: 440 }}>
            {joined ? (
              <div style={{
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: "rgba(10,12,18,0.6)",
                backdropFilter: "blur(12px)",
                padding: 28,
              }}>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "var(--cream-50)", letterSpacing: "-0.02em", margin: "0 0 8px" }}>
                  {h.thanksH}
                </h2>
                <p style={{ fontSize: 14, color: "var(--cream-100)", opacity: 0.8, margin: 0 }}>{h.thanksBody}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cream-100)", opacity: 0.55, marginTop: 14 }}>
                  {h.thanksTo} <b style={{ color: "var(--cream-50)" }}>{joined}</b>
                </p>
              </div>
            ) : (
              <>
                {/* Early-access dot */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--shift-cobalt-400)",
                    flexShrink: 0,
                    boxShadow: "0 0 0 3px rgba(37,99,235,0.28)",
                  }} />
                  <span style={{ color: "var(--shift-cobalt-400)", fontWeight: 700 }}>{t.nav.pre}</span>
                  <span style={{ color: "rgba(255,255,255,0.22)" }}>·</span>
                  <span style={{ color: "rgba(255,255,255,0.38)" }}>Montréal · 2026</span>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (submitting) return;
                    onJoin(String(new FormData(e.currentTarget).get("email") ?? ""));
                  }}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "stretch",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    background: "rgba(10,12,18,0.55)",
                    backdropFilter: "blur(12px)",
                    padding: 6,
                  }}
                >
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={submitting}
                    placeholder={h.emailPh}
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      padding: "0 14px",
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "var(--cream-50)",
                      minWidth: 0,
                    }}
                  />
                  <Button type="submit" variant="accent" size="md" style={{ boxShadow: "none" }} disabled={submitting}>
                    {submitting ? "..." : h.join}
                  </Button>
                </form>

                {error && (
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#ef4444",
                    marginTop: 8,
                    marginBottom: 0,
                  }}>
                    {error}
                  </p>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>or</span>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
                </div>

                <a
                  href="mailto:hello@shift.work?subject=Book a call"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 12,
                    padding: "13px 18px",
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    background: "rgba(10,12,18,0.4)",
                    backdropFilter: "blur(8px)",
                    color: "var(--cream-50)",
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "-0.005em",
                    textDecoration: "none",
                  }}
                >
                  {h.bookCall}
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        opacity: 0.18,
        pointerEvents: "none",
        zIndex: 2,
      }}>
        <div style={{ width: 1, height: 36, background: "var(--cream-50)" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--cream-50)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          scroll
        </span>
      </div>
    </section>
  );
}
