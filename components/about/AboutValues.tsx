"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const values = [
  {
    icon: "◎",
    title: "Total Accountability",
    desc: "We own the outcome, not just the output. Every deliverable is tied to a business goal — and we take full responsibility for results.",
  },
  {
    icon: "⟡",
    title: "Radical Transparency",
    desc: "No hidden fees, no black-box reporting, no vague metrics. You see exactly what we do, why we do it, and what it delivers.",
  },
  {
    icon: "◈",
    title: "Integration Over Isolation",
    desc: "Every service we provide is designed to work in concert with the others. Siloed thinking is the enemy of effective digital strategy.",
  },
  {
    icon: "△",
    title: "Quality Without Compromise",
    desc: "We would rather do fewer things exceptionally than many things adequately. Every brief gets our best thinking — always.",
  },
  {
    icon: "◇",
    title: "Future-Forward Thinking",
    desc: "We stay at the leading edge of digital — from AI search to emerging platforms — so our clients are always ahead, never catching up.",
  },
  {
    icon: "○",
    title: "Long-Term Partnership",
    desc: "We do not chase quick wins at the expense of sustainable growth. We build lasting strategies and relationships that compound over time.",
  },
];

export default function AboutValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="values" className="px-8 md:px-12 py-24">
      {/* Header */}
      <div ref={ref} className="mb-14">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] tracking-[2.5px] mb-4"
          style={{ color: "var(--gold)" }}
        >
          — WHAT DRIVES US
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display leading-none tracking-wide"
          style={{ fontSize: "clamp(42px, 5vw, 72px)" }}
        >
          OUR CORE{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
            Values
          </em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-[15px] leading-relaxed max-w-xl font-light"
          style={{ color: "var(--muted)" }}
        >
          These are not corporate platitudes — they are the principles that
          guide every decision, every brief, and every client relationship at
          Nexu360.
        </motion.p>
      </div>

      {/* Values grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ backgroundColor: "var(--border2)" }}
      >
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className="group relative p-9 transition-colors duration-300 cursor-default overflow-hidden"
            style={{ backgroundColor: "var(--bg)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg)")
            }
          >
            {/* Hover top-bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 service-card-line"
              style={{ backgroundColor: "var(--gold)" }}
            />

            {/* Icon */}
            <motion.div
              className="text-3xl mb-5 transition-transform duration-300"
              style={{ color: "var(--gold)" }}
              whileHover={{ scale: 1.1 }}
            >
              {v.icon}
            </motion.div>

            {/* Title */}
            <h3
              className="font-serif text-xl mb-3 leading-snug"
              style={{ color: "var(--text)" }}
            >
              {v.title}
            </h3>

            {/* Description */}
            <p
              className="text-[13px] leading-[1.8] font-light"
              style={{ color: "var(--muted)" }}
            >
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
