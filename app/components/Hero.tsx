"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RotatingText from "./RotatingText";

export default function Hero() {
  const router = useRouter();
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(175deg,#060D1A 0%,#08152A 45%,#060C18 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px clamp(20px, 4vw, 56px) 0",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(27,52,79,0.18) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(27,52,79,0.18) 60px)",
          pointerEvents: "none",
        }}
      />
      {/* Glow 1 */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 65%)",
          top: "-150px",
          right: "-100px",
          pointerEvents: "none",
        }}
      />
      {/* Glow 2 */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle,rgba(0,212,255,0.035) 0%,transparent 65%)",
          bottom: "-100px",
          left: "150px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "120px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Text */}
        <motion.div
          className="hero-text-col"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              background: "var(--axiod-signal-dim)",
              border: "1px solid rgba(0,212,255,0.22)",
              borderRadius: "24px",
              padding: "7px 16px",
              marginBottom: "30px",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--axiod-green)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--axiod-signal)",
                textTransform: "uppercase",
              }}
            >
              Live — Zamfara Deployment Active
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(50px, 5.5vw, 62px)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              color: "white",
              marginBottom: "22px",
            }}
          >
            Autonomous
            <br />
            Intelligence for
            <br />
            <RotatingText
              texts={[ "Conflict", "Crisis", "High-Risk "]}
              mainClassName="px-2 py-0.5 overflow-hidden justify-center rounded-md"
              style={{ display: "inline-flex", background: "var(--axiod-signal)", color: "#050D1A" }}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />{" "}
            Environments
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "var(--axiod-text-muted)",
              lineHeight: 1.82,
              maxWidth: "490px",
              marginBottom: "38px",
            }}
          >
            Axiod Robotics deploys AI-powered surveillance, threat prediction,
            and real-time community alert infrastructure into regions where
            conventional security has failed. Built for Zamfara. Built for
            Bauchi. Built for everywhere that matters.
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Button
              onPress={() => {
                document.getElementById("platform")?.scrollIntoView({ behavior: "smooth" });
              }}
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
              See the Platform →
            </Button>
            <Button
              variant="outline"
              onPress={() => router.push("/request-access")}
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
              Read Research Brief
            </Button>
          </div>

          <div
            className="hero-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "52px",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--axiod-text-dim)",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "1px",
                background: "var(--axiod-border)",
              }}
            />
            Scroll to explore
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          <Image
            src="/apphero.svg"
            alt="Axiod platform preview"
            width={580}
            height={420}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow:
                "0 0 100px rgba(0,212,255,0.07), 0 48px 100px rgba(0,0,0,0.55)",
            }}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
