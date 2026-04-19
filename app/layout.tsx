import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DeferredVercelMetrics from "@/components/DeferredVercelMetrics";
import MotionProvider from "@/components/MotionProvider";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Detect iOS server-side so SSR and client hydration agree on reducedMotion.
  // Previously, MotionProvider used a useState initializer that read
  // window.__IOS_WEBKIT__ on the client — but the server always returned
  // reducedMotion="user", causing a DOM hydration mismatch (SSR HTML had
  // opacity:0/translateY on motion elements; client iOS wanted no styles).
  // React's recovery re-render burst ~50 Framer Motion GPU compositor layers,
  // exhausting iOS WebKit's per-tab memory limit → "Can't open this page".
  const ua = (await headers()).get("user-agent") ?? "";
  const isIos = /iP(ad|hone|od)/i.test(ua);

  return (
    // data-ios attribute is set server-side so CSS selectors like html[data-ios]
    // apply on first paint across ALL iOS browsers (Safari, Chrome, Firefox iOS).
    // @supports (-webkit-touch-callout: none) only matched Safari — never Chrome iOS.
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      {...(isIos ? { "data-ios": "" } : {})}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteGraphLd),
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <MotionProvider reducedMotion={isIos ? "always" : "user"}>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </MotionProvider>
        <DeferredVercelMetrics />
      </body>
    </html>
  );
}
