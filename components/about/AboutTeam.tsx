"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const team = [
  {
    initials: "AK",
    name: "Arjun Krishnan",
    role: "Founder & Strategy Director",
    bio: "15 years in digital marketing across B2B and B2C. Former head of growth at two scale-ups. Obsessed with integrated strategy and measurable outcomes.",
    expertise: ["Growth Strategy", "SEO", "Performance Marketing"],
    color: "#e8a020",
  },
  {
    initials: "PM",
    name: "Priya Menon",
    role: "Head of Content & Communications",
    bio: "Award-winning content strategist with a background in journalism and technical writing. Leads all editorial and content marketing programmes.",
    expertise: ["Content Strategy", "Technical Writing", "Email Marketing"],
    color: "#c47d10",
  },
  {
    initials: "RS",
    name: "Rahul Sharma",
    role: "Lead Web Developer",
    bio: "Full-stack developer specialising in Next.js, React, and performance-first architecture. Passionate about Core Web Vitals and developer experience.",
    expertise: ["Next.js", "React", "E-commerce Dev"],
    color: "#a06010",
  },
  {
    initials: "DT",
    name: "Divya Thomas",
    role: "Creative Design Lead",
    bio: "Brand identity designer and visual communicator. Has led design for 80+ brands across tech, finance, and consumer sectors.",
    expertise: ["Brand Identity", "Presentation Design", "Visual Systems"],
    color: "#e8a020",
  },
  {
    initials: "KN",
    name: "Kavya Nair",
    role: "SEO & AI Search Specialist",
    bio: "Technical SEO expert with a focus on AI-driven search (AEO/GEO). Keeps the team ahead of every algorithm shift and platform change.",
    expertise: ["Technical SEO", "AEO/GEO", "Analytics"],
    color: "#c47d10",
  },
  {
    initials: "SR",
    name: "Siddharth Rao",
    role: "Social Media & Paid Campaigns",
    bio: "Performance marketer and social media strategist. Manages six-figure ad budgets with a relentless focus on cost-per-result.",
    expertise: ["Paid Social", "Google Ads", "Campaign Strategy"],
    color: "#a06010",
  },
];

export default function AboutTeam() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="team"
      className="px-8 md:px-12 py-24"
      style={{ backgroundColor: "var(--bg2)" }}
    >
      {/* Header */}
      <div ref={ref} className="mb-14">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] tracking-[2.5px] mb-4"
          style={{ color: "var(--gold)" }}
        >
          — THE PEOPLE BEHIND IT
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display leading-none tracking-wide"
          style={{ fontSize: "clamp(42px, 5vw, 72px)" }}
        >
          MEET THE{" "}
          <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
            Team
          </em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-[15px] leading-relaxed max-w-xl font-light"
          style={{ color: "var(--muted)" }}
        >
          A lean team of senior specialists — each an expert in their domain,
          all working together as one integrated unit.
        </motion.p>
      </div>

      {/* Team grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ backgroundColor: "var(--border2)" }}
      >
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="group p-9 transition-colors duration-300 cursor-default"
            style={{ backgroundColor: "var(--bg2)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg2)")
            }
          >
            {/* Avatar */}
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center font-display text-xl mb-6 border"
              style={{
                backgroundColor: "rgba(232,160,32,0.10)",
                borderColor: member.color,
                color: member.color,
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {member.initials}
            </motion.div>

            {/* Name & role */}
            <h3
              className="font-serif text-xl leading-snug mb-1"
              style={{ color: "var(--text)" }}
            >
              {member.name}
            </h3>
            <div
              className="text-[12px] tracking-wide mb-4"
              style={{ color: "var(--gold)" }}
            >
              {member.role}
            </div>

            {/* Bio */}
            <p
              className="text-[13px] leading-[1.8] font-light mb-6"
              style={{ color: "var(--muted)" }}
            >
              {member.bio}
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] tracking-wide border"
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
        ))}
      </div>

      {/* Hiring note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-px p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t"
        style={{
          backgroundColor: "var(--bg2)",
          borderColor: "var(--border2)",
        }}
      >
        <div>
          <h4
            className="font-serif text-lg mb-1"
            style={{ color: "var(--text)" }}
          >
            We&apos;re always looking for exceptional talent.
          </h4>
          <p className="text-[13px] font-light" style={{ color: "var(--muted)" }}>
            Senior specialists in SEO, content, design, and development — we want to hear from you.
          </p>
        </div>
        <motion.a
          href="mailto:support@nexus360degree.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 px-7 py-3 text-[13px] font-medium tracking-wide border transition-colors duration-200"
          style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--gold)";
            e.currentTarget.style.color = "#0d0e10";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--gold)";
          }}
        >
          View Open Roles →
        </motion.a>
      </motion.div>
    </section>
  );
}
