"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import type { Service } from "@/lib/services-data";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b"
      style={{ borderColor: "var(--border2)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className="text-[14px] font-light leading-snug"
          style={{ color: "var(--text)" }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center border text-sm"
          style={{
            borderColor: open ? "var(--gold)" : "var(--border2)",
            color: open ? "var(--gold)" : "var(--muted)",
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-5 text-[13px] leading-relaxed font-light pl-0"
              style={{ color: "var(--muted)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServiceFAQ({ service }: { service: Service }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span
          className="block text-[11px] tracking-[2.5px] mb-3"
          style={{ color: "var(--gold)" }}
        >
          — COMMON QUESTIONS
        </span>
        <h2
          className="font-display leading-none tracking-wide"
          style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
        >
          FREQUENTLY{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
            Asked
          </em>
        </h2>
      </motion.div>

      <div className="border-t" style={{ borderColor: "var(--border2)" }}>
        {service.faqs.map((faq, i) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </div>
  );
}
