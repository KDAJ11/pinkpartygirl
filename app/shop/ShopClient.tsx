"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GiftBoxCard from "@/components/sections/GiftBoxCard";
import CTABand from "@/components/sections/CTABand";
import { giftBoxes } from "@/lib/data/giftBoxes";

const filters = [
  { label: "All", value: "all" },
  { label: "Budget-Friendly", value: "budget", maxPrice: 35000 },
  { label: "Premium", value: "premium", minPrice: 35001 },
];

export default function ShopClient() {
  const [active, setActive] = useState("all");

  const filtered = giftBoxes.filter((b) => {
    if (active === "budget") return b.price <= 35000;
    if (active === "premium") return b.price > 35000;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 70% 60% at 40% 0%, #FFE8ED 0%, #FAF6EF 65%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" as const }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
                Gift Boxes
              </span>
              <div className="section-divider" />
            </div>
            <h1
              className="font-display text-5xl md:text-7xl font-semibold text-chocolate leading-tight tracking-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The perfect gift{" "}
              <span className="italic font-normal" style={{ color: "#C9956C" }}>
                for her.
              </span>
            </h1>
            <p className="text-lg font-body text-chocolate/60 max-w-xl mx-auto leading-relaxed">
              Four tiers of thoughtfully curated luxury — each one a love letter, ready to be delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter strip */}
      <section className="sticky top-[72px] z-30 bg-cream/90 backdrop-blur-md border-b border-cream-deep shadow-[0_1px_0_rgba(242,160,176,0.2)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <span className="text-xs font-body font-medium text-chocolate/40 flex-shrink-0 tracking-wide mr-2">Filter:</span>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 min-h-[40px] ${
                active === f.value
                  ? "bg-blush text-white shadow-blush-sm"
                  : "bg-white border border-cream-deep text-chocolate/70 hover:border-blush/50 hover:text-blush-400"
              }`}
              aria-pressed={active === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8"
          >
            {filtered.map((box, i) => (
              <GiftBoxCard key={box.id} box={box} index={i} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-display text-2xl text-chocolate/40 italic" style={{ fontFamily: "var(--font-playfair)" }}>
                No boxes in this range yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom gifting note */}
      <section className="py-16 bg-cream-warm">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold mb-3">
              Need Something Custom?
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-semibold text-chocolate mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              We do bespoke, too.
            </h2>
            <p className="text-sm font-body text-chocolate/60 leading-relaxed mb-7 max-w-lg mx-auto">
              Have a specific vision, a different budget, or need corporate gifting for multiple people? Reach out and we&apos;ll craft something just right.
            </p>
            <a
              href="https://wa.me/2348000000000?text=Hi%20Pinkpartygirl!%20I%27d%20like%20a%20custom%20gift%20box"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blush text-white font-body font-medium text-sm shadow-blush-sm hover:shadow-blush-md hover:-translate-y-0.5 transition-all duration-200 min-h-[48px]"
            >
              Request Custom Box
            </a>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
