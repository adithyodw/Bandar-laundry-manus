import type { Metadata } from "next";
import Link from "next/link";
import { WA_LINK, locationPages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Laundry Near Me Bali — Find the Closest Branch | Bandar Laundry Express",
  description:
    "Looking for laundry near you in Bali? Bandar Laundry Express has 9 branches across Denpasar and Badung. Find the closest branch or order pickup via WhatsApp.",
};

export default function LaundryNearMeBaliPage() {
  return (
    <>
      <section className="relative bg-[#0D1B2A] pt-32 pb-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg')] bg-cover bg-center" />
        <div className="relative container max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Laundry Near Me Bali</span>
          </nav>
          <span className="section-label">Find a Branch</span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Laundry Near Me
            <br />
            <span className="italic text-[#F5A623]">in Bali</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Find the nearest Bandar Laundry Express branch to you, or order via WhatsApp for pickup from your location.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="mb-12 bg-[#1B3FA0] p-8 text-white text-center">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Order Laundry From Anywhere in Bali
            </h2>
            <p className="text-white/75 mb-5 max-w-lg mx-auto">
              Not sure which branch is closest? Just WhatsApp us your location and we&apos;ll guide you to the nearest branch or arrange a pickup.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex">
              Send Your Location on WhatsApp
            </a>
          </div>

          <h2
            className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Laundry by Location in Bali
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Bandar Laundry Express serves all major areas of Bali. Click your nearest area below to find the relevant branch details and place your order.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {locationPages.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="group flex items-center gap-4 p-5 border border-slate-200 hover:border-[#F5A623] bg-[#FAF8F4] hover:bg-white transition-all"
              >
                <div className="w-10 h-10 bg-[#1B3FA0] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div
                    className="font-bold text-[#0D1B2A] group-hover:text-[#1B3FA0] transition-colors"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Laundry {loc.location}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Bandar Laundry Express</div>
                </div>
                <span className="ml-auto text-[#F5A623] text-lg">→</span>
              </Link>
            ))}
          </div>

          <div className="prose-brand">
            <h2>How to Find Laundry Near You in Bali</h2>
            <p>
              Finding a reliable laundry service near you in Bali is now easy with Bandar Laundry Express. Here are three ways to access our service:
            </p>
            <ul>
              <li><strong>Walk-in:</strong> Visit any of our 9 branches in Denpasar and Badung. Open daily 07:00–22:00.</li>
              <li><strong>WhatsApp Pickup:</strong> Message us your location and we&apos;ll arrange a pickup — perfect for hotels, villas, and co-working spaces.</li>
              <li><strong>Scheduled Service:</strong> For commercial clients (hotels, restaurants, villas), we offer regular scheduled pickup and delivery.</li>
            </ul>

            <h2>Coverage Areas</h2>
            <p>
              Our branches and delivery network covers the following areas in Bali:
            </p>
            <ul>
              <li><Link href="/laundry-denpasar" className="text-[#1B3FA0] hover:text-[#F5A623]">Denpasar</Link> — Barat, Selatan, Utara, and Timur</li>
              <li><Link href="/laundry-kuta" className="text-[#1B3FA0] hover:text-[#F5A623]">Kuta</Link> and surrounding Badung areas</li>
              <li><Link href="/laundry-seminyak" className="text-[#1B3FA0] hover:text-[#F5A623]">Seminyak</Link> and Legian</li>
              <li><Link href="/laundry-canggu" className="text-[#1B3FA0] hover:text-[#F5A623]">Canggu</Link> and Pererenan</li>
              <li><Link href="/laundry-ubud" className="text-[#1B3FA0] hover:text-[#F5A623]">Ubud</Link> and Gianyar (pickup available)</li>
              <li><Link href="/laundry-jimbaran" className="text-[#1B3FA0] hover:text-[#F5A623]">Jimbaran</Link>, <Link href="/laundry-nusa-dua" className="text-[#1B3FA0] hover:text-[#F5A623]">Nusa Dua</Link>, and Bukit Peninsula</li>
              <li><Link href="/laundry-sanur" className="text-[#1B3FA0] hover:text-[#F5A623]">Sanur</Link> and East Denpasar</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
