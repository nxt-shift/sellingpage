import { FiableStamp } from "../../../src/components/shift/FiableStamp";
import { SectionGutter } from "../atoms/SectionGutter";
import type { LandingStrings } from "../types";

export interface ProblemProps {
  t: LandingStrings;
}

export function Problem({ t }: ProblemProps) {
  return (
    <section id="problem" style={{ padding: "120px 48px", background: "var(--bg-surface)", position: "relative" }}>
      <SectionGutter n="01" />
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-orange-600)", marginBottom: 16 }}>{t.problem.eyebrow}</div>
        <h2 style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 900, letterSpacing: "-0.03em", maxWidth: 920, lineHeight: 0.98, marginBottom: 64 }}>
          {t.problem.h2}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1.5px solid var(--asphalt-900)" }}>
          {t.problem.items.map((it, i) => (
            <div key={it.title} style={{
              padding: 28,
              borderRight: i < 2 ? "1.5px solid var(--asphalt-900)" : "none",
              background: i === 1 ? "var(--cream-50)" : "var(--bg-surface)",
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>{it.tag}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-subtle)" }}>{String(i+1).padStart(2,"0")}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 30, letterSpacing: "-0.02em", color: "var(--asphalt-900)", lineHeight: 1.05 }}>{it.title}</h3>
              <p style={{ fontSize: 15, color: "var(--text-body)", lineHeight: 1.55 }}>{it.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 0, background: "var(--shift-cobalt-500)", color: "var(--cream-50)", padding: "48px 40px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 40, alignItems: "center", border: "1.5px solid var(--asphalt-900)", borderTop: "none" }}>
          <FiableStamp size="lg" />
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.7, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>{t.problem.insightLabel}</div>
            <p style={{ fontSize: 26, lineHeight: 1.35, fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.015em" }}>
              {t.problem.insight}{" "}
              <span style={{ color: "var(--shift-orange-500)", borderBottom: "4px solid var(--shift-orange-500)" }}>{t.problem.insightHi}</span>{" "}
              {t.problem.insight2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
