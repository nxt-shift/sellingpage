import { SectionGutter } from "../atoms/SectionGutter";
import type { LandingStrings } from "../types";

export interface WhyNowProps {
  t: LandingStrings;
}

export function WhyNow({ t }: WhyNowProps) {
  return (
    <section style={{ padding: "120px 48px", background: "var(--asphalt-900)", color: "var(--cream-50)", position: "relative", borderBottom: "2px solid var(--asphalt-900)" }}>
      <SectionGutter n="03" color="var(--asphalt-400)" />
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-orange-500)", marginBottom: 16 }}>{t.why.eyebrow}</div>
        <h2 style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--cream-50)", maxWidth: 920, lineHeight: 0.98, marginBottom: 16 }}>{t.why.h2}</h2>
        <p style={{ fontSize: 17, opacity: 0.7, maxWidth: 600, marginBottom: 56 }}>{t.why.lede}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1.5px solid var(--asphalt-700)" }}>
          {t.why.stats.map((s, i) => (
            <div key={s.l} style={{ padding: 24, borderRight: i < 3 ? "1.5px solid var(--asphalt-700)" : "none", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--shift-orange-500)" }}>{s.v}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cream-100)" }}>{s.l}</div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>{s.s}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginTop: 0, border: "1.5px solid var(--asphalt-700)", borderTop: "none" }}>
          {t.why.vs.map((v, i) => (
            <div key={v.title} style={{ padding: 28, borderRight: i === 0 ? "1.5px solid var(--asphalt-700)" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--shift-orange-500)", marginBottom: 10 }}>{v.title}</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--cream-100)", opacity: 0.85 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
