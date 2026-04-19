"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

export default function AuditCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="audit-cta"
      ref={ref}
      className="px-8 md:px-12 py-24"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-center py-16 px-10 border"
          style={{ borderColor: "var(--border2)" }}
        >
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="block text-[11px] tracking-[2.5px] mb-5"
              style={{ color: "var(--gold)" }}
            >
              — START WITH A FREE DIGITAL AUDIT
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display leading-none tracking-wide mb-6"
              style={{ fontSize: "clamp(34px, 4.5vw, 62px)" }}
            >
              NOT SURE WHERE
              <br />
              YOUR DIGITAL
              <br />
              PRESENCE{" "}
              <em
                className="font-serif not-italic"
                style={{ color: "var(--gold)" }}
              >
                Stands?
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] leading-relaxed font-light mb-8 max-w-xl"
              style={{ color: "var(--muted)" }}
            >
              We will show you — at no cost and with no obligation. Our free
              audit covers your website performance, SEO health, social media
              presence, and paid advertising setup. You receive a written
              summary with prioritised recommendations, delivered within three
              business days.
            </motion.p>

            {/* What the free audit covers */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                "Website performance review",
                "SEO health check",
                "Social media assessment",
                "Paid advertising review",
                "Written findings summary",
                "Priority recommendations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-[13px] font-light"
                  style={{ color: "var(--text)" }}
                >
                  <div
                    className="w-4 h-4 flex-shrink-0 flex items-center justify-center border text-[10px]"
                    style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                  >
                    ✓
                  </div>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            {/* Primary CTA */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="block py-5 text-[14px] font-medium tracking-wide text-center transition-colors duration-200"
              style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--gold2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--gold)")
              }
            >
              Request Your Free Digital Audit Today →
            </motion.a>

            {/* Email direct */}
            <a
              href="mailto:support@nexus360degree.com?subject=Free Digital Audit Request"
              className="block py-4 text-[13px] font-light tracking-wide text-center border transition-colors duration-200"
              style={{ borderColor: "var(--border2)", color: "var(--muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              Or email us at support@nexus360degree.com
            </a>

            {/* Trust signals */}
            <div
              className="grid grid-cols-3 gap-px mt-2"
              style={{ backgroundColor: "var(--border2)" }}
            >
              {[
                { num: "FREE",  label: "Initial audit"    },
                { num: "3",     label: "Business days"    },
                { num: "0",     label: "Obligations"      },
              ].map((s) => (
                <div
                  key={s.label}
                  className="px-4 py-4 text-center"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  <div
                    className="font-display text-xl leading-none"
                    style={{ color: "var(--gold)" }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-[11px] mt-1.5 tracking-wide"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Fine print */}
            <p
              className="text-[11px] text-center leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              No credit card required. No sales call unless you want one.
              <br />
              We respond within one business day.
            </p>
          </motion.div>
        </div>

        {/* Related services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <p
            className="text-[11px] tracking-[2px] mb-5"
            style={{ color: "var(--muted)" }}
          >
            EXPLORE OUR SERVICES THAT FOLLOW AN AUDIT
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Web Development",         href: "/services/web-development"         },
              { label: "SEO",                     href: "/services/seo"                     },
              { label: "Social Media Marketing",  href: "/services/social-media-marketing"  },
              { label: "Content Marketing",       href: "/services/content-marketing"       },
              { label: "Performance Marketing",   href: "/services/performance-marketing"   },
              { label: "AI-Powered Solutions",    href: "/services/ai-powered-solutions"    },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="px-4 py-2 text-[12px] tracking-wide border transition-colors duration-200"
                style={{ borderColor: "var(--border2)", color: "var(--muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border2)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
