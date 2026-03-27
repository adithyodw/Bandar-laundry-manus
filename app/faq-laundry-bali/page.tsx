"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WA_LINK } from "@/lib/data";

const faqs = [
  {
    question: "How much does laundry cost in Bali?",
    answer:
      "Laundry prices in Bali vary by service type. At Bandar Laundry Express, our express laundry starts from Rp 7.000/kg, regular laundry from Rp 5.000/kg, and ironing from Rp 3.000/item. Commercial laundry pricing is custom based on volume. These are among the most competitive rates for premium laundry service in Bali.",
  },
  {
    question: "How fast is express laundry in Bali?",
    answer:
      "Our express laundry service in Bali is ready in just 90 minutes. This is our signature service and is available at all 9 Bandar Laundry Express branches across Denpasar and Badung, daily from 07:00 to 22:00.",
  },
  {
    question: "Do you offer pickup and delivery service?",
    answer:
      "Yes, we offer pickup and delivery for laundry in selected areas of Bali. Contact us via WhatsApp to check availability in your area and to schedule a pickup. This service is particularly useful for hotels, villas, restaurants, and long-stay guests who need regular laundry handled without leaving their property.",
  },
  {
    question: "Which areas in Bali do you cover?",
    answer:
      "Bandar Laundry Express has 9 branches covering Denpasar Barat, Denpasar Selatan, Denpasar Utara, and Badung. We serve customers across Bali including Kuta, Seminyak, Canggu, Ubud, Jimbaran, Sanur, and Nusa Dua. For areas beyond our branches, we offer pickup and delivery — WhatsApp us to confirm coverage.",
  },
  {
    question: "Do you handle delicate fabrics and special garments?",
    answer:
      "Yes. At Bandar Laundry Express, we check care labels on every garment and use fabric-appropriate washing methods. Delicate items such as silk, linen, and formal wear are handled with extra care. We also offer professional ironing for formal and business attire.",
  },
  {
    question: "Is Bandar Laundry Express suitable for hotels and villas?",
    answer:
      "Absolutely. We offer dedicated commercial laundry solutions for hotels, villas, restaurants, and spas in Bali. Our commercial service includes scheduled pickup and delivery, bulk volume pricing, and a dedicated account manager to ensure consistent, hotel-grade quality.",
  },
  {
    question: "How do I place a laundry order?",
    answer:
      "Ordering is simple. You can drop your laundry at any of our 9 branches, or contact us via WhatsApp at +62 812-9027-1990 to arrange a pickup. Our team will confirm your order, provide a price estimate, and notify you when your laundry is ready.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "All Bandar Laundry Express branches are open daily from 07:00 to 22:00, including weekends and public holidays. We believe clean laundry shouldn't be constrained by short business hours.",
  },
  {
    question: "Do you offer franchise or partnership opportunities?",
    answer:
      "Yes! Bandar Laundry Express actively seeks partnership opportunities for motivated investors and entrepreneurs. We offer a complete franchise package including training, operational support, branding, and ongoing guidance. Contact us via WhatsApp or email at adithyodw@gmail.com to learn more.",
  },
];

function FaqItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <h3
          className="font-semibold text-[#0D1B2A] text-base leading-snug"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {faq.question}
        </h3>
        <span
          className={`flex-shrink-0 w-6 h-6 border border-[#1B3FA0] flex items-center justify-center text-[#1B3FA0] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="6" y1="0" x2="6" y2="12" />
            <line x1="0" y1="6" x2="12" y2="6" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqLaundryBaliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative bg-[#0D1B2A] pt-32 pb-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://d2xsxph8kpxj0f.cloudfront.net/310519663482333703/KB4KAXETgqhUXRp3CHL52M/bandar-store_4ab567f3.jpeg')] bg-cover bg-center" />
        <div className="relative container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/80">FAQ</span>
            </nav>
            <span className="section-label">FAQ</span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-2 mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Frequently Asked
              <br />
              <span className="italic text-[#F5A623]">Questions</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Everything you need to know about laundry in Bali and our services at Bandar Laundry Express.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#FAF8F4]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} index={i} />
              ))}
            </div>

            <div className="mt-12 bg-[#1B3FA0] p-8 text-center text-white">
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Still have questions?
              </h2>
              <p className="text-white/75 mb-6">
                Our team is available daily from 07:00 to 22:00. WhatsApp us for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
                  Chat on WhatsApp
                </a>
                <a href="mailto:adithyodw@gmail.com" className="btn-outline-white">
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
