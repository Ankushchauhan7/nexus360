import type { Metadata } from "next";
import { Bebas_Neue, DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Nexu360 — Total Digital Growth Partner",
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
  openGraph: {
    title: "Nexu360 — Total Digital Growth Partner",
    description: "One Partner. Every Channel. Total Growth.",
    type: "website",
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
      </body>
    </html>
  );
}
