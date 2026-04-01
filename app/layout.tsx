import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { testimonials } from "@/lib/data";
import { buildSiteJsonLdGraph } from "@/lib/jsonld";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/site";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0D1B2A" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1B2A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Laundry Bali | Best Express Laundry Service — Bandar Laundry Express",
    template: "%s | Bandar Laundry Express Bali",
  },
  description:
    "Best laundry in Bali: 90-minute express laundry, 9+ branches across Denpasar & Badung. Laundry service Bali for Kuta, Seminyak, Canggu, Ubud — wash, fold, ironing & commercial. Order on WhatsApp.",
  keywords: [
    "laundry bali",
    "best laundry in bali",
    "laundry service bali",
    "laundry near me bali",
    "express laundry bali",
    "laundry kuta",
    "laundry seminyak",
    "laundry canggu",
    "laundry ubud",
    "laundry denpasar",
    "bandar laundry express",
    "digital laundry bali",
    "hotel laundry bali",
    "villa laundry bali",
  ],
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/logo-hd.png",
    apple: "/logo-hd.png",
  },
  authors: [{ name: "Bandar Laundry Express" }],
  creator: "Bandar Laundry Express",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bandar Laundry Express",
    title: "Laundry Bali — Bandar Laundry Express | 90-Min Express",
    description:
      "Laundry Bali done right: express service in 90 minutes, island-wide coverage via 9+ branches. Trusted for laundry Kuta, Seminyak, Canggu, Ubud & Denpasar.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Bandar Laundry Express — laundry service Bali, express wash and fold",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laundry Bali | Bandar Laundry Express",
    description:
      "Best laundry service Bali: 90-minute express, 9+ branches, WhatsApp ordering.",
    images: [DEFAULT_OG_IMAGE],
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

const siteGraphLd = buildSiteJsonLdGraph(testimonials);

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
            __html: JSON.stringify(siteGraphLd),
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
