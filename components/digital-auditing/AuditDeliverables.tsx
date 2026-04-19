"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const deliverables = [
  {
    num:    "01",
    icon:   "📋",
    title:  "The Audit Report",
    sub:    "Findings across all 7 domains",
    body:
      "A detailed findings document covering every audit domain, with each issue rated by severity — Critical, High, Medium, or Low — and supported by tool data and evidence. Nothing is opinion; everything is backed by data.",
    items: [
      "Scored assessment across 7 domains",
      "Severity-rated findings (Critical to Low)",
      "Tool-verified evidence for every issue",
      "Section notes and observations",
      "Sign-off and next steps",
    ],
    highlight: false,
  },
  {
    num:    "02",
    icon:   "✅",
    title:  "The Priority Action Plan",
    sub:    "What to do — in what order",
    body:
      "A clear, prioritised list of recommended actions ranked by impact and effort — so you know exactly what to fix first, what to delegate, and what can wait. Includes a 90-day implementation timeline and KPIs for every action.",
    items: [
      "Every action scored for Impact & Effort",
      "Quick Wins identified and flagged",
      "Owner assigned for each action",
      "90-day phased timeline",
      "KPI / success metric per action",
    ],
    highlight: true,
  },
  {
    num:    "03",
    icon:   "📊",
    title:  "The Benchmark Dashboard",
    sub:    "Monthly KPI tracking workbook",
    body:
      "A live Excel tracking workbook that records your baseline metrics and monitors improvement month by month across all 7 audit domains — giving you full visibility into progress over time and a single source of truth for reporting.",
    items: [
      "10-sheet Excel workbook",
      "Baseline metrics captured at audit",
      "Monthly actuals tracked vs target",
      "Automatic traffic-light status",
      "Executive summary for client reporting",
    ],
    highlight: false,
  },
];

export default function AuditDeliverables() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-8 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[11px] tracking-[2.5px] mb-4"
            style={{ color: "var(--gold)" }}
          >
            — WHAT YOU RECEIVE
          </motion.span>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display leading-none tracking-wide"
              style={{ fontSize: "clamp(36px, 4.5vw, 62px)" }}
            >
              THREE{" "}
              <em
                className="font-serif not-italic"
                style={{ color: "var(--gold)" }}
              >
                Deliverables
              </em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[14px] leading-relaxed max-w-xs font-light"
              style={{ color: "var(--muted)" }}
            >
              Every Nexu360 audit produces three structured documents — designed
              to be used together as a complete growth programme.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--border2)" }}
        >
          {deliverables.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="relative flex flex-col p-9"
              style={{
                backgroundColor: d.highlight ? "var(--gold)" : "var(--bg)",
              }}
            >
              {/* Top accent */}
              {!d.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: "var(--gold)" }}
                />
              )}

              {/* Number */}
              <div
                className="font-display text-[13px] tracking-[2px] mb-5 opacity-40"
                style={{ color: d.highlight ? "#0d0e10" : "var(--gold)" }}
              >
                {d.num}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-4">{d.icon}</div>

              {/* Title */}
              <h3
                className="font-serif text-2xl leading-snug mb-1"
                style={{ color: d.highlight ? "#0d0e10" : "var(--text)" }}
              >
                {d.title}
              </h3>

              {/* Sub */}
              <div
                className="text-[12px] tracking-wide mb-5"
                style={{
                  color: d.highlight
                    ? "rgba(13,14,16,0.6)"
                    : "var(--muted)",
                }}
              >
                {d.sub}
              </div>

              {/* Body */}
              <p
                className="text-[13px] leading-[1.8] font-light mb-7"
                style={{
                  color: d.highlight
                    ? "rgba(13,14,16,0.72)"
                    : "var(--muted)",
                }}
              >
                {d.body}
              </p>

              {/* Items */}
              <ul className="mt-auto space-y-2.5">
                {d.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[12px] leading-snug"
                    style={{
                      color: d.highlight
                        ? "rgba(13,14,16,0.75)"
                        : "var(--text)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                      style={{
                        backgroundColor: d.highlight
                          ? "#0d0e10"
                          : "var(--gold)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-px px-9 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{
            backgroundColor: "var(--bg2)",
            borderColor: "var(--border2)",
          }}
        >
          <p
            className="text-[13px] font-light"
            style={{ color: "var(--muted)" }}
          >
            All three deliverables are included with every full Nexu360
            engagement. The free initial audit includes the findings summary
            and top-priority recommendations.
          </p>
          <a
            href="#audit-cta"
            className="flex-shrink-0 px-6 py-2.5 text-[13px] font-medium tracking-wide border transition-colors duration-200"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold)";
              e.currentTarget.style.color = "#0d0e10";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Get Started →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
