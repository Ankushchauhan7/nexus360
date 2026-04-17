"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function PortfolioCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="px-8 md:px-12 py-20"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-16 px-10 border"
        style={{ borderColor: "var(--border2)" }}
      >
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="block text-[11px] tracking-[2.5px] mb-4"
            style={{ color: "var(--gold)" }}
          >
            — YOUR CASE STUDY COULD BE NEXT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display leading-none tracking-wide"
            style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
          >
            LET&apos;S BUILD YOUR
            <br />
            <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Success Story</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[14px] leading-relaxed font-light"
            style={{ color: "var(--muted)" }}
          >
            Every case study started with a conversation. Tell us about your
            business and goals — we&apos;ll tell you exactly what&apos;s possible.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-col gap-4 min-w-[220px]"
        >
          <motion.a
            href="mailto:hello@nexu360.com"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="block px-8 py-4 text-[13px] font-medium tracking-wide text-center transition-colors duration-200"
            style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold2)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
          >
            Start with a Free Audit →
          </motion.a>
          <a
            href="/contact"
            className="block px-8 py-4 text-[13px] font-light tracking-wide text-center border transition-colors duration-200"
            style={{ borderColor: "var(--border2)", color: "var(--muted)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--muted)"; }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
