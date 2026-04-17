"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const points = [
  {
    num: "01",
    title: "Total Integration",
    desc: "All 8 service areas work as one unified system. No silos, no handoffs, no message loss. Your brand story stays consistent across every channel.",
  },
  {
    num: "02",
    title: "AI-Enhanced Delivery",
    desc: "We leverage AI tools for speed and scale, while keeping human expertise at the core of every strategy and deliverable.",
  },
  {
    num: "03",
    title: "Results-First Approach",
    desc: "Every service is tied to clear KPIs. We don't just deliver work — we deliver outcomes you can measure, report, and build on.",
  },
  {
    num: "04",
    title: "Future-Ready Strategy",
    desc: "From AI search optimization to next-gen content workflows, we keep your brand ahead of the curve — not catching up to it.",
  },
];

const metrics = [
  { num: "360°", label: "DIGITAL COVERAGE",  highlight: true  },
  { num: "40+",  label: "CORE OFFERINGS",    highlight: false },
  { num: "8",    label: "SERVICE PILLARS",   highlight: false },
  { num: "1",    label: "UNIFIED PARTNER",   highlight: false },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why"
      className="px-8 md:px-12 py-24"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[11px] tracking-[2.5px] mb-4"
            style={{ color: "var(--gold)" }}
          >
            — WHY NEXUS360
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display leading-none tracking-wide mb-8"
            style={{ fontSize: "clamp(38px, 4vw, 60px)" }}
          >
            THE{" "}
            <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
              Nexus360
            </em>
            <br />
            ADVANTAGE
          </motion.h2>

          <div className="flex flex-col">
            {points.map((point, i) => (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="flex gap-5 py-6 border-b group cursor-default"
                style={{ borderColor: "var(--border2)" }}
                whileHover={{ paddingLeft: "10px" } as never}
              >
                <div
                  className="font-display text-4xl leading-none flex-shrink-0 w-10 opacity-30"
                  style={{ color: "var(--gold)" }}
                >
                  {point.num}
                </div>
                <div>
                  <div
                    className="font-serif text-lg mb-1.5"
                    style={{ color: "var(--text)" }}
                  >
                    {point.title}
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — metric grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 gap-px"
          style={{ backgroundColor: "var(--border2)" }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-8"
              style={{
                backgroundColor: m.highlight ? "var(--gold)" : "var(--bg2)",
              }}
            >
              <div
                className="font-display text-5xl leading-none"
                style={{ color: m.highlight ? "#0d0e10" : "var(--gold)" }}
              >
                {m.num}
              </div>
              <div
                className="text-[11px] tracking-widest mt-2"
                style={{
                  color: m.highlight
                    ? "rgba(13,14,16,0.55)"
                    : "var(--muted)",
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
