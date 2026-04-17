"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services",   href: isHome ? "#services"   : "/#services"   },
    { label: "About",      href: "/about"                                 },
    { label: "Why Us",     href: isHome ? "#why"         : "/#why"        },
    { label: "Process",    href: isHome ? "#process"     : "/#process"    },
    { label: "Contact",    href: isHome ? "#contact"     : "/#contact"    },
  ];

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
      {/* Logo */}
      <Link href="/" className="font-display text-3xl tracking-widest leading-none">
        <span style={{ color: "var(--gold)" }}>NEXU</span>
        <span style={{ color: "var(--text)" }}>360</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] tracking-wide transition-colors duration-200"
                style={{ color: isActive ? "var(--gold)" : "var(--muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? "var(--gold)" : "var(--muted)")
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <motion.a
        href={isHome ? "#contact" : "/#contact"}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="hidden md:inline-block text-[13px] font-medium tracking-wide px-5 py-2.5 transition-colors duration-200"
        style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--gold2)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--gold)")
        }
      >
        Get Free Audit →
      </motion.a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-6 h-0.5 transition-all duration-300"
            style={{ backgroundColor: "var(--text)" }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[68px] left-0 right-0 border-t flex flex-col"
          style={{
            backgroundColor: "rgba(13,14,16,0.97)",
            borderColor: "var(--border2)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-8 py-4 text-sm border-b"
              style={{ color: "var(--muted)", borderColor: "var(--border2)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={isHome ? "#contact" : "/#contact"}
            onClick={() => setMenuOpen(false)}
            className="px-8 py-4 text-sm font-medium"
            style={{ backgroundColor: "var(--gold)", color: "#0d0e10" }}
          >
            Get Free Audit →
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
