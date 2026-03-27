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
  title: "Bandar Laundry Express Bali — Premium Laundry Service | Laundry Bali",
  description:
    "Bandar Laundry Express is Bali's #1 express laundry service. 90-minute turnaround, 9 branches in Denpasar and Badung. Trusted by hotels, villas, and residents. Order via WhatsApp.",
  keywords: [
    "laundry bali",
    "laundry express bali",
    "express laundry bali",
    "bandar laundry express",
    "laundry service bali",
    "laundry denpasar",
    "laundry canggu",
    "laundry seminyak",
  ],
  openGraph: {
    title: "Bandar Laundry Express — Bali's #1 Laundry Service",
    description:
      "90-minute express laundry across 9 branches in Bali. Trusted by hotels, villas, and residents.",
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
