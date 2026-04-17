"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const industries = [
  { icon: "💻", name: "Technology & SaaS"     },
  { icon: "🛒", name: "E-commerce & Retail"   },
  { icon: "🏥", name: "Healthcare & Wellness"  },
  { icon: "🏦", name: "Finance & FinTech"      },
  { icon: "🎓", name: "Education & EdTech"     },
  { icon: "🏗️", name: "Real Estate & Infra"   },
  { icon: "🚀", name: "Startups & Scale-ups"   },
  { icon: "🏢", name: "B2B Enterprises"        },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="industries" className="px-8 md:px-12 py-24">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="block text-[11px] tracking-[2.5px] mb-4"
        style={{ color: "var(--gold)" }}
      >
        — SECTORS WE SERVE
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display leading-none tracking-wide"
        style={{ fontSize: "clamp(42px, 5vw, 68px)" }}
      >
        INDUSTRIES{" "}
        <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
          We
        </em>{" "}
        POWER
      </motion.h2>

      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-px mt-12"
        style={{ backgroundColor: "var(--border2)" }}
      >
        {industries.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ backgroundColor: "var(--bg3)" } as never}
            className="flex flex-col items-center text-center py-7 px-4 cursor-default transition-colors duration-300"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <div
              className="text-[12px] tracking-wide leading-snug"
              style={{ color: "var(--muted)" }}
            >
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
