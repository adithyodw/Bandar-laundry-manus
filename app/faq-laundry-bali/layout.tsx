import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "FAQ — Laundry Bali, Prices & Express Service | Bandar Laundry Express",
  description:
    "FAQ: laundry Bali prices, 90-minute express laundry, pickup, areas (Kuta, Seminyak, Canggu, Ubud), hotels & franchise. Clear answers for Google featured snippets and AI search.",
  alternates: { canonical: `${SITE_URL}/faq-laundry-bali` },
  openGraph: {
    title: "Laundry Bali FAQ | Bandar Laundry Express",
    url: `${SITE_URL}/faq-laundry-bali`,
  },
};

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children;
}
