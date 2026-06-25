import { Button } from "../../../src/components/core/Button";
import { SectorChip } from "../../../src/components/shift/SectorChip";
import { ReliabilityScore } from "../../../src/components/shift/ReliabilityScore";
import { FiableStamp } from "../../../src/components/shift/FiableStamp";
import { HazardDivider } from "../../../src/components/shift/HazardDivider";
import type { LandingStrings, OnJoin } from "../types";

export interface HeroProps {
  onJoin: OnJoin;
  t: LandingStrings;
}

export function Hero({ onJoin, t }: HeroProps) {
  return (
    <section id="top" style={{
      padding: "0 0 0 0",
      background: "var(--cream-100)",
      borderBottom: "2px solid var(--asphalt-900)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Outline wordmark backdrop */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "min(34vw, 540px)", letterSpacing: "-0.04em",
        color: "transparent",
        WebkitTextStroke: "1.5px var(--asphalt-200)",
        opacity: 0.7, lineHeight: 1, userSelect: "none",
        whiteSpace: "nowrap",
      }}>shift · shift</div>

      <HazardDivider height={14} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 48px 72px", position: "relative", display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 56, alignItems: "center" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 28, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            <span style={{ padding: "4px 8px", background: "var(--asphalt-900)", color: "var(--cream-50)" }}>{t.hero.tag1}</span>
            <span style={{ padding: "4px 8px", border: "1.5px solid var(--asphalt-900)", color: "var(--asphalt-900)" }}>{t.hero.tag2}</span>
          </div>
          <h1 style={{
            fontSize: "clamp(64px, 9vw, 124px)", lineHeight: 0.92, fontWeight: 900,
            letterSpacing: "-0.04em", color: "var(--asphalt-900)",
            margin: "0 0 28px",
          }}>
            {t.hero.h1a}{" "}
            <span style={{
              color: "var(--shift-cobalt-500)",
              display: "inline-block",
              borderBottom: "8px solid var(--shift-orange-500)",
              paddingBottom: 2,
            }}>{t.hero.h1b}</span>
            <br/>
            {t.hero.h1c}
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.45, color: "var(--text-body)", maxWidth: 560, marginBottom: 32 }}>
            {t.hero.lede}
          </p>
          <form onSubmit={(e) => { e.preventDefault(); onJoin(String(new FormData(e.currentTarget).get("email") ?? "")); }}
                style={{ display: "flex", gap: 8, alignItems: "stretch", maxWidth: 540, border: "2px solid var(--asphalt-900)", background: "var(--cream-50)", padding: 6 }}>
            <input
              name="email" type="email" required
              placeholder={t.hero.emailPh}
              style={{ flex: 1, border: "none", outline: "none", background: "transparent", padding: "0 14px", fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-strong)", minWidth: 0 }}
            />
            <Button type="submit" variant="accent" size="md" style={{ boxShadow: "none" }}>{t.hero.join}</Button>
          </form>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginTop: 14, letterSpacing: "0.04em" }}>
            <span style={{ display:"inline-block", width:8, height:8, background:"var(--reliable-500)", borderRadius:"50%", marginRight:8, verticalAlign:"middle" }}/>
            {t.hero.counter}
          </p>
        </div>

        {/* Punch-card style shift assignment */}
        <ShiftAssignmentCard t={t} />
      </div>
      <HazardDivider height={14} />
    </section>
  );
}

interface ShiftAssignmentCardProps {
  t: LandingStrings;
}

function ShiftAssignmentCard({ t }: ShiftAssignmentCardProps) {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{
        background: "var(--cream-50)",
        border: "2px solid var(--asphalt-900)",
        boxShadow: "10px 10px 0 0 var(--shift-cobalt-500)",
        padding: 0, fontFamily: "var(--font-mono)",
      }}>
        {/* receipt header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderBottom: "1.5px dashed var(--asphalt-900)", background: "var(--asphalt-900)", color: "var(--cream-50)" }}>
          <span style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>{t.hero.cardLabel} · SHIFT-MTL-04812</span>
          <span style={{ fontSize: 10, opacity: 0.7 }}>23 · 06 · 2026</span>
        </div>
        <div style={{ padding: "18px 20px 4px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, letterSpacing: "-0.01em", color: "var(--asphalt-900)" }}>Paysages Boucher Inc.</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{t.hero.cardLoc}</div>
            </div>
            <SectorChip sector="paysagement" />
          </div>

          {/* perforated separator */}
          <div style={{ borderTop: "1.5px dashed var(--asphalt-300)", margin: "10px -20px 14px", position: "relative" }}>
            <span style={{ position: "absolute", left: -8, top: -8, width: 14, height: 14, borderRadius: "50%", background: "var(--cream-100)", border: "1.5px solid var(--asphalt-300)" }}/>
            <span style={{ position: "absolute", right: -8, top: -8, width: 14, height: 14, borderRadius: "50%", background: "var(--cream-100)", border: "1.5px solid var(--asphalt-300)" }}/>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 46, height: 46, background: "var(--shift-cobalt-500)", color: "var(--cream-50)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 16, letterSpacing: "0.02em" }}>MT</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--asphalt-900)" }}>{t.hero.worker}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.hero.workerSub}</div>
            </div>
            <ReliabilityScore score={4.9} size="sm" showLabel={true} />
          </div>

          <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse", marginBottom: 12 }}>
            <tbody>
              <tr><td style={{ color: "var(--text-muted)", padding: "3px 0" }}>HRS</td><td style={{ textAlign: "right", color: "var(--text-strong)", fontWeight: 700 }}>8.00</td></tr>
              <tr><td style={{ color: "var(--text-muted)", padding: "3px 0" }}>RATE</td><td style={{ textAlign: "right", color: "var(--text-strong)", fontWeight: 700 }}>$ 25.00</td></tr>
              <tr><td style={{ color: "var(--text-muted)", padding: "3px 0", borderTop: "1px dashed var(--asphalt-300)" }}>SUBTOTAL</td><td style={{ textAlign: "right", color: "var(--text-strong)", fontWeight: 700, borderTop: "1px dashed var(--asphalt-300)" }}>$ 200.00</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", gap: 0, borderTop: "1.5px solid var(--asphalt-900)" }}>
          <Button variant="accent" size="lg" style={{ borderRadius: 0, flex: 1, border: "none", boxShadow: "none", borderRight: "1.5px solid var(--asphalt-900)" }}>{t.hero.confirm}</Button>
          <button style={{ width: 110, background: "transparent", border: "none", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--text-strong)", cursor: "pointer" }}>{t.hero.decline}</button>
        </div>

        <div style={{ padding: "8px 14px", borderTop: "1.5px dashed var(--asphalt-300)", fontSize: 10, color: "var(--text-muted)", display: "flex", justifyContent: "space-between" }}>
          <span>GPS · 45.5019 N · 73.5674 W</span>
          <span>STRIPE CONNECT</span>
        </div>
      </div>
      <div style={{ position: "absolute", top: -22, right: -16 }}>
        <FiableStamp size="sm" rotate={10}>QC · FIABLE</FiableStamp>
      </div>
    </div>
  );
}
