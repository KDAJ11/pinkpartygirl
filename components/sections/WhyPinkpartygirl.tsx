"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Curated with Love",
    body: "Every gift box is assembled by hand, every event detail is considered with intention. We don't do generic — we do you, beautifully.",
  },
  {
    number: "02",
    title: "Delivered on Time",
    body: "Celebrations wait for no one. We take punctuality personally — your moments arrive exactly when they should, impeccably presented.",
  },
  {
    number: "03",
    title: "Made for Her",
    body: "Our aesthetic is unapologetically feminine and deeply intentional. We understand the woman you're celebrating — and we celebrate her fully.",
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
      style={{ background: "linear-gradient(180deg, #FAF6EF 0%, #F5EDE0 100%)" }}
      ref={ref}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-blush/40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
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
            <motion.div key={p.number} variants={item} className="relative min-h-[180px]">
              {/* Large watermark numeral — sits behind text */}
              <span
                className="absolute -top-6 left-0 select-none pointer-events-none font-display font-bold leading-none"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(80px, 12vw, 120px)",
                  color: "#F2A0B0",
                  opacity: 0.30,
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {p.number}
              </span>

              {/* Content overlaid on top of numeral */}
              <div className="relative pt-16">
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
