const items = [
  "WEB DEVELOPMENT",
  "SEO STRATEGY",
  "SOCIAL MEDIA MARKETING",
  "CONTENT MARKETING",
  "CREATIVE DESIGN",
  "TECHNICAL DOCUMENTATION",
  "PERFORMANCE MARKETING",
  "AI-POWERED SOLUTIONS",
  "GEM & GOVERNMENT PROCUREMENT",
];

export default function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="py-5 overflow-hidden whitespace-nowrap"
      style={{ backgroundColor: "var(--gold)" }}
    >
      <div className="inline-flex animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="font-display text-[15px] tracking-[3px] px-10"
              style={{ color: "#0d0e10" }}
            >
              {item}
            </span>
            <span
              className="text-[8px]"
              style={{ color: "rgba(13,14,16,0.35)" }}
              aria-hidden="true"
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
