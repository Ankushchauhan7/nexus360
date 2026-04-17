import type { Metadata } from "next";
import Navbar          from "@/components/Navbar";
import Footer          from "@/components/Footer";
import ContactHero     from "@/components/contact/ContactHero";
import ContactForm     from "@/components/contact/ContactForm";
import ContactInfo     from "@/components/contact/ContactInfo";
import ContactFAQ      from "@/components/contact/ContactFAQ";
import ContactServices from "@/components/contact/ContactServices";

export const metadata: Metadata = {
  title: "Contact Us — Nexus360",
  description:
    "Get in touch with Nexus360. Start with a free digital audit, request a quote, or simply ask us anything about your digital growth needs.",
  openGraph: {
    title: "Contact Nexus360 — Let's Talk Digital Growth",
    description:
      "Reach out to Nexus360 for a free audit, a project quote, or a conversation about your digital strategy.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <div className="px-8 md:px-12 py-20">
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 max-w-7xl mx-auto"
          >
            {/* Main — form */}
            <ContactForm />
            {/* Sidebar — info */}
            <ContactInfo />
          </div>
        </div>
        <ContactServices />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}
