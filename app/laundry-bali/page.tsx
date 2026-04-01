import type { Metadata } from "next";
import Link from "next/link";
import { branches, locationPages } from "@/lib/data";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { buildBreadcrumbJsonLd } from "@/lib/jsonld";

const primary = branches[0];

export const metadata: Metadata = {
  title:
    "Laundry Bali | Best Laundry Service & Express Laundry — Bandar Laundry Express",
  description:
    "Laundry Bali: best express laundry in 90 minutes, 9+ branches. Laundry service Bali for tourists, villas & hotels. Areas: Kuta, Seminyak, Canggu, Ubud, Denpasar. WhatsApp ordering.",
  keywords: [
    "laundry bali",
    "best laundry in bali",
    "laundry service bali",
    "laundry near me bali",
    "express laundry bali",
    "bandar laundry express",
  ],
  alternates: { canonical: absoluteUrl("/laundry-bali") },
  openGraph: {
    title: "Laundry Bali — Best Express Laundry | Bandar Laundry Express",
    description:
      "High-intent laundry Bali hub: 90-minute express, island-wide branches, WhatsApp orders.",
    url: absoluteUrl("/laundry-bali"),
  },
};

const areaLinks = [
  { href: "/laundry-kuta", label: "Laundry Kuta" },
  { href: "/laundry-seminyak", label: "Laundry Seminyak" },
  { href: "/laundry-canggu", label: "Laundry Canggu" },
  { href: "/laundry-ubud", label: "Laundry Ubud" },
  { href: "/laundry-denpasar", label: "Laundry Denpasar" },
];

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Laundry Bali", path: "/laundry-bali" },
]);

export default function LaundryBaliPillarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <article className="bg-white">
        <header className="bg-[#0D1B2A] pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="container max-w-3xl">
            <nav
              className="flex flex-wrap items-center gap-2 text-xs text-white/50 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#F5A623] transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80">Laundry Bali</span>
            </nav>
            <p className="text-[#F5A623] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Entity: Laundry service · Bali · Indonesia
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Laundry Bali — best express laundry service
            </h1>
            <p className="text-lg text-white/80 leading-relaxed border-l-2 border-[#F5A623] pl-5">
              <strong className="text-white font-semibold">Quick answer:</strong>{" "}
              Bandar Laundry Express is a digital-first laundry brand in Bali with
              9+ branches, daily hours 07:00–22:00, and a signature{" "}
              <strong className="text-white">90-minute express laundry</strong>{" "}
              service. Order via WhatsApp; drop off or request pickup where
              available.
            </p>
          </div>
        </header>

        <div className="container max-w-3xl py-14 md:py-16 space-y-12">
          <section aria-labelledby="what-is">
            <h2
              id="what-is"
              className="text-2xl font-bold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              What is “laundry Bali” at Bandar Laundry Express?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We operate as a{" "}
              <strong className="text-[#0D1B2A] font-semibold">
                laundry service Bali
              </strong>{" "}
              network covering Denpasar and Badung, with strong reach for visitors
              and residents in{" "}
              <strong className="text-[#0D1B2A] font-semibold">
                Kuta, Seminyak, Canggu, and Ubud
              </strong>
              . Services include wash &amp; fold, express turnaround, ironing, and
              commercial laundry for hotels and villas.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-[#0D1B2A]">Voice / AI summary:</strong> If
              you are searching for{" "}
              <em>laundry near me Bali</em> or <em>best laundry in Bali</em>,
              choose a branch near you or message us on WhatsApp for pickup
              options.
            </p>
          </section>

          <section aria-labelledby="areas">
            <h2
              id="areas"
              className="text-2xl font-bold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Service areas (local SEO hubs)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Dedicated landing pages with maps, NAP-consistent contact details,
              and area-specific copy:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {areaLinks.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="block px-4 py-3 border border-slate-200 rounded-lg text-[#1B3FA0] font-medium hover:border-[#F5A623] hover:text-[#0D1B2A] transition-colors"
                  >
                    {a.label} →
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 mt-6">
              More areas:{" "}
              {locationPages
                .filter((p) => !areaLinks.some((a) => a.href === `/${p.slug}`))
                .map((p, i, arr) => (
                  <span key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="text-[#1B3FA0] hover:underline"
                    >
                      Laundry {p.location}
                    </Link>
                    {i < arr.length - 1 ? " · " : ""}
                  </span>
                ))}
            </p>
          </section>

          <section
            aria-labelledby="nap"
            className="bg-[#FAF8F4] border border-slate-100 rounded-xl p-6 md:p-8"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content="Bandar Laundry Express" />
            <meta itemProp="url" content={SITE_URL} />
            <link itemProp="image" href={absoluteUrl("/stores/10.jpeg")} />
            <h2
              id="nap"
              className="text-xl font-bold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              NAP — Name, address, phone (primary branch)
            </h2>
            <dl className="space-y-2 text-slate-700">
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">
                  Name
                </dt>
                <dd className="font-semibold text-[#0D1B2A]">
                  Bandar Laundry Express
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">
                  Address
                </dt>
                <dd itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">{primary.address}</span>,{" "}
                  <span itemProp="addressLocality">{primary.area}</span>, Bali
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${primary.phone.replace(/\s/g, "")}`}
                    className="text-[#1B3FA0] font-medium hover:underline"
                    itemProp="telephone"
                  >
                    {primary.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="map">
            <h2
              id="map"
              className="text-2xl font-bold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Map — Bali laundry coverage
            </h2>
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                src={primary.mapsEmbed}
                width="100%"
                height={320}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps — Bandar Laundry Express laundry service Bali, primary branch area"
              />
            </div>
            <p className="text-sm text-slate-500 mt-3">
              <a
                href={primary.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3FA0] hover:underline"
              >
                Open in Google Maps →
              </a>
            </p>
          </section>

          <section aria-labelledby="faq-snippet">
            <h2
              id="faq-snippet"
              className="text-2xl font-bold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Common questions (featured-snippet style)
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#0D1B2A] mb-2">
                  How fast is express laundry Bali?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Our express laundry is ready in{" "}
                  <strong>90 minutes</strong> at Bandar Laundry Express branches,
                  subject to load and operating hours (07:00–22:00 daily).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0D1B2A] mb-2">
                  Do you offer laundry near me in Bali?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes — use our{" "}
                  <Link href="/laundry-near-me-bali" className="text-[#1B3FA0] hover:underline">
                    laundry near me Bali
                  </Link>{" "}
                  guide or open a location page (Kuta, Seminyak, Canggu, Ubud,
                  etc.) for the nearest branch and WhatsApp link.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
