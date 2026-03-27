"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LOGO_URL } from "@/lib/data";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Branches", href: "/#branches" },
  { label: "Kemitraan", href: "/#franchise" },
  { label: "FAQ", href: "/faq-laundry-bali" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LOGO_URL}
            alt="Bandar Laundry Express"
            width={160}
            height={44}
            className="h-9 md:h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 font-[var(--font-inter)] ${
                scrolled
                  ? "text-slate-700 hover:text-[#F5A623]"
                  : "text-white/90 hover:text-[#F5A623]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#franchise" className="btn-gold text-xs px-5 py-2.5">
            Hubungi Kami
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-slate-800" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-slate-800" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-slate-800" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-left text-sm font-medium text-slate-700 hover:text-[#1B3FA0] py-3 border-b border-slate-50 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#franchise"
              onClick={() => setMenuOpen(false)}
              className="btn-gold mt-3 text-center"
            >
              Hubungi Kami
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
