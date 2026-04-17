# Nexu360 — Complete Website

**Total Digital Growth Partner** | Next.js 15 · Tailwind CSS · Motion.dev · TypeScript

---

## Quick Start

### Prerequisites
Node.js v18 or higher — download from https://nodejs.org

### 1. Install dependencies
```bash
cd nexu360
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Pages

| Route                          | Page                        |
|--------------------------------|-----------------------------|
| `/`                            | Homepage                    |
| `/about`                       | About Us                    |
| `/contact`                     | Contact & Free Audit Form   |
| `/portfolio`                   | Portfolio & Case Studies     |
| `/portfolio/[slug]`            | Individual Case Study        |
| `/services/[slug]`             | Individual Service Page      |

### Service page slugs
- `/services/web-development`
- `/services/seo`
- `/services/social-media-marketing`
- `/services/content-marketing`
- `/services/creative-design`
- `/services/technical-documentation`
- `/services/performance-marketing`
- `/services/ai-powered-solutions`

### Case study slugs
- `/portfolio/saas-platform-seo-growth`
- `/portfolio/ecommerce-revenue-growth`
- `/portfolio/b2b-brand-identity-launch`
- `/portfolio/healthcare-social-media-growth`
- `/portfolio/edtech-documentation-overhaul`
- `/portfolio/startup-performance-marketing`

---

## Tech Stack

| Tool              | Purpose                                    |
|-------------------|--------------------------------------------|
| Next.js 15        | Framework (App Router, SSG, SSR)           |
| Tailwind CSS v3   | Utility-first styling                      |
| Motion.dev        | Scroll animations, page transitions        |
| TypeScript        | Type safety across all files               |
| React Hook Form   | Contact form with validation               |
| EmailJS           | Contact form email delivery (no backend)   |
| Lucide React      | Icon library                               |
| next/font         | Zero-layout-shift font loading             |

---

## Project Structure

```
nexu360/
├── app/
│   ├── layout.tsx                  Root layout — fonts, metadata
│   ├── page.tsx                    Homepage
│   ├── globals.css                 Tailwind + CSS variables + animations
│   ├── about/
│   │   └── page.tsx                About Us page
│   ├── contact/
│   │   └── page.tsx                Contact page
│   ├── portfolio/
│   │   ├── page.tsx                Portfolio listing
│   │   └── [slug]/page.tsx         Case study detail (dynamic)
│   └── services/
│       └── [slug]/page.tsx         Service detail (dynamic)
│
├── components/
│   ├── Navbar.tsx                  Fixed nav — scroll-aware, mobile menu
│   ├── Hero.tsx                    Homepage hero
│   ├── Marquee.tsx                 Gold ticker strip
│   ├── Services.tsx                Homepage service cards grid
│   ├── WhyUs.tsx                   Differentiators + metrics
│   ├── Process.tsx                 5-step process timeline
│   ├── Industries.tsx              Industry tiles
│   ├── CtaBanner.tsx               Homepage CTA
│   ├── Footer.tsx                  4-column footer
│   │
│   ├── about/
│   │   ├── AboutHero.tsx           About hero + quick nav
│   │   ├── AboutStory.tsx          Two-column story section
│   │   ├── AboutStats.tsx          4-metric stats strip
│   │   ├── AboutValues.tsx         6 core values grid
│   │   ├── AboutTeam.tsx           Team cards + hiring CTA
│   │   ├── AboutWhy.tsx            Nexu360 vs typical agencies table
│   │   └── AboutCTA.tsx            About page bottom CTA
│   │
│   ├── contact/
│   │   ├── ContactHero.tsx         Contact hero
│   │   ├── ContactForm.tsx         React Hook Form + EmailJS
│   │   ├── ContactInfo.tsx         Sidebar — details, hours, socials
│   │   ├── ContactServices.tsx     Service tiles linking to detail pages
│   │   └── ContactFAQ.tsx          8-item accordion FAQ
│   │
│   ├── portfolio/
│   │   ├── PortfolioHero.tsx       Portfolio listing hero
│   │   ├── PortfolioStats.tsx      Aggregate metrics strip
│   │   ├── PortfolioGrid.tsx       Filterable case study cards
│   │   ├── PortfolioCTA.tsx        Portfolio listing CTA
│   │   ├── CaseStudyHero.tsx       Case study detail hero
│   │   ├── CaseStudyChallenge.tsx  Challenge section
│   │   ├── CaseStudyApproach.tsx   Approach steps
│   │   ├── CaseStudyResults.tsx    Results + metrics
│   │   ├── CaseStudyRelated.tsx    Related studies
│   │   └── CaseStudyCTA.tsx        Case study CTA
│   │
│   └── services/
│       ├── ServiceHero.tsx         Service page hero
│       ├── ServiceOfferings.tsx    Offerings list
│       ├── ServiceBenefits.tsx     Benefits checklist
│       ├── ServiceProcess.tsx      Process steps
│       ├── ServiceFAQ.tsx          Per-service FAQ accordion
│       ├── ServiceSidebar.tsx      Sticky nav + CTA
│       └── ServiceCTA.tsx          Service page bottom CTA
│
├── lib/
│   ├── services-data.ts            All 8 services — content & structure
│   └── portfolio-data.ts           All 6 case studies — full data
│
└── public/                         Place images, logos, favicon here
```

---

## Customisation Guide

| What to change              | Where                                    |
|-----------------------------|------------------------------------------|
| Brand colours               | `app/globals.css` → `:root` variables    |
| Fonts                       | `app/layout.tsx` → next/font setup       |
| Company name / tagline      | `components/Navbar.tsx`, `Hero.tsx`      |
| Hero headline               | `components/Hero.tsx`                    |
| Service content             | `lib/services-data.ts`                   |
| Case studies                | `lib/portfolio-data.ts`                  |
| Team members                | `components/about/AboutTeam.tsx`         |
| Contact email               | `components/contact/ContactForm.tsx`     |
| Contact details             | `components/contact/ContactInfo.tsx`     |
| Footer links                | `components/Footer.tsx`                  |
| Page SEO metadata           | Each `app/*/page.tsx` → `metadata` export|

---

## Setting Up the Contact Form (EmailJS)

See `EMAILJS_SETUP.md` for the full step-by-step guide.

Quick summary:
1. Sign up free at https://emailjs.com
2. Connect your Gmail or other email service
3. Create an email template
4. Add your Service ID, Template ID, and Public Key to `ContactForm.tsx`

---

## Deploying to Vercel (Recommended — Free)

```bash
# Option 1 — Vercel CLI
npm install -g vercel
vercel

# Option 2 — GitHub + Vercel dashboard
# 1. Push this folder to a GitHub repository
# 2. Go to https://vercel.com → New Project
# 3. Import your repo — Vercel auto-detects Next.js
# 4. Click Deploy → live in ~60 seconds
```

Add your EmailJS environment variables in Vercel:
**Project Settings → Environment Variables**

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

---

## Build for Production

```bash
npm run build    # Compiles and optimises
npm start        # Runs production server locally
```

---

## Adding a Blog (Future — Round 7)

Recommended CMS: **Sanity** (free tier, excellent Next.js integration)
- Install: `npm install next-sanity @sanity/image-url`
- Schema: Define post types in `sanity/schemas/`
- Pages: Add `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`
