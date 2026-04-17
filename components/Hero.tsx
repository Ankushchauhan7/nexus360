"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-12 pt-28 pb-20 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 hero-grid opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-200px",
          right: "-100px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(232,160,32,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl">
        {/* Tag */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 text-[12px] tracking-[1.5px] mb-8 border"
          style={{
            backgroundColor: "rgba(232,160,32,0.10)",
            borderColor: "var(--border)",
            color: "var(--gold)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
            style={{ backgroundColor: "var(--gold)" }}
          />
          TOTAL DIGITAL GROWTH PARTNER
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="visible"
          className="font-display leading-[0.92] tracking-wide"
          style={{ fontSize: "clamp(72px, 10vw, 140px)" }}
        >
          ONE PARTNER.
          <br />
          <em
            className="font-serif not-italic"
            style={{ color: "var(--gold)" }}
          >
            Every
          </em>{" "}
          CHANNEL.
          <br />
          TOTAL GROWTH.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="mt-8 text-[17px] leading-relaxed max-w-xl font-light"
          style={{ color: "var(--muted)" }}
        >
          Nexus360 connects every dimension of your digital presence — from
          search to social, design to documentation — into one seamless,
          high-performance growth engine.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mt-11"
        >
          <motion.a
            href="#services"
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
            Explore Services →
          </motion.a>

          <motion.a
            href="#why"
            whileHover={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3.5 text-sm font-light tracking-wide border transition-colors duration-200"
            style={{
              borderColor: "var(--border2)",
              color: "var(--text)",
            }}
          >
            Why Nexus360
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-12 mt-16 pt-10 border-t"
          style={{ borderColor: "var(--border2)" }}
        >
          {[
            { num: "8+",   label: "SERVICE PILLARS"  },
            { num: "40+",  label: "CORE OFFERINGS"   },
            { num: "360°", label: "DIGITAL COVERAGE" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="font-display text-5xl tracking-wide leading-none"
                style={{ color: "var(--gold)" }}
              >
                {stat.num}
              </div>
              <div
                className="text-[11px] tracking-widest mt-1.5"
                style={{ color: "var(--muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
