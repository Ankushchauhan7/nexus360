"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const contactDetails = [
  {
    icon: "✉",
    label: "Email Us",
    value: "support@nexus360degree.com",
    href: "mailto:support@nexus360degree.com",
    sub: "For general enquiries & project quotes",
  },
  {
    icon: "✉",
    label: "Careers",
    value: "support@nexus360degree.com",
    href: "mailto:support@nexus360degree.com",
    sub: "For job applications & partnerships",
  },
  {
    icon: "☎",
    label: "Call Us",
    value: "+91 9870115970",
    href: "tel:+919870115970",
    sub: "Mon–Fri, 9 AM – 6 PM IST",
  },
  {
    icon: "◎",
    label: "Our Office",
    value: "Delhi, Delhi, India",
    href: "#",
    sub: "Available for in-person meetings",
  },
];

const socials = [
  { label: "LinkedIn",  icon: "in",  href: "https://linkedin.com"  },
  { label: "X",         icon: "𝕏",   href: "https://x.com"         },
  { label: "Instagram", icon: "◻",   href: "https://instagram.com"  },
  { label: "YouTube",   icon: "▶",   href: "https://youtube.com"    },
];

const responsePromises = [
  { num: "< 1",  unit: "Business Day",   label: "Email response time"    },
  { num: "Free", unit: "",               label: "Initial digital audit"   },
  { num: "0",    unit: "Obligations",    label: "On your first call"      },
];

export default function ContactInfo() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <aside ref={ref} className="space-y-6">
      <div className="lg:sticky lg:top-24 space-y-6">

        {/* Response promises */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--border2)" }}
        >
          {responsePromises.map((p, i) => (
            <div
              key={p.label}
              className="py-5 px-4 text-center"
              style={{ backgroundColor: i === 0 ? "rgba(232,160,32,0.08)" : "var(--bg2)" }}
            >
              <div
                className="font-display text-2xl leading-none"
                style={{ color: "var(--gold)" }}
              >
                {p.num}
                {p.unit && (
                  <span className="text-[12px] block mt-0.5 font-sans font-light" style={{ color: "var(--muted)" }}>
                    {p.unit}
                  </span>
                )}
              </div>
              <div className="text-[11px] mt-2 leading-tight" style={{ color: "var(--muted)" }}>
                {p.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="border"
          style={{ borderColor: "var(--border2)", backgroundColor: "var(--bg2)" }}
        >
          <div className="px-6 pt-6 pb-2">
            <span className="text-[11px] tracking-[2px]" style={{ color: "var(--gold)" }}>
              CONTACT DETAILS
            </span>
          </div>
          {contactDetails.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-start gap-4 px-6 py-4 border-t transition-colors duration-200 group"
              style={{ borderColor: "var(--border2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg3)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <span
                className="text-lg flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:text-[var(--gold)]"
                style={{ color: "var(--muted)" }}
              >
                {item.icon}
              </span>
              <div>
                <div className="text-[11px] tracking-wide mb-0.5" style={{ color: "var(--muted)" }}>
                  {item.label}
                </div>
                <div
                  className="text-[14px] font-light transition-colors duration-200 group-hover:text-[var(--gold)]"
                  style={{ color: "var(--text)" }}
                >
                  {item.value}
                </div>
                <div className="text-[12px] mt-0.5" style={{ color: "var(--muted)" }}>
                  {item.sub}
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border p-6"
          style={{ borderColor: "var(--border2)", backgroundColor: "var(--bg2)" }}
        >
          <span className="block text-[11px] tracking-[2px] mb-4" style={{ color: "var(--gold)" }}>
            FOLLOW US
          </span>
          <div className="grid grid-cols-4 gap-px" style={{ backgroundColor: "var(--border2)" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 py-4 text-center transition-colors duration-200"
                style={{ backgroundColor: "var(--bg2)", color: "var(--muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg3)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg2)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                <span className="text-lg">{s.icon}</span>
                <span className="text-[10px] tracking-wide">{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Working hours */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border p-6"
          style={{ borderColor: "var(--border2)", backgroundColor: "var(--bg2)" }}
        >
          <span className="block text-[11px] tracking-[2px] mb-4" style={{ color: "var(--gold)" }}>
            WORKING HOURS
          </span>
          {[
            { day: "Monday – Friday", time: "9:00 AM – 6:00 PM IST" },
            { day: "Saturday",        time: "10:00 AM – 2:00 PM IST" },
            { day: "Sunday",          time: "Closed"                  },
          ].map((row) => (
            <div
              key={row.day}
              className="flex justify-between items-center py-2.5 border-b text-[13px]"
              style={{ borderColor: "var(--border2)" }}
            >
              <span className="font-light" style={{ color: "var(--muted)" }}>{row.day}</span>
              <span style={{ color: row.day === "Sunday" ? "var(--muted)" : "var(--text)" }}>
                {row.time}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </aside>
  );
}
