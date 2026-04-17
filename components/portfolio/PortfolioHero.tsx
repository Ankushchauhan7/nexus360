"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function PortfolioHero() {
  return (
    <section
      className="relative flex flex-col justify-end px-8 md:px-12 pt-32 pb-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px", right: "-80px", width: "520px", height: "520px",
          background: "radial-gradient(circle, rgba(232,160,32,0.07) 0%, transparent 70%)",
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
          <Link href="/"
            className="transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >Home</Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <span style={{ color: "var(--gold)" }}>Portfolio</span>
        </motion.div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] tracking-[1.5px] mb-8 border"
          style={{ backgroundColor: "rgba(232,160,32,0.08)", borderColor: "var(--border)", color: "var(--gold)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ backgroundColor: "var(--gold)" }} />
          REAL RESULTS, REAL CLIENTS
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display leading-[0.9] tracking-wide"
          style={{ fontSize: "clamp(60px, 9vw, 120px)" }}
        >
          OUR
          <br />
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Work</em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 text-base md:text-lg leading-relaxed max-w-2xl font-light"
          style={{ color: "var(--muted)" }}
        >
          Every case study here represents a real business, a real challenge, and
          a measurable outcome. No stock metrics. No inflated numbers. Just honest
          work and the results it produced.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: "var(--border2)" }} />
    </section>
  );
}
