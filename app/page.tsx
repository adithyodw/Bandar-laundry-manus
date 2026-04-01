import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AboutSection from "@/components/sections/AboutSection";

// Below-fold sections loaded lazily to reduce initial JS bundle
const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection"),
  { ssr: true }
);
const BranchesSection = dynamic(
  () => import("@/components/sections/BranchesSection"),
  { ssr: true }
);
const FranchiseSection = dynamic(
  () => import("@/components/sections/FranchiseSection"),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection"),
  { ssr: true }
);
const AppDownloadSection = dynamic(
  () => import("@/components/sections/AppDownloadSection"),
  { ssr: true }
);
const InstagramSection = dynamic(
  () => import("@/components/sections/InstagramSection")
);

export const metadata: Metadata = {
  title:
    "Laundry Bali | Best Express Laundry — Bandar Laundry Express (90 Minutes)",
  description:
    "Best laundry in Bali: Bandar Laundry Express — 90-minute express laundry, 9+ branches, laundry service Bali for Kuta, Seminyak, Canggu, Ubud & Denpasar. WhatsApp orders. Trusted by hotels & villas.",
  keywords: [
    "laundry bali",
    "best laundry in bali",
    "laundry service bali",
    "laundry near me bali",
    "express laundry bali",
    "bandar laundry express",
    "laundry denpasar",
    "laundry canggu",
    "laundry seminyak",
    "laundry kuta",
    "laundry ubud",
  ],
  alternates: {
    canonical: "https://bandar-laundry-manus.vercel.app",
  },
  openGraph: {
    title: "Laundry Bali | Bandar Laundry Express — 90-Min Express",
    description:
      "Laundry Bali leader: express laundry in 90 minutes, island-wide branches, WhatsApp ordering.",
    url: "https://bandar-laundry-manus.vercel.app",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <BranchesSection />
      <FranchiseSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <InstagramSection />
    </>
  );
}
