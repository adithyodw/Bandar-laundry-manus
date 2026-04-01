import {
  testimonials,
  branches,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from "@/lib/data";
import {
  SITE_URL,
  LOGO_ABSOLUTE,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from "@/lib/site";

type Testimonial = (typeof testimonials)[number];

const primary = branches[0];

export function buildSiteJsonLdGraph(testimonialList: Testimonial[]) {
  const orgId = `${SITE_URL}/#organization`;
  const businessId = `${SITE_URL}/#localbusiness`;
  const websiteId = `${SITE_URL}/#website`;

  const sameAs = [INSTAGRAM_URL, FACEBOOK_URL].filter(Boolean);

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: "Bandar Laundry Express",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: LOGO_ABSOLUTE },
    image: DEFAULT_OG_IMAGE,
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: primary.phone.replace(/\s/g, ""),
      contactType: "customer service",
      areaServed: ["ID", "Bali"],
      availableLanguage: ["English", "Indonesian"],
    },
  };

  const localBusiness = {
    "@type": ["LocalBusiness", "LaundryService"],
    "@id": businessId,
    name: "Bandar Laundry Express",
    description:
      "Bali's first digital laundry brand. Express laundry in 90 minutes, 9+ branches across Denpasar and Badung. Wash, dry, fold, ironing, and commercial laundry for hotels and villas.",
    url: SITE_URL,
    telephone: primary.phone.replace(/\s/g, ""),
    image: [DEFAULT_OG_IMAGE, LOGO_ABSOLUTE],
    logo: { "@type": "ImageObject", url: LOGO_ABSOLUTE },
    priceRange: "$$",
    parentOrganization: { "@id": orgId },
    address: {
      "@type": "PostalAddress",
      streetAddress: primary.address,
      addressLocality: primary.area,
      addressRegion: "Bali",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.65,
      longitude: 115.21,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Bali" },
      { "@type": "City", name: "Denpasar" },
      { "@type": "City", name: "Badung" },
      { "@type": "Place", name: "Kuta" },
      { "@type": "Place", name: "Seminyak" },
      { "@type": "Place", name: "Canggu" },
      { "@type": "Place", name: "Ubud" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    hasMap: primary.maps,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    review: testimonialList.slice(0, 5).map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.stars),
        bestRating: "5",
      },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE_URL,
    name: "Bandar Laundry Express — Laundry Bali",
    description:
      "Express laundry Bali, 90-minute service, 9+ branches. Best laundry service for Kuta, Seminyak, Canggu, Ubud, Denpasar, and island-wide pickup where available.",
    publisher: { "@id": orgId },
    inLanguage: ["en", "id"],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website],
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildLocalLaundryServiceJsonLd(opts: {
  locationName: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Laundry service in ${opts.locationName}, Bali`,
    description: opts.description,
    serviceType: "Laundry",
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: opts.locationName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Bali",
        containedInPlace: { "@type": "Country", name: "Indonesia" },
      },
    },
    url: absoluteUrl(`/${opts.slug}`),
  };
}
