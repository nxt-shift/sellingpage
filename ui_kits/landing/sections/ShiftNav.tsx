import { Button } from "../../../src/components/core/Button";
import { Wordmark, LOGO } from "../atoms/Wordmark";
import type { Lang, LandingStrings } from "../types";

export interface ShiftNavProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: LandingStrings;
}

export function ShiftNav({ lang, setLang, t }: ShiftNavProps) {
  const links: [string, string][] = [["#problem", t.nav.problem], ["#sectors", t.nav.sectors]];
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 32px", borderBottom: "1.5px solid var(--asphalt-900)",
      background: "var(--cream-50)",
      position: "sticky", top: 0, zIndex: 20,
    }}>
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <img src={LOGO} width="34" height="34" alt="" style={{ display:"block" }} />
        <Wordmark size={26} />
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
          letterSpacing: "0.18em", textTransform: "uppercase",
          padding: "3px 7px", marginLeft: 4,
          background: "var(--shift-orange-500)", color: "var(--asphalt-900)",
          border: "1.5px solid var(--asphalt-900)",
        }}>{t.nav.pre}</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13 }}>
        {links.map(([href, label]) =>
          <a key={href} href={href} style={{ color: "var(--text-strong)", padding: "8px 14px", textDecoration: "none", fontWeight: 500, fontFamily: "var(--font-body)" }}>{label}</a>
        )}
        <div style={{ display: "flex", marginLeft: 12, marginRight: 12, border: "1.5px solid var(--asphalt-900)", borderRadius: 0 }}>
          {(["fr", "en"] as Lang[]).map(L => (
            <button key={L} onClick={() => setLang(L)} style={{
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
              padding: "5px 10px", border: "none", cursor: "pointer",
              background: lang === L ? "var(--asphalt-900)" : "transparent",
              color: lang === L ? "var(--cream-50)" : "var(--asphalt-900)",
              letterSpacing: "0.08em",
            }}>{L.toUpperCase()}</button>
          ))}
        </div>
        <Button variant="ink" size="sm" onClick={() => document.getElementById("top")?.scrollIntoView({behavior:"smooth"})}>
          {t.nav.cta}
        </Button>
      </div>
    </nav>
  );
}
