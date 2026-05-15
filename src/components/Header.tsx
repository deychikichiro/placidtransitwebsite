"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = isHome
    ? scrolled
      ? "bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/30"
      : "bg-transparent"
    : "bg-brand-black";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" onClick={() => setMenuOpen(false)}>
          <div className="w-9 h-9 bg-brand-red rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-base" style={{ fontFamily: "serif" }}>PT</span>
          </div>
          <div className="leading-tight">
            <span className="block text-white font-semibold text-[1.05rem] tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Placid Transit
            </span>
            <span className="block text-white/50 text-[0.65rem] tracking-widest uppercase">LLC</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  active
                    ? "text-white bg-white/10"
                    : "text-white/75 hover:text-white hover:bg-white/8"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:XXXXXXXXXX"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors border border-white/25 hover:border-white/50 px-4 py-2 rounded"
          >
            ☎ (XXX) XXX-XXXX
          </a>
          <Link
            href="/contact"
            className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
          >
            Free Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-[68px] bg-brand-black transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-medium py-3 px-4 rounded hover:bg-white/8 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:XXXXXXXXXX"
              className="text-center border border-white/25 text-white py-3 rounded font-medium"
            >
              ☎ (XXX) XXX-XXXX
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-center bg-brand-red text-white py-3 rounded font-semibold"
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
