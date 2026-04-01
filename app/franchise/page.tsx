import type { Metadata } from "next";
import KemitraanClient from "@/components/kemitraan/KemitraanClient";

export const metadata: Metadata = {
  title: "Franchise & Investment | Bandar Laundry Express",
  description:
    "Join Bandar Laundry Express as a franchise and investment partner. Proven system, 100,000+ customers, and scalable growth opportunity across Bali.",
  keywords: [
    "franchise laundry bali",
    "investasi laundry bali",
    "bandar laundry franchise",
    "laundry franchise indonesia",
    "franchise and investment bali",
  ],
  openGraph: {
    title: "Bandar Laundry Express — Franchise & Investment Opportunity",
    description:
      "A scalable, proven laundry franchise and investment opportunity in Bali's growing market.",
    url: "https://bandar-laundry-manus.vercel.app/franchise",
  },
};

export default function FranchisePage() {
  return <KemitraanClient />;
}
