"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Service } from "@/lib/services-data";

export default function ServiceProcess({ service }: { service: Service }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <span
          className="block text-[11px] tracking-[2.5px] mb-3"
          style={{ color: "var(--gold)" }}
        >
          — HOW IT WORKS
        </span>
        <h2
          className="font-display leading-none tracking-wide"
          style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
        >
          OUR{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
            Process
          </em>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical connector line */}
        <div
          className="absolute left-[19px] top-6 bottom-6 w-px"
          style={{ backgroundColor: "var(--border2)" }}
          aria-hidden="true"
        />

        <div className="space-y-0">
          {service.process.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex gap-6 pb-8 relative"
            >
              {/* Circle number */}
              <div
                className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-display text-sm z-10 border"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--border)",
                  color: "var(--gold)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Step text */}
              <div className="pt-2">
                <p
                  className="text-[14px] font-light leading-relaxed"
                  style={{ color: "var(--text)" }}
                >
                  {step}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
