import { useReveal } from "../atoms/useReveal";
import type { LandingStrings } from "../types";

export interface ProblemProps {
  t: LandingStrings;
}

export function Problem({ t }: ProblemProps) {
  const [headlineRef, headlineVisible] = useReveal(0.15);
  const [cardsRef, cardsVisible] = useReveal(0.08);

  return (
    <section id="problem" style={{ background: "var(--cream-50)", position: "relative" }}>

      {/* Headline */}
      <div
        ref={headlineRef}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "120px 48px 80px",
          opacity: headlineVisible ? 1 : 0,
          transform: headlineVisible ? "translateY(0)" : "translateY(48px)",
          transition: "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <h2 style={{
          fontSize: "clamp(40px, 5.8vw, 78px)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1.01,
          color: "var(--asphalt-900)",
          margin: 0,
        }}>
          {t.problem.headline}{" "}
          <span style={{ color: "var(--shift-cobalt-500)", fontStyle: "italic" }}>
            {t.problem.headlineHi}
          </span>
        </h2>
      </div>

      {/* Three benefit cards */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
        <div
          ref={cardsRef}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1.5px solid var(--asphalt-900)" }}
        >
          {t.problem.cards.map((card, i) => (
            <div
              key={i}
              style={{
                padding: "40px 32px",
                borderRight: i < 2 ? "1.5px solid var(--asphalt-900)" : "none",
                background: i === 1 ? "var(--asphalt-900)" : "transparent",
                color: i === 1 ? "var(--cream-50)" : "var(--asphalt-900)",
                display: "flex", flexDirection: "column", gap: 20,
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0)" : "translateY(36px)",
                transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.14}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.14}s`,
              }}
            >
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.45,
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{
                fontSize: 28, fontWeight: 900, letterSpacing: "-0.02em",
                lineHeight: 1.08, margin: 0, color: "inherit",
              }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.58, margin: 0, opacity: 0.78, color: "inherit" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingBottom: 120 }} />
    </section>
  );
}
