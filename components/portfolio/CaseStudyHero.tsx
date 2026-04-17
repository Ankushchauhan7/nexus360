"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/portfolio-data";

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section
      className="relative flex flex-col justify-end px-8 md:px-12 pt-32 pb-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px", right: "-80px", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(232,160,32,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[12px] tracking-wide mb-10"
          style={{ color: "var(--muted)" }}
        >
          <Link href="/" className="transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >Home</Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <Link href="/portfolio" className="transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >Portfolio</Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <span style={{ color: "var(--gold)" }}>{study.client}</span>
        </motion.div>

        {/* Client + industry */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-4 mb-6"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-display text-sm border"
            style={{
              backgroundColor: "rgba(232,160,32,0.10)",
              borderColor: study.accentColor,
              color: study.accentColor,
            }}
          >
            {study.initials}
          </div>
          <div>
            <div className="font-serif text-base" style={{ color: "var(--text)" }}>{study.client}</div>
            <div className="text-[11px] tracking-wide" style={{ color: "var(--muted)" }}>{study.industry}</div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display leading-[0.95] tracking-wide mb-5"
          style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
        >
          {study.title.toUpperCase()}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif italic text-lg md:text-xl mb-6"
          style={{ color: "var(--gold)" }}
        >
          {study.tagline}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="text-[15px] leading-relaxed font-light max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          {study.summary}
        </motion.p>

        {/* Meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="flex flex-wrap gap-px mt-10 border-t pt-8"
          style={{ borderColor: "var(--border2)" }}
        >
          {[
            { label: "DURATION",  value: study.duration },
            { label: "YEAR",      value: study.year     },
            { label: "SERVICES",  value: study.services.join(", ") },
          ].map((item) => (
            <div key={item.label} className="pr-8 mr-8 border-r last:border-r-0" style={{ borderColor: "var(--border2)" }}>
              <div className="text-[10px] tracking-widest mb-1" style={{ color: "var(--muted)" }}>{item.label}</div>
              <div className="text-[13px] font-light" style={{ color: "var(--text)" }}>{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: "var(--border2)" }} />
    </section>
  );
}
