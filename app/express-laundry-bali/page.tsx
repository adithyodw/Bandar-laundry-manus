import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Express Laundry Bali — 90 Minute Service | Bandar Laundry Express",
  description:
    "Express laundry in Bali ready in 90 minutes. Bandar Laundry Express offers the fastest laundry turnaround across 9 branches in Denpasar and Badung.",
  openGraph: {
    title: "Express Laundry Bali — 90 Minutes | Bandar Laundry Express",
    description: "Get your laundry done in 90 minutes at Bandar Laundry Express Bali.",
  },
};

const serviceData = {
  slug: "express-laundry-bali",
  title: "Express Laundry",
  subtitle: "Ready in 90 Minutes",
  desc: "Our signature service. Drop off your clothes and collect them fresh, clean, and neatly folded within 90 minutes. Available at all 9 branches across Bali.",
  price: "Starting from Rp 7.000/kg",
  features: ["Ready in 90 minutes", "Wash + dry + fold", "Fragrant detergent", "Quality guarantee", "Available daily 07:00–22:00"],
  longDesc:
    "Bandar Laundry Express is renowned for its signature 90-minute express laundry service — the fastest professional laundry turnaround in Bali. Whether you are a hotel guest needing fresh clothes before a meeting, a surfer with salt-soaked gear, or a local resident on a tight schedule, our express service delivers without compromise. We use premium, fabric-safe detergents and modern equipment to ensure your clothes come out fresh, clean, and perfectly folded every time.",
  benefits: [
    { title: "Genuinely Fast", desc: "We guarantee 90-minute turnaround during operational hours at all branches." },
    { title: "No Compromise on Quality", desc: "Speed doesn't mean shortcuts. Every garment is washed, dried, and folded with care." },
    { title: "Transparent Pricing", desc: "Simple weight-based pricing. No hidden fees, no surprises." },
    { title: "Professional Handling", desc: "Fabric-specific care. Delicates handled separately." },
  ],
  process: [
    { step: "01", title: "Drop Off or Contact Us", desc: "Bring your laundry to any of our 9 branches, or message us on WhatsApp to arrange pickup." },
    { step: "02", title: "We Weigh & Sort", desc: "Your laundry is weighed for accurate pricing, then sorted by fabric type and color." },
    { step: "03", title: "Wash, Dry & Fold", desc: "Washed with premium detergent, dried to perfection, and neatly folded." },
    { step: "04", title: "Ready in 90 Minutes", desc: "Collect your fresh laundry in under 90 minutes. We'll notify you when it's ready." },
  ],
};

export default function ExpressLaundryBaliPage() {
  return <ServicePage data={serviceData} />;
}
