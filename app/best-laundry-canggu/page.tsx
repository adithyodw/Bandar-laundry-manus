import type { Metadata } from "next";
import Link from "next/link";
import { WA_LINK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best Laundry in Canggu Bali 2025 — Bandar Laundry Express Guide",
  description:
    "Looking for the best laundry in Canggu Bali? Bandar Laundry Express offers the fastest, most reliable laundry service near Canggu. 90-minute turnaround.",
  openGraph: {
    title: "Best Laundry in Canggu Bali 2025 Guide",
    description: "Find the best laundry near Canggu Bali. Bandar Laundry Express: 90-minute service, affordable prices.",
  },
};

export default function BestLaundryCangguPage() {
  return (
    <>
      <section className="relative bg-[#0D1B2A] pt-32 pb-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg')] bg-cover bg-center" />
        <div className="relative container max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Best Laundry Canggu</span>
          </nav>
          <span className="section-label">Laundry Guide</span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Best Laundry in
            <br />
            <span className="italic text-[#F5A623]">Canggu Bali</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            A complete guide to laundry services in Canggu — who's reliable, what to expect, and why digital nomads, surfers, and villa guests trust Bandar Laundry Express.
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-brand">
              <h2>Why Finding Good Laundry in Canggu Matters</h2>
              <p>
                Canggu has evolved from a quiet rice paddy village into one of Bali&apos;s most vibrant lifestyle destinations. Home to surf breaks, co-working spaces, healthy cafés, and a buzzing expat community, Canggu attracts digital nomads, surfers, wellness travelers, and long-stay visitors from around the world.
              </p>
              <p>
                With that lifestyle comes a real need: reliable laundry. After a morning surf, a full day of client calls, or a week of beach and rice field adventures, you want your clothes clean without the hassle. Not all laundry services in Canggu are created equal.
              </p>

              <h2>What to Look for in Canggu Laundry Services</h2>
              <p>When evaluating laundry services near Canggu, here is what really matters:</p>
              <ul>
                <li><strong>Turnaround time</strong> — Do they actually deliver on time?</li>
                <li><strong>Fabric care</strong> — Are delicate items, activewear, and surf gear handled correctly?</li>
                <li><strong>Transparency</strong> — Clear pricing with no surprise charges</li>
                <li><strong>Reliability</strong> — Consistency day after day, week after week</li>
                <li><strong>Convenience</strong> — Easy drop-off, pickup, or delivery options</li>
              </ul>

              <h2>Bandar Laundry Express Near Canggu</h2>
              <p>
                Bandar Laundry Express is the most recommended laundry service for the Canggu area. Our nearest branches in Badung and Denpasar are easily accessible from the Canggu corridor, and we offer pickup and delivery for customers who prefer not to make the trip.
              </p>
              <p>
                What sets us apart in the Canggu market is our <strong>90-minute express service</strong> — unmatched in the area. Surfers love the fact that they can drop wet gear in the morning and collect it fresh before sunset. Digital nomads appreciate the transparent WhatsApp-based ordering with no apps required.
              </p>

              <h2>Laundry Prices in Canggu</h2>
              <p>
                Laundry prices in Canggu typically range from Rp 5.000 to Rp 12.000 per kg depending on the service level. At Bandar Laundry Express, our pricing is:
              </p>
              <ul>
                <li>Express laundry: Starting from <strong>Rp 7.000/kg</strong></li>
                <li>Regular laundry: Starting from <strong>Rp 5.000/kg</strong></li>
                <li>Ironing: Starting from <strong>Rp 3.000/item</strong></li>
              </ul>
              <p>
                We believe premium doesn&apos;t mean expensive. Our prices are fair, transparent, and inclusive of wash, dry, and fold.
              </p>

              <h2>Frequently Asked Questions About Laundry in Canggu</h2>
              <h3>Is there express laundry near Canggu?</h3>
              <p>
                Yes — Bandar Laundry Express offers 90-minute turnaround service via our branches near Canggu. Contact us via WhatsApp to place your order and arrange drop-off or pickup.
              </p>
              <h3>Do Canggu laundry services handle surf gear?</h3>
              <p>
                At Bandar Laundry Express, we handle surf gear, wetsuits, rash guards, and other activewear with care. We use fabric-appropriate washing methods to maintain the integrity of technical fabrics.
              </p>

              <div className="not-prose mt-10 bg-[#1B3FA0] p-8 text-white">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Ready to Order Laundry Near Canggu?
                </h3>
                <p className="text-white/75 mb-5">
                  Contact Bandar Laundry Express via WhatsApp for fast, reliable laundry service near Canggu. We&apos;ll handle your order from pickup to delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex">
                    Order via WhatsApp
                  </a>
                  <Link href="/laundry-canggu" className="btn-outline-white inline-flex">
                    Laundry Canggu Page
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#FAF8F4] p-5 border border-slate-200">
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#F5A623] mb-4">Quick Summary</div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2"><span className="text-[#F5A623]">✓</span> 90-minute express service</li>
                    <li className="flex gap-2"><span className="text-[#F5A623]">✓</span> From Rp 5.000/kg</li>
                    <li className="flex gap-2"><span className="text-[#F5A623]">✓</span> Pickup & delivery available</li>
                    <li className="flex gap-2"><span className="text-[#F5A623]">✓</span> Open daily 07:00–22:00</li>
                    <li className="flex gap-2"><span className="text-[#F5A623]">✓</span> WhatsApp ordering</li>
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa w-full justify-center mt-5 block text-center">
                    Order Now
                  </a>
                </div>

                <div className="bg-white p-5 border border-slate-200">
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#F5A623] mb-4">Related Articles</div>
                  <nav className="space-y-2">
                    <Link href="/laundry-price-bali" className="block text-sm text-[#1B3FA0] hover:text-[#F5A623] transition-colors py-1 border-b border-slate-100">Laundry Prices in Bali →</Link>
                    <Link href="/laundry-near-me-bali" className="block text-sm text-[#1B3FA0] hover:text-[#F5A623] transition-colors py-1 border-b border-slate-100">Laundry Near Me Bali →</Link>
                    <Link href="/laundry-canggu" className="block text-sm text-[#1B3FA0] hover:text-[#F5A623] transition-colors py-1 border-b border-slate-100">Laundry Canggu Page →</Link>
                    <Link href="/faq-laundry-bali" className="block text-sm text-[#1B3FA0] hover:text-[#F5A623] transition-colors py-1">FAQ — Laundry Bali →</Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
