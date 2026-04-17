"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { num: "6+",   label: "Case Studies",             desc: "Documented, measurable client outcomes"     },
  { num: "8",    label: "Industries Served",         desc: "From SaaS to healthcare, retail to edtech"  },
  { num: "340%", label: "Avg Revenue Growth",        desc: "Across performance marketing engagements"   },
  { num: "61%",  label: "Avg Cost Reduction",        desc: "Support, acquisition, and operational cost" },
];

export default function PortfolioStats() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ backgroundColor: "var(--bg2)" }}>
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ backgroundColor: "var(--border2)" }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="px-8 py-10"
            style={{ backgroundColor: "var(--bg2)" }}
          >
            <div
              className="font-display leading-none tracking-wide"
              style={{ fontSize: "clamp(40px, 4vw, 64px)", color: "var(--gold)" }}
            >
              {s.num}
            </div>
            <div className="font-serif text-base mt-3 mb-1.5" style={{ color: "var(--text)" }}>
              {s.label}
            </div>
            <p className="text-[12px] leading-relaxed font-light" style={{ color: "var(--muted)" }}>
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
