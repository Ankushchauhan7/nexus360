"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const comparisons = [
  {
    topic: "Strategy",
    typical: "Each agency builds strategy for their own channel only — no shared vision.",
    nexu: "One integrated strategy covers all channels, all services, all goals — simultaneously.",
  },
  {
    topic: "Communication",
    typical: "Multiple contacts, multiple status calls, fragmented updates.",
    nexu: "One dedicated account lead. One weekly update. Full visibility always.",
  },
  {
    topic: "Brand Consistency",
    typical: "Messaging drifts between SEO, social, design, and content teams.",
    nexu: "Single brand voice and visual system applied consistently across every output.",
  },
  {
    topic: "Accountability",
    typical: "When results disappoint, agencies point fingers at each other.",
    nexu: "We own the full scope — there is no one else to blame, and no need to.",
  },
  {
    topic: "Speed",
    typical: "Inter-agency coordination adds weeks to every cross-channel project.",
    nexu: "Internal coordination means faster execution, faster iteration, faster results.",
  },
  {
    topic: "AI Readiness",
    typical: "Most agencies are still catching up to AI-driven search and content shifts.",
    nexu: "AI workflows and AEO/GEO are already part of how we deliver — not a future add-on.",
  },
];

export default function AboutWhy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why" className="px-8 md:px-12 py-24">
      {/* Header */}
      <div ref={ref} className="mb-14">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] tracking-[2.5px] mb-4"
          style={{ color: "var(--gold)" }}
        >
          — THE NEXUS360 DIFFERENCE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display leading-none tracking-wide"
          style={{ fontSize: "clamp(42px, 5vw, 72px)" }}
        >
          US vs{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
            The Rest
          </em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-[15px] leading-relaxed max-w-xl font-light"
          style={{ color: "var(--muted)" }}
        >
          Here is what working with a single integrated partner actually
          looks like — compared to the typical multi-agency model.
        </motion.p>
      </div>

      {/* Comparison table header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-[120px_1fr_1fr] gap-px mb-px"
        style={{ backgroundColor: "var(--border2)" }}
      >
        <div
          className="px-5 py-3 text-[11px] tracking-[2px]"
          style={{ backgroundColor: "var(--bg2)", color: "var(--muted)" }}
        >
          TOPIC
        </div>
        <div
          className="px-5 py-3 text-[11px] tracking-[2px]"
          style={{ backgroundColor: "var(--bg2)", color: "var(--muted)" }}
        >
          TYPICAL AGENCIES
        </div>
        <div
          className="px-5 py-3 text-[11px] tracking-[2px]"
          style={{ backgroundColor: "rgba(232,160,32,0.08)", color: "var(--gold)" }}
        >
          NEXUS360 ✓
        </div>
      </motion.div>

      {/* Rows */}
      <div
        className="grid grid-cols-1 gap-px"
        style={{ backgroundColor: "var(--border2)" }}
      >
        {comparisons.map((row, i) => (
          <motion.div
            key={row.topic}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.35 + i * 0.08 }}
            className="grid grid-cols-[120px_1fr_1fr] gap-px"
            style={{ backgroundColor: "var(--border2)" }}
          >
            {/* Topic */}
            <div
              className="flex items-center px-5 py-5 font-serif text-sm"
              style={{ backgroundColor: "var(--bg2)", color: "var(--text)" }}
            >
              {row.topic}
            </div>

            {/* Typical */}
            <div
              className="px-5 py-5 text-[13px] leading-relaxed font-light"
              style={{ backgroundColor: "var(--bg)", color: "var(--muted)" }}
            >
              {row.typical}
            </div>

            {/* Nexu360 */}
            <div
              className="px-5 py-5 text-[13px] leading-relaxed font-light"
              style={{
                backgroundColor: "rgba(232,160,32,0.04)",
                color: "var(--text)",
              }}
            >
              {row.nexu}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
