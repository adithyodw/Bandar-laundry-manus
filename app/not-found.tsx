import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center px-6">
      <div className="text-center">
        <div
          className="text-8xl font-bold text-[#F5A623] mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          404
        </div>
        <h1
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-white/60 mb-8 max-w-sm mx-auto">
          The page you are looking for doesn&apos;t exist. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold">
            Return Home
          </Link>
          <a
            href="https://wa.me/6281290271990"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
