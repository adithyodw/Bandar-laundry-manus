"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF8F4]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-14"
        >
          <span className="section-label">Google Reviews</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            What Our Customers
            <br />
            <span className="italic">Are Saying</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-7 border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <StarRating count={t.stars} />
              <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="h-px w-8 bg-[#F5A623] mb-4" />
              <div>
                <div className="font-semibold text-[#0D1B2A] text-sm">{t.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-slate-600 text-sm">
            <strong className="text-[#0D1B2A]">4.9 / 5</strong> based on 200+ Google Reviews
          </span>
        </motion.div>
      </div>
    </section>
  );
}
