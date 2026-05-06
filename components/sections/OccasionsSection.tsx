"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const occasions = [
  {
    id: "birthday",
    name: "Birthdays",
    description: "Milestone moments deserve celebration on a grand scale.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4 C14 4, 12 2, 12 0 C12 2, 10 4, 8 4" stroke="#C9956C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 4 C18 4, 20 2, 20 0 C20 2, 22 4, 24 4" stroke="#C9956C" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="4" y="10" width="24" height="18" rx="3" stroke="#C9956C" strokeWidth="1.8"/>
        <rect x="4" y="8" width="24" height="4" rx="2" stroke="#F2A0B0" strokeWidth="1.5"/>
        <line x1="16" y1="10" x2="16" y2="28" stroke="#F2A0B0" strokeWidth="1.2" strokeDasharray="2 2"/>
        <line x1="4" y1="19" x2="28" y2="19" stroke="#F2A0B0" strokeWidth="1.2" strokeDasharray="2 2"/>
        <circle cx="8" cy="4" r="2" fill="#F2A0B0" opacity="0.7"/>
        <circle cx="16" cy="4" r="2" fill="#C9956C" opacity="0.8"/>
        <circle cx="24" cy="4" r="2" fill="#F2A0B0" opacity="0.7"/>
      </svg>
    ),
  },
  {
    id: "anniversary",
    name: "Anniversaries",
    description: "Every year of love deserves a deeply personal tribute.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 26 C8 20, 2 14, 2 9 C2 5, 5 2, 9 2 C12 2, 14 4, 16 6 C18 4, 20 2, 23 2 C27 2, 30 5, 30 9 C30 14, 24 20, 16 26Z"
          stroke="#C9956C" strokeWidth="1.8" fill="rgba(201,149,108,0.08)"/>
        <path d="M16 20 C11 16, 7 12, 7 9 C7 7, 8.5 6, 10 6 C12 6, 14 8, 16 10"
          stroke="#F2A0B0" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <circle cx="24" cy="8" r="3" stroke="#C9956C" strokeWidth="1.2" fill="none"/>
        <path d="M26 6 L28 4 M22 6 L20 4" stroke="#C9956C" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: "corporate",
    name: "Corporate Events",
    description: "Impress your team, clients, and stakeholders with intentional gifting.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="26" height="18" rx="3" stroke="#C9956C" strokeWidth="1.8"/>
        <path d="M10 10 V8 C10 6, 12 4, 16 4 C20 4, 22 6, 22 8 V10" stroke="#C9956C" strokeWidth="1.5" fill="none"/>
        <rect x="13" y="14" width="6" height="5" rx="1.5" stroke="#F2A0B0" strokeWidth="1.5"/>
        <line x1="3" y1="19" x2="29" y2="19" stroke="#F2A0B0" strokeWidth="1" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    id: "bridal",
    name: "Bridal Showers",
    description: "Celebrate the bride-to-be with a luxury experience she'll never forget.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 28 C6 22, 10 16, 16 14 C22 16, 26 22, 26 28Z" stroke="#C9956C" strokeWidth="1.8" fill="rgba(242,160,176,0.1)"/>
        <circle cx="16" cy="10" r="4" stroke="#C9956C" strokeWidth="1.8"/>
        <path d="M10 14 C8 12, 6 10, 6 8 C6 6, 8 4, 10 6" stroke="#F2A0B0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M22 14 C24 12, 26 10, 26 8 C26 6, 24 4, 22 6" stroke="#F2A0B0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M12 28 L14 24 M16 28 L16 23 M20 28 L18 24" stroke="#F2A0B0" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        <circle cx="16" cy="10" r="1.5" fill="#C9956C" opacity="0.8"/>
      </svg>
    ),
  },
  {
    id: "graduation",
    name: "Graduations",
    description: "Years of hard work deserve a celebration as extraordinary as the achievement.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 13 L16 7 L28 13 L16 19 L4 13Z" stroke="#C9956C" strokeWidth="1.8" fill="rgba(201,149,108,0.1)" strokeLinejoin="round"/>
        <path d="M9 16 L9 23 C9 25, 12 27, 16 27 C20 27, 23 25, 23 23 L23 16" stroke="#C9956C" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="28" y1="13" x2="28" y2="21" stroke="#C9956C" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="23" r="2" fill="#F2A0B0" stroke="#C9956C" strokeWidth="1"/>
        <path d="M13 8 L16 7 L19 8" stroke="#F2A0B0" strokeWidth="1" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: "just-because",
    name: "Just Because",
    description: "The most powerful reason to send a gift: no occasion needed at all.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="13" width="20" height="15" rx="3" stroke="#C9956C" strokeWidth="1.8"/>
        <rect x="6" y="11" width="20" height="4" rx="2" stroke="#F2A0B0" strokeWidth="1.5"/>
        <path d="M16 11 L16 28" stroke="#F2A0B0" strokeWidth="1.2"/>
        <path d="M16 11 C14 7, 8 5, 8 8 C8 11, 14 11, 16 11" stroke="#C9956C" strokeWidth="1.5" fill="rgba(201,149,108,0.1)"/>
        <path d="M16 11 C18 7, 24 5, 24 8 C24 11, 18 11, 16 11" stroke="#C9956C" strokeWidth="1.5" fill="rgba(201,149,108,0.1)"/>
        <circle cx="24" cy="5" r="1.5" fill="#F2A0B0" opacity="0.7"/>
        <circle cx="10" cy="7" r="1" fill="#C9956C" opacity="0.5"/>
      </svg>
    ),
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function OccasionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
              Occasions
            </span>
            <div className="section-divider" />
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-semibold text-chocolate tracking-tight mb-4 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Every occasion, perfectly curated
          </h2>
          <p className="text-base font-body text-chocolate/55 max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s an intimate birthday or a grand corporate event, we show up for every moment.
          </p>
        </motion.div>

        {/* 3×2 grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {occasions.map((occ) => (
            <motion.div
              key={occ.id}
              variants={cardAnim}
              className="group bg-cream-warm rounded-2xl p-7 border border-cream-deep
                hover:bg-[#FDF0F3] hover:border-blush/50
                transition-all duration-250 cursor-default shadow-[0_2px_12px_rgba(45,27,20,0.05)]
                hover:shadow-[0_6px_20px_rgba(242,160,176,0.18)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white shadow-blush-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                {occ.icon}
              </div>

              <h3
                className="font-display text-lg font-semibold text-chocolate mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {occ.name}
              </h3>
              <p className="text-sm font-body text-chocolate/60 leading-relaxed">
                {occ.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
