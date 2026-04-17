"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/portfolio-data";

export default function CaseStudyRelated({ studies }: { studies: CaseStudy[] }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  if (!studies.length) return null;

  return (
    <section ref={ref} className="px-8 md:px-12 py-20">
      <motion.span
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="block text-[11px] tracking-[2.5px] mb-4"
        style={{ color: "var(--gold)" }}
      >
        — MORE CASE STUDIES
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display leading-none tracking-wide mb-10"
        style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
      >
        RELATED{" "}
        <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Work</em>
      </motion.h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px"
        style={{ backgroundColor: "var(--border2)" }}
      >
        {studies.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              href={`/portfolio/${s.slug}`}
              className="group block p-8 h-full transition-colors duration-300"
              style={{ backgroundColor: "var(--bg)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg)")}
            >
              <div className="text-[11px] tracking-[1.5px] mb-2" style={{ color: "var(--gold)" }}>
                {s.industry.toUpperCase()}
              </div>
              <div className="font-serif text-sm mb-2" style={{ color: "var(--muted)" }}>{s.client}</div>
              <h3
                className="font-display text-xl tracking-wide mb-3 group-hover:text-[var(--gold)] transition-colors duration-300"
                style={{ color: "var(--text)" }}
              >
                {s.title.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-px mb-4" style={{ backgroundColor: "var(--border2)" }}>
                {s.metrics.slice(0, 2).map((m) => (
                  <div key={m.label} className="px-4 py-2 flex-1" style={{ backgroundColor: "var(--bg2)" }}>
                    <div className="font-display text-lg" style={{ color: s.accentColor }}>{m.value}</div>
                    <div className="text-[11px]" style={{ color: "var(--muted)" }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <span className="text-[13px] transition-colors duration-300 group-hover:text-[var(--gold)]" style={{ color: "var(--muted)" }}>
                Read case study →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
