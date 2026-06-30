import React from "react";
import { Wordmark, LOGO } from "../atoms/Wordmark";
import type { LandingStrings } from "../types";

export interface CompanyFooterProps {
  t: LandingStrings;
}

const linkStyle: React.CSSProperties = {
  color: "var(--cream-100)",
  textDecoration: "none",
  opacity: 0.65,
  fontSize: 14,
  display: "block",
  padding: "4px 0",
  transition: "opacity 0.15s",
};

export function CompanyFooter({ t }: CompanyFooterProps) {
  return (
    <footer style={{
      background: "var(--asphalt-900)",
      color: "var(--cream-100)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 48px 40px", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48 }}>

        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <img src={LOGO} width="34" height="34" alt="" />
            <Wordmark size={26} color="var(--cream-50)" />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.55, maxWidth: 300, margin: 0 }}>
            {t.footer.tagline}
          </p>
        </div>

        {/* Product links */}
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-cobalt-400)", marginBottom: 16 }}>
            {t.footer.product}
          </div>
          {t.footer.productLinks.map(l => <a key={l} href="#" style={linkStyle}>{l}</a>)}
        </div>

        {/* Company links */}
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-cobalt-400)", marginBottom: 16 }}>
            {t.footer.company}
          </div>
          {t.footer.companyLinks.map(l => <a key={l} href="#" style={linkStyle}>{l}</a>)}
        </div>

        {/* Legal */}
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--shift-cobalt-400)", marginBottom: 16 }}>
            {t.footer.legal}
          </div>
          {t.footer.addr.map(l => <div key={l} style={{ ...linkStyle, opacity: 0.38, fontSize: 13 }}>{l}</div>)}
          <div style={{ height: 10 }} />
          {t.footer.legalLinks.map(l => <a key={l} href="#" style={linkStyle}>{l}</a>)}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "18px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--cream-100)",
        opacity: 0.3,
        letterSpacing: "0.05em",
      }}>
        <span>{t.footer.copy}</span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  );
}
