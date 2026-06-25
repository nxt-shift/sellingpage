import { SectorChip, type Sector } from "../../../src/components/shift/SectorChip";
import { SectionGutter } from "../atoms/SectionGutter";
import type { LandingStrings } from "../types";

export interface SectorsProps {
  t: LandingStrings;
}

interface SectorRow {
  name: string;
  sector: Sector;
  pattern: string;
}

const CALENDAR: SectorRow[] = [
  { name: "Paysagement",   sector: "paysagement",   pattern: "....AAAAAA.." },
  { name: "Déneigement",   sector: "deneigement",   pattern: "BBB.......BB" },
  { name: "Agriculture",   sector: "agriculture",   pattern: ".....AAAA..." },
  { name: "Ski",           sector: "ski",           pattern: "BB.........B" },
  { name: "Construction",  sector: "construction",  pattern: "...AAAAAAA.." },
  { name: "Déménagement",  sector: "demenagement",  pattern: ".....BB....." },
];

const MONTHS = ["J","F","M","A","M","J","J","A","S","O","N","D"];

const cellColor = (c: string) => c === "A" ? "var(--shift-cobalt-500)" : c === "B" ? "var(--shift-orange-500)" : "var(--asphalt-100)";

export function Sectors({ t }: SectorsProps) {
  return (
    <section id="sectors" style={{ padding: "120px 48px", background: "var(--bg-surface)", position: "relative" }}>
      <SectionGutter n="02" />
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-orange-600)", marginBottom: 16 }}>{t.sectors.eyebrow}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "flex-end", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 900, letterSpacing: "-0.03em", maxWidth: 760, lineHeight: 0.98 }}>{t.sectors.h2}</h2>
          <p style={{ fontSize: 17, color: "var(--text-body)", lineHeight: 1.5 }}>{t.sectors.lede}</p>
        </div>

        <div style={{ border: "1.5px solid var(--asphalt-900)", background: "var(--cream-50)" }}>
          <div style={{ padding: "14px 24px", borderBottom: "1.5px solid var(--asphalt-900)", background: "var(--asphalt-900)", color: "var(--cream-50)", display: "grid", gridTemplateColumns: "200px repeat(12, 1fr)", gap: 4, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            <div style={{ opacity: 0.5 }}>SECTOR</div>
            {MONTHS.map((m, i) => <div key={i} style={{ textAlign: "center" }}>{m}</div>)}
          </div>
          <div style={{ padding: "10px 24px 20px" }}>
            {CALENDAR.map((row, ri) => (
              <div key={row.name} style={{ display: "grid", gridTemplateColumns: "200px repeat(12, 1fr)", gap: 4, alignItems: "center", padding: "8px 0", borderBottom: ri < CALENDAR.length-1 ? "1px dashed var(--asphalt-200)" : "none" }}>
                <div><SectorChip sector={row.sector} /></div>
                {row.pattern.split("").map((c, i) => (
                  <div key={i} style={{
                    height: 28, background: cellColor(c),
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11,
                    color: c === "." ? "transparent" : (c === "B" ? "var(--asphalt-900)" : "var(--cream-50)"),
                  }}>{c === "." ? "" : c}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 28, padding: "14px 24px", borderTop: "1.5px solid var(--asphalt-900)", background: "var(--cream-100)", fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-mono)", flexWrap: "wrap" }}>
            <span><span style={{display:"inline-block",width:14,height:14,background:"var(--shift-cobalt-500)",verticalAlign:"middle",marginRight:8}}/>A · {t.sectors.legendA}</span>
            <span><span style={{display:"inline-block",width:14,height:14,background:"var(--shift-orange-500)",verticalAlign:"middle",marginRight:8}}/>B · {t.sectors.legendB}</span>
            <span><span style={{display:"inline-block",width:14,height:14,background:"var(--asphalt-100)",verticalAlign:"middle",marginRight:8,border:"1px solid var(--asphalt-200)"}}/>{t.sectors.legendBlank}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
