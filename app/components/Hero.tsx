"use client";

import { Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { useModal } from "./ModalProvider";

const alerts = [
  {
    color: "red" as const,
    dot: "#FF6B35",
    border: "#FF6B35",
    text: "Armed movement detected — LGA Sector 7, Bauchi",
    time: "2m ago",
  },
  {
    color: "yellow" as const,
    dot: "#FFB020",
    border: "#FFB020",
    text: "Perimeter breach risk elevated — Zone NW-3, Zamfara",
    time: "11m ago",
  },
  {
    color: "green" as const,
    dot: "#2AE88B",
    border: "#2AE88B",
    text: "Drone-4 patrol complete — Route Alpha clear",
    time: "24m ago",
  },
];

export default function Hero() {
  const { openDemo } = useModal();
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
          gap: "72px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Text */}
        <motion.div
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
              fontWeight: 800,
              fontSize: "clamp(40px, 4.8vw, 62px)",
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
            <span style={{ color: "var(--axiod-signal)" }}>
              Fragile Security
            </span>
            <br />
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

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
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
              Read Research Brief
            </Button>
          </div>

          <div
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

        {/* Hero Visual — Sentinel Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              background: "var(--axiod-surface)",
              border: "1px solid var(--axiod-border-hi)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow:
                "0 0 100px rgba(0,212,255,0.07), 0 48px 100px rgba(0,0,0,0.55)",
            }}
          >
            {/* Frame bar */}
            <div
              style={{
                background: "var(--axiod-surface-2)",
                borderBottom: "1px solid var(--axiod-border)",
                padding: "11px 18px",
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <span
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B35", display: "inline-block" }}
              />
              <span
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFB020", display: "inline-block" }}
              />
              <span
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#2AE88B", display: "inline-block" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "11px",
                  color: "var(--axiod-text-muted)",
                  marginLeft: "8px",
                  letterSpacing: "0.06em",
                }}
              >
                AXIOD · Sentinel Dashboard · Zone NW-4
              </span>
            </div>

            {/* SVG Map */}
            <div style={{ background: "#060F1C", overflow: "hidden" }}>
              <svg
                width="100%"
                height="210"
                viewBox="0 0 520 210"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="hgrid"
                    width="26"
                    height="26"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 26 0 L 0 0 0 26"
                      fill="none"
                      stroke="rgba(27,52,79,0.55)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="520" height="210" fill="#060F1C" />
                <rect width="520" height="210" fill="url(#hgrid)" />
                <polygon
                  points="70,40 165,28 225,60 205,130 125,142 65,98"
                  fill="rgba(0,212,255,0.04)"
                  stroke="rgba(0,212,255,0.28)"
                  strokeWidth="1.2"
                />
                <polygon
                  points="235,48 330,36 390,72 368,148 272,158 218,120"
                  fill="rgba(255,107,53,0.05)"
                  stroke="rgba(255,107,53,0.3)"
                  strokeWidth="1.2"
                />
                <polygon
                  points="320,28 412,16 460,55 450,118 368,130 302,92"
                  fill="rgba(0,212,255,0.03)"
                  stroke="rgba(0,212,255,0.16)"
                  strokeWidth="1"
                />
                <text
                  x="140"
                  y="90"
                  fontFamily="monospace"
                  fontSize="9"
                  fill="rgba(0,212,255,0.65)"
                  textAnchor="middle"
                >
                  ZAMFARA
                </text>
                <text
                  x="300"
                  y="105"
                  fontFamily="monospace"
                  fontSize="9"
                  fill="rgba(255,107,53,0.8)"
                  textAnchor="middle"
                >
                  BAUCHI
                </text>
                <text
                  x="380"
                  y="72"
                  fontFamily="monospace"
                  fontSize="8"
                  fill="rgba(0,212,255,0.4)"
                  textAnchor="middle"
                >
                  ZONE-C
                </text>
                <circle
                  cx="140"
                  cy="78"
                  r="5.5"
                  fill="rgba(42,232,139,0.14)"
                  stroke="#2AE88B"
                  strokeWidth="1.5"
                />
                <circle
                  cx="140"
                  cy="78"
                  r="11"
                  fill="none"
                  stroke="rgba(42,232,139,0.25)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <circle
                  cx="285"
                  cy="98"
                  r="6.5"
                  fill="rgba(255,107,53,0.18)"
                  stroke="#FF6B35"
                  strokeWidth="1.5"
                />
                <circle
                  cx="285"
                  cy="98"
                  r="14"
                  fill="none"
                  stroke="rgba(255,107,53,0.28)"
                  strokeWidth="1"
                />
                <circle
                  cx="338"
                  cy="68"
                  r="4.5"
                  fill="rgba(255,176,32,0.18)"
                  stroke="#FFB020"
                  strokeWidth="1.5"
                />
                <circle
                  cx="108"
                  cy="105"
                  r="3"
                  fill="rgba(0,212,255,0.3)"
                  stroke="#00D4FF"
                  strokeWidth="1"
                />
                <circle
                  cx="400"
                  cy="52"
                  r="3"
                  fill="rgba(0,212,255,0.3)"
                  stroke="#00D4FF"
                  strokeWidth="1"
                />
                <path
                  d="M 140 78 Q 205 38 285 98"
                  fill="none"
                  stroke="rgba(0,212,255,0.25)"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                />
                <polygon
                  points="283,93 291,98 283,103"
                  fill="#00D4FF"
                  opacity="0.55"
                />
                <line
                  x1="0"
                  y1="108"
                  x2="520"
                  y2="108"
                  stroke="rgba(0,212,255,0.06)"
                  strokeWidth="0.5"
                />
                <text
                  x="10"
                  y="200"
                  fontFamily="monospace"
                  fontSize="7"
                  fill="rgba(95,126,158,0.7)"
                >
                  11.8165°N, 9.5611°E · AXIOD-SENTINEL
                </text>
              </svg>
            </div>

            {/* Alerts */}
            <div style={{ padding: "14px" }}>
              {alerts.map((alert, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "11px",
                    padding: "9px 12px",
                    background: "var(--axiod-surface-2)",
                    borderRadius: "5px",
                    marginBottom: i < alerts.length - 1 ? "7px" : 0,
                    borderLeft: `2px solid ${alert.dot}`,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: alert.dot,
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "11px",
                      color: "var(--axiod-text)",
                      flex: 1,
                      lineHeight: 1.4,
                    }}
                  >
                    {alert.text}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "10px",
                      color: "var(--axiod-text-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {alert.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
