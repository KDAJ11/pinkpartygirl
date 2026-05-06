"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 26V14l12-10 12 10v12" stroke="#C9956C" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="11" y="18" width="10" height="8" rx="1" stroke="#F2A0B0" strokeWidth="1.5"/>
        <path d="M16 8v4M12 12h8" stroke="#C9956C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Event Styling",
    description:
      "From intimate dinners to grand celebrations, we transform your vision into a breathtaking reality. Every detail considered. Every moment curated.",
    href: "/services",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="12" width="20" height="16" rx="2" stroke="#C9956C" strokeWidth="1.8"/>
        <path d="M16 12V8M10 12V8M22 12V8" stroke="#F2A0B0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 8c0-3.3-3-5-6-3M16 8c0-3.3 3-5 6-3" stroke="#C9956C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 17h20" stroke="#F2A0B0" strokeWidth="1.2"/>
        <path d="M16 12v16" stroke="#F2A0B0" strokeWidth="1.2"/>
      </svg>
    ),
    title: "Gift Boxes",
    description:
      "Luxuriously curated gift boxes for every occasion — birthdays, anniversaries, and beyond. Four tiers, infinite sentiment, delivered with care.",
    href: "/shop",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="#C9956C" strokeWidth="1.8"/>
        <path d="M16 8v5l3 3" stroke="#F2A0B0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 24s3-4 7-4 7 4 7 4" stroke="#C9956C" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="1.5" fill="#F2A0B0"/>
      </svg>
    ),
    title: "Surprises",
    description:
      "The magic is in the reveal. We orchestrate personalised surprise experiences — from pop-up proposals to unforgettable birthday ambushes.",
    href: "/services",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function ServicesStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
              What We Offer
            </span>
            <div className="section-divider" />
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-semibold text-chocolate tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Three ways we celebrate you
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={card}>
              <Link
                href={s.href}
                className="group block p-8 lg:p-10 rounded-3xl bg-white border border-cream-deep hover:border-blush/50 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blush-100 to-cream-warm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  {s.icon}
                </div>
                <h3
                  className="font-display text-2xl font-semibold text-chocolate mb-3 group-hover:text-blush-400 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm font-body text-chocolate/60 leading-relaxed mb-6">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold tracking-[0.12em] uppercase text-rose-gold group-hover:gap-3 transition-all duration-200">
                  Explore
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
