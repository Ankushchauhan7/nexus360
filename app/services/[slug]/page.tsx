import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs, services } from "@/lib/services-data";
import ServiceHero        from "@/components/services/ServiceHero";
import ServiceOfferings   from "@/components/services/ServiceOfferings";
import ServiceBenefits    from "@/components/services/ServiceBenefits";
import ServiceProcess     from "@/components/services/ServiceProcess";
import ServiceFAQ         from "@/components/services/ServiceFAQ";
import ServiceCTA         from "@/components/services/ServiceCTA";
import ServiceSidebar     from "@/components/services/ServiceSidebar";
import Navbar             from "@/components/Navbar";
import Footer             from "@/components/Footer";

// Generate static pages for all 8 services at build time
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

// Dynamic SEO metadata per service
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — Nexus360`,
    description: service.heroDesc,
    openGraph: {
      title: `${service.title} — Nexus360`,
      description: service.tagline,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  // Adjacent services for sidebar navigation
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService  = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService  = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <div className="px-8 md:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 max-w-7xl mx-auto">
            {/* Main content */}
            <div className="space-y-20">
              <ServiceOfferings  service={service} />
              <ServiceBenefits   service={service} />
              <ServiceProcess    service={service} />
              <ServiceFAQ        service={service} />
            </div>
            {/* Sidebar */}
            <div className="hidden lg:block">
              <ServiceSidebar
                current={service}
                prev={prevService}
                next={nextService}
                allServices={services}
              />
            </div>
          </div>
        </div>
        <ServiceCTA service={service} />
      </main>
      <Footer />
    </>
  );
}
