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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-blush-sm border-b border-blush-100/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
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

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-blush text-white text-sm font-medium font-body tracking-wide hover:bg-blush-400 transition-all duration-200 shadow-blush-sm hover:shadow-blush-md hover:-translate-y-0.5 min-h-[44px]"
              >
                Plan My Moment
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2.5 rounded-full text-chocolate hover:bg-blush-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="fixed inset-x-0 top-[72px] z-40 bg-cream/95 backdrop-blur-md border-b border-blush-100 shadow-blush-md"
          >
            <nav className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-xl font-display font-medium tracking-wide transition-colors duration-200 block ${
                      pathname === link.href ? "text-blush-400" : "text-chocolate hover:text-blush-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full bg-blush text-white text-base font-medium tracking-wide min-h-[48px]"
                >
                  Plan My Moment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
