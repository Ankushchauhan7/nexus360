"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function AuditWhat() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="px-8 md:px-12 py-24"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left — text */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[11px] tracking-[2.5px] mb-4"
            style={{ color: "var(--gold)" }}
          >
            — WHAT IT IS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display leading-none tracking-wide mb-8"
            style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
          >
            WHAT IS A
            <br />
            <em
              className="font-serif not-italic"
              style={{ color: "var(--gold)" }}
            >
              Digital Audit?
            </em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p
              className="text-[15px] leading-[1.85] font-light"
              style={{ color: "var(--text)" }}
            >
              A digital audit is a systematic, comprehensive review of your
              entire online presence — examining every channel, platform, and
              touchpoint through which your business is found, experienced,
              and judged by potential customers.
            </p>
            <p
              className="text-[15px] leading-[1.85] font-light"
              style={{ color: "var(--muted)" }}
            >
              Think of it as a health check for your digital ecosystem. Just as
              a financial audit reveals the true state of a company's books, a
              digital audit reveals the true state of your online performance —
              what is working, what is broken, and where your biggest
              opportunities for growth are hiding.
            </p>
            <p
              className="text-[15px] leading-[1.85] font-light"
              style={{ color: "var(--muted)" }}
            >
              At Nexu360, every client engagement begins with a digital audit.
              It is the foundation on which every strategy, every
              recommendation, and every action we take is built.
            </p>
          </motion.div>
        </div>

        {/* Right — analogy card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="relative p-10 border"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border2)",
            }}
          >
            {/* Gold top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: "var(--gold)" }}
            />

            <div
              className="font-display text-6xl leading-none mb-6"
              style={{ color: "var(--gold)", opacity: 0.15 }}
              aria-hidden="true"
            >
              ◎
            </div>

            <blockquote
              className="font-serif italic text-xl md:text-2xl leading-relaxed mb-8"
              style={{ color: "var(--text)" }}
            >
              &ldquo;Most businesses investing in digital marketing are doing
              so without a clear picture of where they actually stand.&rdquo;
            </blockquote>

            <p
              className="text-[14px] leading-relaxed font-light"
              style={{ color: "var(--muted)" }}
            >
              They run ads without accurate conversion tracking. They publish
              content that targets the wrong keywords. They spend on social
              media without knowing which platforms their audience actually
              uses. A digital audit eliminates that guesswork — permanently.
            </p>

            {/* Bottom stat */}
            <div
              className="flex items-center gap-6 mt-8 pt-8 border-t"
              style={{ borderColor: "var(--border2)" }}
            >
              <div>
                <div
                  className="font-display text-3xl leading-none"
                  style={{ color: "var(--gold)" }}
                >
                  FREE
                </div>
                <div
                  className="text-[11px] tracking-widest mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  INITIAL AUDIT
                </div>
              </div>
              <div
                className="w-px self-stretch"
                style={{ backgroundColor: "var(--border2)" }}
              />
              <p
                className="text-[13px] leading-relaxed font-light"
                style={{ color: "var(--muted)" }}
              >
                Every Nexu360 engagement begins with a no-obligation free
                audit — delivered within three business days.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
