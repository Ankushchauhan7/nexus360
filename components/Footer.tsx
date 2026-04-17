"use client";
const serviceLinks = [
  "Web Development",
  "SEO",
  "Social Media Marketing",
  "Content Marketing",
  "Creative Design",
];

const moreServices = [
  "Technical Documentation",
  "Performance Marketing",
  "AI-Powered Solutions",
];

const companyLinks = [
  "About Nexu360",
  "Our Process",
  "Case Studies",
  "Blog",
  "Contact",
];

export default function Footer() {
  return (
    <footer
      className="px-8 md:px-12 pt-14 pb-8 border-t"
      style={{
        backgroundColor: "var(--bg2)",
        borderColor: "var(--border2)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="font-display text-3xl tracking-widest mb-4">
            <span style={{ color: "var(--gold)" }}>NEXU</span>
            <span style={{ color: "var(--text)" }}>360</span>
          </div>
          <p
            className="text-[13px] leading-relaxed max-w-[220px]"
            style={{ color: "var(--muted)" }}
          >
            One partner for every dimension of your digital growth. Strategy.
            Execution. Results.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-[11px] tracking-[2px] mb-5"
            style={{ color: "var(--gold)" }}
          >
            SERVICES
          </h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* More Services */}
        <div>
          <h4
            className="text-[11px] tracking-[2px] mb-5"
            style={{ color: "var(--gold)" }}
          >
            MORE SERVICES
          </h4>
          <ul className="space-y-2.5">
            {moreServices.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            className="text-[11px] tracking-[2px] mb-5"
            style={{ color: "var(--gold)" }}
          >
            COMPANY
          </h4>
          <ul className="space-y-2.5">
            {companyLinks.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t"
        style={{ borderColor: "var(--border2)" }}
      >
        <p className="text-[12px]" style={{ color: "var(--muted)" }}>
          © 2025 Nexu360. All rights reserved.
        </p>
        <div className="flex gap-3">
          {["in", "𝕏", "f", "▶"].map((icon) => (
            <button
              key={icon}
              className="w-8 h-8 flex items-center justify-center text-[13px] border transition-colors duration-200"
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
              {icon}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
