"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HERO_BG, WA_LINK } from "@/lib/data";

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: prefersReduced ? {} : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: prefersReduced ? { duration: 0 } : { duration: 0.6, delay },
  });

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex items-center justify-start overflow-hidden hero-section"
    >
      {/* Background image — priority for LCP */}
      <Image
        src={HERO_BG}
        alt="Bandar Laundry Express — laundry Bali, express laundry service at retail store in Denpasar / Badung"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/65 to-[#0D1B2A]/20" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" aria-hidden="true" />

      <div className="relative container pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-24">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#F5A623]" aria-hidden="true" />
            <span className="text-[#F5A623] text-xs font-semibold tracking-[0.2em] uppercase">
              Bali&apos;s First Digital Laundry
            </span>
          </motion.div>

          {/* H1 — clamp for smooth scaling across all screen sizes */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-bold text-white leading-[1.1] mb-5"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(2.25rem, 8vw, 4.5rem)",
            }}
          >
            Premium Laundry
            <br />
            <span className="italic text-[#F5A623]">Service in Bali</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8 max-w-md"
          >
            Fast, Clean, Reliable — Your Trusted Laundry Partner.
            Done in 90 minutes across 9 branches in Bali.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa w-full xs:w-auto justify-center"
            >
              {WA_ICON}
              Order via WhatsApp
            </a>
            <Link
              href="/#branches"
              className="btn-outline-white w-full xs:w-auto justify-center"
            >
              Find Nearest Branch
            </Link>
          </motion.div>

          {/* Stats — responsive flex-wrap to avoid overflow on 320px */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-7"
          >
            {[
              { value: "90 Min", label: "Express Turnaround" },
              { value: "9+", label: "Branches in Bali" },
              { value: "100%", label: "Digital Service" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 tracking-wide mt-0.5 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden on very small screens to reduce clutter */}
      <div
        className="hero-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-white/30 animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          <path
            d="M8 0v16M1 9l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
