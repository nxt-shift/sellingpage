import { useReveal } from "../atoms/useReveal";
import type { LandingStrings } from "../types";

export interface ContactProps {
  t: LandingStrings;
}

export function Contact({ t }: ContactProps) {
  const [ref, visible] = useReveal(0.2);

  return (
    <section style={{
      minHeight: "60vh",
      background: "var(--asphalt-900)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "100px 48px",
      position: "relative",
    }}>
      <div
        ref={ref}
        style={{
          maxWidth: 640,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div style={{
          fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--shift-cobalt-400)", marginBottom: 24,
        }}>
          {t.contact.eyebrow}
        </div>

        <h2 style={{
          fontSize: "clamp(36px, 5.5vw, 72px)",
          fontWeight: 900,
          letterSpacing: "-0.035em",
          lineHeight: 1.01,
          color: "var(--cream-50)",
          margin: "0 0 20px",
        }}>
          {t.contact.h2}
        </h2>

        <p style={{
          fontSize: 16,
          lineHeight: 1.7,
          color: "var(--cream-100)",
          opacity: 0.6,
          margin: "0 0 40px",
          maxWidth: 480,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          {t.contact.body}
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:hello@shift.work?subject=Book a call"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 36px",
            background: "var(--shift-cobalt-500)",
            color: "white",
            fontFamily: "var(--font-display)",
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            textDecoration: "none",
            marginBottom: 20,
          }}
        >
          {t.hero.bookCall}
        </a>

        {/* Secondary: general email */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <a
            href={`mailto:${t.contact.email}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "var(--cream-100)",
              textDecoration: "none",
              opacity: 0.55,
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              paddingBottom: 1,
            }}
          >
            {t.contact.email}
          </a>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--cream-100)",
            opacity: 0.28,
            letterSpacing: "0.08em",
          }}>
            presse · {t.contact.press}
          </span>
        </div>
      </div>
    </section>
  );
}
