"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const team = [
  {
    name: "Vivian Ogah",
    photo: "vivian",
    role: "Founder & CEO",
    bio: "Leads product vision and strategic direction. Security technologist with deep roots in Nigerian conflict research and community resilience programs.",
  },
  {
    name: "Martins Ogunlesi",
    photo: "martins",
    role: "CTO",
    bio: "Leads engineering and AI systems architecture. Expert in autonomous systems and edge-deployed machine learning models in low-resource environments.",
  },
  {
    name: "Job Onum",
    photo: "job",
    role: "Head of Operations",
    bio: "Oversees field deployment and community integration. Former logistician with deep operational experience in humanitarian and crisis-zone settings.",
  },
  {
    name: "Godwin Chritaina",
    photo: "godwin",
    role: "Head of Research",
    bio: "Leads threat modeling and AI training pipeline development. Published researcher in regional security studies and conflict-pattern analytics.",
  },
  {
    name: "Domnic Ochiwu",
    photo: "dominic",
    role: "Head of Partnerships",
    bio: "Drives government, NGO, and institutional relationships. Manages regulatory approvals, framework agreements, and cross-border compliance strategy.",
  },
];

function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((v) => !v)}
      style={{
        position: "relative",
        borderRadius: "14px",
        overflow: "hidden",
        height: "420px",
        cursor: "pointer",
        border: `1px solid ${active ? "rgba(0,212,255,0.4)" : "rgba(0,212,255,0.1)"}`,
        boxShadow: active
          ? "0 0 40px rgba(0,212,255,0.12), 0 32px 64px rgba(0,0,0,0.55)"
          : "0 8px 32px rgba(0,0,0,0.35)",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
    >
      {/* Photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: active ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <Image
          src={`/${member.photo}.jpg`}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority={index < 3}
        />
      </div>

      {/* Base gradient — always visible */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 25%, rgba(6,13,26,0.6) 55%, rgba(6,13,26,0.97) 100%)",
        }}
      />

      {/* Active overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,212,255,0.04)",
          opacity: active ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      {/* Top cyan accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, var(--axiod-signal) 50%, transparent 100%)",
          opacity: active ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      {/* Index number — top right */}
      <div
        style={{
          position: "absolute",
          top: "18px",
          right: "18px",
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "10px",
          color: "rgba(0,212,255,0.35)",
          letterSpacing: "0.1em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Bottom content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "9px",
            letterSpacing: "0.16em",
            color: "var(--axiod-signal)",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              width: "14px",
              height: "1px",
              background: "var(--axiod-signal)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          {member.role}
        </span>

        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "18px",
            color: "white",
            letterSpacing: "-0.01em",
            marginBottom: active ? "12px" : "0",
            transition: "margin-bottom 0.35s ease",
          }}
        >
          {member.name}
        </div>

        {/* Bio — reveals on hover/tap */}
        <div
          style={{
            fontSize: "12.5px",
            color: "rgba(170,195,220,0.88)",
            lineHeight: 1.68,
            maxHeight: active ? "150px" : "0",
            opacity: active ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.45s ease, opacity 0.35s ease",
          }}
        >
          {member.bio}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      style={{ padding: "104px clamp(20px, 4vw, 56px)" }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
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
            The Founders
          </div>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px, 3.8vw, 48px)",
              lineHeight: 1.09,
              letterSpacing: "-0.02em",
              color: "white",
              marginBottom: "14px",
            }}
          >
            Built by people who
            <br />
            understand the stakes
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--axiod-text-muted)",
              maxWidth: "540px",
              lineHeight: 1.78,
            }}
          >
            A multidisciplinary founding team combining security expertise, AI
            systems research, regional knowledge, and institutional partnership
            experience.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          {team.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <TeamCard member={member} index={i} />
            </AnimatedSection>
          ))}
        </div>

        {/* Tap hint for mobile */}
        <p
          style={{
            marginTop: "24px",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "var(--axiod-text-dim)",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Tap a card to learn more
        </p>
      </div>
    </section>
  );
}
