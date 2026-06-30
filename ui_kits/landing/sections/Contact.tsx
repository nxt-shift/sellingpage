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
          fontSize: "clamp(42px, 6vw, 80px)",
          fontWeight: 900,
          letterSpacing: "-0.035em",
          lineHeight: 1.01,
          color: "var(--cream-50)",
          margin: "0 0 24px",
        }}>
          {t.contact.h2}
        </h2>

        <p style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: "var(--cream-100)",
          opacity: 0.6,
          margin: "0 0 48px",
        }}>
          {t.contact.body}
        </p>

        {/* Contact links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <a
            href={`mailto:${t.contact.email}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "var(--cream-50)",
              textDecoration: "none",
              borderBottom: "2px solid var(--shift-cobalt-500)",
              paddingBottom: 2,
              transition: "color 0.2s",
            }}
          >
            {t.contact.email}
          </a>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--cream-100)",
            opacity: 0.35,
            letterSpacing: "0.08em",
          }}>
            presse · {t.contact.press}
          </span>
        </div>
      </div>
    </section>
  );
}
