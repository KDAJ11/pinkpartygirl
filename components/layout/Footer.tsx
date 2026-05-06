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
    <footer className="bg-espresso text-cream/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="font-display text-2xl font-semibold text-cream tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Pinkpartygirl
              </span>
            </Link>
            <p className="text-sm font-body text-cream/60 leading-relaxed mb-5 max-w-xs">
              Moments made unforgettable. Luxury event styling and curated gift experiences — born in Lagos, felt everywhere.
            </p>
            <div className="flex items-center gap-2 text-xs text-cream/40 font-body mb-3">
              <MapPin size={13} />
              <span>Lagos, Nigeria · CAC Registered</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://instagram.com/pinkpartygirl_ng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-blush/20 flex items-center justify-center text-cream/70 hover:text-blush transition-all duration-200"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="mailto:hello@pinkpartygirl.ng"
                aria-label="Email us"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-blush/20 flex items-center justify-center text-cream/70 hover:text-blush transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-rose-gold mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/shop", label: "Gift Boxes" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-cream/60 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-rose-gold mb-5">
              What We Do
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Event Styling & Planning",
                "Luxury Gift Boxes",
                "Surprise Experiences",
                "Birthday Celebrations",
                "Corporate Gifting",
              ].map((s) => (
                <li key={s} className="text-sm font-body text-cream/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-cream/40">
            © {new Date().getFullYear()} Pinkpartygirl. All rights reserved.
          </p>
          <p className="text-xs font-body text-cream/30 italic font-display">
            Your secret to unforgettable celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}
