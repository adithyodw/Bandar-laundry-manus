import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Regular Laundry Bali — Affordable Wash & Fold | Bandar Laundry Express",
  description:
    "Affordable regular laundry service in Bali. Full wash, dry, and fold with careful attention to fabrics. Starting from Rp 5.000/kg at Bandar Laundry Express.",
};

const serviceData = {
  slug: "regular-laundry-bali",
  title: "Regular Laundry",
  subtitle: "Standard Care",
  desc: "Full wash, dry, and fold service with careful attention to fabric types and garment care instructions. Ideal for everyday laundry at a great price.",
  price: "Starting from Rp 5.000/kg",
  features: ["Next-day delivery", "Fabric-specific care", "Wash + dry + fold", "Color separation", "Available daily 07:00–22:00"],
  longDesc:
    "Our Regular Laundry service is the go-to choice for everyday laundry needs. Priced affordably and handled with care, this service provides a thorough wash, proper drying, and neat folding for all fabric types. We separate colors from whites, check garment care labels, and use fabric-appropriate detergents to ensure your clothes come back in perfect condition. It's the reliable, no-fuss laundry solution for Bali residents and long-stay visitors.",
  benefits: [
    { title: "Affordable Price", desc: "Starting from just Rp 5.000/kg, it's the most cost-effective laundry solution in Bali." },
    { title: "Fabric-Specific Care", desc: "We check care labels and handle each fabric type appropriately." },
    { title: "Color Separation", desc: "Darks and whites are washed separately to prevent color bleeding." },
    { title: "Consistent Results", desc: "Same high-quality results every time — that's our promise." },
  ],
  process: [
    { step: "01", title: "Drop Off Your Laundry", desc: "Visit any of our 9 branches and drop off your laundry for the regular service." },
    { step: "02", title: "Sort & Check Labels", desc: "We sort your clothes by color and check care instructions for each item." },
    { step: "03", title: "Full Wash & Dry", desc: "Thoroughly washed with the appropriate detergent and dried to the right level." },
    { step: "04", title: "Folded & Ready", desc: "Neatly folded and ready for pickup by the next day." },
  ],
};

export default function RegularLaundryBaliPage() {
  return <ServicePage data={serviceData} />;
}
