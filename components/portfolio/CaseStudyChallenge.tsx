// ─── CaseStudyChallenge ────────────────────────────────────────────────────
"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { CaseStudy } from "@/lib/portfolio-data";

export function CaseStudyChallenge({ study }: { study: CaseStudy }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <motion.span
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="block text-[11px] tracking-[2.5px] mb-4"
        style={{ color: "var(--gold)" }}
      >
        — THE CHALLENGE
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display leading-none tracking-wide mb-6"
        style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
      >
        WHAT WE{" "}
        <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Inherited</em>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="text-[15px] leading-[1.9] font-light"
        style={{ color: "var(--muted)" }}
      >
        {study.challenge}
      </motion.p>
    </div>
  );
}

// ─── CaseStudyApproach ─────────────────────────────────────────────────────
export function CaseStudyApproach({ study }: { study: CaseStudy }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <motion.span
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="block text-[11px] tracking-[2.5px] mb-4"
        style={{ color: "var(--gold)" }}
      >
        — OUR APPROACH
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display leading-none tracking-wide mb-10"
        style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
      >
        HOW WE{" "}
        <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Solved It</em>
      </motion.h2>

      <div className="space-y-px" style={{ backgroundColor: "var(--border2)" }}>
        {study.approach.map((section, i) => (
          <motion.div
            key={section.heading}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            className="p-8"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <div className="flex gap-5">
              <div
                className="font-display text-3xl leading-none flex-shrink-0 w-8 opacity-25 pt-1"
                style={{ color: "var(--gold)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-serif text-lg mb-3" style={{ color: "var(--text)" }}>
                  {section.heading}
                </h3>
                <p className="text-[14px] leading-[1.85] font-light" style={{ color: "var(--muted)" }}>
                  {section.body}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
