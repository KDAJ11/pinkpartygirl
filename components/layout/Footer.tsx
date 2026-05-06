import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-cream-deep pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block mb-3">
              <span
                className="font-display text-2xl font-semibold text-chocolate tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Pinkpartygirl
              </span>
            </Link>
            <p
              className="font-display text-sm font-normal italic text-rose-gold mb-5 leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Moments made unforgettable.
            </p>
            <p className="text-sm font-body text-chocolate/60 leading-relaxed mb-5 max-w-xs">
              Luxury event styling and curated gift experiences — born in Lagos, felt everywhere.
            </p>
            <div className="flex items-center gap-2 text-xs text-chocolate/45 font-body mb-4">
              <MapPin size={13} aria-hidden="true" />
              <span>Lagos, Nigeria · CAC Registered</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/pinkpartygirl_ng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full bg-cream-warm hover:bg-blush-100 flex items-center justify-center text-chocolate/60 hover:text-blush-400 transition-all duration-200 border border-cream-deep hover:border-blush/40"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="mailto:hello@pinkpartygirl.ng"
                aria-label="Email us"
                className="w-10 h-10 rounded-full bg-cream-warm hover:bg-blush-100 flex items-center justify-center text-chocolate/60 hover:text-blush-400 transition-all duration-200 border border-cream-deep hover:border-blush/40"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-rose-gold mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/shop", label: "Gift Boxes" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-chocolate/60 hover:text-chocolate transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-rose-gold mb-5">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-body text-chocolate/60 hover:text-chocolate transition-colors duration-200 group justify-center md:justify-start"
                >
                  <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#25D366" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                  </span>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@pinkpartygirl.ng"
                  className="flex items-center gap-2.5 text-sm font-body text-chocolate/60 hover:text-chocolate transition-colors duration-200 justify-center md:justify-start"
                >
                  <span className="w-8 h-8 rounded-full bg-blush-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={13} className="text-blush" aria-hidden="true" />
                  </span>
                  hello@pinkpartygirl.ng
                </a>
              </li>
              <li className="text-sm font-body text-chocolate/45 leading-relaxed">
                We respond within 24 hours.<br />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Rose gold horizontal rule */}
        <div
          className="w-full h-px mb-8"
          style={{ background: "linear-gradient(90deg, transparent, #C9956C 20%, #C9956C 80%, transparent)" }}
          aria-hidden="true"
        />

        {/* Copyright bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <p className="text-xs font-body text-chocolate/40">
            © {new Date().getFullYear()} Pinkpartygirl. All rights reserved. | Lagos, Nigeria
          </p>
          <p
            className="text-xs font-display italic text-chocolate/30"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your secret to unforgettable celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}
