"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useRouter, usePathname } from "next/navigation";
import AxiodLogo from "./AxiodLogo";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Deployments", href: "#deployments" },
  { label: "Team", href: "#team" },
  { label: "Research", href: "#research" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const resolveHref = (anchor: string) =>
    pathname === "/" ? anchor : `/${anchor}`;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "72px",
        background: scrolled
          ? "rgba(5,13,26,0.98)"
          : "rgba(5,13,26,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--axiod-border)",
        boxShadow: scrolled ? "0 1px 0 var(--axiod-border)" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(20px, 4vw, 56px)",
        transition: "background 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "13px",
          textDecoration: "none",
        }}
      >
        <AxiodLogo size={38} />
        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "17px",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              color: "white",
              lineHeight: 1,
            }}
          >
            AXIOD
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 400,
              fontSize: "8.5px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--axiod-text-muted)",
              marginTop: "3px",
            }}
          >
            Robotics
          </span>
        </div>
      </a>

      {/* Desktop Nav Links */}
      <div
        className="hidden md:flex"
        style={{ gap: "6px", alignItems: "center" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={resolveHref(link.href)}
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.04em",
              color: "var(--axiod-text-muted)",
              padding: "7px 14px",
              borderRadius: "4px",
              transition: "color 0.18s, background 0.18s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "white";
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--axiod-text-muted)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex" style={{ gap: "12px", alignItems: "center" }}>
        <Button
          variant="outline"
          size="sm"
          onPress={() => router.push("/request-access")}
          style={{
            background: "none",
            border: "1px solid var(--axiod-border-hi)",
            color: "var(--axiod-text)",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.05em",
            borderRadius: "4px",
          }}
        >
          Request Demo
        </Button>
        <Button
          size="sm"
          onPress={() => router.push("/request-access?type=Deployment+Brief")}
          style={{
            background: "var(--axiod-signal)",
            border: "none",
            color: "#050D1A",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.05em",
            borderRadius: "4px",
          }}
        >
          Deploy Now →
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="flex md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "1px solid var(--axiod-border)",
          borderRadius: "4px",
          padding: "6px 10px",
          cursor: "pointer",
          color: "var(--axiod-text-muted)",
          fontSize: "18px",
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "72px",
            left: 0,
            right: 0,
            background: "rgba(5,13,26,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--axiod-border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "var(--axiod-text-muted)",
                padding: "10px 12px",
                borderRadius: "4px",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            <Button
              variant="outline"
              size="sm"
              onPress={() => { router.push("/request-access"); setMenuOpen(false); }}
              style={{
                flex: 1,
                background: "none",
                border: "1px solid var(--axiod-border-hi)",
                color: "var(--axiod-text)",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                borderRadius: "4px",
              }}
            >
              Request Demo
            </Button>
            <Button
              size="sm"
              onPress={() => { router.push("/request-access?type=Deployment+Brief"); setMenuOpen(false); }}
              style={{
                flex: 1,
                background: "var(--axiod-signal)",
                border: "none",
                color: "#050D1A",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                borderRadius: "4px",
              }}
            >
              Deploy Now →
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
