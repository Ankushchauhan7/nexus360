import type { Metadata } from "next";
import Navbar           from "@/components/Navbar";
import Footer           from "@/components/Footer";
import PortfolioHero    from "@/components/portfolio/PortfolioHero";
import PortfolioGrid    from "@/components/portfolio/PortfolioGrid";
import PortfolioStats   from "@/components/portfolio/PortfolioStats";
import PortfolioCTA     from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Nexus360",
  description:
    "Real results for real businesses. Explore Nexus360's case studies across web development, SEO, social media, performance marketing, content, design, and technical documentation.",
  openGraph: {
    title: "Nexu360 Portfolio — Proven Digital Growth Results",
    description:
      "Browse our case studies and see the measurable impact we deliver for clients across industries.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero  />
        <PortfolioStats />
        <PortfolioGrid  />
        <PortfolioCTA   />
      </main>
      <Footer />
    </>
  );
}
