"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  "express-laundry-bali": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="13"/>
      <path d="M16 8v8l4 2"/>
      <path d="M7 16a9 9 0 0 1 9-9"/>
    </svg>
  ),
  "regular-laundry-bali": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="24" height="20" rx="2"/>
      <circle cx="16" cy="16" r="6"/>
      <circle cx="16" cy="16" r="2"/>
      <path d="M4 10h24"/>
    </svg>
  ),
  "ironing-service-bali": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 26h20"/><path d="M8 26V14l8-8 8 8v12"/><path d="M12 26v-6h8v6"/><path d="M6 14h20"/>
    </svg>
  ),
  "commercial-laundry-bali": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="26" height="18" rx="2"/>
      <path d="M3 14h26"/><path d="M10 8V5"/><path d="M22 8V5"/>
      <path d="M8 20h4"/><path d="M14 20h4"/><path d="M20 20h4"/>
    </svg>
  ),
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-14"
        >
          <span className="section-label">Our Services</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Everything Your
            <br />
            <span className="italic">Wardrobe Needs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={`/${service.slug}`}
                className={`service-card block p-7 border h-full ${
                  service.highlight
                    ? "bg-[#1B3FA0] border-[#1B3FA0] text-white"
                    : "bg-white border-slate-100 text-[#0D1B2A]"
                }`}
              >
                <div
                  className={`mb-6 ${
                    service.highlight ? "text-[#F5A623]" : "text-[#1B3FA0]"
                  }`}
                >
                  {icons[service.slug]}
                </div>

                <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-2 text-[#F5A623]">
                  {service.subtitle}
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    service.highlight ? "text-white" : "text-[#0D1B2A]"
                  }`}
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? "text-white/75" : "text-slate-500"
                  }`}
                >
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span
                    className={`text-xs font-semibold tracking-wide uppercase ${
                      service.highlight ? "text-[#F5A623]" : "text-[#1B3FA0]"
                    }`}
                  >
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
