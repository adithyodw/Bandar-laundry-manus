"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FRANCHISE_BG, WA_FRANCHISE_LINK } from "@/lib/data";

// ─────────────────────────────────────────────────────────────
// Types & helpers
// ─────────────────────────────────────────────────────────────
type Lang = "id" | "en";
type Bilingual = { id: string; en: string };

function useT(lang: Lang) {
  return (obj: Bilingual) => (lang === "id" ? obj.id : obj.en);
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as object,
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

// ─────────────────────────────────────────────────────────────
// Language Toggle
// ─────────────────────────────────────────────────────────────
function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="fixed top-[4.5rem] right-4 md:right-6 z-40 flex items-center bg-white/95 backdrop-blur border border-slate-200/80 rounded-full shadow-sm p-0.5">
      {(["id", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-200 ${
            lang === l
              ? "bg-[#1B3FA0] text-white shadow-sm"
              : "text-slate-400 hover:text-slate-700"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Section wrapper utility
// ─────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label">{children}</div>;
}

// ─────────────────────────────────────────────────────────────
// 1. HERO SECTION
// ─────────────────────────────────────────────────────────────
function HeroSection({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={FRANCHISE_BG}
        alt="Bandar Laundry Express Partnership Opportunity"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0D1B2A]/88" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 40%, rgba(27,63,160,0.25) 0%, transparent 65%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F5A623]/20" />

      <div className="relative container flex flex-col items-center text-center py-32 pt-40">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl w-full"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-10 h-px bg-[#F5A623]/60" />
            <span className="text-[#F5A623] text-[10px] font-bold tracking-[0.28em] uppercase">
              {t({
                id: "Peluang Franchise & Investasi · Bali, Indonesia",
                en: "Franchise & Investment Opportunity · Bali, Indonesia",
              })}
            </span>
            <span className="block w-10 h-px bg-[#F5A623]/60" />
          </div>

          <h1
            className="text-white font-bold leading-[1.1] mb-6"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)",
            }}
          >
            {t({ id: "Franchise", en: "Franchise" })}
            <br />
            <span className="text-[#F5A623] italic">Bandar Laundry Express</span>
          </h1>

          <p
            className="text-white/65 leading-relaxed mb-4 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)" }}
          >
            {t({
              id: "Bergabunglah dengan ekosistem bisnis laundry terdepan di Bali. Sistem terstandarisasi, permintaan pasar yang tinggi, dan dukungan penuh dari tim profesional.",
              en: "Join Bali's most advanced laundry business ecosystem. A standardised system, high market demand, and full support from a professional team.",
            })}
          </p>
          <p
            className="text-white/45 leading-relaxed mb-12 max-w-xl mx-auto text-sm"
          >
            {t({
              id: "Lebih dari 100.000 pelanggan telah mempercayai layanan kami. Saatnya Anda menjadi bagian dari pertumbuhan ini.",
              en: "Over 100,000 customers have trusted our service. Now it's your turn to be part of this growth.",
            })}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/proposal-kemitraan-bandar-laundry.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold min-w-[200px] justify-center"
            >
              {t({ id: "Unduh Proposal", en: "Download Proposal" })}
            </a>
            <a
              href={WA_FRANCHISE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white min-w-[200px] justify-center"
            >
              {t({ id: "Hubungi Kami", en: "Contact Us" })}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          className="w-px h-10 bg-white/25 origin-top"
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-white/25 text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. COMPANY OVERVIEW
// ─────────────────────────────────────────────────────────────
function CompanyOverview({ lang }: { lang: Lang }) {
  const t = useT(lang);

  const credentials = [
    {
      label: { id: "Didirikan", en: "Founded" },
      value: "2020",
    },
    {
      label: { id: "Sertifikasi", en: "Certification" },
      value: "JID2020040476",
    },
    {
      label: { id: "Lokasi", en: "Location" },
      value: "Bali, Indonesia",
    },
    {
      label: { id: "Model Bisnis", en: "Business Model" },
      value: t({ id: "Digital-First Franchise", en: "Digital-First Franchise" }),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F4]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <motion.div {...fadeUp()}>
            <SectionLabel>
              {t({ id: "Tentang Kami", en: "About the Company" })}
            </SectionLabel>
            <h2
              className="font-bold text-[#0D1B2A] leading-tight mb-6"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
              }}
            >
              {t({
                id: "Pelopor Laundry Digital di Bali",
                en: "Bali's Pioneer of Digital Laundry",
              })}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                {t({
                  id: "Bandar Laundry Express adalah bisnis laundry berbasis teknologi pertama di Bali, yang menggabungkan layanan berkualitas tinggi dengan sistem digital yang efisien. Sejak 2020, kami telah membangun reputasi yang kuat sebagai penyedia layanan laundry terpercaya.",
                  en: "Bandar Laundry Express is Bali's first technology-driven laundry business, combining high-quality service with an efficient digital system. Since 2020, we have built a strong reputation as a trusted laundry service provider.",
                })}
              </p>
              <p>
                {t({
                  id: "Dengan 9+ cabang yang tersebar di seluruh Bali, kami melayani puluhan ribu pelanggan setiap bulan — mulai dari warga lokal, tamu hotel, villa, hingga pelaku bisnis hospitality skala besar.",
                  en: "With 9+ branches spread across Bali, we serve tens of thousands of customers every month — from local residents and hotel guests to large-scale hospitality businesses.",
                })}
              </p>
              <p>
                {t({
                  id: "Model kemitraan kami dirancang untuk memberikan peluang bisnis yang terstruktur, scalable, dan menguntungkan — dengan dukungan sistem, branding, dan operasional yang sudah teruji.",
                  en: "Our partnership model is designed to deliver a structured, scalable, and profitable business opportunity — backed by a tested system, strong branding, and comprehensive operational support.",
                })}
              </p>
            </div>
          </motion.div>

          {/* Right: Credentials */}
          <motion.div {...fadeUp(0.15)} className="space-y-0">
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#F5A623] mb-6">
              {t({ id: "Profil Perusahaan", en: "Company Profile" })}
            </div>
            <div className="border border-slate-200 divide-y divide-slate-100">
              {credentials.map(({ label, value }) => (
                <div
                  key={value}
                  className="flex items-center justify-between px-6 py-4 hover:bg-white transition-colors"
                >
                  <span className="text-sm text-slate-500 font-medium">
                    {t(label)}
                  </span>
                  <span className="text-sm font-semibold text-[#0D1B2A]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white border border-slate-100 shadow-sm">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#F5A623] mb-4">
                {t({ id: "Jangkauan Layanan", en: "Service Coverage" })}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Denpasar Barat",
                  "Denpasar Selatan",
                  "Denpasar Timur",
                  "Denpasar Utara",
                  "Badung",
                  "Kuta · Seminyak",
                  "Canggu · Ubud",
                  "Sanur · Nusa Dua",
                ].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#F5A623] flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// STORE GALLERY
// ─────────────────────────────────────────────────────────────
function StoreGallery({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const stores = [
    {
      src: "/store-gallery/store-01.jpeg",
      title: {
        id: "Bandar Laundry Express Storefront",
        en: "Bandar Laundry Express Storefront",
      },
      subtitle: {
        id: "Outlet aktif dengan standar operasional premium",
        en: "Active outlet with premium operating standards",
      },
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div {...fadeUp()} className="max-w-2xl mb-12">
          <SectionLabel>
            {t({ id: "Galeri Outlet", en: "Store Gallery" })}
          </SectionLabel>
          <h2
            className="font-bold text-[#0D1B2A] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
            }}
          >
            {t({
              id: "Jejak Operasional Nyata di Lapangan",
              en: "Real Operational Footprint on the Ground",
            })}
          </h2>
          <p className="text-slate-500 leading-relaxed">
            {t({
              id: "Dokumentasi outlet aktif Bandar Laundry Express untuk menunjukkan kualitas eksekusi, branding, dan kesiapan sistem operasional.",
              en: "Documentation of active Bandar Laundry Express outlets to demonstrate execution quality, branding consistency, and operational readiness.",
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {stores.map((store, idx) => (
            <motion.figure
              key={store.src}
              {...fadeUp(idx * 0.08)}
              className="group relative overflow-hidden border border-slate-200 bg-[#FAF8F4]"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={store.src}
                  alt={t(store.title)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 70vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <figcaption className="absolute left-0 right-0 bottom-0 p-6 md:p-8">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#F5A623] mb-2 font-semibold">
                    {t({ id: "Actual Store", en: "Actual Store" })}
                  </div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem" }}
                  >
                    {t(store.title)}
                  </h3>
                  <p className="text-white/80 text-sm">{t(store.subtitle)}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. KEY METRICS
// ─────────────────────────────────────────────────────────────
function KeyMetrics({ lang }: { lang: Lang }) {
  const t = useT(lang);

  const metrics = [
    {
      value: "100.000+",
      label: { id: "Pelanggan Terlayani", en: "Customers Served" },
      sub: {
        id: "Dan terus bertumbuh setiap bulan",
        en: "And growing every month",
      },
    },
    {
      value: "9+",
      label: { id: "Cabang Aktif", en: "Active Branches" },
      sub: {
        id: "Di seluruh wilayah Bali",
        en: "Across the Bali region",
      },
    },
    {
      value: "4+",
      label: { id: "Tahun Beroperasi", en: "Years in Operation" },
      sub: {
        id: "Track record yang terbukti",
        en: "A proven track record",
      },
    },
    {
      value: "90",
      label: { id: "Menit Layanan Express", en: "Minute Express Service" },
      sub: {
        id: "Standar industri terbaik",
        en: "Best-in-class industry standard",
      },
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0D1B2A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(245,166,35,0.5) 60px, rgba(245,166,35,0.5) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(245,166,35,0.5) 60px, rgba(245,166,35,0.5) 61px)",
        }}
      />
      <div className="relative container">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <SectionLabel>
            <span className="text-[#F5A623]">
              {t({ id: "Angka Yang Berbicara", en: "The Numbers Speak" })}
            </span>
          </SectionLabel>
          <h2
            className="font-bold text-white leading-tight"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            {t({
              id: "Terbukti. Terukur. Terpercaya.",
              en: "Proven. Measured. Trusted.",
            })}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {metrics.map(({ value, label, sub }, i) => (
            <motion.div
              key={value}
              {...fadeUp(i * 0.08)}
              className="bg-[#0D1B2A] p-8 md:p-10 text-center group hover:bg-[#1B3FA0]/30 transition-colors duration-300"
            >
              <div
                className="font-bold text-[#F5A623] leading-none mb-3"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                }}
              >
                {value}
              </div>
              <div className="text-white font-semibold text-sm tracking-wide mb-1">
                {t(label)}
              </div>
              <div className="text-white/35 text-xs">{t(sub)}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.3)}
          className="text-center text-white/40 text-sm mt-10 max-w-lg mx-auto leading-relaxed"
        >
          {t({
            id: '"Lebih dari 100.000 pelanggan telah menggunakan layanan kami — dan kepercayaan mereka adalah fondasi dari kemitraan ini."',
            en: '"Over 100,000 customers have used our services — and their trust is the foundation of this partnership."',
          })}
        </motion.p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. BUSINESS MODEL
// ─────────────────────────────────────────────────────────────
function BusinessModel({ lang }: { lang: Lang }) {
  const t = useT(lang);

  const pillars = [
    {
      number: "01",
      title: { id: "Model Digital-First", en: "Digital-First Model" },
      desc: {
        id: "Pemesanan berbasis aplikasi meminimalkan overhead operasional dan memungkinkan pelacakan real-time, manajemen inventori otomatis, dan pengalaman pelanggan yang superior.",
        en: "App-based ordering minimises operational overhead and enables real-time tracking, automated inventory management, and a superior customer experience.",
      },
    },
    {
      number: "02",
      title: { id: "Permintaan Pasar Tinggi", en: "High Market Demand" },
      desc: {
        id: "Bali menerima 5+ juta wisatawan per tahun. Industri hospitality yang berkembang menciptakan permintaan laundry yang konsisten sepanjang tahun — tidak hanya musiman.",
        en: "Bali receives 5+ million visitors per year. The booming hospitality industry creates consistent, year-round laundry demand — not merely seasonal.",
      },
    },
    {
      number: "03",
      title: { id: "Sistem Terstandarisasi", en: "Standardised System" },
      desc: {
        id: "Setiap proses telah distandarisasi: dari SOP operasional, protokol pencucian, hingga standar branding. Mitra tidak perlu menciptakan ulang — cukup ikuti sistem yang telah terbukti.",
        en: "Every process has been standardised: from operational SOPs and washing protocols to branding standards. Partners don't need to reinvent — simply follow the proven system.",
      },
    },
    {
      number: "04",
      title: { id: "Skalabilitas Tinggi", en: "High Scalability" },
      desc: {
        id: "Model unit ekonomi yang kuat memungkinkan ekspansi yang efisien. Mitra yang sukses dapat membuka cabang kedua dengan dukungan penuh dan timeline yang lebih cepat.",
        en: "Strong unit economics enable efficient expansion. Successful partners can open a second branch with full support and a faster timeline.",
      },
    },
    {
      number: "05",
      title: { id: "Dukungan Komprehensif", en: "Comprehensive Support" },
      desc: {
        id: "Pelatihan staf, panduan operasional, dukungan marketing digital, dan pendampingan langsung dari tim berpengalaman — mulai dari pra-pembukaan hingga operasional penuh.",
        en: "Staff training, operational guides, digital marketing support, and direct mentoring from an experienced team — from pre-opening through to full operations.",
      },
    },
    {
      number: "06",
      title: { id: "Brand yang Kuat", en: "Strong Brand Equity" },
      desc: {
        id: "Dikenal luas di kalangan warga Bali, ekspatriat, dan pelaku hospitality. Brand recognition yang terbangun selama 4+ tahun adalah aset berharga bagi setiap mitra baru.",
        en: "Widely recognised among Bali residents, expats, and hospitality operators. Brand recognition built over 4+ years is a valuable asset for every new partner.",
      },
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <motion.div {...fadeUp()} className="max-w-2xl mb-16">
          <SectionLabel>
            {t({ id: "Model Bisnis", en: "Business Model" })}
          </SectionLabel>
          <h2
            className="font-bold text-[#0D1B2A] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
            }}
          >
            {t({
              id: "Mengapa Bisnis Ini Bekerja",
              en: "Why This Business Works",
            })}
          </h2>
          <p className="text-slate-500 leading-relaxed">
            {t({
              id: "Enam pilar yang membentuk keunggulan kompetitif Bandar Laundry Express — dan alasan mengapa kemitraan ini layak dipertimbangkan secara serius.",
              en: "Six pillars that form the competitive advantage of Bandar Laundry Express — and the reason this partnership merits serious consideration.",
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100">
          {pillars.map(({ number, title, desc }, i) => (
            <motion.div
              key={number}
              {...fadeUp(i * 0.06)}
              className="bg-white p-8 hover:bg-[#FAF8F4] transition-colors duration-300 group"
            >
              <div className="text-[#F5A623]/40 font-bold text-xs tracking-[0.2em] mb-4 group-hover:text-[#F5A623] transition-colors">
                {number}
              </div>
              <h3
                className="font-bold text-[#0D1B2A] mb-3"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.1rem",
                }}
              >
                {t(title)}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t(desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. PARTNERSHIP PACKAGES (PRICING)
// ─────────────────────────────────────────────────────────────
type Package = {
  name: string;
  plant: string;
  priceRange: { id: string; en: string };
  badge: { id: string; en: string } | null;
  featured: boolean;
  target: { id: string; en: string };
  area: { id: string; en: string };
  roi: { id: string; en: string };
  features: { id: string; en: string }[];
};

const packages: Package[] = [
  {
    name: "Calathea",
    plant: "Entry",
    priceRange: {
      id: "IDR 325 – 375 Juta",
      en: "IDR 325 – 375 Million",
    },
    badge: null,
    featured: false,
    target: {
      id: "Kawasan residensial, perumahan padat",
      en: "Residential & dense housing areas",
    },
    area: { id: "Min. 30 – 45 m²", en: "Min. 30 – 45 m²" },
    roi: { id: "Estimasi 24 – 36 bulan", en: "Est. 24 – 36 months" },
    features: [
      { id: "2 unit mesin cuci komersial 8 kg", en: "2 commercial 8 kg washers" },
      { id: "2 unit mesin pengering komersial", en: "2 commercial dryers" },
      { id: "Sistem digital ordering", en: "Digital ordering system" },
      { id: "Branding eksterior & interior", en: "Exterior & interior branding" },
      { id: "Pelatihan staf & manajemen", en: "Staff & management training" },
      { id: "Dukungan marketing digital", en: "Digital marketing support" },
      { id: "Panduan SOP operasional lengkap", en: "Full operational SOP guide" },
    ],
  },
  {
    name: "Caladium",
    plant: "Standard",
    priceRange: {
      id: "IDR 425 – 475 Juta",
      en: "IDR 425 – 475 Million",
    },
    badge: { id: "Paling Populer", en: "Most Popular" },
    featured: true,
    target: {
      id: "Residensial premium, area mixed-use",
      en: "Premium residential, mixed-use areas",
    },
    area: { id: "Min. 50 – 70 m²", en: "Min. 50 – 70 m²" },
    roi: { id: "Estimasi 18 – 24 bulan", en: "Est. 18 – 24 months" },
    features: [
      { id: "4 unit mesin cuci komersial 10 kg", en: "4 commercial 10 kg washers" },
      { id: "4 unit mesin pengering komersial", en: "4 commercial dryers" },
      { id: "Layanan express 90 menit", en: "90-minute express service" },
      { id: "Sistem digital & POS terintegrasi", en: "Integrated digital & POS system" },
      { id: "Branding premium lengkap", en: "Full premium branding" },
      { id: "Pelatihan intensif 2 minggu", en: "2-week intensive training" },
      { id: "Dukungan operasional 12 bulan", en: "12-month operational support" },
      { id: "Laporan kinerja bulanan", en: "Monthly performance reporting" },
    ],
  },
  {
    name: "Monstera",
    plant: "Premium",
    priceRange: {
      id: "IDR 525 – 575 Juta",
      en: "IDR 525 – 575 Million",
    },
    badge: { id: "Kapasitas Penuh", en: "Full Capacity" },
    featured: false,
    target: {
      id: "Kawasan wisata, komersial, area ekspat",
      en: "Tourism zones, commercial & expat areas",
    },
    area: { id: "Min. 80 – 120 m²", en: "Min. 80 – 120 m²" },
    roi: { id: "Estimasi 12 – 18 bulan", en: "Est. 12 – 18 months" },
    features: [
      { id: "6 unit mesin cuci komersial 12 kg", en: "6 commercial 12 kg washers" },
      { id: "6 unit mesin pengering komersial", en: "6 commercial dryers" },
      { id: "Kapasitas penuh self-service & drop-off", en: "Full self-service & drop-off capacity" },
      { id: "Sistem manajemen terintegrasi", en: "Integrated management system" },
      { id: "Priority partner support", en: "Priority partner support" },
      { id: "Marketing support & co-branding", en: "Marketing support & co-branding" },
      { id: "Akses layanan komersial (hotel/villa)", en: "Commercial service access (hotel/villa)" },
      { id: "Pendampingan eksklusif 24 bulan", en: "Exclusive mentoring for 24 months" },
    ],
  },
];

function PricingSection({ lang }: { lang: Lang }) {
  const t = useT(lang);

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F4]">
      <div className="container">
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>
            {t({ id: "Paket Franchise", en: "Franchise Packages" })}
          </SectionLabel>
          <h2
            className="font-bold text-[#0D1B2A] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
            }}
          >
            {t({
              id: "Pilih Paket Franchise yang Tepat",
              en: "Choose the Right Package",
            })}
          </h2>
          <p className="text-slate-500 leading-relaxed">
            {t({
              id: "Tiga tingkatan investasi yang dirancang untuk berbagai skala bisnis dan target pasar. Harga bersifat indikatif — hubungi tim kami untuk penawaran final.",
              en: "Three investment tiers designed for different business scales and target markets. Prices are indicative — contact our team for a final offer.",
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              {...fadeUp(i * 0.1)}
              className={`relative flex flex-col ${
                pkg.featured
                  ? "border-2 border-[#F5A623] bg-white shadow-xl shadow-[#F5A623]/10 -mt-0 md:-mt-4"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#0D1B2A] text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 whitespace-nowrap">
                  {t(pkg.badge)}
                </div>
              )}

              <div
                className={`p-6 md:p-8 border-b ${pkg.featured ? "border-[#F5A623]/20 bg-[#FAF8F4]" : "border-slate-100"}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#F5A623] mb-1">
                      {pkg.plant}
                    </div>
                    <h3
                      className="font-bold text-[#0D1B2A]"
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "1.5rem",
                      }}
                    >
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                <div
                  className="font-bold text-[#0D1B2A] leading-none mb-1"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.4rem",
                  }}
                >
                  {t(pkg.priceRange)}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {t({
                    id: "Rentang investasi, belum termasuk sewa lokasi",
                    en: "Investment range, excluding location rent",
                  })}
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-3 flex-1">
                <div className="space-y-2">
                  {pkg.features.map((f, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-slate-600">{t(f)}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {[
                    {
                      label: { id: "Target Area", en: "Target Area" },
                      value: pkg.target,
                    },
                    {
                      label: { id: "Luas Tempat", en: "Space Required" },
                      value: pkg.area,
                    },
                    {
                      label: { id: "Estimasi ROI", en: "Estimated ROI" },
                      value: pkg.roi,
                    },
                  ].map(({ label, value }) => (
                    <div key={t(label)} className="flex items-start justify-between gap-3">
                      <span className="text-xs text-slate-400">{t(label)}</span>
                      <span className="text-xs font-semibold text-[#0D1B2A] text-right">
                        {t(value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <a
                  href={`${WA_FRANCHISE_LINK}&text=Hi%2C%20I'm%20interested%20in%20the%20${pkg.name}%20partnership%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center py-3 px-6 text-sm font-semibold tracking-wide transition-all duration-200 ${
                    pkg.featured
                      ? "bg-[#F5A623] text-[#0D1B2A] hover:bg-[#d4911e]"
                      : "border border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white"
                  }`}
                >
                  {t({ id: "Tanyakan Paket Ini", en: "Enquire About This Package" })}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.3)}
          className="text-center text-slate-400 text-xs mt-10 max-w-md mx-auto leading-relaxed"
        >
          {t({
            id: "Harga di atas bersifat indikatif dan dapat berubah. Silakan hubungi tim kami untuk mendapatkan proposal lengkap dan penawaran final yang disesuaikan.",
            en: "Prices above are indicative and subject to change. Please contact our team to receive the full proposal and a tailored final offer.",
          })}
        </motion.p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 6. TECHNICAL SPECIFICATIONS — per-package equipment breakdown
// ─────────────────────────────────────────────────────────────
const packageSpecs = [
  {
    name: "Calathea",
    tier: { id: "Entry", en: "Entry" },
    accentColor: "#4a7c59",
    equipment: ["LG Commercial Machines", "Speed Queen Machines"],
    configTitle: { id: "Konfigurasi", en: "Configuration" },
    config: {
      id: "Setup laundry profesional — sistem washer & dryer terintegrasi",
      en: "Professional laundry setup — integrated washer & dryer system",
    },
    highlights: [
      {
        id: "Fokus efisiensi operasional tinggi",
        en: "High operational efficiency focus",
      },
      {
        id: "Daya tahan & keandalan jangka panjang",
        en: "Long-term durability & reliability",
      },
      {
        id: "Konsumsi energi optimal",
        en: "Optimal energy consumption",
      },
      {
        id: "Ideal untuk operasional 10–14 jam/hari",
        en: "Ideal for 10–14 hour daily operations",
      },
    ],
  },
  {
    name: "Caladium",
    tier: { id: "Standard", en: "Standard" },
    accentColor: "#F5A623",
    equipment: ["LG Commercial Machines", "Maytag Full Stack System"],
    configTitle: { id: "Konfigurasi", en: "Configuration" },
    config: {
      id: "5 Stack Washer & Dryer — kapasitas volume tinggi",
      en: "5-Stack Washer & Dryer — high-volume capacity",
    },
    highlights: [
      {
        id: "Throughput kapasitas tinggi per siklus",
        en: "High-capacity throughput per cycle",
      },
      {
        id: "Dioptimalkan untuk operasional volume besar",
        en: "Optimised for large-volume operations",
      },
      {
        id: "Desain sistem yang scalable",
        en: "Scalable system design",
      },
      {
        id: "Ideal untuk area mixed-use & residensial premium",
        en: "Ideal for mixed-use & premium residential areas",
      },
    ],
  },
  {
    name: "Monstera",
    tier: { id: "Premium", en: "Premium" },
    accentColor: "#1B3FA0",
    equipment: ["Huebsch Commercial Machines"],
    configTitle: { id: "Konfigurasi", en: "Configuration" },
    config: {
      id: "Mesin industri kelas premium — kapasitas skala penuh",
      en: "Premium industrial-grade machines — full-scale capacity",
    },
    highlights: [
      {
        id: "Mesin industri premium — ketahanan tertinggi",
        en: "Premium industrial machines — highest durability",
      },
      {
        id: "Dirancang untuk operasional skala besar",
        en: "Designed for large-scale operations",
      },
      {
        id: "Siklus pencucian lebih cepat & efisien",
        en: "Faster & more efficient wash cycles",
      },
      {
        id: "Ideal untuk kawasan wisata & komersial",
        en: "Ideal for tourism & commercial zones",
      },
    ],
  },
];

function TechSpecs({ lang }: { lang: Lang }) {
  const t = useT(lang);

  return (
    <section className="py-20 md:py-32 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#F5A623]/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F5A623]/20" />

      <div className="relative container">
        <motion.div {...fadeUp()} className="max-w-2xl mb-16">
          <SectionLabel>
            <span className="text-[#F5A623]">
              {t({ id: "Spesifikasi Teknis", en: "Technical Specifications" })}
            </span>
          </SectionLabel>
          <h2
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
            }}
          >
            {t({
              id: "Peralatan Kelas Dunia per Paket",
              en: "World-Class Equipment per Package",
            })}
          </h2>
          <p className="text-white/50 leading-relaxed">
            {t({
              id: "Setiap paket kemitraan dilengkapi dengan brand mesin komersial pilihan yang disesuaikan dengan skala dan target operasional masing-masing.",
              en: "Each partnership package comes equipped with carefully selected commercial machine brands, tailored to the scale and operational targets of each tier.",
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packageSpecs.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              {...fadeUp(i * 0.1)}
              className="border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col"
            >
              {/* Card header */}
              <div
                className="px-7 py-5 border-b border-white/10"
                style={{ borderTopColor: pkg.accentColor, borderTopWidth: 2 }}
              >
                <div
                  className="text-[10px] font-bold tracking-[0.22em] uppercase mb-1"
                  style={{ color: pkg.accentColor }}
                >
                  {t(pkg.tier)}
                </div>
                <h3
                  className="font-bold text-white"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.35rem",
                  }}
                >
                  {pkg.name}
                </h3>
              </div>

              <div className="px-7 py-6 flex-1 space-y-6">
                {/* Equipment brands */}
                <div>
                  <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/35 mb-3">
                    {t({ id: "Brand Peralatan", en: "Equipment Brands" })}
                  </div>
                  <div className="space-y-2">
                    {pkg.equipment.map((brand) => (
                      <div
                        key={brand}
                        className="flex items-center gap-3 px-4 py-2.5 bg-white/5 border border-white/8"
                      >
                        <div
                          className="w-1.5 h-1.5 flex-shrink-0"
                          style={{ background: pkg.accentColor }}
                        />
                        <span className="text-white font-semibold text-sm tracking-wide">
                          {brand}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Configuration */}
                <div>
                  <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/35 mb-2">
                    {t(pkg.configTitle)}
                  </div>
                  <p
                    className="text-sm leading-relaxed font-medium"
                    style={{ color: pkg.accentColor }}
                  >
                    {t(pkg.config)}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/35 mb-3">
                    {t({ id: "Keunggulan Teknis", en: "Technical Highlights" })}
                  </div>
                  <ul className="space-y-2">
                    {pkg.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2.5">
                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 4.5"
                            stroke={pkg.accentColor}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-white/60 text-sm leading-relaxed">
                          {t(h)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-10 border border-white/8 px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <svg
            className="w-5 h-5 text-[#F5A623] flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-white/40 text-sm leading-relaxed">
            {t({
              id: "Spesifikasi mesin dapat disesuaikan berdasarkan ketersediaan dan kebutuhan lokasi. Tim teknis kami akan melakukan asesmen sebelum penentuan konfigurasi akhir.",
              en: "Machine specifications may be adjusted based on availability and location requirements. Our technical team will conduct an assessment before finalising the configuration.",
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 6b. PERLENGKAPAN PRODUKSI — Production Equipment
// ─────────────────────────────────────────────────────────────
function ProductionEquipment({ lang }: { lang: Lang }) {
  const t = useT(lang);

  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
        </svg>
      ),
      title: { id: "Mesin Cuci & Pengering Industri", en: "Industrial Washer & Dryer" },
      desc: {
        id: "Mesin komersial front-loading kapasitas tinggi. Konfigurasi disesuaikan per paket.",
        en: "High-capacity front-loading commercial machines. Configuration tailored per package tier.",
      },
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <rect x="3" y="8" width="18" height="12" rx="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8V6a5 5 0 0110 0v2" />
        </svg>
      ),
      title: { id: "Meja Sortir & Lipat", en: "Sorting & Folding Table" },
      desc: {
        id: "Meja kerja stainless steel berukuran standar industri untuk proses sortir dan pelipatan pakaian secara efisien.",
        en: "Industry-standard stainless steel work tables for efficient garment sorting and folding processes.",
      },
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 9h14M5 15h14" />
        </svg>
      ),
      title: { id: "Rak Penyimpanan", en: "Storage Rack" },
      desc: {
        id: "Rak besi berlapis berlabel untuk penyimpanan pakaian siap ambil dan manajemen alur pesanan yang teratur.",
        en: "Labelled multi-tier steel racks for organising ready-to-collect garments and maintaining orderly order flow.",
      },
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="6" cy="12" r="1" fill="currentColor" />
          <circle cx="6" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
      title: { id: "Timbangan Laundry Digital", en: "Digital Laundry Scale" },
      desc: {
        id: "Timbangan digital presisi tinggi untuk penghitungan berat cucian secara akurat — menjamin transparansi harga kepada pelanggan.",
        en: "High-precision digital scale for accurate laundry weight measurement — ensuring complete pricing transparency for customers.",
      },
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 15h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 15h4" />
        </svg>
      ),
      title: { id: "Sistem Kasir / POS", en: "POS / Cashier System" },
      desc: {
        id: "Sistem point-of-sale digital terintegrasi dengan aplikasi Bandar Laundry: manajemen pesanan, pembayaran non-tunai, dan laporan otomatis.",
        en: "Digital point-of-sale system integrated with the Bandar Laundry app: order management, cashless payments, and automated reporting.",
      },
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: { id: "Peralatan Operasional Harian", en: "Daily Operational Tools" },
      desc: {
        id: "Deterjen standar, produk perawatan kain, plastik pembungkus, hanger, tag label pesanan, dan semua perlengkapan operasional harian.",
        en: "Standardised detergents, fabric care products, packaging materials, hangers, order tags, and all daily operational consumables.",
      },
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F4]">
      <div className="container">
        <motion.div {...fadeUp()} className="max-w-2xl mb-16">
          <SectionLabel>
            {t({ id: "Perlengkapan Produksi", en: "Production Equipment" })}
          </SectionLabel>
          <h2
            className="font-bold text-[#0D1B2A] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
            }}
          >
            {t({
              id: "Infrastruktur Operasional Lengkap",
              en: "Complete Operational Infrastructure",
            })}
          </h2>
          <p className="text-slate-500 leading-relaxed">
            {t({
              id: "Setiap unit kemitraan Bandar Laundry Express dilengkapi secara penuh dengan semua peralatan yang dibutuhkan untuk beroperasi secara profesional sejak hari pertama.",
              en: "Every Bandar Laundry Express partnership unit is fully equipped with all the tools needed to operate professionally from day one.",
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {items.map(({ icon, title, desc }, i) => (
            <motion.div
              key={t(title)}
              {...fadeUp(i * 0.07)}
              className="bg-[#FAF8F4] p-8 hover:bg-white transition-colors duration-300 group"
            >
              <div className="w-11 h-11 border border-[#1B3FA0]/15 flex items-center justify-center text-[#1B3FA0] mb-5 group-hover:border-[#F5A623]/50 group-hover:text-[#F5A623] transition-colors duration-300">
                {icon}
              </div>
              <h3
                className="font-bold text-[#0D1B2A] mb-2"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1rem",
                }}
              >
                {t(title)}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t(desc)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              label: { id: "Semua Peralatan Disediakan", en: "All Equipment Provided" },
              sub: {
                id: "Termasuk dalam investasi paket",
                en: "Included in the package investment",
              },
            },
            {
              label: { id: "Instalasi & Setup", en: "Installation & Setup" },
              sub: {
                id: "Dilakukan oleh tim teknis kami",
                en: "Carried out by our technical team",
              },
            },
            {
              label: { id: "Garansi & Purna Jual", en: "Warranty & After-Sales" },
              sub: {
                id: "Didukung oleh vendor resmi",
                en: "Backed by authorised vendors",
              },
            },
          ].map(({ label, sub }) => (
            <div
              key={t(label)}
              className="flex items-start gap-4 p-5 bg-white border border-slate-100"
            >
              <div className="w-2 h-2 bg-[#F5A623] flex-shrink-0 mt-1.5" />
              <div>
                <div className="font-semibold text-[#0D1B2A] text-sm">
                  {t(label)}
                </div>
                <div className="text-slate-400 text-xs mt-0.5">{t(sub)}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 7. WHY INVEST
// ─────────────────────────────────────────────────────────────
function WhyInvest({ lang }: { lang: Lang }) {
  const t = useT(lang);

  const reasons = [
    {
      title: { id: "Pasar yang Terbukti & Berkembang", en: "Proven & Growing Market" },
      desc: {
        id: "Indonesia adalah ekonomi terbesar di Asia Tenggara. Bali, sebagai destinasi wisata global, menerima jutaan pengunjung setiap tahun — menciptakan permintaan laundry yang tidak pernah berhenti.",
        en: "Indonesia is Southeast Asia's largest economy. Bali, as a global tourism destination, receives millions of visitors annually — creating unceasing laundry demand.",
      },
    },
    {
      title: { id: "Traksi yang Telah Terbukti", en: "Proven Traction" },
      desc: {
        id: "Bukan bisnis spekulatif. Dengan 100.000+ pelanggan, 9 cabang aktif, dan 4+ tahun operasional, kami memiliki data nyata yang mendukung proyeksi pertumbuhan.",
        en: "Not speculative. With 100,000+ customers, 9 active branches, and 4+ years of operations, we have real data to support growth projections.",
      },
    },
    {
      title: { id: "Keunggulan First-Mover Digital", en: "Digital First-Mover Advantage" },
      desc: {
        id: "Bandar Laundry adalah yang pertama mengadopsi model digital-first di industri laundry Bali. Posisi ini memberikan keunggulan kompetitif yang sulit ditiru oleh pemain baru.",
        en: "Bandar Laundry was first to adopt the digital-first model in Bali's laundry industry. This position creates a competitive advantage that is difficult for new entrants to replicate.",
      },
    },
    {
      title: { id: "Skalabilitas Multi-Unit", en: "Multi-Unit Scalability" },
      desc: {
        id: "Model unit ekonomi yang solid memungkinkan ekspansi ke lokasi kedua dan ketiga. Mitra sukses dapat membangun portofolio bisnis laundry yang substansial.",
        en: "Solid unit economics enable expansion to a second and third location. Successful partners can build a substantial laundry business portfolio.",
      },
    },
    {
      title: { id: "Kekuatan Brand yang Terbangun", en: "Established Brand Strength" },
      desc: {
        id: "Investasi dalam brand awareness selama 4+ tahun telah menciptakan tingkat kepercayaan dan loyalitas pelanggan yang tinggi — aset tak berwujud bernilai tinggi.",
        en: "Four-plus years of brand awareness investment has created high customer trust and loyalty — a high-value intangible asset.",
      },
    },
    {
      title: { id: "Minat Investor Internasional", en: "International Investor Appeal" },
      desc: {
        id: "Bisnis laundry berbasis sistem di Bali menarik minat investor asing dan lokal. Kami menyambut diskusi partnership dari investor global yang tertarik dengan pasar Indonesia.",
        en: "Systems-based laundry businesses in Bali attract both foreign and local investor interest. We welcome partnership discussions from global investors interested in the Indonesian market.",
      },
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>
            {t({ id: "Mengapa Berinvestasi", en: "Why Invest" })}
          </SectionLabel>
          <h2
            className="font-bold text-[#0D1B2A] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
            }}
          >
            {t({
              id: "Peluang yang Tidak Bisa Diabaikan",
              en: "An Opportunity Too Compelling to Ignore",
            })}
          </h2>
          <p className="text-slate-500 leading-relaxed">
            {t({
              id: "Enam argumen kuat yang menjelaskan mengapa kemitraan Bandar Laundry Express adalah keputusan investasi yang cerdas.",
              en: "Six compelling arguments for why a Bandar Laundry Express partnership is a smart investment decision.",
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map(({ title, desc }, i) => (
            <motion.div
              key={t(title)}
              {...fadeUp(i * 0.07)}
              className="flex gap-6 p-8 border border-slate-100 hover:border-[#F5A623]/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] group-hover:border-[#F5A623] transition-colors">
                  <div className="w-2 h-2 bg-[#F5A623]" />
                </div>
              </div>
              <div>
                <h3
                  className="font-bold text-[#0D1B2A] mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem" }}
                >
                  {t(title)}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t(desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market stat banner */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-12 p-8 md:p-10 bg-[#FAF8F4] border border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                value: "5M+",
                label: {
                  id: "Wisatawan ke Bali per Tahun",
                  en: "Tourists to Bali Per Year",
                },
              },
              {
                value: "IDR 270T",
                label: {
                  id: "PDB Provinsi Bali (2023)",
                  en: "Bali Province GDP (2023)",
                },
              },
              {
                value: "4.3M+",
                label: {
                  id: "Penduduk Area Layanan Kami",
                  en: "Residents in Our Service Area",
                },
              },
            ].map(({ value, label }) => (
              <div key={value}>
                <div
                  className="font-bold text-[#1B3FA0] leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  }}
                >
                  {value}
                </div>
                <div className="text-sm text-slate-500">{t(label)}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 8. CTA SECTION
// ─────────────────────────────────────────────────────────────
function CTASection({ lang }: { lang: Lang }) {
  const t = useT(lang);

  return (
    <section className="py-20 md:py-32 bg-[#1B3FA0] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp()}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[#F5A623]/60" />
              <span className="text-[#F5A623] text-[10px] font-bold tracking-[0.28em] uppercase">
                {t({ id: "Mulai Franchise", en: "Start Your Franchise Journey" })}
              </span>
              <span className="block w-10 h-px bg-[#F5A623]/60" />
            </div>

            <h2
              className="font-bold text-white leading-tight mb-5"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              }}
            >
              {t({
                id: "Jadilah Mitra Investasi Kami",
                en: "Become Our Investment Partner",
              })}
            </h2>

            <p className="text-white/65 leading-relaxed mb-10 max-w-lg mx-auto">
              {t({
                id: "Tim kami siap mendampingi setiap langkah — dari diskusi awal, site selection, konstruksi, hingga grand opening dan operasional jangka panjang.",
                en: "Our team is ready to accompany every step — from initial discussions and site selection to construction, grand opening, and long-term operations.",
              })}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={WA_FRANCHISE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa min-w-[220px] justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                {t({ id: "Chat WhatsApp Sekarang", en: "Chat on WhatsApp Now" })}
              </a>
              <a
                href="mailto:adithyodw@gmail.com"
                className="btn-outline-white min-w-[220px] justify-center"
              >
                {t({ id: "Kirim Email", en: "Send an Email" })}
              </a>
            </div>

            <div className="border-t border-white/15 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-white/35 text-[9px] uppercase tracking-[0.25em] mb-1.5">
                  WhatsApp
                </div>
                <a
                  href={WA_FRANCHISE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-[#F5A623] transition-colors"
                >
                  +62 812 9027 1990
                </a>
                <div className="text-white/35 text-xs mt-0.5">
                  {t({ id: "Tim Franchise", en: "Franchise Team" })}
                </div>
              </div>
              <div>
                <div className="text-white/35 text-[9px] uppercase tracking-[0.25em] mb-1.5">
                  Email
                </div>
                <a
                  href="mailto:adithyodw@gmail.com"
                  className="text-white font-medium hover:text-[#F5A623] transition-colors"
                >
                  adithyodw@gmail.com
                </a>
                <div className="text-white/35 text-xs mt-0.5">
                  {t({ id: "Respon dalam 1x24 jam", en: "Response within 24 hours" })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────
export default function KemitraanClient() {
  const [lang, setLang] = useState<Lang>("id");

  return (
    <>
      <LangToggle lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <CompanyOverview lang={lang} />
      <StoreGallery lang={lang} />
      <KeyMetrics lang={lang} />
      <BusinessModel lang={lang} />
      <PricingSection lang={lang} />
      <TechSpecs lang={lang} />
      <ProductionEquipment lang={lang} />
      <WhyInvest lang={lang} />
      <CTASection lang={lang} />
    </>
  );
}
