"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Ingredients", href: "/ingredients" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 py-5 sm:px-6">
      
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/50 bg-[#FFF9E8]/95 px-5 py-3 shadow-[0_8px_30px_rgba(120,95,0,0.10)] backdrop-blur-md md:px-7">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/assets/Soummam.png"
            alt="Soumam"
            width={130}
            height={45}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-[2.5px] after:-translate-x-1/2 after:rounded-full after:bg-[#E7C000] after:transition-all after:duration-300 ${
                  active
                    ? "font-semibold text-[#8C7400] after:w-full"
                    : "font-medium text-[#171717] after:w-0 hover:text-[#9B8100] hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Login */}
        <Link
          href="/login"
          className={`hidden rounded-full px-7 py-2.5 text-sm font-semibold transition-all duration-300 md:block ${
            pathname === "/login"
              ? "bg-[#E5BE00] text-black shadow-[0_4px_15px_rgba(180,145,0,0.30)] ring-2 ring-black/20"
              : "bg-[#FFD923] text-black shadow-[0_4px_15px_rgba(180,145,0,0.18)] hover:-translate-y-0.5 hover:bg-[#F1C900] hover:shadow-[0_7px_20px_rgba(180,145,0,0.25)]"
          }`}
        >
          Login
        </Link>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD923] transition-all duration-300 hover:bg-[#F1C900] md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-black transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+12px)] z-50 overflow-hidden rounded-3xl border border-white/60 bg-[#FFF9E8]/95 p-5 shadow-[0_15px_40px_rgba(100,80,0,0.15)] backdrop-blur-xl md:hidden">
            
            <div className="flex flex-col">
              
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`border-b border-black/5 px-3 py-3.5 text-sm transition-all duration-300 last:border-none ${
                      active
                        ? "rounded-xl bg-[#FFD923]/35 pl-4 font-bold text-[#8C7400]"
                        : "font-medium text-black hover:pl-4 hover:text-[#A48700]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Login */}
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className={`mt-4 rounded-full px-6 py-3 text-center text-sm font-semibold text-black transition-all duration-300 ${
                  pathname === "/login"
                    ? "bg-[#E5BE00] ring-2 ring-black/20"
                    : "bg-[#FFD923] hover:bg-[#F1C900]"
                }`}
              >
                Login
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}