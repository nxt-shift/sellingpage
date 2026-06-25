import React from "react";
import { Button } from "../../../src/components/core/Button";
import { Input } from "../../../src/components/core/Input";
import { SectorChip, type Sector } from "../../../src/components/shift/SectorChip";
import { FiableStamp } from "../../../src/components/shift/FiableStamp";
import { SectionGutter } from "../atoms/SectionGutter";
import type { LandingStrings, OnJoin } from "../types";

export interface WaitlistProps {
  onJoin: OnJoin;
  joined: string | null;
  t: LandingStrings;
}

const SECTORS: Sector[] = ["paysagement", "agriculture", "demenagement", "ski", "deneigement", "construction"];

export function Waitlist({ onJoin, joined, t }: WaitlistProps) {
  const [role, setRole] = React.useState("companyB");
  const [sector, setSector] = React.useState<Sector>("paysagement");

  if (joined) {
    return (
      <section id="waitlist" style={{ padding: "120px 48px", background: "var(--cream-100)", position: "relative", borderBottom: "2px solid var(--asphalt-900)" }}>
        <SectionGutter n="04" />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", border: "2px solid var(--asphalt-900)", background: "var(--cream-50)", padding: 56, boxShadow: "10px 10px 0 0 var(--shift-cobalt-500)" }}>
          <FiableStamp size="md" style={{ marginBottom: 28 }}>{t.waitlist.thanksStamp}</FiableStamp>
          <h2 style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-0.03em", marginTop: 28, marginBottom: 14, lineHeight: 1 }}>{t.waitlist.thanksH}</h2>
          <p style={{ fontSize: 17, color: "var(--text-body)" }}>{t.waitlist.thanksBody}</p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginTop: 24, letterSpacing: "0.04em" }}>{t.waitlist.thanksTo} <b style={{ color: "var(--text-strong)" }}>{joined}</b></p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" style={{ padding: "120px 48px", background: "var(--shift-cobalt-500)", color: "var(--cream-50)", position: "relative", borderBottom: "2px solid var(--asphalt-900)" }}>
      <SectionGutter n="04" color="var(--shift-cobalt-200)" />
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-orange-500)", marginBottom: 16 }}>{t.waitlist.eyebrow}</div>
          <h2 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 0.95, marginBottom: 20, color: "var(--cream-50)" }}>
            {t.waitlist.h2a}{" "}
            <span style={{ color: "var(--shift-orange-500)" }}>{t.waitlist.h2hi}</span>{" "}
            {t.waitlist.h2b}
          </h2>
          <p style={{ fontSize: 18, color: "var(--cream-100)", opacity: 0.85, maxWidth: 460, lineHeight: 1.5, marginBottom: 32 }}>{t.waitlist.lede}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: 32, marginTop: 24 }}>
            <DarkStat value="127"        label={t.waitlist.onList} />
            <DarkStat value={t.waitlist.marketV} label={t.waitlist.market} />
            <DarkStat value={t.waitlist.opensV}  label={t.waitlist.opens} />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            onJoin(String(fd.get("email") ?? ""), {
              role,
              sector,
              company: String(fd.get("company") ?? ""),
              phone: String(fd.get("phone") ?? ""),
            });
          }}
          style={{ background: "var(--cream-50)", color: "var(--text-strong)", border: "2px solid var(--asphalt-900)", boxShadow: "10px 10px 0 0 var(--shift-orange-500)", padding: 28, display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1.5px dashed var(--asphalt-300)", paddingBottom: 10, marginBottom: 4 }}>SHIFT · WAITLIST · 23 · 06 · 2026</div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>{t.waitlist.youAre}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, border: "1.5px solid var(--asphalt-900)" }}>
              {t.waitlist.roles.map((r, i) => (
                <button key={r.id} type="button" onClick={() => setRole(r.id)} style={{
                  padding: "12px 10px",
                  borderRight: i < 2 ? "1.5px solid var(--asphalt-900)" : "none",
                  border: "none",
                  background: role === r.id ? "var(--shift-orange-500)" : "var(--cream-50)",
                  cursor: "pointer", textAlign: "left",
                  fontFamily: "var(--font-display)",
                }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "var(--asphalt-900)" }}>{r.label}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{r.hint}</div>
                </button>
              ))}
            </div>
          </div>
          <Input label={t.waitlist.company} name="company" placeholder={t.waitlist.companyPh} required />
          <Input label={t.waitlist.email} name="email" type="email" placeholder={t.waitlist.emailPh} required />
          <Input label={t.waitlist.phone} name="phone" type="tel" placeholder={t.waitlist.phonePh} hint={t.waitlist.phoneHint} />
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>{t.waitlist.sectorLabel}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {SECTORS.map(s => (
                <button key={s} type="button" onClick={() => setSector(s)} style={{ padding: 0, border: "none", background: "transparent", cursor: "pointer", outline: sector === s ? "2px solid var(--asphalt-900)" : "none", outlineOffset: 2 }}>
                  <SectorChip sector={s} />
                </button>
              ))}
            </div>
          </div>
          <Button type="submit" variant="ink" size="lg" fullWidth style={{ borderRadius: 0 }}>{t.waitlist.submit}</Button>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", textAlign: "center", margin: 0, letterSpacing: "0.06em" }}>{t.waitlist.microcopy}</p>
        </form>
      </div>
    </section>
  );
}

interface DarkStatProps {
  value: string;
  label: string;
}

const DarkStat = ({ value, label }: DarkStatProps) => (
  <div>
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 44, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--shift-orange-500)" }}>{value}</div>
    <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cream-100)", marginTop: 6, opacity: 0.85 }}>{label}</div>
  </div>
);
