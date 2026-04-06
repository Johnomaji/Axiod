"use client";

import { useState } from "react";
import { Card } from "@heroui/react";
import AnimatedSection from "./AnimatedSection";

const credentials = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <rect x="7" y="4" width="18" height="24" rx="2" stroke="#00D4FF" strokeWidth="1.5" />
        <line x1="11" y1="11" x2="21" y2="11" stroke="#00D4FF" strokeWidth="1.2" opacity="0.6" />
        <line x1="11" y1="15" x2="21" y2="15" stroke="#00D4FF" strokeWidth="1.2" opacity="0.4" />
        <line x1="11" y1="19" x2="17" y2="19" stroke="#00D4FF" strokeWidth="1.2" opacity="0.3" />
      </svg>
    ),
    title: "Peer-Reviewed Research",
    text: "Axiod's threat detection methodology is validated by three independent security research bodies across Sub-Saharan Africa and published in the African Journal of Conflict Studies and the Journal of Autonomous Security Systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path d="M16 3L5 7V15C5 21 10 26.5 16 29C22 26.5 27 21 27 15V7L16 3Z" stroke="#00D4FF" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 16L14 19L21 12" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Government Endorsed",
    text: "Pilot programs operating in formal partnership with state-level security advisors in Zamfara and Bauchi, under framework agreements with Nigeria's Ministry of Interior and the Office of the National Security Adviser.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <circle cx="16" cy="16" r="11" stroke="#00D4FF" strokeWidth="1.5" />
        <path d="M16 10V16L20 18" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "18 Months of Field Data",
    text: "Over 18 months of continuous deployment data from 2,800+ community nodes, generating the largest regional security behavioral dataset of its kind in West Africa — real data, not projections.",
  },
];

function CredCard({ cred }: { cred: (typeof credentials)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card.Root
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--axiod-bg)",
        border: `1px solid ${hovered ? "var(--axiod-border-hi)" : "var(--axiod-border)"}`,
        borderRadius: "10px",
        padding: "30px",
        transition: "border-color 0.2s",
      }}
    >
      <Card.Content style={{ padding: 0 }}>
        <div
          style={{
            width: "42px",
            height: "42px",
            background: "var(--axiod-signal-dim)",
            border: "1px solid rgba(0,212,255,0.16)",
            borderRadius: "9px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "18px",
          }}
        >
          {cred.icon}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            color: "white",
            marginBottom: "10px",
          }}
        >
          {cred.title}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "var(--axiod-text-muted)",
            lineHeight: 1.68,
          }}
        >
          {cred.text}
        </p>
      </Card.Content>
    </Card.Root>
  );
}

export default function Research() {
  return (
    <section
      id="research"
      style={{
        padding: "104px clamp(20px, 4vw, 56px)",
        background: "var(--axiod-surface)",
        borderTop: "1px solid var(--axiod-border)",
        borderBottom: "1px solid var(--axiod-border)",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: "var(--axiod-signal)",
              textTransform: "uppercase",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "22px",
                height: "1px",
                background: "var(--axiod-signal)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Research & Validation
          </div>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px, 3.8vw, 48px)",
              lineHeight: 1.09,
              letterSpacing: "-0.02em",
              color: "white",
            }}
          >
            Evidence-backed.
            <br />
            Field-proven.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {credentials.map((cred, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <CredCard cred={cred} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
