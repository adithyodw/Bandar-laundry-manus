"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "9+", label: "Branches in Bali" },
  { value: "90 Min", label: "Express Turnaround" },
  { value: "5,000+", label: "Happy Customers" },
  { value: "07–22", label: "Open Daily" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#1B3FA0] py-8">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-2xl md:text-3xl font-bold text-[#F5A623]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/70 tracking-wide mt-1 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
