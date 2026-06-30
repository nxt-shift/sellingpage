import * as React from "react";
import type { LandingStrings } from "../types";

export interface SectorsProps {
  t: LandingStrings;
}

const PER_PAIR = 2;

export function Sectors({ t }: SectorsProps) {
  const outerRef = React.useRef<HTMLElement>(null);
  const [targetPair, setTargetPair]   = React.useState(0);
  const [displayPair, setDisplayPair] = React.useState(0);
  const [visible, setVisible]         = React.useState(true);

  const totalPairs = Math.ceil(t.sectors.steps.length / PER_PAIR);

  React.useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const rect      = el.getBoundingClientRect();
      const scrolled  = -rect.top;
      const available = rect.height - window.innerHeight;
      if (available <= 0) return;
      const progress = Math.max(0, Math.min(0.9999, scrolled / available));
      setTargetPair(Math.min(totalPairs - 1, Math.floor(progress * totalPairs)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalPairs]);

  React.useEffect(() => {
    if (targetPair === displayPair) return;
    setVisible(false);
    const timer = setTimeout(() => {
      setDisplayPair(targetPair);
      setVisible(true);
    }, 260);
    return () => clearTimeout(timer);
  }, [targetPair, displayPair]);

  const startIdx  = displayPair * PER_PAIR;
  const pairSteps = t.sectors.steps.slice(startIdx, startIdx + PER_PAIR);

  return (
    <section
      id="sectors"
      ref={outerRef}
      style={{
        position: "relative",
        height: `${(totalPairs + 1) * 100}vh`,
        background: "var(--cream-50)",
      }}
    >
      {/* Vertical section label */}
      <div style={{
        position: "absolute", top: 24, left: 24, zIndex: 2,
        fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
        letterSpacing: "0.18em", color: "var(--asphalt-900)", opacity: 0.22,
        writingMode: "vertical-rl", transform: "rotate(180deg)",
        textTransform: "uppercase",
      }}>02 / 03</div>

      {/* Sticky viewport */}
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 48px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52, width: "100%", maxWidth: 1100 }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--shift-cobalt-500)",
            marginBottom: 18,
          }}>
            {t.sectors.eyebrow}
          </div>
          <h2 style={{
            fontSize: "clamp(46px, 6vw, 82px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
            color: "var(--asphalt-900)",
            margin: 0,
          }}>
            {t.sectors.h2}
          </h2>
        </div>

        {/* Two animated cards */}
        <div
          style={{
            width: "100%",
            maxWidth: 1100,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(-20px)",
            transition: "opacity 0.26s cubic-bezier(0.4,0,0.6,1), transform 0.26s cubic-bezier(0.4,0,0.6,1)",
          }}
        >
          {pairSteps.map((step, i) => (
            <div
              key={startIdx + i}
              style={{
                background: "white",
                padding: "44px 40px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                minHeight: 260,
                border: "1.5px solid var(--asphalt-900)",
              }}
            >
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(52px, 6.5vw, 82px)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "var(--shift-cobalt-500)",
                opacity: 0.13,
                userSelect: "none",
              }}>
                {String(startIdx + i + 1).padStart(2, "0")}
              </span>

              <div style={{ width: 32, height: 3, background: "var(--shift-cobalt-500)" }} />

              <h3 style={{
                fontSize: "clamp(20px, 2.2vw, 28px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--asphalt-900)",
                margin: 0,
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--asphalt-900)",
                opacity: 0.65,
                margin: 0,
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: 8, marginTop: 40, alignItems: "center" }}>
          {Array.from({ length: totalPairs }, (_, i) => (
            <div
              key={i}
              style={{
                height: 6,
                width: i === targetPair ? 28 : 6,
                borderRadius: 3,
                background: i === targetPair ? "var(--shift-cobalt-500)" : "var(--asphalt-900)",
                opacity: i === targetPair ? 1 : 0.18,
                transition: "width 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease",
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute",
          bottom: 28,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--asphalt-900)",
          opacity: targetPair === 0 ? 0.28 : 0,
          transition: "opacity 0.5s ease",
        }}>
          scroll ↓
        </div>
      </div>
    </section>
  );
}
