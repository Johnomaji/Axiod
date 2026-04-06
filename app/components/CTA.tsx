"use client";

import { Button } from "@heroui/react";
import { useModal } from "./ModalProvider";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  const { openDemo } = useModal();
  return (
    <section
      style={{
        padding: "112px clamp(20px, 4vw, 56px)",
        background:
          "linear-gradient(175deg,#06101E 0%,#091A2E 60%,#050D1A 100%)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%,rgba(0,212,255,0.06) 0%,transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <AnimatedSection
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "660px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 4.5vw, 56px)",
            lineHeight: 1.07,
            letterSpacing: "-0.025em",
            color: "white",
            marginBottom: "18px",
          }}
        >
          Security intelligence
          <br />
          for the real world.
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "var(--axiod-text-muted)",
            marginBottom: "40px",
            lineHeight: 1.75,
          }}
        >
          Request a deployment brief, investor deck, or live platform
          demonstration. Axiod is operational and ready for regions that can no
          longer afford to wait.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            onPress={openDemo}
            style={{
              background: "var(--axiod-signal)",
              border: "none",
              color: "#050D1A",
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.03em",
              padding: "15px 30px",
              borderRadius: "5px",
              cursor: "pointer",
              height: "auto",
            }}
          >
            Request Investor Deck →
          </Button>
          <Button
            variant="outline"
            onPress={openDemo}
            style={{
              background: "none",
              border: "1px solid var(--axiod-border-hi)",
              color: "var(--axiod-text)",
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.03em",
              padding: "14px 26px",
              borderRadius: "5px",
              cursor: "pointer",
              height: "auto",
            }}
          >
            Book a Live Demo
          </Button>
        </div>

        <div
          style={{
            marginTop: "24px",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "10px",
            letterSpacing: "0.1em",
            color: "var(--axiod-text-dim)",
            textTransform: "uppercase",
          }}
        >
          Response within 48 hours · NDAs available · All deployments
          field-supported
        </div>
      </AnimatedSection>
    </section>
  );
}
