"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function AboutStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" className="px-8 md:px-12 py-24" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">

        {/* Left — sticky label + headline */}
        <div className="lg:sticky lg:top-28">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[11px] tracking-[2.5px] mb-4"
            style={{ color: "var(--gold)" }}
          >
            — OUR STORY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display leading-none tracking-wide"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            BUILT FOR THE
            <br />
            <em
              className="font-serif not-italic"
              style={{ color: "var(--gold)" }}
            >
              Full Picture
            </em>
          </motion.h2>

          {/* Decorative rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 h-px origin-left"
            style={{ backgroundColor: "var(--gold)", opacity: 0.35, width: "80px" }}
          />
        </div>

        {/* Right — story paragraphs */}
        <div className="space-y-8">
          {[
            {
              heading: "The Problem We Saw",
              body: "Most businesses work with a patchwork of agencies — one for SEO, another for social, a third for web development. The result is fragmented strategies, inconsistent messaging, and no single team accountable for the full picture.",
            },
            {
              heading: "Why We Built Nexu360",
              body: "We built Nexu360 to solve exactly that. By bringing every dimension of digital marketing under one roof — strategy, content, design, development, performance, and documentation — we eliminate silos and create a unified growth engine for every client we work with.",
            },
            {
              heading: "How We Work",
              body: "Every engagement starts with discovery. We take the time to deeply understand your business, your audience, and your goals. Then we build an integrated roadmap across whichever service pillars you need — and execute with full transparency from day one.",
            },
            {
              heading: "Where We Are Headed",
              body: "As AI continues to reshape search, content creation, and customer experience, we are evolving with it. AI-powered workflows, answer engine optimisation, and intelligent automation are already part of how we deliver — and we are just getting started.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className="pb-8 border-b"
              style={{ borderColor: "var(--border2)" }}
            >
              <h3
                className="font-serif text-lg mb-3"
                style={{ color: "var(--text)" }}
              >
                {item.heading}
              </h3>
              <p
                className="text-[14px] leading-[1.85] font-light"
                style={{ color: "var(--muted)" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
