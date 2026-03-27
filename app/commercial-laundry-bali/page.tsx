import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Laundry Bali — Hotels, Villas & Restaurants | Bandar Laundry Express",
  description:
    "Commercial laundry service in Bali for hotels, villas, restaurants, and spas. Bulk volume pricing, scheduled pickup, and hotel-grade quality from Bandar Laundry Express.",
};

const serviceData = {
  slug: "commercial-laundry-bali",
  title: "Commercial Laundry",
  subtitle: "Hotels & Villas",
  desc: "Bulk laundry solutions for hotels, villas, restaurants, and spas. Reliable, consistent, and scalable to your business needs across Bali.",
  price: "Custom pricing for bulk orders",
  features: ["Bulk volume pricing", "Hotel-grade quality", "Scheduled pickup & delivery", "Dedicated account manager", "Priority handling"],
  longDesc:
    "Bandar Laundry Express is the preferred commercial laundry partner for hotels, villas, restaurants, and hospitality businesses across Bali. Our commercial service is designed for volume without sacrificing quality. We understand that your linens, uniforms, and guest garments represent your brand — and we treat every item with the same care and professionalism your guests expect. With scheduled pickup and delivery, dedicated account management, and flexible bulk pricing, we make laundry one less thing to worry about.",
  benefits: [
    { title: "Hotel-Grade Quality", desc: "The same standards used by Bali's finest hotels, applied to every batch we handle." },
    { title: "Scheduled Service", desc: "We work around your operational schedule with regular pickup and delivery times." },
    { title: "Volume Discounts", desc: "Competitive bulk pricing with transparent, per-item or per-kg rates." },
    { title: "Dedicated Support", desc: "Your own account manager ensures consistent quality and quick issue resolution." },
  ],
  process: [
    { step: "01", title: "Consultation", desc: "We discuss your volume, frequency, and specific requirements to tailor the service." },
    { step: "02", title: "Scheduled Pickup", desc: "We collect your laundry at agreed times, minimizing disruption to your operations." },
    { step: "03", title: "Commercial Processing", desc: "High-volume washing and drying in our commercial-grade facilities." },
    { step: "04", title: "Delivery & Reporting", desc: "Clean linens delivered on schedule with full inventory tracking." },
  ],
};

export default function CommercialLaundryBaliPage() {
  return <ServicePage data={serviceData} />;
}
