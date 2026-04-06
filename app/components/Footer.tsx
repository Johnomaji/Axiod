"use client";

import AxiodLogo from "./AxiodLogo";

const links = ["Platform", "Deployments", "Research", "Team", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--axiod-bg)",
        borderTop: "1px solid var(--axiod-border)",
        padding: "36px clamp(20px, 4vw, 56px)",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <AxiodLogo size={22} />
          <span
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            AXIOD ROBOTICS
          </span>
        </a>

        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "11px",
                color: "var(--axiod-text-dim)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "color 0.18s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--axiod-text-muted)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--axiod-text-dim)")
              }
            >
              {link}
            </a>
          ))}
        </div>

        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "10px",
            color: "var(--axiod-text-dim)",
            letterSpacing: "0.06em",
          }}
        >
          © 2025 Axiod Robotics · Abuja, Nigeria
        </div>
      </div>
    </footer>
  );
}
