"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col justify-end px-8 md:px-12 pt-32 pb-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 hero-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-180px",
          right: "-80px",
          width: "560px",
          height: "560px",
          background:
            "radial-gradient(circle, rgba(232,160,32,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-100px",
          left: "-80px",
          width: "400px",
          height: "400px",
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
          <span style={{ color: "var(--gold)" }}>About Us</span>
        </motion.div>

        {/* Label */}
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
          WHO WE ARE
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display leading-[0.9] tracking-wide"
          style={{ fontSize: "clamp(64px, 9vw, 128px)" }}
        >
          WE ARE
          <br />
          <em
            className="font-serif not-italic"
            style={{ color: "var(--gold)" }}
          >
            Nexu360
          </em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl font-light"
          style={{ color: "var(--muted)" }}
        >
          Your end-to-end digital growth partner — connecting every channel,
          every strategy, and every creative output into one seamless,
          results-driven engine.
        </motion.p>

        {/* Quick-nav pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-3 mt-10"
        >
          {["Our Story", "Our Values", "Our Team", "Why Nexu360"].map((label) => {
            const id = label.toLowerCase().replace(/\s+/g, "-").replace("our-", "");
            return (
              <a
                key={label}
                href={`#${id}`}
                className="px-5 py-2 text-[12px] tracking-wide border transition-colors duration-200"
                style={{
                  borderColor: "var(--border2)",
                  color: "var(--muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border2)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                {label}
              </a>
            );
          })}
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
