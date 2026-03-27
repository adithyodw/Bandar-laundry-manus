import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BranchesSection from "@/components/sections/BranchesSection";
import FranchiseSection from "@/components/sections/FranchiseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramSection from "@/components/sections/InstagramSection";

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
      <InstagramSection />
    </>
  );
}
