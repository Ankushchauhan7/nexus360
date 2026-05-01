export type ServiceOffering = {
  title: string;
  desc: string;
};

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  num: string;
  icon: string;
  title: string;
  tagline: string;
  heroDesc: string;
  color: string;
  offerings: ServiceOffering[];
  benefits: string[];
  process: string[];
  faqs: ServiceFAQ[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    num: "01",
    icon: "⚡",
    title: "Web Development",
    tagline: "Built for speed. Designed to convert. Engineered to scale.",
    heroDesc:
      "Your website is your most powerful sales asset. We build high-performance websites and web applications using the latest frameworks — optimised for Core Web Vitals, conversion, and long-term growth.",
    color: "#e8a020",
    offerings: [
      {
        title: "Business & Corporate Websites",
        desc: "Professional, brand-aligned websites that establish credibility and drive enquiries — built on Next.js for maximum speed and SEO performance.",
      },
      {
        title: "E-commerce Development",
        desc: "Revenue-focused online stores on Shopify, WooCommerce, or custom stacks — with optimised product pages, checkout flows, and conversion funnels.",
      },
      {
        title: "Web App Development",
        desc: "SaaS-style tools, portals, and dashboards built with React and Next.js — scalable architecture with clean UI and fast load times.",
      },
      {
        title: "Maintenance & Optimisation",
        desc: "Ongoing support covering speed optimisation, security updates, CMS management, and performance monitoring — so your site never slows you down.",
      },
      {
        title: "Mobile-Responsive Design",
        desc: "Every site we build is fully responsive across all devices and browsers — tested and refined for flawless mobile experience.",
      },
    ],
    benefits: [
      "99+ Lighthouse performance scores",
      "Core Web Vitals optimised out of the box",
      "SEO-ready HTML structure from day one",
      "Secure, scalable cloud deployment",
      "Ongoing maintenance & support available",
    ],
    process: [
      "Discovery call & brief alignment",
      "Sitemap, wireframes & tech stack selection",
      "Design system & UI development",
      "Development, QA & performance testing",
      "Launch, handover & post-launch support",
    ],
    faqs: [
      {
        q: "How long does it take to build a website?",
        a: "A standard business website typically takes 3–5 weeks. E-commerce and web apps range from 6–12 weeks depending on complexity.",
      },
      {
        q: "Will I be able to update the website myself?",
        a: "Yes. We integrate a headless CMS (like Sanity or Contentlayer) so you can manage content without touching code.",
      },
      {
        q: "Do you offer hosting and domain setup?",
        a: "We deploy on Vercel or your preferred host, and can assist with domain configuration, SSL, and DNS setup.",
      },
    ],
  },
  {
    slug: "seo",
    num: "02",
    icon: "🔍",
    title: "Search Engine Optimisation",
    tagline: "Be found first — on Google, and in AI-generated answers.",
    heroDesc:
      "SEO in 2025 means ranking on traditional search AND appearing in AI-generated answers (ChatGPT, Gemini, Perplexity). Our end-to-end SEO service covers both — building lasting organic visibility that compounds over time.",
    color: "#e8a020",
    offerings: [
      {
        title: "Technical SEO Audits",
        desc: "Comprehensive audits covering site health, crawlability, indexation, Core Web Vitals, schema markup, and mobile usability — with a prioritised action plan.",
      },
      {
        title: "On-Page Optimisation",
        desc: "Keyword research, topical authority mapping, meta structures, heading hierarchies, internal linking, and content optimisation across every key page.",
      },
      {
        title: "Off-Page SEO & Link Building",
        desc: "Authority-building through strategic backlink outreach, digital PR, and high-quality content placement on relevant publications.",
      },
      {
        title: "Local SEO",
        desc: "Google Business Profile optimisation, local citations, NAP consistency, and map ranking strategies — critical for service-area and brick-and-mortar businesses.",
      },
      {
        title: "E-commerce SEO",
        desc: "Product page, category, and faceted navigation optimisation — turning your store into an organic traffic engine.",
      },
      {
        title: "AI Search Optimisation (AEO/GEO)",
        desc: "Structuring content so it surfaces in AI-generated answer engines — the frontier of search visibility in 2025 and beyond.",
      },
    ],
    benefits: [
      "Compound organic growth month over month",
      "Reduced dependency on paid advertising",
      "Visibility in both traditional and AI search",
      "Monthly performance dashboards",
      "Full transparency — no black-hat tactics",
    ],
    process: [
      "Full technical & content SEO audit",
      "Keyword & topical authority strategy",
      "On-page & technical fixes implementation",
      "Content creation & link building",
      "Monthly reporting & continuous optimisation",
    ],
    faqs: [
      {
        q: "How long before I see SEO results?",
        a: "Most clients see measurable improvements in 3–6 months. Competitive niches may take 6–12 months for top rankings.",
      },
      {
        q: "What is AEO/GEO and why does it matter?",
        a: "Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) ensure your content appears when AI tools like ChatGPT or Gemini answer user queries — a rapidly growing traffic source.",
      },
      {
        q: "Do you provide monthly reports?",
        a: "Yes. You receive a monthly report with ranking movements, traffic trends, and a clear plan for the following month.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    num: "03",
    icon: "📣",
    title: "Social Media Marketing",
    tagline: "Build communities. Drive conversations. Convert followers.",
    heroDesc:
      "Social media is where brands are built and trust is earned. We manage your entire social presence — from strategy and content creation to paid campaigns and analytics — delivering consistent growth across every platform.",
    color: "#e8a020",
    offerings: [
      {
        title: "Strategy & Calendar Planning",
        desc: "A data-informed social media strategy tailored to your audience — covering platform selection, content pillars, posting cadence, and campaign calendar.",
      },
      {
        title: "Platform Management",
        desc: "Full management of LinkedIn, Instagram, Facebook, X (Twitter), YouTube, and Threads — so your brand shows up consistently and professionally everywhere.",
      },
      {
        title: "Organic Content Creation",
        desc: "Scroll-stopping posts, reels, carousels, and stories — crafted to educate, entertain, and convert your target audience.",
      },
      {
        title: "Paid Social Advertising",
        desc: "ROI-focused ad campaigns on Meta, LinkedIn, and YouTube — from audience targeting and creative to budget management and optimisation.",
      },
      {
        title: "Analytics & Reporting",
        desc: "Monthly performance reports covering reach, engagement, follower growth, and ad spend ROI — with clear recommendations for improvement.",
      },
    ],
    benefits: [
      "Consistent brand voice across all platforms",
      "Content calendar planned 30 days ahead",
      "Audience growth tracked and reported monthly",
      "Ad spend optimised for lowest cost per result",
      "Creative content that reflects your brand identity",
    ],
    process: [
      "Brand audit & audience research",
      "Platform strategy & content pillar definition",
      "Content calendar creation & approval",
      "Publishing, monitoring & community response",
      "Monthly analytics review & strategy refinement",
    ],
    faqs: [
      {
        q: "Which social platforms do you manage?",
        a: "LinkedIn, Instagram, Facebook, X (Twitter), YouTube, and Threads. We recommend the right mix based on your industry and audience.",
      },
      {
        q: "How many posts per week do you create?",
        a: "This depends on your package. Typically 3–5 posts per platform per week for organic, with additional ad creative for paid campaigns.",
      },
      {
        q: "Do I need to approve content before it goes live?",
        a: "Yes. All content is submitted for your approval before publishing, via a shared content calendar tool.",
      },
    ],
  },
  {
    slug: "content-marketing",
    num: "04",
    icon: "✍️",
    title: "Content Marketing",
    tagline: "Content that educates, ranks, and converts.",
    heroDesc:
      "Great content is the backbone of every digital channel. We create strategic, high-quality content that builds topical authority, drives organic search traffic, nurtures leads through email, and positions your brand as the go-to expert in your field.",
    color: "#e8a020",
    offerings: [
      {
        title: "Content Strategy Development",
        desc: "Audience research, competitor analysis, topical authority mapping, and a content roadmap aligned to your business goals and search demand.",
      },
      {
        title: "Blog & Article Writing",
        desc: "Long-form SEO content, thought leadership articles, and educational guides — written by subject-matter experts and optimised to rank.",
      },
      {
        title: "Technical Content & White Papers",
        desc: "In-depth research reports, white papers, and case studies that establish credibility and support complex B2B sales cycles.",
      },
      {
        title: "Email Marketing Campaigns",
        desc: "Newsletter strategy, drip sequences, and automated email workflows — designed to nurture leads and drive repeat engagement.",
      },
      {
        title: "AI-Assisted Content Workflows",
        desc: "AI-accelerated content production with full human editorial oversight — delivering higher volume without compromising quality.",
      },
    ],
    benefits: [
      "Content planned around real search demand",
      "Builds topical authority over time",
      "Every piece optimised for SEO from the start",
      "Consistent brand voice across all formats",
      "Email sequences that nurture and convert",
    ],
    process: [
      "Audience & keyword research",
      "Content strategy & editorial calendar",
      "Draft creation & editorial review",
      "SEO optimisation & internal linking",
      "Publishing, distribution & performance tracking",
    ],
    faqs: [
      {
        q: "Do you write content for technical industries?",
        a: "Yes. We have writers with backgrounds in technology, finance, healthcare, and engineering who can handle complex subject matter.",
      },
      {
        q: "How do you ensure content is original?",
        a: "All content is written from scratch, fact-checked, and run through plagiarism detection before delivery.",
      },
      {
        q: "Can you take over an existing content programme?",
        a: "Absolutely. We begin with a content audit to assess what exists, what performs, and what gaps need filling.",
      },
    ],
  },
  {
    slug: "creative-design",
    num: "05",
    icon: "🎨",
    title: "Creative Design",
    tagline: "Design that speaks before words do.",
    heroDesc:
      "Your visual identity is your first impression — and it forms in milliseconds. We create cohesive, strategic design across every format: from brand identity systems and pitch decks to marketing collateral and social media templates that make your brand impossible to ignore.",
    color: "#e8a020",
    offerings: [
      {
        title: "Brand Identity Design",
        desc: "Logo design, colour palettes, typography systems, and brand guidelines — a complete visual identity that communicates who you are at a glance.",
      },
      {
        title: "Marketing Collateral & Brochures",
        desc: "Professionally designed brochures, flyers, sell sheets, banners, and print-ready marketing materials that reflect your brand standards.",
      },
      {
        title: "Presentation Design (PPT/Keynote)",
        desc: "High-impact pitch decks, investor presentations, and sales decks — designed to persuade, impress, and close.",
      },
      {
        title: "Infographic & Data Visualisation",
        desc: "Complex data and processes transformed into clear, shareable visual stories — ideal for reports, social media, and thought leadership content.",
      },
      {
        title: "Social Media Templates",
        desc: "Branded, editable template sets for your team to use across platforms — ensuring visual consistency at scale without relying on designers for every post.",
      },
    ],
    benefits: [
      "Consistent visual identity across all touchpoints",
      "Print-ready and digital formats delivered",
      "Editable source files provided (Figma/Adobe)",
      "Brand guidelines document included",
      "Fast turnaround on collateral projects",
    ],
    process: [
      "Brand discovery & visual direction workshop",
      "Mood board & concept development",
      "Initial design concepts & feedback rounds",
      "Refinement & finalisation",
      "File delivery + brand guidelines handover",
    ],
    faqs: [
      {
        q: "What file formats do you deliver?",
        a: "We deliver all final assets in PDF, PNG, SVG, and original editable formats (Figma, Adobe Illustrator, or PowerPoint depending on the project).",
      },
      {
        q: "How many revision rounds are included?",
        a: "All projects include two structured revision rounds. Additional rounds can be accommodated at an agreed rate.",
      },
      {
        q: "Can you work with an existing brand identity?",
        a: "Yes. We can extend and apply an existing brand identity to new materials, or refresh it while maintaining core brand recognition.",
      },
    ],
  },
  {
    slug: "technical-documentation",
    num: "06",
    icon: "📄",
    title: "Technical Documentation",
    tagline: "Clarity in complexity — knowledge made accessible.",
    heroDesc:
      "Great products need great documentation. Whether it's a software product, a complex process, or an operational workflow, we turn technical knowledge into clear, structured, user-friendly content that reduces support burden and builds user confidence.",
    color: "#e8a020",
    offerings: [
      {
        title: "Product & Software Documentation",
        desc: "User manuals, API documentation, developer guides, and release notes — written clearly for both technical and non-technical audiences.",
      },
      {
        title: "Standard Operating Procedures (SOPs)",
        desc: "Structured, step-by-step SOPs that ensure consistent execution of business processes — reducing errors and onboarding time.",
      },
      {
        title: "Help Centre & Knowledge Base",
        desc: "Organised, searchable help centres and knowledge bases that empower users to self-serve — reducing inbound support volume.",
      },
      {
        title: "Process & Workflow Guides",
        desc: "Clear documentation of internal workflows, operational processes, and team procedures — essential for scaling teams and maintaining quality.",
      },
    ],
    benefits: [
      "Reduces support ticket volume significantly",
      "Accelerates onboarding for new users & staff",
      "Consistent terminology and structured formatting",
      "Delivered in your chosen platform (Notion, Confluence, etc.)",
      "Reviewed by technical editors before delivery",
    ],
    process: [
      "Subject matter interviews & content inventory",
      "Documentation structure & taxonomy design",
      "Draft writing & technical review",
      "Editorial review & formatting",
      "Delivery & publishing support",
    ],
    faqs: [
      {
        q: "Do your writers understand technical products?",
        a: "Yes. Our technical writers have experience across SaaS, hardware, engineering, and finance — and conduct thorough subject-matter interviews before writing.",
      },
      {
        q: "Which platforms can you publish to?",
        a: "We can deliver to Notion, Confluence, GitBook, Zendesk, HelpScout, or any CMS. We also deliver structured Markdown or Word documents if you have a custom setup.",
      },
      {
        q: "Can you update existing documentation?",
        a: "Absolutely. We offer documentation audits to identify gaps, outdated content, and structural improvements before updating.",
      },
    ],
  },
  {
    slug: "performance-marketing",
    num: "07",
    icon: "📊",
    title: "Performance Marketing",
    tagline: "Data-driven growth with measurable, transparent ROI.",
    heroDesc:
      "Every rupee of ad spend should be accountable. We design, launch, and continuously optimise performance marketing campaigns across Google, Meta, and LinkedIn — with full-funnel strategy, rigorous testing, and clear ROI reporting built in from day one.",
    color: "#e8a020",
    offerings: [
      {
        title: "Google Ads & PPC Campaigns",
        desc: "Search, Display, Shopping, and YouTube campaigns — structured for relevance, quality score, and conversion — not just clicks.",
      },
      {
        title: "Conversion Rate Optimisation (CRO)",
        desc: "Landing page analysis, heatmap audits, UX improvements, and structured testing to convert more of your existing traffic into leads and sales.",
      },
      {
        title: "Marketing Funnel Design & Automation",
        desc: "Full-funnel mapping from awareness to conversion, with automated nurture sequences that move prospects through the pipeline.",
      },
      {
        title: "Analytics & GA4 Dashboards",
        desc: "GA4 setup, event tracking, goal configuration, and Looker Studio dashboards — giving you real-time visibility into what's working.",
      },
      {
        title: "Competitor & Market Research",
        desc: "Ongoing monitoring of competitor ad strategies, keyword gaps, and market positioning — informing smarter campaign decisions.",
      },
      {
        title: "A/B Testing & Landing Page Optimisation",
        desc: "Structured experiments on headlines, creatives, CTAs, and page layouts — with statistically significant results, not guesswork.",
      },
    ],
    benefits: [
      "Full campaign transparency — no black-box reporting",
      "Weekly performance check-ins available",
      "Ad creative and copy included",
      "Budget allocation optimised weekly",
      "Clear cost-per-lead and ROAS tracking",
    ],
    process: [
      "Audit of existing campaigns & conversion setup",
      "Funnel strategy & campaign architecture",
      "Creative development & campaign launch",
      "Weekly optimisation & budget management",
      "Monthly performance review & scaling plan",
    ],
    faqs: [
      {
        q: "What is the minimum ad budget you work with?",
        a: "We typically work with a minimum monthly ad spend of ₹50,000 / $600 to ensure campaigns have enough data to optimise effectively.",
      },
      {
        q: "Do you charge a management fee on top of ad spend?",
        a: "Yes. Our management fee is separate from your ad spend, which goes directly to the platforms. We are fully transparent about this.",
      },
      {
        q: "How quickly can campaigns go live?",
        a: "For new campaigns, we typically launch within 7–10 business days of brief sign-off, including creative development.",
      },
    ],
  },
  {
    slug: "ai-powered-solutions",
    num: "08",
    icon: "🤖",
    title: "AI-Powered Solutions",
    tagline: "Smarter workflows. Faster content. Future-ready visibility.",
    heroDesc:
      "AI is reshaping how brands create content, how users search for information, and how businesses operate. We help you harness AI strategically — automating workflows, optimising for AI-driven search, and engineering prompts that unlock real business value.",
    color: "#e8a020",
    offerings: [
      {
        title: "AI Content Strategy & Workflow Automation",
        desc: "Designing AI-assisted content production pipelines — using tools like Claude, ChatGPT, and Midjourney — with human editorial oversight built in at every stage.",
      },
      {
        title: "Prompt Engineering for Business",
        desc: "Custom prompt libraries and GPT/Claude workflows tailored to your business — for content creation, customer communications, research, and internal knowledge management.",
      },
      {
        title: "AI Search Optimisation (AEO/GEO)",
        desc: "Structuring your content, schema, and authority signals so your brand appears in ChatGPT, Gemini, Perplexity, and other AI answer engines — the new frontier of search.",
      },
    ],
    benefits: [
      "10x content production speed with maintained quality",
      "Custom AI workflows built for your specific processes",
      "Visibility in AI answer engines — not just Google",
      "Staff training on AI tools included",
      "Future-proof strategy as AI search evolves",
    ],
    process: [
      "AI readiness assessment & opportunity mapping",
      "Workflow design & tool selection",
      "Prompt engineering & automation build",
      "Testing, refinement & team training",
      "Ongoing optimisation as AI platforms evolve",
    ],
    faqs: [
      {
        q: "Will AI-generated content hurt our SEO?",
        a: "Not when done correctly. We use AI to accelerate production, but all content is human-reviewed, fact-checked, and edited for quality before publishing.",
      },
      {
        q: "What is AEO and why should we care now?",
        a: "Answer Engine Optimisation ensures your brand surfaces when AI tools answer user questions. With millions of searches now going through AI tools instead of Google, this is rapidly becoming essential.",
      },
      {
        q: "Do you build custom AI tools for businesses?",
        a: "We design and implement AI workflows and prompt systems. For custom AI product development, we partner with specialist AI engineering teams.",
      },
    ],
  },
  {
    slug: "gem-government-procurement",
    num: "09",
    icon: "🏛️",
    title: "GeM & Government Procurement",
    tagline: "Your digital edge in India's largest government marketplace.",
    heroDesc:
      "The Government e-Marketplace — GeM — is India's single largest public procurement platform, growing at over 50% year on year. Delhi-NCR MSMEs are leaving thousands of crores in government orders on the table — not because they are ineligible, but because they are not set up correctly. Nexus360 combines specialist GeM procurement knowledge with full digital marketing capability so your business gets found, looks credible, bids intelligently, and wins consistently.",
    color: "#e8a020",
    offerings: [
      {
        title: "GeM Seller Registration & Profile Setup",
        desc: "End-to-end onboarding on the GeM portal — KYC, bank account, GST and Udyam linkage, Aadhaar verification, and digital signature setup. We get you correctly registered from day one — no gaps, no incomplete fields, nothing left for you to figure out alone.",
      },
      {
        title: "Catalogue Creation & Optimisation",
        desc: "Category-accurate product and service listings built for discoverability — correct technical specifications, high-quality images, competitive pricing strategy, Country-of-Origin declarations, and all mandatory compliance documents. We write your catalogue the way government buyers search for it.",
      },
      {
        title: "OEM & Brand Documentation",
        desc: "Trademark advisory, OEM authorisation letters, authorised reseller documentation, BIS/ISO certificates, and all brand-related compliance requirements — handled completely so your listings pass GeM's verification without delays.",
      },
      {
        title: "Bid Monitoring & Go/No-Go Advisory",
        desc: "Daily monitoring of GeM bids, Reverse Auctions, and direct purchase opportunities in your categories. Every relevant bid is screened for eligibility, margin, and win probability before a decision is made. You only pursue bids worth pursuing.",
      },
      {
        title: "Bid Preparation & Submission",
        desc: "Complete bid response preparation — technical compliance statements, commercial documents, BoQ pricing, and portal submission. For Reverse Auctions, we provide live strategy and real-time participation support.",
      },
      {
        title: "EMD, PBG & Securities Management",
        desc: "Earnest Money Deposit arrangement, MSME/Udyam exemption advisory, bank guarantee coordination, ePBG submission on the portal, and systematic tracking and refund follow-up. No EMD forfeiture. No missed deadlines.",
      },
      {
        title: "Order Execution & Payment Recovery",
        desc: "Order acceptance, dispatch documentation, invoice preparation, and systematic payment follow-up with buyer departments and accounts teams. Every rupee tracked until it arrives in your account — because winning a bid means nothing without collecting the payment.",
      },
      {
        title: "GeM Catalogue Digital Marketing",
        desc: "This is where Nexus360's digital expertise becomes your competitive advantage. We apply SEO principles to your GeM catalogue — keyword-optimised titles, search-aligned specifications, and content structured for maximum visibility within the GeM search engine and beyond.",
      },
      {
        title: "Traditional Government Tender Consulting",
        desc: "For clients ready to move beyond GeM into CPPP, state eProcurement portals, PSU procurement, and defence procurement. Covers vendor registration, pre-bid meetings, technical and commercial bid preparation, and full contract lifecycle management through to closure.",
      },
    ],
    benefits: [
      "Full-cycle coverage — registration to final payment, under one engagement",
      "Digital-first advantage — GeM catalogue optimised for search visibility",
      "Delhi-NCR expertise — local buyer patterns and procurement priorities understood",
      "Nexus360 integration — GeM presence backed by SEO, content, and brand credibility",
      "No missed bids — AI-assisted monitoring across all relevant GeM categories",
      "MSME exemption maximised — Udyam benefits applied at every eligible stage",
      "Transparent reporting — bid pipeline, order status, and payment tracker monthly",
    ],
    process: [
      "GeM Readiness Assessment — we review your current status, product/service category, Udyam registration, certifications, and digital presence. Clear action plan delivered within three business days.",
      "Strategy & Roadmap — a custom roadmap across GeM setup, catalogue, bid strategy, and supporting digital presence — sequenced for fastest time to first order.",
      "GeM Setup & Catalogue Live — profile completed, catalogue built, OEM documentation handled, compliance verified. Your business is visible to government buyers across India.",
      "First Bid Identification & Execution — we identify, screen, prepare, and submit your first bid. Reverse Auction strategy and live participation support included.",
      "Measure, Optimise & Grow — bid pipeline, catalogue performance, vendor rating, and payment status tracked monthly. Continuous optimisation across GeM and supporting digital channels.",
    ],
    faqs: [
      {
        q: "Do we need to already be registered on GeM to use this service?",
        a: "No. We handle registration from scratch — or clean up and complete a dormant or partial registration. Most of our clients start from zero or with an incomplete account.",
      },
      {
        q: "How is Nexus360's GeM service different from a standalone tender consultant?",
        a: "Most tender consultants stop at the procurement layer — registration, bids, documents. Nexus360 goes further: we optimise your GeM catalogue for search visibility, build the digital brand credibility that makes government buyers trust you, and integrate GeM with your wider online presence. No standalone consultant offers this.",
      },
      {
        q: "Can you help if our GeM account is incomplete or was abandoned?",
        a: "Yes — this is one of the most common situations we encounter. We audit what exists, identify what is missing or incorrectly structured, and complete the setup properly.",
      },
      {
        q: "Do you cover traditional government tenders, not just GeM?",
        a: "Yes. GeM is the recommended starting point for most MSMEs. As your experience and credentials build, we support your entry into traditional eProcurement tenders — CPPP, state portals, PSU procurement, and more.",
      },
      {
        q: "What is the engagement model?",
        a: "Ongoing retainer partnership — not a one-time service. We stay with you from first registration through to recurring government revenue, with monthly reviews, continuous bid monitoring, and catalogue management included.",
      },
      {
        q: "How quickly can we expect our first GeM order?",
        a: "For a business starting from scratch with a clear product or service category, most clients receive their first order within 8–14 weeks of engagement — depending on category competitiveness and catalogue approval timelines.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
