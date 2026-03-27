"use client";

import { motion, useReducedMotion } from "framer-motion";
import { APP_PLAY_URL } from "@/lib/data";

const appFeatures = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Order in Seconds",
    desc: "Schedule pickup and select your service in just a few taps.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Real-Time Tracking",
    desc: "See exactly where your laundry is — pickup, washing, delivery.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Pickup & Delivery",
    desc: "We come to you. No need to leave your villa or hotel.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: "Secure Payment",
    desc: "Pay easily and safely within the app. Multiple methods supported.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Loyalty Points",
    desc: "Earn points with every order. Redeem for free laundry and rewards.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Order History",
    desc: "Instantly reorder from your history. All records saved in one place.",
  },
];

// Inline Google Play badge SVG — no external image needed
function GooglePlayBadge() {
  return (
    <a
      href={APP_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on Google Play"
      className="inline-flex items-center gap-3 bg-[#0D1B2A] hover:bg-[#1B3FA0] text-white px-5 py-3 rounded-xl transition-colors duration-300 group min-h-[60px] border border-white/10 hover:border-[#1B3FA0]"
    >
      {/* Google Play icon */}
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-[#F5A623]" aria-hidden="true">
        <path d="M3.18 23.76c.36.2.77.24 1.16.11L15.63 12 12 8.37 3.18 23.76z" opacity=".8"/>
        <path d="M20.47 10.37L17.63 8.8l-3.41 3.21 3.41 3.21 2.87-1.58c.82-.46.82-1.82-.03-2.27z"/>
        <path d="M4.34.13C3.95 0 3.54.04 3.18.24L12 9.13l3.63-3.63L4.34.13z" opacity=".8"/>
        <path d="M3.18.24C2.33.7 1.8 1.6 1.8 2.6v18.8c0 1 .53 1.9 1.38 2.36L12 14.87 3.18.24z" opacity=".5"/>
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] text-white/60 tracking-wider uppercase">Download on</div>
        <div className="text-base font-semibold tracking-wide">Google Play</div>
      </div>
    </a>
  );
}

// Abstract phone mockup — pure CSS/SVG, no image required
function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: "200px", height: "380px" }}>
      {/* Phone shell */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-[#0D1B2A] border-4 border-white/15 shadow-2xl shadow-[#1B3FA0]/30 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0a1420] rounded-full z-10" aria-hidden="true" />
        {/* Screen gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3FA0] to-[#0D1B2A]" aria-hidden="true" />
        {/* App UI wireframe */}
        <div className="absolute inset-0 pt-12 px-4 pb-6 flex flex-col gap-3" aria-hidden="true">
          {/* Logo area */}
          <div className="flex items-center gap-2 pt-1">
            <div className="w-6 h-6 rounded-md bg-[#F5A623]/80" />
            <div className="h-2.5 w-24 rounded bg-white/30" />
          </div>
          {/* Status card */}
          <div className="rounded-2xl bg-white/10 p-3 flex flex-col gap-2">
            <div className="h-2 w-16 rounded bg-[#F5A623]/60" />
            <div className="h-1.5 w-full rounded bg-white/20" />
            <div className="h-1.5 w-3/4 rounded bg-white/20" />
            {/* Progress bar */}
            <div className="mt-1 h-1 w-full rounded-full bg-white/10">
              <div className="h-1 w-2/3 rounded-full bg-[#F5A623]/80" />
            </div>
          </div>
          {/* Service list */}
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-xl bg-white/8 p-2.5 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#1B3FA0] flex-shrink-0" />
              <div className="flex flex-col gap-1 flex-1">
                <div className="h-1.5 w-16 rounded bg-white/30" />
                <div className="h-1 w-10 rounded bg-white/15" />
              </div>
              <div className="w-6 h-4 rounded-full bg-[#F5A623]/40" />
            </div>
          ))}
          {/* CTA button */}
          <div className="mt-auto rounded-xl bg-[#F5A623] h-9 flex items-center justify-center">
            <div className="h-2 w-20 rounded bg-[#0D1B2A]/40" />
          </div>
        </div>
      </div>
      {/* Side button */}
      <div className="absolute right-[-5px] top-20 w-1 h-10 rounded-r-full bg-white/20" aria-hidden="true" />
    </div>
  );
}

export default function AppDownloadSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="app"
      className="py-16 md:py-24 bg-[#0D1B2A] overflow-hidden"
      aria-label="Download the app"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text side */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-[#F5A623]" aria-hidden="true" />
              <span className="text-[#F5A623] text-xs font-semibold tracking-[0.2em] uppercase">
                Our Mobile App
              </span>
            </div>

            <h2
              className="font-bold text-white leading-tight mb-5"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
              }}
            >
              Laundry at Your
              <br />
              <span className="italic text-[#F5A623]">Fingertips</span>
            </h2>

            <p className="text-white/65 text-base leading-relaxed mb-8 max-w-md">
              Order, track, and manage your laundry from anywhere in Bali.
              The Bandar Laundry Express app puts a full-service laundry
              experience in the palm of your hand.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {appFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/8 hover:bg-white/8 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#1B3FA0]/60 flex items-center justify-center text-[#F5A623]">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{f.title}</div>
                    <div className="text-xs text-white/50 leading-relaxed">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <GooglePlayBadge />
              <div className="text-xs text-white/35 leading-snug">
                Rated <span className="text-white/60 font-semibold">4.9 ★</span><br />
                Available on Android
              </div>
            </div>
          </motion.div>

          {/* Phone mockup side */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }}
            className="flex justify-center items-center py-6 lg:py-0"
            aria-hidden="true"
          >
            {/* Glow behind phone */}
            <div className="absolute w-64 h-64 rounded-full bg-[#1B3FA0]/25 blur-3xl pointer-events-none" />
            <PhoneMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
