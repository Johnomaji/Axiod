"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";

const requestTypes = [
  "Investor Deck",
  "Live Platform Demo",
  "Deployment Brief",
  "Partnership Discussion",
  "Research Collaboration",
];

export default function RequestForm({ defaultType }: { defaultType?: string }) {
  const initial = requestTypes.find((t) => t === defaultType) ?? "Live Platform Demo";
  const [selected, setSelected] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--axiod-surface-2)",
    border: "1px solid var(--axiod-border)",
    borderRadius: "6px",
    padding: "11px 14px",
    fontFamily: "var(--font-jetbrains), monospace",
    fontSize: "13px",
    color: "var(--axiod-text)",
    outline: "none",
    transition: "border-color 0.18s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-jetbrains), monospace",
    fontSize: "9px",
    letterSpacing: "0.18em",
    color: "var(--axiod-text-muted)",
    textTransform: "uppercase",
    marginBottom: "7px",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--axiod-signal)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--axiod-border)";
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: "center", padding: "48px 24px" }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            background: "var(--axiod-green-dim)",
            border: "1px solid rgba(42,232,139,0.3)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "28px",
            color: "var(--axiod-green)",
          }}
        >
          ✓
        </div>
        <h3
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            color: "var(--axiod-green)",
            marginBottom: "12px",
          }}
        >
          Request received.
        </h3>
        <p
          style={{
            fontSize: "15px",
            color: "var(--axiod-text-muted)",
            lineHeight: 1.75,
            maxWidth: "420px",
            margin: "0 auto 32px",
          }}
        >
          Your request for{" "}
          <strong style={{ color: "white" }}>{selected}</strong> has been
          logged. We&apos;ll be in touch within 48 hours. NDAs are available
          upon request.
        </p>
        <Button
          onPress={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", org: "", message: "" });
          }}
          style={{
            background: "var(--axiod-surface-2)",
            border: "1px solid var(--axiod-border-hi)",
            color: "var(--axiod-text)",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            padding: "12px 28px",
            borderRadius: "6px",
            height: "auto",
          }}
        >
          Submit another request
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      {/* Request type */}
      <div style={{ marginBottom: "28px" }}>
        <label style={labelStyle}>Request Type</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {requestTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelected(type)}
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "10px",
                letterSpacing: "0.08em",
                padding: "7px 16px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.15s",
                border: selected === type
                  ? "1px solid rgba(0,212,255,0.5)"
                  : "1px solid var(--axiod-border)",
                background: selected === type
                  ? "var(--axiod-signal-dim)"
                  : "var(--axiod-surface-2)",
                color: selected === type
                  ? "var(--axiod-signal)"
                  : "var(--axiod-text-muted)",
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Name + Email */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <div>
          <label style={labelStyle}>Full Name</label>
          <input
            required
            type="text"
            placeholder="Vivian Ogah"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label style={labelStyle}>Email Address</label>
          <input
            required
            type="email"
            placeholder="v@axiod.ai"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>

      {/* Organization */}
      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>Organization / Fund</label>
        <input
          type="text"
          placeholder="Government agency, VC firm, NGO..."
          value={form.org}
          onChange={(e) => setForm((f) => ({ ...f, org: e.target.value }))}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: "28px" }}>
        <label style={labelStyle}>Message (optional)</label>
        <textarea
          rows={4}
          placeholder="Tell us about your context or specific needs..."
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          style={{ ...inputStyle, resize: "none" }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <Button
        type="submit"
        style={{
          width: "100%",
          background: "var(--axiod-signal)",
          border: "none",
          color: "#050D1A",
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: "0.04em",
          borderRadius: "6px",
          padding: "15px",
          height: "auto",
          cursor: "pointer",
        }}
      >
        Submit Request →
      </Button>

      <p
        style={{
          marginTop: "16px",
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "9px",
          letterSpacing: "0.12em",
          color: "var(--axiod-text-dim)",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Response within 48 hours · NDAs available on request
      </p>
    </motion.form>
  );
}
