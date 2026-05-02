"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // ── Scroll: shadow + reset activeSection when back at top ─────────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      // ✅ KEY FIX: if user scrolls back near top, clear the section highlight
      // so "Home" becomes active again
      if (y < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Intersection Observer — watches section IDs on home page ───────────────
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["services", "why", "process"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only set if user has scrolled past the top threshold
            if (window.scrollY >= 100) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // ── Nav links ──────────────────────────────────────────────────────────────
  const links = [
    { label: "Home",     href: "/",          sectionId: ""         },
    { label: "GEM",     href: "/services/gem-government-procurement",          sectionId: ""         },
    { label: "Services", href: "/#services", sectionId: "services" },
    { label: "About",    href: "/about",     sectionId: ""         },
    { label: "Why Us",   href: "/#why",      sectionId: "why"      },
    { label: "Process",  href: "/#process",  sectionId: "process"  },
    { label: "Contact",  href: "/contact",   sectionId: ""         },
  ];

  // ── Active logic ───────────────────────────────────────────────────────────
  const isActive = (href: string, sectionId: string): boolean => {
    // Section links (Services, Why Us, Process)
    if (sectionId) return pathname === "/" && activeSection === sectionId;
    // Home — active only when on "/" AND no section is highlighted
    if (href === "/") return pathname === "/" && activeSection === "";
    // Regular pages (/about, /contact)
    return pathname === href || pathname.startsWith(href + "/");
  };

  // ── Style helpers ──────────────────────────────────────────────────────────
  const getColor = (href: string, sectionId: string) =>
    isActive(href, sectionId) ? "var(--gold)" : "var(--muted)";

  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.color = "var(--gold)");

  const onLeave =
    (href: string, sectionId: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) =>
      (e.currentTarget.style.color = getColor(href, sectionId));

  const isHash = (href: string) => href.includes("#");

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 h-[68px] border-b transition-colors duration-300"
      style={{
        borderColor: "var(--border2)",
        backgroundColor: scrolled
          ? "rgba(13,14,16,0.97)"
          : "rgba(13,14,16,0.80)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* ── Logo ── */}
      <Link href="/" className="font-display text-3xl tracking-widest leading-none">
        <span style={{ color: "var(--gold)" }}>NEXUS</span>
        <span style={{ color: "var(--text)" }}>360</span>
      </Link>

      {/* ── Desktop links ── */}
      <ul className="hidden lg:flex gap-8">
        {links.map((link) => {
          const active = isActive(link.href, link.sectionId);

          return (
            <li key={link.href + link.sectionId} className="relative flex items-center">
              {isHash(link.href) ? (
                <a
                  href={link.href}
                  className="text-[13px] tracking-wide transition-colors duration-200 pb-0.5"
                  style={{ color: getColor(link.href, link.sectionId) }}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave(link.href, link.sectionId)}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-[22px] h-[2px] w-full"
                      style={{ backgroundColor: "var(--gold)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-[13px] tracking-wide transition-colors duration-200 pb-0.5"
                  style={{ color: getColor(link.href, link.sectionId) }}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave(link.href, link.sectionId)}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-[22px] h-[2px] w-full"
                      style={{ backgroundColor: "var(--gold)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {/* ── Desktop CTA ── */}
      <motion.a
        href="/digital-auditing"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="hidden lg:inline-block text-[13px] font-medium tracking-wide px-5 py-2.5 transition-colors duration-200"
        style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold2)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
      >
        Get Free Digital Audit →
      </motion.a>

      {/* ── Mobile hamburger ── */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={
              menuOpen
                ? i === 0 ? { rotate: 45,  y: 8  }
                : i === 1 ? { opacity: 0          }
                :           { rotate: -45, y: -8  }
                : { rotate: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5"
            style={{ backgroundColor: "var(--text)" }}
          />
        ))}
      </button>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[68px] left-0 right-0 border-t flex flex-col"
          style={{
            backgroundColor: "rgba(13,14,16,0.98)",
            borderColor: "var(--border2)",
          }}
        >
          {links.map((link) => {
            const active = isActive(link.href, link.sectionId);
            const mobileStyle = {
              color: active ? "var(--gold)" : "var(--muted)",
              borderColor: "var(--border2)",
            };

            return isHash(link.href) ? (
              <a
                key={link.href + link.sectionId}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-8 py-4 text-sm border-b flex items-center justify-between"
                style={mobileStyle}
              >
                {link.label}
                {active && (
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                )}
              </a>
            ) : (
              <Link
                key={link.href + link.sectionId}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-8 py-4 text-sm border-b flex items-center justify-between"
                style={mobileStyle}
              >
                {link.label}
                {active && (
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/digital-auditing"
            onClick={() => setMenuOpen(false)}
            className="px-8 py-4 text-sm font-medium"
            style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
          >
            Get Free Digital Audit →
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}