"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

const services = [
  { icon: "⚡", title: "Web Development",         slug: "web-development"         },
  { icon: "🔍", title: "SEO",                      slug: "seo"                     },
  { icon: "📣", title: "Social Media Marketing",   slug: "social-media-marketing"  },
  { icon: "✍️", title: "Content Marketing",        slug: "content-marketing"       },
  { icon: "🎨", title: "Creative Design",          slug: "creative-design"         },
  { icon: "📄", title: "Technical Documentation",  slug: "technical-documentation" },
  { icon: "📊", title: "Performance Marketing",    slug: "performance-marketing"   },
  { icon: "🤖", title: "AI-Powered Solutions",     slug: "ai-powered-solutions"    },
  { icon: "🏛️", title: "GeM & Govt Procurement",   slug: "gem-government-procurement" },
  
];

export default function ContactServices() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="px-8 md:px-12 py-20"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <span className="block text-[11px] tracking-[2.5px] mb-3" style={{ color: "var(--gold)" }}>
              — NOT SURE WHERE TO START?
            </span>
            <h2
              className="font-display leading-none tracking-wide"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              EXPLORE OUR{" "}
              <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>Services</em>
            </h2>
          </div>
          <p
            className="text-[14px] leading-relaxed max-w-xs font-light"
            style={{ color: "var(--muted)" }}
          >
            Browse each service area to understand exactly what we offer before getting in touch.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px"
          style={{ backgroundColor: "var(--border2)" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="flex flex-col items-center text-center py-8 px-3 transition-colors duration-200 group"
                style={{ backgroundColor: "var(--bg2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg3)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg2)")}
              >
                <span className="text-2xl mb-3">{s.icon}</span>
                <span
                  className="text-[12px] leading-snug transition-colors duration-200 group-hover:text-[var(--gold)]"
                  style={{ color: "var(--muted)" }}
                >
                  {s.title}
                </span>
                <span
                  className="mt-2 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "var(--gold)" }}
                >
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
