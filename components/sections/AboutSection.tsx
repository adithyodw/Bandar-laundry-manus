"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_BG } from "@/lib/data";

const pillars = [
  {
    icon: "⚡",
    title: "Express Speed",
    desc: "Clean, folded, and ready in 90 minutes.",
  },
  {
    icon: "✨",
    title: "Premium Quality",
    desc: "Hotel-grade cleaning with premium detergents.",
  },
  {
    icon: "📱",
    title: "Digital First",
    desc: "Order, track, and pay — all via WhatsApp.",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly",
    desc: "Responsible cleaning, gentle on fabrics and Bali.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F4]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 border-2 border-[#F5A623] translate-x-4 translate-y-4 -z-10" />
            <Image
              src={HERO_BG}
              alt="Bandar Laundry Express — Bali's premium laundry service"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Our Story</span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Bali&apos;s First
                <br />
                <span className="italic">Digital Laundry</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Bandar Laundry Express was founded with a simple mission: to bring
                reliable, fast, and premium laundry service to Bali&apos;s residents
                and travelers. We are proud to be Bali&apos;s first fully digital
                laundry brand.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                What started as a single branch in Denpasar has grown to 9
                locations across the island. Our digital-first approach means you
                can order, track, and pay entirely through WhatsApp — no apps to
                download, no complicated systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white border border-slate-100"
                >
                  <span className="text-xl">{pillar.icon}</span>
                  <div>
                    <div className="font-semibold text-[#0D1B2A] text-sm mb-1">
                      {pillar.title}
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed">
                      {pillar.desc}
                    </div>
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
