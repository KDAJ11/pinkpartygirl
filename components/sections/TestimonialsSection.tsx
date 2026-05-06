"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Pinkpartygirl made my birthday feel like I was the only person in the world who mattered. The attention to detail was unreal — every element of the surprise was so perfectly *me*. I cried. Twice.",
    name: "Adaeze O.",
    title: "Birthday Surprise · Lagos",
    initials: "AO",
    color: "bg-blush-100",
  },
  {
    quote:
      "I ordered the Indulgence Box for my sister's promotion and she wouldn't stop calling me to describe what was inside. The packaging alone had her emotional. Worth every kobo and then some.",
    name: "Temi B.",
    title: "Indulgence Gift Box · Lekki",
    initials: "TB",
    color: "bg-amber-50",
  },
  {
    quote:
      "I've used three different event planners in Lagos — Pinkpartygirl is in a completely different league. The aesthetic, the communication, the execution. My husband's 40th was everything I dreamed and more.",
    name: "Funmi A.",
    title: "Event Styling · Victoria Island",
    initials: "FA",
    color: "bg-rose-50",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5EDE0 0%, #FAF6EF 100%)" }}
      ref={ref}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 font-display text-[200px] leading-none text-blush/10 select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
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
              Testimonials
            </span>
            <div className="section-divider" />
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-semibold text-chocolate tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            She felt it. They all do.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={card}
              className="bg-white rounded-3xl p-8 shadow-card border border-cream-deep flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-rose-gold" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm font-body text-chocolate/70 leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs font-body font-semibold text-rose-gold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-chocolate">{t.name}</p>
                  <p className="text-xs font-body text-chocolate/45">{t.title}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
