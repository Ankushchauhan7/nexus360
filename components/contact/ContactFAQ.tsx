"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "How quickly will you respond to my enquiry?",
    a: "We respond to all enquiries within one business day — usually sooner. For urgent projects, feel free to call us directly.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. We work with clients globally. All communication, delivery, and reporting are handled remotely with no difference in quality or service level.",
  },
  {
    q: "What does the free digital audit include?",
    a: "Our free audit covers a review of your website performance, SEO health, social media presence, and paid advertising setup (if applicable). You receive a written summary with prioritised recommendations — at no cost and with no obligation.",
  },
  {
    q: "Can I hire Nexus360 for just one service?",
    a: "Absolutely. While we are structured as a total digital partner, many clients engage us for a single service area and expand over time. There is no minimum scope requirement.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "We offer both monthly rolling engagements and longer-term retainers. We do not lock clients into contracts they are not comfortable with — results are what keep the relationship going.",
  },
  {
    q: "How do you handle billing and payments?",
    a: "We invoice monthly in advance for retainer services. Project-based work is billed on a 50% upfront, 50% on completion basis. We accept bank transfer, UPI, and major payment gateways.",
  },
  {
    q: "Will I have a dedicated point of contact?",
    a: "Yes. Every client is assigned a dedicated account lead who is your single point of contact for all communication, reporting, and strategy discussions.",
  },
  {
    q: "How do you measure and report on results?",
    a: "Every engagement includes a monthly performance report with metrics tied to your specific goals — traffic, leads, rankings, ROAS, or whatever matters most to your business. We also set up live dashboards where relevant.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b"
      style={{ borderColor: "var(--border2)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left"
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
            color:       open ? "var(--gold)" : "var(--muted)",
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
              className="pb-5 text-[13px] leading-relaxed font-light"
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

export default function ContactFAQ() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="px-8 md:px-12 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16" ref={ref}>

        {/* Left — sticky label */}
        <div className="lg:sticky lg:top-28 self-start">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[11px] tracking-[2.5px] mb-4"
            style={{ color: "var(--gold)" }}
          >
            — BEFORE YOU REACH OUT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display leading-none tracking-wide"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
          >
            COMMON
            <br />
            <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Questions</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[13px] leading-relaxed font-light"
            style={{ color: "var(--muted)" }}
          >
            Can&apos;t find your answer here?{" "}
            <a
              href="mailto:support@nexus360degree.com"
              className="transition-colors duration-200"
              style={{ color: "var(--gold)" }}
            >
              Email us directly.
            </a>
          </motion.p>
        </div>

        {/* Right — accordion */}
        <div className="border-t" style={{ borderColor: "var(--border2)" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
