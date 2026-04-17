"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Service } from "@/lib/services-data";

export default function ServiceBenefits({ service }: { service: Service }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="p-10 border"
      style={{
        backgroundColor: "var(--bg2)",
        borderColor: "var(--border2)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span
          className="block text-[11px] tracking-[2.5px] mb-3"
          style={{ color: "var(--gold)" }}
        >
          — WHY IT MATTERS
        </span>
        <h2
          className="font-display leading-none tracking-wide mb-8"
          style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
        >
          KEY{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
            Benefits
          </em>
        </h2>
      </motion.div>

      <ul className="space-y-0">
        {service.benefits.map((benefit, i) => (
          <motion.li
            key={benefit}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex items-center gap-4 py-4 border-b"
            style={{ borderColor: "var(--border2)" }}
          >
            {/* Check mark */}
            <div
              className="w-5 h-5 flex-shrink-0 flex items-center justify-center border"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
                fontSize: "11px",
              }}
            >
              ✓
            </div>
            <span
              className="text-[14px] font-light"
              style={{ color: "var(--text)" }}
            >
              {benefit}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
