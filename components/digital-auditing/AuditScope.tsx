"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const domains = [
  {
    num:   "01",
    icon:  "⚡",
    title: "Website & Technical Performance",
    body:
      "Your website's speed, stability, and technical health — including Core Web Vitals, mobile performance, crawlability, broken links, and page load times. Technical issues here quietly undermine every other digital effort.",
    tags: ["Core Web Vitals", "PageSpeed", "Mobile-First", "Crawlability"],
  },
  {
    num:   "02",
    icon:  "🔍",
    title: "Search Engine Optimisation",
    body:
      "How visible your business is on Google and other search engines — covering on-page optimisation, keyword rankings, backlink authority, local search presence, and emerging AI search visibility (AEO/GEO).",
    tags: ["On-Page SEO", "Backlinks", "Local SEO", "AI Search (AEO/GEO)"],
  },
  {
    num:   "03",
    icon:  "✍️",
    title: "Content Quality & Strategy",
    body:
      "Whether your content is targeted, current, and built to rank — including blog health, keyword alignment, content gaps versus competitors, and the overall strength of your messaging across every channel.",
    tags: ["Content Gaps", "Keyword Alignment", "Blog Health", "Funnel Coverage"],
  },
  {
    num:   "04",
    icon:  "📣",
    title: "Social Media Presence",
    body:
      "The consistency, reach, and engagement quality of your brand across all active social platforms — including profile completeness, content strategy, audience growth, and paid social performance.",
    tags: ["Profile Completeness", "Engagement Rate", "Paid Social", "Audience Growth"],
  },
  {
    num:   "05",
    icon:  "📊",
    title: "Performance Marketing & Analytics",
    body:
      "The efficiency of your paid advertising and the accuracy of your tracking — covering Google Ads structure, Meta campaign performance, conversion tracking, ROAS, and analytics setup.",
    tags: ["Google Ads", "Meta Ads", "GA4 Setup", "ROAS & CPL"],
  },
  {
    num:   "06",
    icon:  "🎨",
    title: "Brand & Creative Consistency",
    body:
      "How cohesive and professional your brand appears across all channels — including logo usage, visual identity, tone of voice, and online reputation through ratings and reviews.",
    tags: ["Visual Identity", "Brand Voice", "Reputation", "Reviews"],
  },
  {
    num:   "07",
    icon:  "◈",
    title: "Competitive Benchmarking",
    body:
      "How your digital presence compares against your top competitors — identifying where they outrank you, what keywords they own, and what gaps represent your fastest growth opportunities.",
    tags: ["Keyword Gaps", "Authority Gap", "Content Gap", "Ad Intelligence"],
  },
];

function DomainCard({
  domain,
  index,
}: {
  domain: (typeof domains)[0];
  index: number;
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.08,
      }}
      className="group relative overflow-hidden p-8 border transition-colors duration-300 cursor-default"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border2)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--bg2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--bg)")
      }
    >
      {/* Gold top-line reveal on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 service-card-line"
        style={{ backgroundColor: "var(--gold)" }}
      />

      {/* Number */}
      <div
        className="font-display text-[13px] tracking-[2px] mb-4 opacity-40"
        style={{ color: "var(--gold)" }}
      >
        {domain.num}
      </div>

      {/* Icon */}
      <div className="text-3xl mb-4">{domain.icon}</div>

      {/* Title */}
      <h3
        className="font-serif text-xl leading-snug mb-4"
        style={{ color: "var(--text)" }}
      >
        {domain.title}
      </h3>

      {/* Body */}
      <p
        className="text-[13px] leading-[1.8] font-light mb-6"
        style={{ color: "var(--muted)" }}
      >
        {domain.body}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {domain.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[11px] tracking-wide border"
            style={{
              borderColor: "var(--border2)",
              color: "var(--muted)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function AuditScope() {
  const headerRef = useRef(null);
  const inView    = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="audit-scope" className="px-8 md:px-12 py-24">
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto mb-14">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] tracking-[2.5px] mb-4"
          style={{ color: "var(--gold)" }}
        >
          — WHAT A DIGITAL AUDIT COVERS
        </motion.span>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display leading-none tracking-wide"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}
          >
            7 AUDIT{" "}
            <em
              className="font-serif not-italic"
              style={{ color: "var(--gold)" }}
            >
              Domains
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[14px] leading-relaxed max-w-sm font-light"
            style={{ color: "var(--muted)" }}
          >
            Every dimension of your digital presence, examined with
            precision — nothing assumed, everything evidenced.
          </motion.p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
           style={{ backgroundColor: "var(--border2)" }}>
        {domains.map((d, i) => (
          <DomainCard key={d.num} domain={d} index={i} />
        ))}

        {/* 8th cell — summary */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="p-8 flex flex-col justify-between"
          style={{ backgroundColor: "var(--gold)" }}
        >
          <div>
            <div
              className="font-display text-5xl leading-none mb-4"
              style={{ color: "#0d0e10" }}
            >
              ALL 7
            </div>
            <h3
              className="font-display text-2xl tracking-wide mb-4"
              style={{ color: "#0d0e10" }}
            >
              DOMAINS.
              <br />
              ONE AUDIT.
            </h3>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "rgba(13,14,16,0.65)" }}
            >
              Every Nexu360 audit covers all seven domains simultaneously —
              so you see the full picture, not just one slice of it.
            </p>
          </div>
          <a
            href="#audit-cta"
            className="inline-block mt-8 px-6 py-3 text-[13px] font-medium tracking-wide text-center transition-colors duration-200"
            style={{ backgroundColor: "#0d0e10", color: "var(--gold)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1a1c20")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0d0e10")
            }
          >
            Get Your Free Audit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
