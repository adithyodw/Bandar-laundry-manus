"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ABOUT_DIGITAL_LAUNDRY_SLIDES } from "@/lib/about-digital";
import { appleEase } from "@/lib/motion-easing";
import { useIosLikeDevice } from "@/hooks/useIosLikeDevice";

const slides = [...ABOUT_DIGITAL_LAUNDRY_SLIDES];
const AUTO_MS = 6000;

const VARIANTS = {
  enter: { opacity: 0, scale: 1.018 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.984 },
};

const TRANSITION = { duration: 0.78, ease: appleEase };

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);
const IconLeaf = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const pillars = [
  { Icon: IconClock, title: "Express Speed",   desc: "Clean, folded, and ready in 90 minutes." },
  { Icon: IconStar,  title: "Premium Quality", desc: "Hotel-grade cleaning with premium detergents." },
  { Icon: IconPhone, title: "Digital First",   desc: "Order, track, and pay — all via WhatsApp." },
  { Icon: IconLeaf,  title: "Eco-Friendly",    desc: "Responsible cleaning, gentle on fabrics and Bali." },
];

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function AboutSection() {
  const prefersReduced = useReducedMotion();
  const iosLike = useIosLikeDevice();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    if (prefersReduced || paused || slides.length < 2 || iosLike) return;
    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [prefersReduced, paused, next, iosLike]);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F4] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Apple-style image carousel */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: appleEase }}
            className="relative max-w-sm mx-auto lg:mx-0 w-full select-none"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Frame */}
            <div
              className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-neutral-200 shadow-[0_20px_56px_-16px_rgba(13,27,42,0.20)] ring-1 ring-black/[0.06]"
              role="region"
              aria-roledescription="carousel"
              aria-label="Bandar Laundry Express store photos"
            >
              {!prefersReduced ? (
                iosLike ? (
                  <div className="absolute inset-0">
                    <Image
                      key={slides[index].src}
                      src={slides[index].src}
                      alt={`Bandar Laundry Express store — photo ${index + 1} of ${slides.length}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 420px"
                      priority={index === 0}
                    />
                  </div>
                ) : (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={slides[index].src}
                      variants={VARIANTS}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={TRANSITION}
                      className="absolute inset-0"
                    >
                      <Image
                        src={slides[index].src}
                        alt={`Bandar Laundry Express store — photo ${index + 1} of ${slides.length}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 90vw, 420px"
                        priority={index === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                )
              ) : (
                <Image
                  src={slides[0].src}
                  alt="Bandar Laundry Express store"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  loading="lazy"
                />
              )}

              {/* Prev / Next overlays */}
              {slides.length > 1 && !prefersReduced && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/92 md:bg-white/70 md:backdrop-blur-sm flex items-center justify-center text-[#0D1B2A] shadow-sm transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-white/90 active:scale-[0.93]"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/92 md:bg-white/70 md:backdrop-blur-sm flex items-center justify-center text-[#0D1B2A] shadow-sm transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-white/90 active:scale-[0.93]"
                    aria-label="Next photo"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* Pill indicators */}
            {slides.length > 1 && !prefersReduced && (
              <div
                className="mt-4 flex items-center justify-center gap-[7px]"
                role="tablist"
                aria-label="Slide indicators"
              >
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Photo ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className="h-[5px] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3FA0] focus-visible:ring-offset-2"
                    style={{
                      width: i === index ? 20 : 5,
                      backgroundColor:
                        i === index
                          ? "rgba(27, 63, 160, 0.85)"
                          : "rgba(13, 27, 42, 0.16)",
                      transition:
                        "width 0.42s cubic-bezier(0.25,0.1,0.25,1), background-color 0.42s cubic-bezier(0.25,0.1,0.25,1)",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.72, ease: appleEase, delay: 0.06 }}
            >
              <span className="section-label">Our Story</span>
              <h2
                className="font-bold text-[#0D1B2A] leading-tight mb-5"
                style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
              >
                Bali&apos;s First
                <br />
                <span className="italic">Digital Laundry</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-base">
                Bandar Laundry Express was founded with a simple mission: to bring
                reliable, fast, and premium laundry service to Bali&apos;s residents
                and travelers. We are proud to be Bali&apos;s first fully digital
                laundry brand.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                What started as a single branch in Denpasar has grown to 9 locations
                across the island. Our digital-first approach means you can order,
                track, and pay entirely through WhatsApp — no apps to download, no
                complicated systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.52, ease: appleEase, delay: i * 0.06 }}
                  className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-md bg-[#1B3FA0]/6 flex items-center justify-center text-[#1B3FA0]">
                    <Icon />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D1B2A] text-sm mb-1">{title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
