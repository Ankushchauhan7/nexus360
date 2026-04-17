"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/portfolio-data";

export default function CaseStudyCTA({ study }: { study: CaseStudy }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="px-8 md:px-12 py-20 text-center"
      style={{ backgroundColor: "var(--gold)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display leading-none tracking-wide"
        style={{ fontSize: "clamp(36px, 5vw, 72px)", color: "#0d0e10" }}
      >
        WANT RESULTS LIKE
        <br />
        {study.client.toUpperCase()}?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-md mx-auto mt-5 mb-10 text-base font-light"
        style={{ color: "rgba(13,14,16,0.60)" }}
      >
        Let&apos;s start with a free audit of your current setup. We&apos;ll show
        you exactly what&apos;s possible for your business.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <motion.a
          href="mailto:hello@nexu360.com"
          whileHover={{ backgroundColor: "#1a1c20" } as never}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 text-sm font-medium tracking-wide transition-colors duration-200"
          style={{ backgroundColor: "#0d0e10", color: "var(--gold)" }}
        >
          Get a Free Audit →
        </motion.a>
        <Link
          href="/portfolio"
          className="inline-block px-10 py-4 text-sm font-light tracking-wide border transition-colors duration-200"
          style={{ borderColor: "rgba(13,14,16,0.30)", color: "rgba(13,14,16,0.70)" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(13,14,16,0.6)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(13,14,16,0.3)"; }}
        >
          ← Back to Portfolio
        </Link>
      </motion.div>
    </section>
  );
}
