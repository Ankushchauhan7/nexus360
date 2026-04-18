import { MetadataRoute } from 'next';
import { services } from '@/lib/services-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nexus360degree.com';
  const serviceUrls = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.9 },
    ...serviceUrls,
  ];
}