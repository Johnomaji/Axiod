"use client";

import { useState } from "react";
import { Card, Chip } from "@heroui/react";

const deployments = [
  {
    region: "Northwest Nigeria",
    name: "Zamfara State",
    badge: "High Risk Active",
    badgeColor: "#FF6B35",
    rows: [
      { label: "Active Drones", value: "14 Units", color: "var(--axiod-signal)" },
      { label: "Coverage Area", value: "38,000 km²", color: "var(--axiod-text)" },
      { label: "Incidents Flagged (30 days)", value: "247", color: "var(--axiod-alert)" },
      { label: "Response Time Improvement", value: "+63%", color: "var(--axiod-green)" },
      { label: "Communities Served", value: "1,840+", color: "var(--axiod-text)" },
      { label: "Field Data Collected", value: "18 months", color: "var(--axiod-text)" },
    ],
  },
  {
    region: "Northeast Nigeria",
    name: "Bauchi State",
    badge: "Elevated Risk",
    badgeColor: "#FFB020",
    rows: [
      { label: "Active Drones", value: "9 Units", color: "var(--axiod-signal)" },
      { label: "Coverage Area", value: "22,000 km²", color: "var(--axiod-text)" },
      { label: "Incidents Flagged (30 days)", value: "119", color: "var(--axiod-alert)" },
      { label: "Response Time Improvement", value: "+44%", color: "var(--axiod-green)" },
      { label: "Communities Served", value: "970+", color: "var(--axiod-text)" },
      { label: "Field Data Collected", value: "12 months", color: "var(--axiod-text)" },
    ],
  },
];

function DeploymentCard({ dep }: { dep: (typeof deployments)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card.Root
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--axiod-bg)",
        border: `1px solid ${hovered ? "var(--axiod-border-hi)" : "var(--axiod-border)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "border-color 0.3s",
      }}
    >
      <Card.Header
        style={{
          padding: "34px 34px 28px",
          borderBottom: "1px solid var(--axiod-border)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "var(--axiod-signal)",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            {dep.region}
          </div>
          <div
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "26px",
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            {dep.name}
          </div>
        </div>
        <div
          style={{
            background: "rgba(255,107,53,0.12)",
            border: `1px solid ${dep.badgeColor}44`,
            borderRadius: "4px",
            padding: "5px 11px",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: dep.badgeColor,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {dep.badge}
        </div>
      </Card.Header>
      <Card.Content style={{ padding: "34px" }}>
        {dep.rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "13px 0",
              borderBottom:
                i < dep.rows.length - 1
                  ? "1px solid var(--axiod-border)"
                  : "none",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "var(--axiod-text-muted)",
              }}
            >
              {row.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "13px",
                color: row.color,
              }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </Card.Content>
    </Card.Root>
  );
}

export default function Deployments() {
  return (
    <section
      id="deployments"
      style={{
        padding: "104px clamp(20px, 4vw, 56px)",
        background: "var(--axiod-surface)",
        borderTop: "1px solid var(--axiod-border)",
        borderBottom: "1px solid var(--axiod-border)",
      }}
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
            Active Deployments
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
            Where Axiod operates today
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--axiod-text-muted)",
              maxWidth: "540px",
              lineHeight: 1.78,
            }}
          >
            Field-tested in Nigeria&apos;s most security-challenged states,
            delivering measurable outcomes where conventional security response
            has fallen short.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {deployments.map((dep, i) => (
            <DeploymentCard key={i} dep={dep} />
          ))}
        </div>
      </div>
    </section>
  );
}
