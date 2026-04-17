"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Service } from "@/lib/services-data";

export default function ServiceSidebar({
  current,
  prev,
  next,
  allServices,
}: {
  current: Service;
  prev: Service | null;
  next: Service | null;
  allServices: Service[];
}) {
  return (
    <aside className="space-y-6">
      {/* All Services nav */}
      <div
        className="sticky top-24 space-y-6"
      >
        {/* Services list */}
        <div
          className="border p-6"
          style={{ borderColor: "var(--border2)", backgroundColor: "var(--bg2)" }}
        >
          <h3
            className="text-[11px] tracking-[2px] mb-5"
            style={{ color: "var(--gold)" }}
          >
            ALL SERVICES
          </h3>
          <ul className="space-y-1">
            {allServices.map((s) => {
              const isCurrent = s.slug === current.slug;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 py-2.5 px-3 text-[13px] transition-all duration-200 border-l-2"
                    style={{
                      borderColor: isCurrent ? "var(--gold)" : "transparent",
                      backgroundColor: isCurrent
                        ? "rgba(232,160,32,0.06)"
                        : "transparent",
                      color: isCurrent ? "var(--gold)" : "var(--muted)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isCurrent) {
                        e.currentTarget.style.color = "var(--text)";
                        e.currentTarget.style.borderColor = "var(--border2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isCurrent) {
                        e.currentTarget.style.color = "var(--muted)";
                        e.currentTarget.style.borderColor = "transparent";
                      }
                    }}
                  >
                    <span>{s.icon}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Prev / Next */}
        <div className="grid grid-cols-1 gap-2">
          {prev && (
            <Link
              href={`/services/${prev.slug}`}
              className="flex items-center gap-3 p-4 border text-[12px] transition-colors duration-200 group"
              style={{
                borderColor: "var(--border2)",
                backgroundColor: "var(--bg)",
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              <span>←</span>
              <div>
                <div className="text-[10px] tracking-widest mb-0.5">PREVIOUS</div>
                <div>{prev.title}</div>
              </div>
            </Link>
          )}
          {next && (
            <Link
              href={`/services/${next.slug}`}
              className="flex items-center justify-between gap-3 p-4 border text-[12px] transition-colors duration-200"
              style={{
                borderColor: "var(--border2)",
                backgroundColor: "var(--bg)",
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              <div>
                <div className="text-[10px] tracking-widest mb-0.5">NEXT</div>
                <div>{next.title}</div>
              </div>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* CTA card */}
        <motion.a
          href="mailto:hello@nexu360.com"
          whileHover={{ scale: 1.02 } as never}
          whileTap={{ scale: 0.98 }}
          className="block p-6 text-center transition-colors duration-200"
          style={{ backgroundColor: "var(--gold)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--gold2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--gold)")
          }
        >
          <div
            className="font-display text-2xl tracking-wide mb-1"
            style={{ color: "#0d0e10" }}
          >
            FREE AUDIT
          </div>
          <div
            className="text-[12px] font-light"
            style={{ color: "rgba(13,14,16,0.65)" }}
          >
            Get a no-obligation review of your current setup
          </div>
          <div
            className="mt-4 text-[13px] font-medium"
            style={{ color: "#0d0e10" }}
          >
            Contact Us →
          </div>
        </motion.a>
      </div>
    </aside>
  );
}
