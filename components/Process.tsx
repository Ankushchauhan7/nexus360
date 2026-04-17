"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We audit your current digital presence, understand your goals, and identify key opportunities.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "A custom roadmap is built across all relevant service pillars — integrated and prioritized.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Dedicated teams execute with precision, speed, and full transparency at every stage.",
  },
  {
    num: "04",
    title: "Measure",
    desc: "Every deliverable is tracked against agreed KPIs. Dashboards give you live visibility.",
  },
  {
    num: "05",
    title: "Optimise",
    desc: "Continuous refinement based on data ensures compounding improvement over time.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="px-8 md:px-12 py-24"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div className="text-center mb-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] tracking-[2.5px] mb-4"
          style={{ color: "var(--gold)" }}
        >
          — HOW WE WORK
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display leading-none tracking-wide"
          style={{ fontSize: "clamp(42px, 5vw, 68px)" }}
        >
          OUR{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
            Process
          </em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base leading-relaxed max-w-lg mx-auto mt-4 font-light"
          style={{ color: "var(--muted)" }}
        >
          A clear, proven five-step engagement model designed for momentum
          and measurable results.
        </motion.p>
      </div>

      {/* Steps */}
      <div ref={ref} className="relative mt-14">
        {/* Connecting line (desktop) */}
        <div
          className="absolute hidden md:block"
          style={{
            top: "32px",
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--gold), transparent)",
            opacity: 0.3,
          }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Circle */}
              <motion.div
                whileHover={{
                  borderColor: "var(--gold2)",
                  scale: 1.05,
                } as never}
                className="w-16 h-16 flex items-center justify-center mb-6 font-display text-2xl border relative z-10 transition-colors duration-300"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg2)",
                  color: "var(--gold)",
                }}
              >
                {step.num}
              </motion.div>

              <h3
                className="font-serif text-base mb-2"
                style={{ color: "var(--text)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[12px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
