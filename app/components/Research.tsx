"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const credentials = [
  {
    number: "3×",
    label: "Independent Validations",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
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
    number: "2",
    label: "State Partnerships",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path d="M16 3L5 7V15C5 21 10 26.5 16 29C22 26.5 27 21 27 15V7L16 3Z" stroke="#00D4FF" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 16L14 19L21 12" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Government Endorsed",
    text: "Pilot programs operating in formal partnership with state-level security advisors in Zamfara and Bauchi, under framework agreements with Nigeria's Ministry of Interior and the Office of the National Security Adviser.",
  },
  {
    number: "18mo",
    label: "Continuous Deployment",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <circle cx="16" cy="16" r="11" stroke="#00D4FF" strokeWidth="1.5" />
        <path d="M16 10V16L20 18" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "18 Months of Field Data",
    text: "Over 18 months of continuous deployment data from 2,800+ community nodes, generating the largest regional security behavioral dataset of its kind in West Africa — real data, not projections.",
  },
];

function CredentialRow({
  cred,
  index,
}: {
  cred: (typeof credentials)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="credential-row"
      style={{
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        gap: "40px",
        alignItems: "start",
        padding: "36px 0",
        borderBottom:
          index < credentials.length - 1
            ? "1px solid var(--axiod-border)"
            : "none",
        cursor: "default",
        transition: "opacity 0.2s",
      }}
    >
      {/* Left: stat */}
      <div className="credential-stat" style={{ flexShrink: 0 }}>
        <div
          className="credential-stat-number"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 5vw, 56px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: hovered ? "var(--axiod-signal)" : "rgba(0,212,255,0.18)",
            transition: "color 0.35s",
            marginBottom: "6px",
          }}
        >
          {cred.number}
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "var(--axiod-text-dim)",
            textTransform: "uppercase",
            lineHeight: 1.5,
          }}
        >
          {cred.label}
        </div>
      </div>

      {/* Right: content */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "14px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: hovered
                ? "rgba(0,212,255,0.14)"
                : "var(--axiod-signal-dim)",
              border: `1px solid ${hovered ? "rgba(0,212,255,0.35)" : "rgba(0,212,255,0.14)"}`,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s, border-color 0.3s",
              flexShrink: 0,
            }}
          >
            {cred.icon}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "17px",
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            {cred.title}
          </h3>
        </div>
        <p
          style={{
            fontSize: "14px",
            color: "var(--axiod-text-muted)",
            lineHeight: 1.78,
            maxWidth: "560px",
          }}
        >
          {cred.text}
        </p>
      </div>
    </div>
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
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "48px",
            alignItems: "end",
            marginBottom: "16px",
            paddingBottom: "48px",
            borderBottom: "1px solid var(--axiod-border)",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "10px",
                letterSpacing: "0.22em",
                color: "var(--axiod-signal)",
                textTransform: "uppercase",
                marginBottom: "20px",
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
                fontWeight: 700,
                fontSize: "clamp(28px, 3.8vw, 48px)",
                lineHeight: 1.09,
                letterSpacing: "-0.02em",
                color: "white",
              }}
            >
              Evidence-backed.
              <br />
              <span style={{ color: "var(--axiod-signal)" }}>Field-proven.</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "var(--axiod-text-muted)",
              lineHeight: 1.8,
              maxWidth: "440px",
            }}
          >
            Every claim Axiod makes is grounded in real deployment data,
            peer-reviewed methodology, and government-validated results —
            not investor narratives.
          </p>
        </div>

        {/* Credential rows */}
        <div>
          {credentials.map((cred, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <CredentialRow cred={cred} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
