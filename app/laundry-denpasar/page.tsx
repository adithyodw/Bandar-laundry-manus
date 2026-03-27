import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { locationPages } from "@/lib/data";

const data = locationPages.find((l) => l.slug === "laundry-denpasar")!;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  openGraph: { title: data.title, description: data.description },
};

export default function LaundryDenpasarPage() {
  return <LocationPage data={data} />;
}
