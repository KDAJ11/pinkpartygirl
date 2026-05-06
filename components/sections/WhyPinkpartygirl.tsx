"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Curated with Love",
    body:
      "Every gift box is assembled by hand, every event detail is considered with intention. We don't do generic — we do you, beautifully.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C10 4 6 7.5 6 12c0 6 8 14 8 14s8-8 8-14c0-4.5-4-8-8-8z" stroke="#F2A0B0" strokeWidth="1.6" fill="rgba(242,160,176,0.12)"/>
        <path d="M14 10v2M12 12h4" stroke="#C9956C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Delivered on Time",
    body:
      "Celebrations wait for no one. We take punctuality personally — your moments arrive exactly when they should, impeccably presented.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#F2A0B0" strokeWidth="1.6"/>
        <path d="M14 8v6l4 2" stroke="#C9956C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Made for Her",
    body:
      "Our aesthetic is unapologetically feminine and deeply intentional. We understand the woman you're celebrating — and we celebrate her fully.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="5" stroke="#F2A0B0" strokeWidth="1.6"/>
        <path d="M14 15v8M10 19h8" stroke="#C9956C" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function WhyPinkpartygirl() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAF6EF 0%, #F5EDE0 100%)",
      }}
      ref={ref}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-blush/40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
              Why Us
            </span>
            <div className="section-divider" />
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-semibold text-chocolate tracking-tight max-w-2xl mx-auto text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Pinkpartygirl difference
          </h2>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {pillars.map((p) => (
            <motion.div key={p.number} variants={item} className="relative">
              {/* Number watermark */}
              <span
                className="absolute -top-4 -left-2 font-display text-7xl font-bold text-blush/12 leading-none select-none pointer-events-none"
                style={{ fontFamily: "var(--font-playfair)" }}
                aria-hidden="true"
              >
                {p.number}
              </span>
              <div className="relative pt-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-blush-sm flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3
                  className="font-display text-xl font-semibold text-chocolate mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm font-body text-chocolate/60 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
