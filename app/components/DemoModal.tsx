"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const requestTypes = [
  "Investor Deck",
  "Live Platform Demo",
  "Deployment Brief",
  "Partnership Discussion",
  "Research Collaboration",
];

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [selected, setSelected] = useState("Live Platform Demo");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", org: "", message: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(5,13,26,0.85)",
              backdropFilter: "blur(8px)",
              zIndex: 2000,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2001,
              width: "min(540px, 92vw)",
              background: "var(--axiod-surface)",
              border: "1px solid var(--axiod-border-hi)",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow:
                "0 0 80px rgba(0,212,255,0.1), 0 32px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "28px 32px 24px",
                borderBottom: "1px solid var(--axiod-border)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "16px",
                background:
                  "linear-gradient(135deg, var(--axiod-surface-2) 0%, var(--axiod-surface) 100%)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "var(--axiod-signal)",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Axiod Robotics
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 800,
                    fontSize: "22px",
                    color: "white",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {submitted ? "Request Received" : "Request Access"}
                </h2>
              </div>
              <button
                onClick={handleClose}
                style={{
                  background: "none",
                  border: "1px solid var(--axiod-border)",
                  borderRadius: "6px",
                  color: "var(--axiod-text-muted)",
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "4px 10px",
                  lineHeight: 1.4,
                  flexShrink: 0,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: "28px 32px 32px" }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: "center", padding: "24px 0" }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "var(--axiod-green-dim)",
                      border: "1px solid rgba(42,232,139,0.3)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: "24px",
                    }}
                  >
                    ✓
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "var(--axiod-green)",
                      marginBottom: "10px",
                    }}
                  >
                    We&apos;ll be in touch within 48 hours.
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--axiod-text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    Your request for <strong style={{ color: "white" }}>{selected}</strong> has been logged.
                    NDAs are available upon request. All deployments are field-supported.
                  </p>
                  <Button
                    onPress={handleClose}
                    style={{
                      marginTop: "24px",
                      background: "var(--axiod-signal)",
                      border: "none",
                      color: "#050D1A",
                      fontFamily: "var(--font-syne), sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      borderRadius: "5px",
                      padding: "10px 28px",
                      height: "auto",
                    }}
                  >
                    Close
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Request type selector */}
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.16em",
                        color: "var(--axiod-text-muted)",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                      }}
                    >
                      Request Type
                    </label>
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
                            padding: "6px 14px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            transition: "all 0.15s",
                            border:
                              selected === type
                                ? "1px solid rgba(0,212,255,0.5)"
                                : "1px solid var(--axiod-border)",
                            background:
                              selected === type
                                ? "var(--axiod-signal-dim)"
                                : "var(--axiod-surface-2)",
                            color:
                              selected === type
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
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                      marginBottom: "14px",
                    }}
                  >
                    {[
                      { key: "name", label: "Full Name", placeholder: "Vivian Ogah" },
                      { key: "email", label: "Email Address", placeholder: "v@axiod.ai", type: "email" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label
                          style={{
                            display: "block",
                            fontFamily: "var(--font-jetbrains), monospace",
                            fontSize: "9px",
                            letterSpacing: "0.16em",
                            color: "var(--axiod-text-muted)",
                            textTransform: "uppercase",
                            marginBottom: "6px",
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          required
                          type={field.type ?? "text"}
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, [field.key]: e.target.value }))
                          }
                          style={{
                            width: "100%",
                            background: "var(--axiod-surface-2)",
                            border: "1px solid var(--axiod-border)",
                            borderRadius: "5px",
                            padding: "9px 12px",
                            fontFamily: "var(--font-jetbrains), monospace",
                            fontSize: "12px",
                            color: "var(--axiod-text)",
                            outline: "none",
                            transition: "border-color 0.18s",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor =
                              "var(--axiod-signal)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor =
                              "var(--axiod-border)")
                          }
                        />
                      </div>
                    ))}
                  </div>

                  {/* Organization */}
                  <div style={{ marginBottom: "14px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.16em",
                        color: "var(--axiod-text-muted)",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      Organization / Fund
                    </label>
                    <input
                      type="text"
                      placeholder="Government agency, VC firm, NGO..."
                      value={form.org}
                      onChange={(e) => setForm((f) => ({ ...f, org: e.target.value }))}
                      style={{
                        width: "100%",
                        background: "var(--axiod-surface-2)",
                        border: "1px solid var(--axiod-border)",
                        borderRadius: "5px",
                        padding: "9px 12px",
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "12px",
                        color: "var(--axiod-text)",
                        outline: "none",
                        transition: "border-color 0.18s",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--axiod-signal)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--axiod-border)")
                      }
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "24px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.16em",
                        color: "var(--axiod-text-muted)",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      Message (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your context or specific needs..."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      style={{
                        width: "100%",
                        background: "var(--axiod-surface-2)",
                        border: "1px solid var(--axiod-border)",
                        borderRadius: "5px",
                        padding: "9px 12px",
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "12px",
                        color: "var(--axiod-text)",
                        outline: "none",
                        resize: "none",
                        transition: "border-color 0.18s",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--axiod-signal)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--axiod-border)")
                      }
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
                      fontSize: "14px",
                      letterSpacing: "0.04em",
                      borderRadius: "5px",
                      padding: "13px",
                      height: "auto",
                      cursor: "pointer",
                    }}
                  >
                    Submit Request →
                  </Button>

                  <div
                    style={{
                      marginTop: "14px",
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "var(--axiod-text-dim)",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Response within 48 hours · NDAs available on request
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
