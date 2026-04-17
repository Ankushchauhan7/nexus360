"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="px-8 md:px-12 py-20 text-center"
      style={{ backgroundColor: "var(--gold)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display leading-none tracking-wide"
        style={{ fontSize: "clamp(42px, 6vw, 88px)", color: "#0d0e10" }}
      >
        READY TO GROW
        <br />
        AT 360°?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-md mx-auto mt-5 mb-10 text-base leading-relaxed"
        style={{ color: "rgba(13,14,16,0.60)" }}
      >
        Let&apos;s start with a free digital audit. We&apos;ll show you exactly
        where your biggest growth opportunities are hiding.
      </motion.p>

      <motion.a
        href="mailto:hello@nexus360.com"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
        whileHover={{ backgroundColor: "#1a1c20" } as never}
        whileTap={{ scale: 0.97 }}
        className="inline-block px-10 py-4 text-sm font-medium tracking-wide transition-colors duration-200"
        style={{ backgroundColor: "#0d0e10", color: "var(--gold)" }}
      >
        Get Your Free Audit Today →
      </motion.a>
    </section>
  );
}
