"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const reasons = [
  {
    icon: "◎",
    title: "Eliminate Guesswork Permanently",
    body:
      "Stop making decisions based on assumptions. A digital audit gives you a precise, evidence-based baseline — a scored assessment of your current performance — so that every decision going forward is informed and tied to a measurable outcome.",
  },
  {
    icon: "◈",
    title: "Stop Wasting Budget",
    body:
      "Most businesses are spending on channels that do not convert, running ads without accurate tracking, and optimising for metrics that do not move revenue. An audit identifies exactly where spend is being wasted — before another rupee is committed.",
  },
  {
    icon: "△",
    title: "Prioritise the Right Actions",
    body:
      "Not every fix delivers equal return. An audit surfaces and ranks issues by severity and impact — so your team and budget are focused on the actions that move the needle fastest, not the ones that feel urgent but change little.",
  },
  {
    icon: "◇",
    title: "Build a Compounding Strategy",
    body:
      "Digital growth compounds when every channel supports every other. An audit reveals where your channels are working against each other — inconsistent messaging, duplicate efforts, tracking gaps — and sets the foundation for an integrated strategy that builds on itself.",
  },
];

const withWithout = [
  {
    without: "Spending on ads without knowing which convert",
    with:    "Full attribution — every conversion tracked and attributed",
  },
  {
    without: "Publishing content that ranks for nothing",
    with:    "Content targeted to proven search demand",
  },
  {
    without: "Social media activity with no measurable impact",
    with:    "Platform strategy aligned to your actual audience",
  },
  {
    without: "SEO efforts undermined by technical site issues",
    with:    "Clean technical foundation that amplifies every SEO action",
  },
  {
    without: "No benchmark to measure improvement against",
    with:    "Clear baseline and KPI targets for every channel",
  },
];

export default function AuditWhy() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const tableRef  = useRef(null);
  const tableView = useInView(tableRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="px-8 md:px-12 py-24"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] tracking-[2.5px] mb-4"
          style={{ color: "var(--gold)" }}
        >
          — WHY IT MATTERS
        </motion.span>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display leading-none tracking-wide"
            style={{ fontSize: "clamp(36px, 4.5vw, 62px)" }}
          >
            THE CASE FOR
            <br />
            <em
              className="font-serif not-italic"
              style={{ color: "var(--gold)" }}
            >
              Auditing First
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[14px] leading-relaxed max-w-sm font-light"
            style={{ color: "var(--muted)" }}
          >
            A digital audit gives your entire strategy a solid, evidence-based
            foundation — so results compound over time rather than reset every
            quarter.
          </motion.p>
        </div>

        {/* Four reasons */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px mb-20"
          style={{ backgroundColor: "var(--border2)" }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.08 }}
              className="p-9 group cursor-default transition-colors duration-300"
              style={{ backgroundColor: "var(--bg2)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg2)")
              }
            >
              <div
                className="text-2xl mb-5 transition-transform duration-300 group-hover:scale-110 inline-block"
                style={{ color: "var(--gold)" }}
              >
                {r.icon}
              </div>
              <h3
                className="font-serif text-xl mb-4"
                style={{ color: "var(--text)" }}
              >
                {r.title}
              </h3>
              <p
                className="text-[13px] leading-[1.85] font-light"
                style={{ color: "var(--muted)" }}
              >
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before / After comparison */}
        <div ref={tableRef}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={tableView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display tracking-wide mb-8"
            style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
          >
            WITHOUT AN AUDIT vs{" "}
            <em
              className="font-serif not-italic"
              style={{ color: "var(--gold)" }}
            >
              With One
            </em>
          </motion.h3>

          {/* Table header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={tableView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-px mb-px"
            style={{ backgroundColor: "var(--border2)" }}
          >
            <div
              className="px-6 py-3 text-[11px] tracking-[2px]"
              style={{ backgroundColor: "var(--bg3)", color: "var(--muted)" }}
            >
              ✗  WITHOUT AN AUDIT
            </div>
            <div
              className="px-6 py-3 text-[11px] tracking-[2px]"
              style={{
                backgroundColor: "rgba(232,160,32,0.08)",
                color: "var(--gold)",
              }}
            >
              ✓  WITH A NEXU360 AUDIT
            </div>
          </motion.div>

          {/* Rows */}
          <div
            className="grid grid-cols-1 gap-px"
            style={{ backgroundColor: "var(--border2)" }}
          >
            {withWithout.map((row, i) => (
              <motion.div
                key={row.without}
                initial={{ opacity: 0, x: -20 }}
                animate={tableView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                className="grid grid-cols-2 gap-px"
                style={{ backgroundColor: "var(--border2)" }}
              >
                <div
                  className="px-6 py-5 text-[13px] leading-relaxed font-light"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--muted)",
                  }}
                >
                  {row.without}
                </div>
                <div
                  className="px-6 py-5 text-[13px] leading-relaxed font-light"
                  style={{
                    backgroundColor: "rgba(232,160,32,0.04)",
                    color: "var(--text)",
                  }}
                >
                  {row.with}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
