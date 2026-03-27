import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Ironing Service Bali — Professional Pressing | Bandar Laundry Express",
  description:
    "Professional ironing service in Bali. Steam pressing for shirts, trousers, dresses, and formal wear. Delivered crisp and wrinkle-free at Bandar Laundry Express.",
};

const serviceData = {
  slug: "ironing-service-bali",
  title: "Ironing Service",
  subtitle: "Crisp & Wrinkle-Free",
  desc: "Professional steam ironing for shirts, trousers, dresses, and formal wear. Delivered crisp, neat, and ready to wear. Same-day service available.",
  price: "Starting from Rp 3.000/item",
  features: ["Steam ironing", "Formal & casual wear", "Shirts, trousers, dresses", "Same-day available", "Hanger service option"],
  longDesc:
    "Appearance matters, especially in Bali's vibrant hospitality scene. Our professional ironing service uses steam pressing equipment to deliver perfectly crisp garments every time. From business shirts to cocktail dresses, linen suits to Balinese traditional wear, we handle each item with the precision it deserves. Perfect for hotel guests attending business meetings, wedding guests, or anyone who needs to look their best in Bali's tropical climate.",
  benefits: [
    { title: "Steam Pressing Quality", desc: "Professional steam equipment removes stubborn wrinkles even from difficult fabrics like linen and silk." },
    { title: "Same-Day Available", desc: "Need something urgent? Our same-day ironing service has you covered." },
    { title: "All Garment Types", desc: "From casual t-shirts to formal suits and traditional Balinese attire." },
    { title: "Hanger Option", desc: "Dress shirts and jackets can be returned on hangers to keep them wrinkle-free." },
  ],
  process: [
    { step: "01", title: "Bring Your Garments", desc: "Drop off items that need pressing at any of our branches." },
    { step: "02", title: "Fabric Assessment", desc: "We check each item's fabric type and care label to set the right temperature." },
    { step: "03", title: "Steam Press", desc: "Each garment is carefully pressed using professional steam equipment." },
    { step: "04", title: "Ready to Wear", desc: "Collected on hangers or neatly folded — crisp and ready to wear." },
  ],
};

export default function IroningServiceBaliPage() {
  return <ServicePage data={serviceData} />;
}
