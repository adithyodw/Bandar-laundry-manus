import type { MetadataRoute } from "next";

const BASE_URL = "https://bandar-laundry-manus.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const locationPages = [
    "laundry-kuta",
    "laundry-seminyak",
    "laundry-canggu",
    "laundry-ubud",
    "laundry-denpasar",
    "laundry-jimbaran",
    "laundry-sanur",
    "laundry-nusa-dua",
  ];

  const servicePages = [
    "express-laundry-bali",
    "regular-laundry-bali",
    "ironing-service-bali",
    "commercial-laundry-bali",
  ];

  const blogPages = [
    "best-laundry-canggu",
    "laundry-price-bali",
    "laundry-near-me-bali",
  ];

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/laundry-bali`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/franchise`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/faq-laundry-bali`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...locationPages.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...servicePages.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPages.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
