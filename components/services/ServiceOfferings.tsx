"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Service } from "@/lib/services-data";

export default function ServiceOfferings({ service }: { service: Service }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div id="offerings">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span
          className="block text-[11px] tracking-[2.5px] mb-3"
          style={{ color: "var(--gold)" }}
        >
          — WHAT&apos;S INCLUDED
        </span>
        <h2
          className="font-display leading-none tracking-wide mb-2"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          OUR{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
            Offerings
          </em>
        </h2>
        <p
          className="text-[14px] leading-relaxed mt-3 max-w-xl font-light"
          style={{ color: "var(--muted)" }}
        >
          Everything included in our {service.title} service — delivered as
          an integrated package or as individual components.
        </p>
      </motion.div>

      {/* Cards */}
      <div ref={ref} className="mt-10 flex flex-col gap-px" style={{ backgroundColor: "var(--border2)" }}>
        {service.offerings.map((offering, i) => (
          <motion.div
            key={offering.title}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className="group flex gap-6 p-7 transition-colors duration-300"
            style={{ backgroundColor: "var(--bg)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg)")
            }
          >
            {/* Number */}
            <div
              className="font-display text-3xl leading-none flex-shrink-0 w-8 opacity-25 pt-1"
              style={{ color: "var(--gold)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div>
              <h3
                className="font-serif text-lg mb-2 group-hover:text-[var(--gold)] transition-colors duration-300"
                style={{ color: "var(--text)" }}
              >
                {offering.title}
              </h3>
              <p
                className="text-[13px] leading-relaxed font-light"
                style={{ color: "var(--muted)" }}
              >
                {offering.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
