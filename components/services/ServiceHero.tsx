"use client";

import { motion } from "motion/react";
import type { Service } from "@/lib/services-data";
import Link from "next/link";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section
      className="relative min-h-[60vh] flex flex-col justify-end px-8 md:px-12 pt-32 pb-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 hero-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px",
          right: "-80px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(232,160,32,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[12px] tracking-wide mb-8"
          style={{ color: "var(--muted)" }}
        >
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-[var(--gold)]"
          >
            Home
          </Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <Link
            href="/#services"
            className="transition-colors duration-200 hover:text-[var(--gold)]"
          >
            Services
          </Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <span style={{ color: "var(--gold)" }}>{service.title}</span>
        </motion.div>

        {/* Service number + icon */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-4 mb-6"
        >
          <span
            className="font-display text-[13px] tracking-[3px] opacity-40"
            style={{ color: "var(--gold)" }}
          >
            {service.num}
          </span>
          <span className="text-4xl">{service.icon}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display leading-none tracking-wide mb-6"
          style={{ fontSize: "clamp(52px, 7vw, 100px)" }}
        >
          {service.title.toUpperCase()}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif italic text-xl md:text-2xl mb-6"
          style={{ color: "var(--gold)" }}
        >
          {service.tagline}
        </motion.p>

        {/* Hero description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="text-base md:text-lg leading-relaxed max-w-2xl font-light"
          style={{ color: "var(--muted)" }}
        >
          {service.heroDesc}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200"
            style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--gold2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--gold)")
            }
          >
            Get a Free Quote →
          </motion.a>

          <motion.a
            href="/#services"
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3.5 text-sm font-light tracking-wide border transition-colors duration-200"
            style={{ borderColor: "var(--border2)", color: "var(--text)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border2)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            ← All Services
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "var(--border2)" }}
      />
    </section>
  );
}
