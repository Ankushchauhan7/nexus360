"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Service } from "@/lib/services-data";
import Link from "next/link";

export default function ServiceCTA({ service }: { service: Service }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="contact"
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
        READY TO START WITH
        <br />
        {service.title.toUpperCase()}?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-md mx-auto mt-5 mb-10 text-base leading-relaxed font-light"
        style={{ color: "rgba(13,14,16,0.60)" }}
      >
        Let&apos;s talk about your goals. We&apos;ll put together a tailored
        plan — and start with a free audit of your current setup.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.a
          href="mailto:hello@nexus360.com"
          whileHover={{ backgroundColor: "#1a1c20" } as never}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 text-sm font-medium tracking-wide transition-colors duration-200"
          style={{ backgroundColor: "#0d0e10", color: "var(--gold)" }}
        >
          Get a Free Quote →
        </motion.a>

        <Link
          href="/#services"
          className="inline-block px-10 py-4 text-sm font-light tracking-wide border transition-colors duration-200"
          style={{
            borderColor: "rgba(13,14,16,0.3)",
            color: "rgba(13,14,16,0.7)",
          }}
        >
          View All Services
        </Link>
      </motion.div>
    </section>
  );
}
