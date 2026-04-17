"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { CaseStudy } from "@/lib/portfolio-data";

export default function CaseStudyResults({ study }: { study: CaseStudy }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="px-8 md:px-12 py-20"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="block text-[11px] tracking-[2.5px] mb-4"
          style={{ color: "var(--gold)" }}
        >
          — THE RESULTS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display leading-none tracking-wide mb-6"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
        >
          WHAT WE{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Delivered</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-[15px] leading-relaxed font-light max-w-3xl mb-14"
          style={{ color: "var(--muted)" }}
        >
          {study.results}
        </motion.p>

        {/* Metrics grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: "var(--border2)" }}
        >
          {study.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              className="px-8 py-10"
              style={{
                backgroundColor: i === 0 ? "var(--gold)" : "var(--bg2)",
              }}
            >
              <div
                className="font-display leading-none tracking-wide"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  color: i === 0 ? "#0d0e10" : "var(--gold)",
                }}
              >
                {m.value}
              </div>
              <div
                className="text-[13px] font-light mt-3 leading-snug"
                style={{ color: i === 0 ? "rgba(13,14,16,0.65)" : "var(--muted)" }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
