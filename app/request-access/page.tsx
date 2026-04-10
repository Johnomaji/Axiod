import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RequestForm from "./RequestForm";

export const metadata = {
  title: "Request Access — Axiod Robotics",
  description: "Request an investor deck, live platform demo, or deployment brief from Axiod Robotics.",
};

export default async function RequestAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(175deg,#060D1A 0%,#08152A 50%,#060C18 100%)",
          paddingTop: "72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(27,52,79,0.15) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(27,52,79,0.15) 60px)",
            pointerEvents: "none",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle,rgba(0,212,255,0.05) 0%,transparent 65%)",
            top: "-100px",
            right: "-150px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "72px clamp(20px, 4vw, 56px) 96px",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left — context */}
          <div style={{ paddingTop: "8px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "var(--axiod-signal)",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "1px",
                  background: "var(--axiod-signal)",
                  display: "inline-block",
                }}
              />
              Axiod Robotics
            </div>

            <h1
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Request
              <br />
              <span style={{ color: "var(--axiod-signal)" }}>Access</span>
            </h1>

            <p
              style={{
                fontSize: "15px",
                color: "var(--axiod-text-muted)",
                lineHeight: 1.8,
                marginBottom: "48px",
                maxWidth: "420px",
              }}
            >
              Whether you&apos;re an investor, government partner, NGO, or
              researcher — we&apos;re ready to brief you. Select the type of
              engagement that fits your needs.
            </p>

            {/* What to expect */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                {
                  label: "Response time",
                  value: "Within 48 hours",
                  icon: "◎",
                },
                {
                  label: "NDA",
                  value: "Available on request before any briefing",
                  icon: "◎",
                },
                {
                  label: "Deployments",
                  value: "All demos are field-supported, not simulated",
                  icon: "◎",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      color: "var(--axiod-signal)",
                      fontSize: "12px",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.14em",
                        color: "var(--axiod-text-dim)",
                        textTransform: "uppercase",
                        marginBottom: "3px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "var(--axiod-text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              background: "var(--axiod-surface)",
              border: "1px solid var(--axiod-border-hi)",
              borderRadius: "16px",
              padding: "clamp(24px, 4vw, 40px)",
              boxShadow:
                "0 0 80px rgba(0,212,255,0.05), 0 32px 80px rgba(0,0,0,0.5)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "white",
                letterSpacing: "-0.01em",
                marginBottom: "6px",
              }}
            >
              Get in touch
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "var(--axiod-text-muted)",
                marginBottom: "28px",
                lineHeight: 1.6,
              }}
            >
              Fill in the form and our team will reach out with the relevant
              materials.
            </p>
            <RequestForm defaultType={type} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
