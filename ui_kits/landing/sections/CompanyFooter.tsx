import React from "react";
import { Badge } from "../../../src/components/core/Badge";
import { HazardDivider } from "../../../src/components/shift/HazardDivider";
import { Wordmark, LOGO } from "../atoms/Wordmark";
import type { LandingStrings } from "../types";

export interface CompanyFooterProps {
  t: LandingStrings;
}

const linkStyle: React.CSSProperties = { color: "var(--cream-100)", textDecoration: "none", opacity: 0.78, fontSize: 14, display: "block", padding: "3px 0" };

export function CompanyFooter({ t }: CompanyFooterProps) {
  return (
    <footer style={{ background: "var(--asphalt-900)", color: "var(--cream-100)" }}>
      <HazardDivider height={22} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 48px 36px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <img src={LOGO} width="38" height="38" alt="" />
            <Wordmark size={28} color="var(--cream-50)" />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.78, maxWidth: 360 }}>{t.footer.tagline}</p>
          <div style={{ display: "flex", gap: 6, marginTop: 18, flexWrap: "wrap" }}>
            <Badge tone="brand" shape="square">MTL · QC</Badge>
            <Badge tone="accent" shape="square">MVP · 2026</Badge>
            <Badge tone="reliable" shape="square">FIABLE</Badge>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-orange-500)", marginBottom: 14 }}>{t.footer.product}</div>
          {t.footer.productLinks.map(l => <a key={l} href="#" style={linkStyle}>{l}</a>)}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-orange-500)", marginBottom: 14 }}>{t.footer.company}</div>
          {t.footer.companyLinks.map(l => <a key={l} href="#" style={linkStyle}>{l}</a>)}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-orange-500)", marginBottom: 14 }}>{t.footer.legal}</div>
          {t.footer.addr.map(l => <div key={l} style={{...linkStyle, opacity: 0.6}}>{l}</div>)}
          <div style={{height:8}}/>
          {t.footer.legalLinks.map(l => <a key={l} href="#" style={linkStyle}>{l}</a>)}
        </div>
      </div>
      <div style={{ borderTop: "1.5px solid var(--asphalt-700)", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--asphalt-300)", letterSpacing: "0.06em" }}>
        <span>{t.footer.copy}</span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  );
}
