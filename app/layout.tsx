import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bandar-laundry-manus.vercel.app"),
  title: {
    default: "Bandar Laundry Express Bali — Premium Laundry Service",
    template: "%s | Bandar Laundry Express Bali",
  },
  description:
    "Bali's #1 express laundry service. 90-minute turnaround across 9 branches in Denpasar and Badung. Fast, clean, and reliable — trusted by hotels, villas, and residents.",
  keywords: [
    "laundry bali",
    "laundry express bali",
    "express laundry bali",
    "laundry canggu",
    "laundry seminyak",
    "laundry denpasar",
    "laundry kuta",
    "bandar laundry express",
    "laundry service bali",
    "laundry kiloan bali",
  ],
  authors: [{ name: "Bandar Laundry Express" }],
  creator: "Bandar Laundry Express",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bandar-laundry-manus.vercel.app",
    siteName: "Bandar Laundry Express",
    title: "Bandar Laundry Express — Premium Laundry Service in Bali",
    description:
      "90-minute express laundry across 9 branches in Bali. Trusted by hotels, villas, residents, and businesses.",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg",
        width: 1200,
        height: 630,
        alt: "Bandar Laundry Express Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bandar Laundry Express — Premium Laundry Service in Bali",
    description:
      "90-minute express laundry across 9 branches in Bali. Trusted by hotels, villas, and residents.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bandar-laundry-manus.vercel.app",
  name: "Bandar Laundry Express",
  description:
    "Bali's first digital laundry service. 90-minute express turnaround across 9 branches in Denpasar and Badung.",
  url: "https://bandar-laundry-manus.vercel.app",
  telephone: "+628173341280",
  email: "adithyodw@gmail.com",
  image:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-logo_110b4814.png",
  logo:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-logo_110b4814.png",
  priceRange: "$$",
  servesCuisine: null,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Kebo Iwa Utara No. 125",
    addressLocality: "Denpasar",
    addressRegion: "Bali",
    postalCode: "80117",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.65,
    longitude: 115.21,
  },
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
  sameAs: ["https://www.instagram.com/bandarlaundryexpress/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bandar Laundry Express",
  url: "https://bandar-laundry-manus.vercel.app",
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-logo_110b4814.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+628173341280",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["English", "Indonesian"],
  },
  sameAs: ["https://www.instagram.com/bandarlaundryexpress/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
