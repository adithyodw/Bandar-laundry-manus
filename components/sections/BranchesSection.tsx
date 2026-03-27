"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { branches } from "@/lib/data";

export default function BranchesSection() {
  return (
    <section id="branches" className="py-20 md:py-28 bg-[#FAF8F4]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6"
        >
          <div>
            <span className="section-label">Our Locations</span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Find a Branch
              <br />
              <span className="italic">Near You</span>
            </h2>
          </div>
          <div className="text-slate-500 text-sm md:text-right max-w-xs">
            <span
              className="text-[#1B3FA0] font-semibold text-2xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              9
            </span>{" "}
            branches across Denpasar and Badung, open daily 07:00 – 22:00.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="branch-card bg-white p-6 shadow-sm border border-slate-50 hover:border-[#F5A623]/30"
            >
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F5A623] mb-2">
                {branch.area}
              </div>

              <h3
                className="text-lg font-bold text-[#0D1B2A] mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {branch.name}
              </h3>

              <div className="flex items-start gap-2.5 mb-3">
                <svg
                  className="flex-shrink-0 mt-0.5 text-[#1B3FA0]"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm text-slate-500 leading-relaxed">
                  {branch.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5 mb-5">
                <svg
                  className="flex-shrink-0 text-[#1B3FA0]"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.29 6.29l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm text-slate-500">{branch.phone}</span>
              </div>

              <a
                href={branch.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1B3FA0] hover:text-[#F5A623] transition-colors tracking-wide uppercase"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Open in Google Maps
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Can&apos;t find a branch near you? We also offer pickup & delivery in selected areas.
          </p>
          <Link
            href="https://wa.me/6281290271990?text=Halo%20Bandar%20Laundry%2C%20saya%20ingin%20tahu%20layanan%20pickup%20di%20area%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex"
          >
            Inquire About Pickup
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
