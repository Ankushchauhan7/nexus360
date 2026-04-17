import type { Metadata } from "next";
import Navbar        from "@/components/Navbar";
import Footer        from "@/components/Footer";
import AboutHero     from "@/components/about/AboutHero";
import AboutStory    from "@/components/about/AboutStory";
import AboutValues   from "@/components/about/AboutValues";
import AboutStats    from "@/components/about/AboutStats";
import AboutTeam     from "@/components/about/AboutTeam";
import AboutWhy      from "@/components/about/AboutWhy";
import AboutCTA      from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us — Nexus360",
  description:
    "Nexus360 is a total digital growth partner — combining web development, SEO, social media, content, design, documentation, performance marketing, and AI solutions under one roof.",
  openGraph: {
    title: "About Nexus360 — One Partner. Every Channel. Total Growth.",
    description:
      "Learn who we are, what drives us, and why brands trust Nexus360 as their end-to-end digital partner.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero   />
        <AboutStory  />
        <AboutStats  />
        <AboutValues />
        <AboutTeam   />
        <AboutWhy    />
        <AboutCTA    />
      </main>
      <Footer />
    </>
  );
}
