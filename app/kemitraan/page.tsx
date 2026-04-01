import type { Metadata } from "next";
import KemitraanClient from "@/components/kemitraan/KemitraanClient";

export const metadata: Metadata = {
  title: "Kemitraan | Bandar Laundry Express Partnership Opportunity",
  description:
    "Bergabunglah sebagai mitra Bandar Laundry Express. Sistem bisnis terbukti, 100.000+ pelanggan, 9+ cabang di Bali. Investasi mulai IDR 350 juta. Join Bali's leading laundry franchise.",
  keywords: [
    "franchise laundry bali",
    "kemitraan laundry bali",
    "investasi laundry bali",
    "bandar laundry franchise",
    "laundry franchise indonesia",
    "bisnis laundry bali",
  ],
  openGraph: {
    title: "Kemitraan Bandar Laundry Express — Partnership Opportunity",
    description:
      "A scalable, proven laundry franchise opportunity in Bali's growing market. Over 100,000 customers served.",
    url: "https://bandar-laundry-manus.vercel.app/kemitraan",
  },
};

export default function KemitraanPage() {
  return <KemitraanClient />;
}
