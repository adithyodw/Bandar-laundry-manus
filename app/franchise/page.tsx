import type { Metadata } from "next";
import KemitraanClient from "@/components/kemitraan/KemitraanClient";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Franchise & Investment | Bandar Laundry Express — Bali Laundry Franchise",
  description:
    "Invest in Bali's leading digital laundry franchise. Proven model, 100,000+ customers, 9+ branches. Waralaba Bandar Laundry Express — paket investasi mulai IDR 325 juta.",
  keywords: [
    "franchise laundry bali",
    "laundry franchise indonesia",
    "investasi laundry bali",
    "waralaba laundry bali",
    "bandar laundry franchise",
    "bisnis laundry bali",
  ],
  openGraph: {
    title:
      "Franchise & Investment — Bandar Laundry Express | Bali Opportunity",
    description:
      "A scalable, proven laundry franchise in Bali's growing market. Over 100,000 customers served. Explore store locations and franchise packages.",
    url: absoluteUrl("/franchise"),
  },
};

export default function FranchisePage() {
  return <KemitraanClient />;
}
