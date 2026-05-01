"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

const services = [
  { num:"01", icon:"⚡", title:"Web Development",              slug:"web-development",          desc:"High-performance websites and web apps built for speed, conversion, and scale.",               items:["Business & Corporate Websites","E-commerce Development","Web App Development","Maintenance & Optimization","Mobile-Responsive Design"] },
  { num:"02", icon:"🔍", title:"Search Engine Optimisation",   slug:"seo",                      desc:"Be found first — on Google, and in AI-generated answers across the web.",                     items:["Technical SEO Audits","On-Page Optimization","Off-Page SEO & Link Building","Local SEO","AI Search Optimization (AEO/GEO)"] },
  { num:"03", icon:"📣", title:"Social Media Marketing",       slug:"social-media-marketing",   desc:"Build audiences, spark conversations, and convert followers into customers.",                  items:["Strategy & Calendar Planning","Platform Management","Organic Content Creation","Paid Social Advertising","Analytics & Reporting"] },
  { num:"04", icon:"✍️", title:"Content Marketing",           slug:"content-marketing",         desc:"Strategic content that educates, ranks on search, and drives real conversions.",              items:["Content Strategy Development","Blog & Article Writing","Technical Content & White Papers","Email Marketing Campaigns","AI-Assisted Workflows"] },
  { num:"05", icon:"🎨", title:"Creative Design",              slug:"creative-design",          desc:"Visual communication that earns attention — from brand identity to pitch decks.",             items:["Brand Identity Design","Marketing Collateral & Brochures","Presentation Design (PPT/Keynote)","Infographic & Data Visualization","Social Media Templates"] },
  { num:"06", icon:"📄", title:"Technical Documentation",      slug:"technical-documentation",  desc:"Clarity in complexity — turning technical knowledge into accessible content.",                items:["Product & Software Documentation","Standard Operating Procedures","Help Center & Knowledge Base","Process & Workflow Guides"] },
  { num:"07", icon:"📊", title:"Performance Marketing",        slug:"performance-marketing",    desc:"Data-driven campaigns built for measurable ROI and sustainable growth.",                      items:["Google Ads & PPC Campaigns","Conversion Rate Optimization","Marketing Funnel Automation","Analytics & GA4 Dashboards","A/B Testing"] },
  { num:"08", icon:"🤖", title:"AI-Powered Solutions",         slug:"ai-powered-solutions",     desc:"Harness the power of AI to move faster, create smarter, and rank everywhere.",               items:["AI Content Strategy & Automation","Prompt Engineering for Business","AI Search Optimization (AEO/GEO)"] },
  { num:"09", icon:"🏛️", title:"GeM & Government Procurement", slug:"gem-government-procurement", desc:"Win government orders — GeM registration, catalogue, bid management, and contract closure.", items:["GeM Registration & Profile Setup","Catalogue Creation & Optimisation","Bid Monitoring & Go/No-Go Advisory","EMD, PBG & Securities Management","Order Execution & Payment Recovery"] },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      className="group relative overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Top border reveal */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 service-card-line"
        style={{ backgroundColor: "var(--gold)" }}
      />

      <Link href={`/services/${service.slug}`} className="block p-9 h-full transition-colors duration-300 group-hover:bg-[#141518]">
        <div className="font-display text-[20px] tracking-[2px] mb-5 opacity-50" style={{ color: "var(--gold)" }}>
          {service.num}
        </div>
        <div className="text-3xl mb-4">{service.icon}</div>
        <h3 className="font-serif text-[22px] mb-3 leading-snug" style={{ color: "var(--text)" }}>
          {service.title}
        </h3>
        <p className="text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
          {service.desc}
        </p>
        <ul className="mt-4 space-y-0">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[12px] py-1.5 border-b" style={{ color: "var(--muted)", borderColor: "var(--border2)" }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0 opacity-60" style={{ backgroundColor: "var(--gold)" }} />
              {item}
            </li>
          ))}
        </ul>
        <div
          className="absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center border text-base transition-colors duration-300 group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]"
          style={{ borderColor: "var(--border2)", color: "var(--muted)" }}
        >
          →
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="px-8 md:px-12 py-24">
      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[11px] tracking-[2.5px] mb-4"
            style={{ color: "var(--gold)" }}
          >
            — WHAT WE DO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display leading-none tracking-wide"
            style={{ fontSize: "clamp(42px, 5vw, 68px)" }}
          >
            OUR{" "}
            <em className="font-serif not-italic" style={{ color: "var(--gold)" }}>
              Services
            </em>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base leading-relaxed max-w-sm font-light"
          style={{ color: "var(--muted)" }}
        >
          Eight powerful service pillars. One unified partner. Every touchpoint of your digital journey, covered.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border2)" }}>
        {services.map((s, i) => (
          <ServiceCard key={s.num} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
