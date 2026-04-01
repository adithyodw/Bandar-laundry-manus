import Image from "next/image";
import Link from "next/link";
import { LOGO_URL, FACEBOOK_URL, APP_PLAY_URL } from "@/lib/data";

const navLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Branches", href: "/#branches" },
  { label: "Kemitraan", href: "/kemitraan" },
  { label: "FAQ", href: "/faq-laundry-bali" },
];

const locationLinks = [
  { label: "Laundry Kuta", href: "/laundry-kuta" },
  { label: "Laundry Seminyak", href: "/laundry-seminyak" },
  { label: "Laundry Canggu", href: "/laundry-canggu" },
  { label: "Laundry Ubud", href: "/laundry-ubud" },
  { label: "Laundry Denpasar", href: "/laundry-denpasar" },
  { label: "Laundry Jimbaran", href: "/laundry-jimbaran" },
  { label: "Laundry Sanur", href: "/laundry-sanur" },
  { label: "Laundry Nusa Dua", href: "/laundry-nusa-dua" },
];

const serviceLinks = [
  { label: "Express Laundry Bali", href: "/express-laundry-bali" },
  { label: "Regular Laundry Bali", href: "/regular-laundry-bali" },
  { label: "Ironing Service Bali", href: "/ironing-service-bali" },
  { label: "Commercial Laundry Bali", href: "/commercial-laundry-bali" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#0D1B2A] text-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-1">
            <Image
              src={LOGO_URL}
              alt="Bandar Laundry Express"
              width={160}
              height={48}
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Bali&apos;s first digital laundry service. Fast, clean, and
              reliable — serving residents, travelers, and hospitality
              businesses across 9 branches.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/bandarlaundryexpress/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/55 hover:text-[#E1306C] hover:border-[#E1306C] transition-colors rounded-sm"
                aria-label="Follow us on Instagram"
                title="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/55 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors rounded-sm"
                aria-label="Follow us on Facebook"
                title="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/62817334128"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/55 hover:text-[#25D366] hover:border-[#25D366] transition-colors rounded-sm"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>

              {/* Google Play */}
              <a
                href={APP_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/55 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors rounded-sm"
                aria-label="Download on Google Play"
                title="Google Play"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.18 23.76c.36.2.77.24 1.16.11L15.63 12 12 8.37 3.18 23.76z" opacity=".85"/>
                  <path d="M20.47 10.37L17.63 8.8l-3.41 3.21 3.41 3.21 2.87-1.58c.82-.46.82-1.82-.03-2.27z"/>
                  <path d="M4.34.13C3.95 0 3.54.04 3.18.24L12 9.13l3.63-3.63L4.34.13z" opacity=".85"/>
                  <path d="M3.18.24C2.33.7 1.8 1.6 1.8 2.6v18.8c0 1 .53 1.9 1.38 2.36L12 14.87 3.18.24z" opacity=".6"/>
                </svg>
              </a>
            </div>

            {/* App download badge */}
            <a
              href={APP_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 bg-white/6 hover:bg-white/10 border border-white/12 hover:border-white/20 text-white px-4 py-2.5 rounded-lg transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#F5A623]" aria-hidden="true">
                <path d="M3.18 23.76c.36.2.77.24 1.16.11L15.63 12 12 8.37 3.18 23.76z" opacity=".85"/>
                <path d="M20.47 10.37L17.63 8.8l-3.41 3.21 3.41 3.21 2.87-1.58c.82-.46.82-1.82-.03-2.27z"/>
                <path d="M4.34.13C3.95 0 3.54.04 3.18.24L12 9.13l3.63-3.63L4.34.13z" opacity=".85"/>
                <path d="M3.18.24C2.33.7 1.8 1.6 1.8 2.6v18.8c0 1 .53 1.9 1.38 2.36L12 14.87 3.18.24z" opacity=".6"/>
              </svg>
              <div className="leading-tight">
                <div className="text-[9px] text-white/40 uppercase tracking-wider">Get the App</div>
                <div className="font-semibold text-xs">Google Play</div>
              </div>
            </a>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F5A623] mb-5">
              Navigation
            </div>
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors py-2 min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F5A623] mb-5">
              Locations
            </div>
            <nav className="flex flex-col gap-0.5">
              {locationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors py-1.5 min-h-[36px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F5A623] mb-5">
              Services
            </div>
            <nav className="flex flex-col gap-0.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors py-1.5 min-h-[36px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F5A623] mb-5">
                Contact
              </div>
              <div className="space-y-3 text-sm text-white/55">
                <div>
                  <a href="tel:+62817334128" className="hover:text-white transition-colors">
                    +62817334128
                  </a>
                </div>
                <div>
                  <Link href="/kemitraan" className="hover:text-white transition-colors">
                    Kemitraan &amp; investor partnership
                  </Link>
                </div>
                <div>Open Daily: 07:00 – 22:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Bandar Laundry Express. All rights reserved.</span>
          <span>Bali&apos;s First Digital Laundry Service</span>
        </div>
      </div>
    </footer>
  );
}
