"use client";

import { useState } from "react";
import { Card } from "@heroui/react";
import AnimatedSection from "./AnimatedSection";

const team = [
  {
    initials: "VO",
    name: "Vivian Ogah",
    role: "Founder & CEO",
    bio: "Leads product vision and strategic direction. Security technologist with deep roots in Nigerian conflict research and community resilience programs.",
  },
  {
    initials: "MO",
    name: "Martins Ogunlesi",
    role: "CTO",
    bio: "Leads engineering and AI systems architecture. Expert in autonomous systems and edge-deployed machine learning models in low-resource environments.",
  },
  {
    initials: "JO",
    name: "Job Onum",
    role: "Head of Operations",
    bio: "Oversees field deployment and community integration. Former logistician with deep operational experience in humanitarian and crisis-zone settings.",
  },
  {
    initials: "GC",
    name: "Godwin Chritaina",
    role: "Head of Research",
    bio: "Leads threat modeling and AI training pipeline development. Published researcher in regional security studies and conflict-pattern analytics.",
  },
  {
    initials: "DO",
    name: "Domnic Ochiwu",
    role: "Head of Partnerships",
    bio: "Drives government, NGO, and institutional relationships. Manages regulatory approvals, framework agreements, and cross-border compliance strategy.",
  },
];

function TeamCard({ member }: { member: (typeof team)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card.Root
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--axiod-surface)",
        border: `1px solid ${hovered ? "var(--axiod-border-hi)" : "var(--axiod-border)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.35)" : "none",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          height: "130px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(140deg,#0A1828 0%,#060F1E 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "22px",
            borderRadius: "50%",
            border: "1px solid rgba(0,212,255,0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "36px",
            borderRadius: "50%",
            border: "1px solid rgba(0,212,255,0.06)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "38px",
            color: "var(--axiod-signal)",
            position: "relative",
            zIndex: 1,
            opacity: 0.75,
            letterSpacing: "-0.01em",
          }}
        >
          {member.initials}
        </span>
      </div>

      <Card.Content style={{ padding: "20px" }}>
        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            color: "white",
            marginBottom: "4px",
          }}
        >
          {member.name}
        </div>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "var(--axiod-signal)",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          {member.role}
        </span>
        <p
          style={{
            fontSize: "12px",
            color: "var(--axiod-text-muted)",
            lineHeight: 1.65,
          }}
        >
          {member.bio}
        </p>
      </Card.Content>
    </Card.Root>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      style={{ padding: "104px clamp(20px, 4vw, 56px)" }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px",
          }}
        >
          {team.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <TeamCard member={member} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
