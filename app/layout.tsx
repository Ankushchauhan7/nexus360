import type { Metadata } from "next";
import { Bebas_Neue, DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus360 — Total Digital Growth Partner",
  description:
    "One partner for every dimension of your digital presence. Web development, SEO, social media, content, design, technical documentation, performance marketing, and AI-powered solutions.",
  keywords: [
    "digital marketing",
    "SEO",
    "web development",
    "social media marketing",
    "content marketing",
    "performance marketing",
    "AI solutions",
  ],
  metadataBase: new URL("https://nexus360degree.com"),
  icons: {
    icon: [
      { url: "/favicon.ico",          sizes: "48x48",  type: "image/x-icon" },
      { url: "/favicon-32x32.png",    sizes: "32x32",  type: "image/png"    },
      { url: "/favicon-16x16.png",    sizes: "16x16",  type: "image/png"    },
    ],
    apple:   [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other:   [
      { rel: "mask-icon", url: "/favicon.svg", color: "#00C8F0" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#00C8F0",
  openGraph: {
    title:       "Nexus360° — One Partner. Every Channel. Total Growth.",
    description: "Total connection across every digital touchpoint.",
    url:         "https://nexus360degree.com",
    siteName:    "Nexus360°",
    images: [
      {
        url:    "/og-image.png",   // add a 1200×630 OG image later
        width:  1200,
        height: 630,
        alt:    "Nexus360° — Digital Growth Partner",
      },
    ],
    type: "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Nexus360° — One Partner. Every Channel. Total Growth.",
    description: "Total connection across every digital touchpoint.",
    images:      ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
