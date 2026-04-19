"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function AuditHero() {
  return (
    <section
      id="digital-auditing"
      className="relative flex flex-col justify-end px-8 md:px-12 pt-32 pb-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 hero-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px",
          right: "-80px",
          width: "560px",
          height: "560px",
          background:
            "radial-gradient(circle, rgba(232,160,32,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Secondary glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px",
          left: "-60px",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle, rgba(232,160,32,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[12px] tracking-wide mb-10"
          style={{ color: "var(--muted)" }}
        >
          <Link
            href="/"
            className="transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Home
          </Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <Link
            href="/#services"
            className="transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Services
          </Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <span style={{ color: "var(--gold)" }}>Digital Auditing</span>
        </motion.div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] tracking-[1.5px] mb-8 border"
          style={{
            backgroundColor: "rgba(232,160,32,0.08)",
            borderColor: "var(--border)",
            color: "var(--gold)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
            style={{ backgroundColor: "var(--gold)" }}
          />
          KNOW BEFORE YOU GROW
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display leading-[0.92] tracking-wide"
          style={{ fontSize: "clamp(58px, 9vw, 118px)" }}
        >
          DIGITAL
          <br />
          <em
            className="font-serif not-italic"
            style={{ color: "var(--gold)" }}
          >
            Auditing
          </em>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl font-light"
          style={{ color: "var(--muted)" }}
        >
          A comprehensive review of your entire online presence —
          revealing exactly where you stand, where you are losing ground,
          and where your biggest growth opportunities are hiding.
        </motion.p>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="flex flex-wrap gap-10 mt-12 pt-10 border-t"
          style={{ borderColor: "var(--border2)" }}
        >
          {[
            { num: "7",   label: "AUDIT DOMAINS"       },
            { num: "3",   label: "KEY DELIVERABLES"     },
            { num: "FREE", label: "INITIAL AUDIT"       },
            { num: "3",   label: "BUSINESS DAYS"        },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-display text-4xl leading-none tracking-wide"
                style={{ color: "var(--gold)" }}
              >
                {s.num}
              </div>
              <div
                className="text-[11px] tracking-widest mt-1.5"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <motion.a
            href="#audit-cta"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200"
            style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--gold2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--gold)")
            }
          >
            Request Free Audit →
          </motion.a>

          <motion.a
            href="#audit-scope"
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3.5 text-sm font-light tracking-wide border transition-colors duration-200"
            style={{ borderColor: "var(--border2)", color: "var(--text)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border2)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            What We Cover ↓
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "var(--border2)" }}
      />
    </section>
  );
}
