"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FRANCHISE_BG, WA_FRANCHISE_LINK } from "@/lib/data";

const benefits = [
  {
    title: "Proven Business Model",
    desc: "Operating successfully across 9 branches with a replicable system and strong unit economics.",
  },
  {
    title: "High Market Demand",
    desc: "Bali's booming tourism and hospitality industry creates consistent, year-round demand for premium laundry services.",
  },
  {
    title: "Scalable & Profitable",
    desc: "Digital-first operations mean lower overhead, faster ROI, and the ability to scale efficiently.",
  },
  {
    title: "Full Support System",
    desc: "Comprehensive training, operational guidance, branding, and ongoing support from our experienced team.",
  },
];

export default function FranchiseSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="franchise" className="relative py-16 md:py-24 overflow-hidden">
      <Image
        src={FRANCHISE_BG}
        alt="Bandar Laundry Express franchise opportunity in Bali"
        fill
        className="object-cover"
        sizes="100vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#1B3FA0]/88" aria-hidden="true" />

      <div className="relative container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase">
                Franchise &amp; Investment
              </span>
            </div>
            <h2
              className="font-bold text-white leading-tight mb-5"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
              }}
            >
              Build Your Own
              <br />
              <span className="italic text-[#F5A623]">Bandar Laundry</span>
            </h2>
            <p className="text-white/75 leading-relaxed mb-4 text-base md:text-lg">
              Join a growing network of successful laundry entrepreneurs across
              Bali. Bandar Laundry Express offers a complete franchise package
              built on a proven digital-first model with strong brand
              recognition.
            </p>
            <p className="text-white/75 leading-relaxed mb-10 text-base md:text-lg">
              Whether you are an experienced investor or a first-time business
              owner, our team will guide you every step of the way — from site
              selection to grand opening and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={WA_FRANCHISE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa justify-center sm:justify-start"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Chat via WhatsApp
              </a>
              <a
                href="mailto:adithyodw@gmail.com"
                className="btn-outline-white justify-center sm:justify-start"
              >
                Send an Email
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/15 flex flex-col sm:flex-row gap-6 text-sm text-white/60">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:adithyodw@gmail.com" className="text-white hover:text-[#F5A623] transition-colors">
                  adithyodw@gmail.com
                </a>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-1">WhatsApp</div>
                <a href={WA_FRANCHISE_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F5A623] transition-colors">
                  +62 812 9027 1990
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F5A623] mb-5">
              Why Partner With Us
            </div>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 p-4 md:p-5 bg-white/8 border border-white/10 hover:bg-white/12 transition-colors rounded-sm"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F5A623]/20 flex items-center justify-center" aria-hidden="true">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1.5 text-sm">{b.title}</div>
                    <div className="text-sm text-white/60 leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
