import { notFound }           from "next/navigation";
import type { Metadata }       from "next";
import { getCaseStudyBySlug, getAllCaseStudySlugs, caseStudies } from "@/lib/portfolio-data";
import Navbar                  from "@/components/Navbar";
import Footer                  from "@/components/Footer";
import CaseStudyHero           from "@/components/portfolio/CaseStudyHero";
import CaseStudyApproach       from "@/components/portfolio/CaseStudyApproach";
import CaseStudyResults        from "@/components/portfolio/CaseStudyResults";
import CaseStudyRelated        from "@/components/portfolio/CaseStudyRelated";
import CaseStudyCTA            from "@/components/portfolio/CaseStudyCTA";
import { CaseStudyChallenge } from "@/components/portfolio/CaseStudyChallenge";

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study    = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title:       `${study.title} — Nexus360 Case Study`,
    description: study.summary,
    openGraph: {
      title:       `${study.client}: ${study.title}`,
      description: study.tagline,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study    = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = caseStudies
    .filter(
      (c) =>
        c.slug !== slug &&
        c.services.some((s) => study.services.includes(s))
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyHero      study={study} />
        <div className="px-8 md:px-12 py-20 max-w-4xl mx-auto space-y-20">
          <CaseStudyChallenge study={study} />
          <CaseStudyApproach  study={study} />
        </div>
        <CaseStudyResults   study={study} />
        <CaseStudyRelated   studies={related} />
        <CaseStudyCTA       study={study} />
      </main>
      <Footer />
    </>
  );
}
