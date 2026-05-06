"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Pinkpartygirl made my birthday feel like I was the only person in the world who mattered. The attention to detail was unreal — every element of the surprise was so perfectly me. I cried. Twice.",
    name: "Adaeze O.",
    occasion: "Birthday Surprise",
    location: "Lagos",
    initials: "AO",
    color: "bg-blush-100",
  },
  {
    quote:
      "I ordered the Indulgence Box for my sister's promotion and she wouldn't stop calling me to describe what was inside. The packaging alone had her emotional. Worth every kobo and then some.",
    name: "Temi B.",
    occasion: "Indulgence Gift Box",
    location: "Lekki",
    initials: "TB",
    color: "bg-amber-50",
  },
  {
    quote:
      "I've used three different event planners in Lagos — Pinkpartygirl is in a completely different league. The aesthetic, the communication, the execution. My husband's 40th was everything I dreamed and more.",
    name: "Funmi A.",
    occasion: "Event Styling",
    location: "Victoria Island",
    initials: "FA",
    color: "bg-rose-50",
  },
];

const ROTATION_INTERVAL = 5000;

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    const timer = setInterval(next, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused, inView]);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5EDE0 0%, #FAF6EF 100%)" }}
      ref={ref}
    >
      {/* Decorative oversized quote mark */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 font-display text-[220px] leading-none text-blush/8 select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
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

        {/* Single rotating testimonial */}
        <div
          className="max-w-2xl mx-auto text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-rose-gold" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote with fade crossfade */}
          <div className="relative min-h-[180px] flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeInOut" as const }}
                className="absolute inset-0 flex items-center justify-center"
                aria-live="polite"
              >
                <p
                  className="font-display text-2xl md:text-[1.75rem] font-medium italic text-chocolate/80 leading-relaxed text-balance"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Attribution */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`attr-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center gap-2"
            >
              {/* Avatar */}
              <div className={`w-12 h-12 rounded-full ${testimonials[active].color} flex items-center justify-center mb-1`}>
                <span className="text-sm font-body font-semibold text-rose-gold">
                  {testimonials[active].initials}
                </span>
              </div>
              <p className="font-body font-semibold text-chocolate text-sm tracking-wide">
                {testimonials[active].name}
              </p>
              <p className="font-body text-xs text-chocolate/50 tracking-[0.14em] uppercase">
                {testimonials[active].occasion} &mdash; {testimonials[active].location}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div
            className="flex justify-center gap-2.5 mt-10"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`View testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-rose-gold ${
                  i === active
                    ? "w-6 h-2.5 bg-blush"
                    : "w-2.5 h-2.5 bg-blush/30 hover:bg-blush/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
