import { useReveal } from "../atoms/useReveal";
import type { LandingStrings } from "../types";

export interface PipelineProps {
  t: LandingStrings;
}

/** Each word rises up from behind an overflow-hidden clip — cinematic word cascade. */
function WordReveal({ text, visible, baseDelay = 0 }: { text: string; visible: boolean; baseDelay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", lineHeight: 1.08 }}>
          <span
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * 0.07}s, opacity 0.3s ease ${baseDelay + i * 0.07}s`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export function Pipeline({ t }: PipelineProps) {
  const [sectionRef, sectionVisible] = useReveal(0.25);
  const [subRef, subVisible] = useReveal(0.25);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        background: "var(--asphalt-900)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 48px",
      }}
    >
      <div style={{ maxWidth: 820 }}>
        {/* Accent line draws itself first */}
        <div style={{
          height: 3,
          background: "var(--shift-cobalt-500)",
          margin: "0 auto 48px",
          width: 64,
          transformOrigin: "left center",
          transform: sectionVisible ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1) 0s",
        }} />

        {/* Main headline — word cascade */}
        <p style={{
          fontSize: "clamp(38px, 6vw, 82px)",
          fontWeight: 900,
          letterSpacing: "-0.035em",
          lineHeight: 1.08,
          color: "var(--cream-50)",
          margin: "0 0 40px",
        }}>
          <WordReveal text={t.problem.pipeline} visible={sectionVisible} baseDelay={0.15} />
        </p>

        {/* Sub text fades in after headline lands */}
        <p
          ref={subRef}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            color: "var(--cream-100)",
            lineHeight: 1.7,
            maxWidth: 420,
            margin: "0 auto",
            letterSpacing: "0.02em",
            opacity: subVisible ? 0.6 : 0,
            transform: subVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          {t.problem.sub}
        </p>
      </div>
    </section>
  );
}
