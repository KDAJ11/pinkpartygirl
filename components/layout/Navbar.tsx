"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Gift Boxes" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/60 backdrop-blur-md shadow-sm border-b border-blush-100/40 py-2"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between h-10">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" aria-label="Pinkpartygirl home">
              <span
                className="font-display text-xl font-semibold tracking-wide text-chocolate group-hover:text-blush-400 transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Pinkpartygirl
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-rose-gold font-body font-medium mt-0.5">
                Lagos, Nigeria
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body font-medium tracking-wide transition-all duration-200 relative group ${
                    pathname === link.href
                      ? "text-blush-400"
                      : "text-chocolate/80 hover:text-blush-400"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-blush to-rose-gold transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-blush text-white text-sm font-medium font-body tracking-wide hover:bg-blush-400 transition-all duration-200 shadow-blush-sm hover:shadow-blush-md hover:-translate-y-0.5 min-h-[44px]"
              >
                Plan My Moment
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2.5 rounded-full text-chocolate hover:bg-blush-100 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center z-[60]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream"
          >
            {/* Close button top-right */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="absolute top-5 right-4 p-3 rounded-full bg-blush-100 text-chocolate hover:bg-blush/30 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              <X size={22} />
            </button>

            {/* Centered nav links */}
            <div className="flex flex-col items-center justify-center h-full gap-2 px-8">
              {/* Brand mark */}
              <span
                className="font-display text-2xl font-semibold text-chocolate mb-10 tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
                aria-hidden="true"
              >
                Pinkpartygirl
              </span>

              <nav className="flex flex-col items-center gap-3 w-full max-w-xs" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`block text-center py-3 px-6 rounded-2xl text-2xl font-display font-medium tracking-wide transition-all duration-200 min-h-[60px] flex items-center justify-center ${
                        pathname === link.href
                          ? "text-blush-400 bg-blush-50"
                          : "text-chocolate hover:text-blush-400 hover:bg-blush-50"
                      }`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                className="mt-8 w-full max-w-xs"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-6 py-4 rounded-full bg-blush text-white text-base font-body font-medium tracking-wide min-h-[56px] shadow-blush-md"
                >
                  Plan My Moment
                </Link>
              </motion.div>

              {/* Instagram */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-xs font-body text-chocolate/40 tracking-[0.15em] uppercase"
              >
                @pinkpartygirl_ng
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
