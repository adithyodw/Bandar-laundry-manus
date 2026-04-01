"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WA_LINK } from "@/lib/data";
import { locationPages } from "@/lib/data";
import {
  buildBreadcrumbJsonLd,
  buildLocalLaundryServiceJsonLd,
} from "@/lib/jsonld";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  stars: number;
};

type LocationData = {
  slug: string;
  location: string;
  intro: string;
  content: string;
  nearbyBranches: string[];
  localTestimonials: Testimonial[];
  mapEmbed: string;
};

export default function LocationPage({ data }: { data: LocationData }) {
  const waLink = `https://wa.me/62817334128?text=Halo%20Bandar%20Laundry%20Express%2C%20saya%20membutuhkan%20laundry%20di%20area%20${encodeURIComponent(data.location)}.`;

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `Laundry ${data.location} Bali`, path: `/${data.slug}` },
  ]);

  const serviceLd = buildLocalLaundryServiceJsonLd({
    locationName: data.location,
    slug: data.slug,
    description: `${data.intro} Express laundry in ${data.location}, Bali — 90-minute service via Bandar Laundry Express.`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <section className="relative bg-[#0D1B2A] pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg')] bg-cover bg-center opacity-20" />
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/80">Laundry {data.location}</span>
            </nav>
            <span className="section-label">Bali Laundry Service</span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-2 mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Best Laundry in
              <br />
              <span className="italic text-[#F5A623]">{data.location} Bali</span>
            </h1>
            <p className="text-white/75 text-lg max-w-2xl leading-relaxed mb-8">
              {data.intro}
            </p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Order Laundry in {data.location}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Laundry Service in {data.location}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">{data.content}</p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At Bandar Laundry Express, we offer express laundry service in {data.location} with a 90-minute turnaround, regular wash and fold, professional ironing, and commercial laundry solutions for hotels, villas, and restaurants in the {data.location} area.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {[
                    { v: "90 Min", l: "Express Service" },
                    { v: "Rp 45.000 / 5kg", l: "Drop Off Price" },
                    { v: "Daily", l: "07:00 – 22:00" },
                  ].map((s) => (
                    <div key={s.l} className="border border-[#F5A623]/30 p-4 text-center">
                      <div
                        className="text-2xl font-bold text-[#1B3FA0]"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {s.v}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <h3
                  className="text-xl font-bold text-[#0D1B2A] mb-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Nearest Branches to {data.location}
                </h3>
                <ul className="space-y-2 mb-8">
                  {data.nearbyBranches.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" />
                      {b} Branch — Bandar Laundry Express
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa inline-flex"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Get Laundry in {data.location} Now
                </a>
              </motion.div>

              <div className="mt-12">
                <h3
                  className="text-xl font-bold text-[#0D1B2A] mb-6"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  What Customers in {data.location} Say
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {data.localTestimonials.map((t) => (
                    <div key={t.name} className="bg-[#FAF8F4] p-6 border border-slate-100">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed italic mb-4">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="font-semibold text-[#0D1B2A] text-sm">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#1B3FA0] p-6 text-white">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Order Now in {data.location}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-5">
                    Get fresh, clean laundry in {data.location} within 90 minutes. WhatsApp us now to place your order.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa w-full justify-center"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+62817334128"
                    className="btn-outline-white w-full justify-center mt-3"
                  >
                    Call: +62817334128
                  </a>
                </div>

                <div>
                  <h3
                    className="text-lg font-bold text-[#0D1B2A] mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {data.location} Area Map
                  </h3>
                  <iframe
                    src={data.mapEmbed}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Laundry service area map — ${data.location} Bali`}
                    className="rounded-sm"
                  />
                </div>

                <div className="bg-[#FAF8F4] p-5 border border-slate-200">
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#F5A623] mb-3">
                    Other Locations
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {locationPages
                      .filter((l) => l.location !== data.location)
                      .slice(0, 6)
                      .map((l) => (
                        <Link
                          key={l.slug}
                          href={`/${l.slug}`}
                          className="text-xs text-[#1B3FA0] hover:text-[#F5A623] border border-[#1B3FA0]/20 hover:border-[#F5A623] px-2.5 py-1 transition-colors"
                        >
                          {l.location}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
