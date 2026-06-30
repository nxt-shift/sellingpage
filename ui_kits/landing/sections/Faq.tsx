import * as React from "react";
import { useReveal } from "../atoms/useReveal";
import type { LandingStrings } from "../types";

export interface FaqProps {
  t: LandingStrings;
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      style={{
        borderBottom: "1.5px solid var(--asphalt-900)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "28px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "var(--shift-cobalt-500)",
            opacity: 0.6,
            minWidth: 28,
          }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span style={{
            fontSize: "clamp(16px, 1.8vw, 20px)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "var(--asphalt-900)",
            lineHeight: 1.2,
          }}>
            {q}
          </span>
        </div>
        <span style={{
          fontSize: 22,
          fontWeight: 300,
          color: "var(--shift-cobalt-500)",
          flexShrink: 0,
          lineHeight: 1,
          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          +
        </span>
      </button>

      <div style={{
        maxHeight: open ? 300 : 0,
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <p style={{
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--asphalt-900)",
          opacity: 0.68,
          margin: 0,
          paddingBottom: 28,
          paddingLeft: 48,
          maxWidth: 680,
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export function Faq({ t }: FaqProps) {
  const [headRef, headVisible] = useReveal(0.12);
  const [listRef, listVisible] = useReveal(0.06);

  return (
    <section style={{ background: "var(--cream-50)", position: "relative" }}>
      {/* Vertical label */}
      <div style={{
        position: "absolute", top: 24, left: 24,
        fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
        letterSpacing: "0.18em", color: "var(--asphalt-900)", opacity: 0.22,
        writingMode: "vertical-rl", transform: "rotate(180deg)",
        textTransform: "uppercase",
      }}>03 / 03</div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 48px 100px" }}>

        {/* Header */}
        <div
          ref={headRef}
          style={{
            marginBottom: 72,
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div style={{
            fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--shift-cobalt-500)", marginBottom: 20,
          }}>
            {t.faq.eyebrow}
          </div>
          <h2 style={{
            fontSize: "clamp(40px, 5.8vw, 78px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.01,
            color: "var(--asphalt-900)",
            margin: 0,
          }}>
            {t.faq.h2}
          </h2>
        </div>

        {/* Accordion */}
        <div
          ref={listRef}
          style={{
            borderTop: "1.5px solid var(--asphalt-900)",
            opacity: listVisible ? 1 : 0,
            transform: listVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          {t.faq.items.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
