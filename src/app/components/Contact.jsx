"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative w-full bg-[#FFD923] text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        {/* ================================= */}
        {/* TOP SECTION: COLUMNS */}
        {/* ================================= */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Brand Column (spans 2 columns on desktop) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white p-1.5 shadow-sm">
                <Image
                  src="/assets/Soummam.png"
                  alt="Soummam"
                  width={60}
                  height={30}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-black">
                  Soummam
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70">
                  Laiterie & Boissons
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/80">
              Laiterie Soummam, engagée chaque jour à offrir le meilleur des
              produits laitiers frais, gourmands et de qualité supérieure pour
              toute la famille.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-base font-bold tracking-wide text-black">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-black/80">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div>
            <h4 className="text-base font-bold tracking-wide text-black">
              Quick Link
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-black/80">
              <li>
                <Link
                  href="#contact"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-base font-bold tracking-wide text-black">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-black/80">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/404"
                  className="transition-colors duration-200 hover:text-black hover:underline"
                >
                  404
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ================================= */}
        {/* MIDDLE SECTION: CONTACT INFO ROW */}
        {/* ================================= */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-black/15 pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-start sm:gap-10">
            {/* Address */}
            <div className="flex items-center gap-2.5 text-sm text-black/90">
              <svg
                className="h-5 w-5 shrink-0 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Zone d'activité Taharacht, Akbou, Algérie</span>
            </div>

            {/* Phone */}
            <a
              href="tel:+21334352222"
              className="flex items-center gap-2.5 text-sm text-black/90 transition-colors hover:text-black"
            >
              <svg
                className="h-5 w-5 shrink-0 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(+213) 34 35 22 22</span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@soummam-dz.com"
              className="flex items-center gap-2.5 text-sm text-black/90 transition-colors hover:text-black"
            >
              <svg
                className="h-5 w-5 shrink-0 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>contact@soummam-dz.com</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black transition-all duration-300 hover:bg-black hover:text-[#FFD923]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black transition-all duration-300 hover:bg-black hover:text-[#FFD923]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black transition-all duration-300 hover:bg-black hover:text-[#FFD923]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ================================= */}
        {/* BOTTOM SECTION: COPYRIGHT */}
        {/* ================================= */}
        <div className="mt-8 border-t border-black/15 pt-6 text-center">
          <p className="text-xs text-black/70">
            © {currentYear} Soummam - Tous Droits Réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
