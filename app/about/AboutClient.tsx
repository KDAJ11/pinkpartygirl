"use client";

import { motion, type Variants } from "framer-motion";
import CTABand from "@/components/sections/CTABand";

const values = [
  {
    title: "Intentionality",
    body: "Nothing we do is accidental. Every colour, every item, every detail is a deliberate choice made in service of the person being celebrated.",
  },
  {
    title: "Warmth",
    body: "We're not a cold, corporate gifting company. We're a real team of people who genuinely care — about our clients, their stories, and the people they love.",
  },
  {
    title: "Excellence",
    body: "Good enough is never good enough. We hold ourselves to a standard that consistently exceeds expectations — because the moments we create deserve it.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 65% 55% at 30% 0%, #FFD6DF 0%, #FAF6EF 65%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
                Our Story
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl font-semibold text-chocolate leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Born from a{" "}
              <span className="italic font-normal" style={{ color: "#C9956C" }}>
                love of celebration.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg font-body text-chocolate/60 leading-relaxed">
              Every great brand starts with a feeling. Ours started with the belief that the women in our lives deserve celebrations as extraordinary as they are.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="relative"
            >
              <div
                className="rounded-3xl aspect-[4/5] bg-gradient-to-br from-blush-100 via-rose-50 to-amber-50 flex items-center justify-center relative overflow-hidden"
              >
                {/* Decorative inner elements */}
                <div
                  className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-40 animate-float-slow"
                  style={{ background: "radial-gradient(circle, #F2A0B0, transparent)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-16 right-10 w-32 h-32 rounded-full opacity-30 animate-float-medium"
                  style={{ background: "radial-gradient(circle, #C9956C, transparent)" }}
                  aria-hidden="true"
                />
                <div className="relative z-10 text-center px-8">
                  <p
                    className="font-display text-5xl font-semibold text-chocolate/20 italic mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </p>
                  <p
                    className="font-display text-2xl font-medium text-chocolate/60 italic leading-relaxed"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Every woman deserves to feel like the most important person in the room.
                  </p>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-5" />
                  <p className="text-xs font-body font-medium tracking-[0.2em] uppercase text-rose-gold mt-4">
                    Pinkpartygirl
                  </p>
                </div>
              </div>

              {/* CAC badge */}
              <div className="absolute -bottom-5 -right-3 bg-white rounded-2xl px-4 py-3 shadow-blush-md border border-cream-deep flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blush-100 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1l1.5 3h3.2l-2.6 1.9.99 3.1L8 7.2 5.91 9l.99-3.1L4.3 4h3.2L8 1z" fill="#C9956C"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-body font-semibold text-chocolate">CAC Registered</p>
                  <p className="text-[10px] font-body text-chocolate/40">Verified Business</p>
                </div>
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              <div className="flex flex-col gap-5 text-sm font-body text-chocolate/65 leading-relaxed">
                <p>
                  Pinkpartygirl was born in Lagos, Nigeria — a city that knows how to celebrate. But even in a city full of colour and life, we kept noticing the same thing: the women who plan the most beautiful moments for others rarely had anyone planning beautiful moments for them.
                </p>
                <p>
                  We set out to change that. Not just to provide a service, but to create experiences so thoughtful, so carefully considered, that the person receiving them feels truly seen — perhaps for the first time in a long time.
                </p>
                <p>
                  From our very first gift box to our most elaborate event setup, one thing has never changed: we believe in the power of a well-crafted moment to transform how someone feels about themselves and the people who love them.
                </p>
                <p>
                  We are CAC registered, Lagos-based, and deeply intentional. Every team member shares the same conviction: that when you truly pour care into something, people feel it — and that feeling is priceless.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex flex-col">
                  <span
                    className="font-display text-3xl font-semibold text-chocolate"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    200+
                  </span>
                  <span className="text-xs font-body text-chocolate/50 mt-0.5">Celebrations delivered</span>
                </div>
                <div className="w-px bg-cream-deep" aria-hidden="true" />
                <div className="flex flex-col">
                  <span
                    className="font-display text-3xl font-semibold text-chocolate"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    5.0
                  </span>
                  <span className="text-xs font-body text-chocolate/50 mt-0.5">Average client rating</span>
                </div>
                <div className="w-px bg-cream-deep" aria-hidden="true" />
                <div className="flex flex-col">
                  <span
                    className="font-display text-3xl font-semibold text-chocolate"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Lagos
                  </span>
                  <span className="text-xs font-body text-chocolate/50 mt-0.5">Proudly based here</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #FFF0F3 0%, #FAF6EF 50%, #FFF5ED 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
                Our Mission
              </span>
              <div className="section-divider" />
            </div>
            <p
              className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-chocolate leading-[1.2] tracking-tight text-balance italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;To make every woman feel celebrated, seen, and deeply valued — through gifts and experiences crafted with extraordinary care.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
                What We Stand For
              </span>
              <div className="section-divider" />
            </div>
            <h2
              className="font-display text-3xl md:text-4xl font-semibold text-chocolate"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white rounded-3xl p-8 shadow-card border border-cream-deep"
              >
                <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center mb-5">
                  <span className="text-blush font-display font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="font-display text-xl font-semibold text-chocolate mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm font-body text-chocolate/60 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
