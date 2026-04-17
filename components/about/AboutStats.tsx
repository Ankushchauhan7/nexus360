"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { num: "8",    suffix: "",   label: "Service Pillars",       desc: "Every core digital discipline under one roof"      },
  { num: "40",   suffix: "+",  label: "Core Offerings",        desc: "Granular capabilities across all service areas"    },
  { num: "360",  suffix: "°",  label: "Digital Coverage",      desc: "Complete end-to-end presence management"           },
  { num: "100",  suffix: "%",  label: "Transparent Reporting", desc: "Full visibility into every campaign and deliverable"},
];

export default function AboutStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="px-8 md:px-12 py-0"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ backgroundColor: "var(--border2)" }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.1 }}
            className="px-8 py-12"
            style={{ backgroundColor: "var(--bg2)" }}
          >
            {/* Number */}
            <div
              className="font-display leading-none tracking-wide"
              style={{
                fontSize: "clamp(48px, 5vw, 72px)",
                color: "var(--gold)",
              }}
            >
              {stat.num}
              <span className="text-[0.7em]">{stat.suffix}</span>
            </div>

            {/* Label */}
            <div
              className="font-serif text-base mt-3 mb-2"
              style={{ color: "var(--text)" }}
            >
              {stat.label}
            </div>

            {/* Description */}
            <p
              className="text-[12px] leading-relaxed font-light"
              style={{ color: "var(--muted)" }}
            >
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
