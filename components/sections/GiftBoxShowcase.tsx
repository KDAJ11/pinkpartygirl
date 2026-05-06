"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GiftBoxCard from "./GiftBoxCard";
import { giftBoxes } from "@/lib/data/giftBoxes";

export default function GiftBoxShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
              Gift Boxes
            </span>
            <div className="section-divider" />
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-semibold text-chocolate tracking-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Curated for every occasion
          </h2>
          <p className="text-base font-body text-chocolate/55 max-w-xl mx-auto leading-relaxed">
            Four tiers of luxury gifting — each one crafted with intention and delivered with love.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {giftBoxes.map((box, i) => (
            <GiftBoxCard key={box.id} box={box} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
