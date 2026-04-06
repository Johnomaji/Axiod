import AnimatedCounter from "./AnimatedCounter";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: 98, suffix: "%", label: "Alert Detection\nAccuracy" },
  { number: 12, suffix: "s", label: "Avg. Response\nTrigger Time" },
  { number: 3, suffix: "K+", label: "Communities\nCovered" },
  { number: 24, suffix: "/7", label: "Autonomous\nSurveillance" },
];

export default function StatsBar() {
  return (
    <div
      style={{
        background: "var(--axiod-surface)",
        borderTop: "1px solid var(--axiod-border)",
        borderBottom: "1px solid var(--axiod-border)",
        padding: "36px clamp(20px, 4vw, 56px)",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 0,
        }}
      >
        {stats.map((stat, i) => (
          <AnimatedSection key={i} delay={i * 0.1} direction="up">
            <div
              style={{
                textAlign: "center",
                padding: "8px 16px",
                position: "relative",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid var(--axiod-border)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3vw, 42px)",
                  color: "white",
                  lineHeight: 1,
                  marginBottom: "6px",
                  letterSpacing: "-0.02em",
                }}
              >
                <span style={{ color: "var(--axiod-signal)" }}>
                  <AnimatedCounter value={stat.number} />
                </span>
                {stat.suffix}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  color: "var(--axiod-text-muted)",
                  textTransform: "uppercase",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {stat.label}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
