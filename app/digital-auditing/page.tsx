import type { Metadata } from "next";
import Navbar                    from "@/components/Navbar";
import Footer                    from "@/components/Footer";
import AuditHero                 from "@/components/digital-auditing/AuditHero";
import AuditWhat                 from "@/components/digital-auditing/AuditWhat";
import AuditScope                from "@/components/digital-auditing/AuditScope";
import AuditWhy                  from "@/components/digital-auditing/AuditWhy";
import AuditDeliverables         from "@/components/digital-auditing/AuditDeliverables";
import AuditCTA                  from "@/components/digital-auditing/AuditCTA";

export const metadata: Metadata = {
  title: "Digital Auditing — Nexu360",
  description:
    "A Nexu360 digital audit is a comprehensive review of your entire online presence — website, SEO, content, social media, paid advertising, brand, and competitors — delivering a clear baseline, prioritised actions, and monthly KPI tracking.",
  openGraph: {
    title: "Digital Auditing — Nexu360 | Total Digital Growth Partner",
    description:
      "Understand exactly where your digital presence stands — and where your biggest growth opportunities are hiding. Start with a free audit.",
  },
  keywords: [
    "digital audit",
    "digital auditing services India",
    "website audit",
    "SEO audit",
    "digital marketing audit",
    "free digital audit",
    "digital audit agency Delhi",
  ],
};

export default function DigitalAuditingPage() {
  return (
    <>
      <Navbar />
      <main id="digital-auditing">
        <AuditHero         />
        <AuditWhat         />
        <AuditScope        />
        <AuditWhy          />
        <AuditDeliverables />
        <AuditCTA          />
      </main>
      <Footer />
    </>
  );
}
