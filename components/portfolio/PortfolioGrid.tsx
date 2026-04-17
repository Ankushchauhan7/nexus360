"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Link from "next/link";
import { caseStudies, allTags } from "@/lib/portfolio-data";

function CaseCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      layout
    >
      <Link
        href={`/portfolio/${study.slug}`}
        className="group block relative overflow-hidden h-full border transition-colors duration-300"
        style={{ borderColor: "var(--border2)", backgroundColor: "var(--bg)" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg2)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg)")}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 service-card-line"
          style={{ backgroundColor: study.accentColor }}
        />

        <div className="p-8">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            {/* Client avatar */}
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

            {/* Year badge */}
            <span
              className="text-[11px] tracking-widest px-3 py-1 border"
              style={{ borderColor: "var(--border2)", color: "var(--muted)" }}
            >
              {study.year}
            </span>
          </div>

          {/* Industry */}
          <div className="text-[11px] tracking-[1.5px] mb-2" style={{ color: "var(--gold)" }}>
            {study.industry.toUpperCase()}
          </div>

          {/* Client name */}
          <div className="font-serif text-base mb-1" style={{ color: "var(--muted)" }}>
            {study.client}
          </div>

          {/* Title */}
          <h3
            className="font-display text-2xl md:text-3xl leading-tight tracking-wide mb-4 transition-colors duration-300 group-hover:text-[var(--gold)]"
            style={{ color: "var(--text)" }}
          >
            {study.title}
          </h3>

          {/* Tagline */}
          <p
            className="text-[13px] leading-relaxed font-light mb-6"
            style={{ color: "var(--muted)" }}
          >
            {study.tagline}
          </p>

          {/* Metrics strip */}
          <div
            className="grid grid-cols-2 gap-px mb-6"
            style={{ backgroundColor: "var(--border2)" }}
          >
            {study.metrics.slice(0, 2).map((m) => (
              <div
                key={m.label}
                className="px-4 py-3"
                style={{ backgroundColor: "var(--bg2)" }}
              >
                <div
                  className="font-display text-xl leading-none"
                  style={{ color: study.accentColor }}
                >
                  {m.value}
                </div>
                <div className="text-[11px] mt-1 leading-tight" style={{ color: "var(--muted)" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Services tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {study.services.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 text-[11px] tracking-wide border"
                style={{ borderColor: "var(--border2)", color: "var(--muted)" }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Read more */}
          <div
            className="flex items-center gap-2 text-[13px] transition-colors duration-300 group-hover:text-[var(--gold)]"
            style={{ color: "var(--muted)" }}
          >
            Read Case Study
            <motion.span
              className="inline-block"
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  const [activeTag, setActiveTag] = useState("All");
  const headerRef  = useRef(null);
  const headerView = useInView(headerRef, { once: true, margin: "-60px" });

  const filtered = activeTag === "All"
    ? caseStudies
    : caseStudies.filter((c) =>
        c.tags.some((t) => t.toLowerCase().includes(activeTag.toLowerCase())) ||
        c.services.some((s) => s.toLowerCase().includes(activeTag.toLowerCase()))
      );

  return (
    <section className="px-8 md:px-12 py-24">
      {/* Header */}
      <div ref={headerRef} className="mb-12">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={headerView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] tracking-[2.5px] mb-4"
          style={{ color: "var(--gold)" }}
        >
          — CASE STUDIES
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headerView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display leading-none tracking-wide"
          style={{ fontSize: "clamp(42px, 5vw, 68px)" }}
        >
          PROVEN{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Results</em>
        </motion.h2>
      </div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={headerView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {allTags.map((tag) => {
          const active = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="px-4 py-2 text-[12px] tracking-wide border transition-all duration-200"
              style={{
                borderColor:     active ? "var(--gold)"  : "var(--border2)",
                backgroundColor: active ? "var(--gold)"  : "transparent",
                color:           active ? "#0d0e10"       : "var(--muted)",
              }}
            >
              {tag}
            </button>
          );
        })}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--border2)" }}
        >
          {filtered.map((study, i) => (
            <CaseCard key={study.slug} study={study} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p className="text-[15px] font-light" style={{ color: "var(--muted)" }}>
            No case studies match this filter yet.{" "}
            <button
              onClick={() => setActiveTag("All")}
              style={{ color: "var(--gold)" }}
            >
              View all →
            </button>
          </p>
        </motion.div>
      )}
    </section>
  );
}
