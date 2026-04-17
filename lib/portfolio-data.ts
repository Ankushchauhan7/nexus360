export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  heading: string;
  body:    string;
};

export type CaseStudy = {
  slug:        string;
  title:       string;
  client:      string;
  industry:    string;
  services:    string[];
  duration:    string;
  year:        string;
  tagline:     string;
  summary:     string;
  challenge:   string;
  approach:    CaseStudySection[];
  results:     string;
  metrics:     CaseStudyMetric[];
  tags:        string[];
  accentColor: string;
  initials:    string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug:        "saas-platform-seo-growth",
    title:       "3× Organic Traffic in 9 Months",
    client:      "CloudDesk",
    industry:    "Technology & SaaS",
    services:    ["SEO", "Content Marketing", "AI-Powered Solutions"],
    duration:    "9 months",
    year:        "2024",
    tagline:     "How a B2B SaaS platform tripled organic search traffic and halved its cost-per-lead.",
    summary:
      "CloudDesk, a project management SaaS, was heavily dependent on paid ads for growth. We built a full organic engine — from technical SEO to topical authority content — that reduced their CAC by 52% within three quarters.",
    challenge:
      "CloudDesk had a technically sound product but virtually no organic presence. Their domain authority was low, their blog was inactive, and 87% of all inbound traffic came from paid channels — creating an expensive, fragile acquisition model. They needed sustainable, compound growth.",
    approach: [
      {
        heading: "Technical SEO Foundation",
        body: "We began with a comprehensive technical audit covering Core Web Vitals, crawlability, structured data, and internal link architecture. Seventeen critical fixes were prioritised and implemented in the first 30 days — reducing crawl errors by 94% and improving LCP scores from 4.2s to 1.4s.",
      },
      {
        heading: "Topical Authority Content Programme",
        body: "We mapped 140 target keywords across six content pillars aligned to the buyer journey. A monthly cadence of four long-form articles and two comparison pages was established — each piece researched, written, and optimised by our content team before being reviewed by CloudDesk's product specialists.",
      },
      {
        heading: "AI-Assisted Content Scaling",
        body: "Using AI-assisted workflows with full human editorial oversight, we increased output to eight pieces per month from month four — maintaining quality while scaling volume. This accelerated topical authority build-out significantly.",
      },
      {
        heading: "AEO/GEO Optimisation",
        body: "We restructured key pages for Answer Engine Optimisation — adding structured FAQ schema, clarifying definitions, and rewriting introductions to match how AI answer tools summarise information. CloudDesk began appearing in Perplexity and ChatGPT answers for eight target queries by month seven.",
      },
    ],
    results:
      "By month nine, CloudDesk's organic sessions had grown from 4,200/month to 13,800/month — a 3.3× increase. Organic now accounts for 44% of all inbound leads, up from 13%. Cost-per-lead from organic is 78% lower than their paid channels.",
    metrics: [
      { value: "3.3×",  label: "Organic traffic growth"       },
      { value: "52%",   label: "Reduction in cost-per-lead"   },
      { value: "44%",   label: "Leads now from organic"        },
      { value: "94%",   label: "Crawl error reduction"         },
    ],
    tags:        ["SEO", "Content Marketing", "SaaS", "AI"],
    accentColor: "#e8a020",
    initials:    "CD",
  },
  {
    slug:        "ecommerce-revenue-growth",
    title:       "₹2.4Cr Additional Revenue in 6 Months",
    client:      "ThreadCraft",
    industry:    "E-commerce & Retail",
    services:    ["Web Development", "Performance Marketing", "SEO"],
    duration:    "6 months",
    year:        "2024",
    tagline:     "A complete e-commerce rebuild and performance marketing overhaul that transformed a struggling fashion brand.",
    summary:
      "ThreadCraft, an Indian D2C fashion brand, had a slow, poorly converting website and scattered ad spend. We rebuilt their store on a Next.js + Shopify stack and restructured their entire paid and organic acquisition model — generating ₹2.4Cr in attributable additional revenue.",
    challenge:
      "ThreadCraft's existing Shopify theme scored 28 on Google PageSpeed. Cart abandonment was at 76%. Their Meta ad account had 23 overlapping audiences with no clear funnel structure. They were spending ₹4.2L/month on ads with a blended ROAS of 1.8× — barely profitable.",
    approach: [
      {
        heading: "Performance-First Store Rebuild",
        body: "We rebuilt the storefront using a custom Next.js frontend with the Shopify Storefront API — achieving a PageSpeed score of 97, sub-1.5s LCP, and a streamlined three-step checkout. Product page templates were redesigned with conversion-focused layouts informed by heatmap analysis of the old site.",
      },
      {
        heading: "Paid Social Restructure",
        body: "We rebuilt the Meta ad account from scratch — consolidating 23 campaigns into a clean three-tier funnel: awareness (broad creative testing), consideration (retargeting engaged visitors), and conversion (cart abandoners and past purchasers). Weekly creative refresh cycles replaced the previous set-and-forget approach.",
      },
      {
        heading: "Google Shopping & Search",
        body: "We set up Performance Max campaigns with tightly segmented product feed optimisation and negative keyword libraries. Shopping ROAS reached 5.8× within 60 days of launch.",
      },
      {
        heading: "E-commerce SEO",
        body: "Parallel to paid activity, we optimised all category and product pages for organic search — implementing structured data, improving internal linking, and targeting long-tail buyer-intent keywords. Organic revenue contribution grew from 8% to 21% of total revenue by month six.",
      },
    ],
    results:
      "Month-six revenue was 68% higher than the same period the prior year. Blended ROAS improved from 1.8× to 4.6×. Cart abandonment dropped from 76% to 51%. The rebuilt site now processes ₹1.1Cr/month in organic-attributed revenue alone.",
    metrics: [
      { value: "₹2.4Cr", label: "Additional revenue generated"  },
      { value: "4.6×",   label: "Blended ROAS (up from 1.8×)"  },
      { value: "68%",    label: "YoY revenue growth"            },
      { value: "97",     label: "PageSpeed score (up from 28)"  },
    ],
    tags:        ["Web Development", "Performance Marketing", "E-commerce", "SEO"],
    accentColor: "#c47d10",
    initials:    "TC",
  },
  {
    slug:        "b2b-brand-identity-launch",
    title:       "Brand Identity & Launch for a B2B Fintech",
    client:      "Vaultis",
    industry:    "Finance & FinTech",
    services:    ["Creative Design", "Web Development", "Content Marketing"],
    duration:    "4 months",
    year:        "2024",
    tagline:     "Building a complete brand identity and digital presence for a fintech startup — from zero to launch-ready in 16 weeks.",
    summary:
      "Vaultis, a B2B payments infrastructure startup, needed to go from incorporated entity to credible market presence in four months. We delivered their full brand identity, website, pitch deck, and content launch programme — on time for their Series A raise.",
    challenge:
      "Vaultis had a product in beta, a small founding team, and no brand presence whatsoever. Their Series A investor meetings were scheduled for week 18. They needed a complete, credible brand — logo, guidelines, website, pitch deck, and thought leadership content — built from scratch in 16 weeks.",
    approach: [
      {
        heading: "Brand Identity System",
        body: "We ran a two-day brand discovery workshop with the founders to establish positioning, tone of voice, and visual direction. The resulting identity — built around themes of precision, trust, and velocity — included logo, colour system, typography, iconography, and a 48-page brand guidelines document.",
      },
      {
        heading: "Website Design & Development",
        body: "A five-page marketing site was designed and built on Next.js — optimised for both human readers and SEO. The site communicated Vaultis's product, team, and vision with the clarity and confidence expected by institutional investors and enterprise prospects.",
      },
      {
        heading: "Pitch Deck & Sales Materials",
        body: "We designed a 22-slide Series A pitch deck, a two-page executive summary, and a product one-pager. All materials were aligned to the brand identity and built to communicate complex technical capability in accessible language.",
      },
      {
        heading: "Launch Content Programme",
        body: "We produced six thought leadership articles, a LinkedIn content calendar for the three co-founders, and a press release for distribution. The content positioned Vaultis as a credible voice in the B2B payments space before the product was publicly launched.",
      },
    ],
    results:
      "Vaultis closed their Series A four weeks after the campaign launched. Investor feedback cited the brand presentation and website as standing out among competing pitches. The LinkedIn content programme generated 48,000 impressions in its first month.",
    metrics: [
      { value: "16",   label: "Weeks from brief to launch"    },
      { value: "22",   label: "Slide Series A pitch deck"     },
      { value: "48K",  label: "LinkedIn impressions, month 1" },
      { value: "100%", label: "On-time delivery"              },
    ],
    tags:        ["Creative Design", "Web Development", "Content Marketing", "Fintech"],
    accentColor: "#a06010",
    initials:    "VT",
  },
  {
    slug:        "healthcare-social-media-growth",
    title:       "42K Followers & 3.2× Enquiries via Social",
    client:      "WellNest Clinics",
    industry:    "Healthcare & Wellness",
    services:    ["Social Media Marketing", "Content Marketing", "Creative Design"],
    duration:    "8 months",
    year:        "2023",
    tagline:     "How a multi-location wellness brand built a trusted community of 42,000 and tripled online enquiries through social media.",
    summary:
      "WellNest Clinics, a chain of integrative medicine clinics across Kerala, had a fragmented social presence with no content strategy. We built an integrated social media and content programme that grew their combined following to 42,000 and tripled online appointment enquiries.",
    challenge:
      "WellNest had three Instagram accounts (one per location), an abandoned Facebook page, and no LinkedIn presence. Content was posted inconsistently — usually promotional, never educational. Social media was generating fewer than 12 appointment enquiries per month across all platforms.",
    approach: [
      {
        heading: "Platform Consolidation & Strategy",
        body: "We consolidated the three Instagram accounts into one brand account, archived the outdated Facebook content, and launched a LinkedIn presence targeting corporate wellness partnerships. A unified content strategy was built around three pillars: education, community, and trust-building.",
      },
      {
        heading: "Content Creation Programme",
        body: "We produced 20 pieces of content per month — a mix of educational carousels, short-form reels, patient story features (with consent), doctor Q&A series, and wellness tip graphics. All content was designed in-house using a branded template system we built for WellNest.",
      },
      {
        heading: "Paid Social for Appointment Generation",
        body: "We ran Meta lead generation campaigns targeting health-conscious demographics in catchment areas around each clinic. Lead ads were linked to a custom landing page with a streamlined appointment booking form — reducing friction from social ad to booked appointment.",
      },
      {
        heading: "Influencer & Community Partnerships",
        body: "We identified and coordinated ten micro-influencer partnerships with Kerala-based wellness creators — each producing one piece of authentic content per month. Average engagement on influencer posts was 6.8%, significantly above platform average.",
      },
    ],
    results:
      "Combined following grew from 4,200 to 42,000 over eight months. Monthly online appointment enquiries grew from 12 to 38 — a 3.2× increase. Paid social cost-per-lead averaged ₹340, against a patient lifetime value of ₹18,000+.",
    metrics: [
      { value: "42K",  label: "Combined social following"        },
      { value: "3.2×", label: "Growth in online enquiries"       },
      { value: "₹340", label: "Average cost-per-lead from social" },
      { value: "6.8%", label: "Avg influencer post engagement"   },
    ],
    tags:        ["Social Media", "Content Marketing", "Creative Design", "Healthcare"],
    accentColor: "#e8a020",
    initials:    "WN",
  },
  {
    slug:        "edtech-documentation-overhaul",
    title:       "Documentation Overhaul Cuts Support Tickets 61%",
    client:      "LearnLoop",
    industry:    "Education & EdTech",
    services:    ["Technical Documentation", "Content Marketing"],
    duration:    "3 months",
    year:        "2023",
    tagline:     "How a complete documentation rebuild reduced support load by 61% and improved user activation for a growing EdTech platform.",
    summary:
      "LearnLoop, an LMS platform with 12,000 active users, was struggling with a 340-ticket-per-week support queue — 70% of which were questions already answered in their outdated, unstructured help centre. We rebuilt their entire documentation ecosystem from scratch.",
    challenge:
      "LearnLoop's help centre had 200+ articles written by different team members over three years — inconsistent in style, outdated in content, and virtually undiscoverable. New user activation (completing setup within 7 days of sign-up) was at 34%. Support costs were growing faster than revenue.",
    approach: [
      {
        heading: "Documentation Audit & Information Architecture",
        body: "We audited all 200+ existing articles, classifying each by accuracy, relevance, and search volume. 140 articles were flagged for rewrite, 44 for archiving, and 22 gaps were identified for new content. A new taxonomy and navigation structure was designed around three user types: learners, instructors, and administrators.",
      },
      {
        heading: "Content Rewrite & Standardisation",
        body: "We rewrote all 140 articles using a standardised template — consistent voice, step-by-step formatting, annotated screenshots, and clear success criteria for each task. Every article was reviewed by a LearnLoop product team member before publication.",
      },
      {
        heading: "Search Optimisation & Discoverability",
        body: "We optimised article titles, meta descriptions, and internal linking for both the help centre's native search and Google organic indexing. Key troubleshooting articles were structured with FAQ schema to capture search traffic from users looking for answers outside the platform.",
      },
      {
        heading: "Onboarding Documentation",
        body: "We created a new Getting Started sequence — five structured guides taking new users from sign-up to first active course within 20 minutes — and integrated it into the onboarding email sequence.",
      },
    ],
    results:
      "Support tickets dropped from 340/week to 133/week within 90 days — a 61% reduction. New user activation rate improved from 34% to 67%. Organic search traffic to the help centre grew 180% as restructured articles began ranking for product-related queries.",
    metrics: [
      { value: "61%",  label: "Reduction in support tickets"    },
      { value: "67%",  label: "New user activation (up from 34%)" },
      { value: "180%", label: "Help centre organic traffic growth" },
      { value: "140",  label: "Articles rewritten & standardised"  },
    ],
    tags:        ["Technical Documentation", "Content Marketing", "EdTech"],
    accentColor: "#c47d10",
    initials:    "LL",
  },
  {
    slug:        "startup-performance-marketing",
    title:       "₹1 to ₹8 ROAS: Rebuilding a Failing Ad Account",
    client:      "ZipFreight",
    industry:    "Startups & Scale-ups",
    services:    ["Performance Marketing", "Web Development", "Creative Design"],
    duration:    "5 months",
    year:        "2024",
    tagline:     "Turning a loss-making Google Ads account into the primary growth engine for a logistics startup.",
    summary:
      "ZipFreight, a B2B logistics startup, was burning ₹3.2L/month on Google Ads with a ROAS of 1.1× — effectively losing money on every conversion. We rebuilt the account architecture, redesigned their landing pages, and developed a creative testing framework that pushed ROAS to 8×.",
    challenge:
      "ZipFreight had inherited an ad account built by a generalist freelancer — broad match keywords with no negatives, a single landing page for all traffic, no conversion tracking beyond form submissions, and creative that hadn't been updated in nine months. Every rupee spent was barely returning itself.",
    approach: [
      {
        heading: "Full Account Audit & Rebuild",
        body: "We audited 18 months of campaign data, identifying ₹1.8L in wasted spend on irrelevant search terms. The account was rebuilt with a tightly themed ad group structure, exact and phrase match keywords, and an initial negative keyword list of 340 terms.",
      },
      {
        heading: "Conversion Tracking & Analytics",
        body: "Full GA4 and Google Ads conversion tracking was implemented — covering form fills, phone calls, WhatsApp clicks, and quote completions. For the first time, ZipFreight had accurate data on which campaigns, ad groups, and keywords were actually generating revenue.",
      },
      {
        heading: "Landing Page Redesign",
        body: "We designed and built three service-specific landing pages — replacing the single generic page that had been receiving all traffic. Each page was structured around the specific search intent, with relevant social proof, a clear value proposition, and a friction-minimised lead form.",
      },
      {
        heading: "Creative Testing Framework",
        body: "We implemented a systematic creative testing programme — testing headlines, USP messaging, call-to-action variants, and visual formats on a two-week rotation. The winning variants from each cycle were promoted and the underperformers cut. Creative quality compounded month over month.",
      },
    ],
    results:
      "By month five, ROAS had improved from 1.1× to 8.1×. Monthly ad spend was reduced from ₹3.2L to ₹2.1L while revenue from paid search grew 340%. Cost-per-qualified-lead dropped from ₹4,200 to ₹880.",
    metrics: [
      { value: "8.1×",   label: "ROAS achieved (up from 1.1×)"     },
      { value: "340%",   label: "Revenue growth from paid search"   },
      { value: "₹880",   label: "Cost-per-lead (down from ₹4,200)" },
      { value: "₹1.8L",  label: "Wasted ad spend identified"       },
    ],
    tags:        ["Performance Marketing", "Web Development", "Creative Design", "Startup"],
    accentColor: "#a06010",
    initials:    "ZF",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}

export const allTags = [
  "All",
  "SEO",
  "Web Development",
  "Performance Marketing",
  "Social Media",
  "Content Marketing",
  "Creative Design",
  "Technical Documentation",
  "AI",
];
