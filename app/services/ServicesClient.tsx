"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import CTABand from "@/components/sections/CTABand";

const services = [
  {
    number: "01",
    title: "Event Styling & Planning",
    tagline: "Where vision becomes atmosphere",
    description:
      "From the first mood board to the final ribbon tied, we handle every dimension of your celebration. Our process begins with a deep conversation about who she is, what she loves, and how she deserves to feel — then we design an event that reflects all of it. No generic templates. No cookie-cutter décor. Only thoughtful, bespoke experiences that feel unmistakably yours.",
    highlights: [
      "Personalised concept development & mood boards",
      "Venue sourcing and transformation",
      "Décor procurement, setup, and styling",
      "Florals, tablescapes, and atmospheric lighting",
      "Day-of coordination and management",
      "Birthday, anniversary, and milestone events",
      "Intimate gatherings and grand celebrations alike",
    ],
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <rect x="8" y="18" width="36" height="28" rx="4" stroke="#C9956C" strokeWidth="2"/>
        <path d="M26 18V12M18 18V12M34 18V12" stroke="#F2A0B0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 12c0-5-4-8-8-5M26 12c0-5 4-8 8-5" stroke="#C9956C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 28h36" stroke="#F2A0B0" strokeWidth="1.5"/>
        <path d="M26 18v28" stroke="#F2A0B0" strokeWidth="1.5"/>
      </svg>
    ),
    bg: "from-blush-50 to-rose-50",
  },
  {
    number: "02",
    title: "Luxury Gift Boxes",
    tagline: "A box full of the right feeling",
    description:
      "Our gift boxes are not assembled — they are curated. Each item chosen for how it feels in the hands, how it smells, how it makes her pause for a moment and think: someone truly knows me. We offer four tiers designed to suit every occasion, from a gentle appreciation to a full-blown celebration of who she is.",
    highlights: [
      "Four tiers: Petite Affection, Sweet Edit, Indulgence Box, The Ascend",
      "Premium packaging with branded tissue and ribbon",
      "Personalised handwritten message cards",
      "Curated combinations of beauty, lifestyle, and indulgence",
      "Lagos-wide delivery with real-time coordination",
      "Corporate gifting available",
      "Seasonal and occasion-specific editions",
    ],
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <rect x="10" y="20" width="32" height="24" rx="3" stroke="#C9956C" strokeWidth="2"/>
        <rect x="10" y="16" width="32" height="6" rx="2" stroke="#F2A0B0" strokeWidth="2"/>
        <path d="M26 16v28" stroke="#F2A0B0" strokeWidth="1.5"/>
        <path d="M26 16c0-6-5-9-9-6M26 16c0-6 5-9 9-6" stroke="#C9956C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    bg: "from-amber-50 to-orange-50",
  },
  {
    number: "03",
    title: "Surprise Experiences",
    tagline: "The magic is in the reveal",
    description:
      "The best moments are the ones she never saw coming. We design and orchestrate personalised surprise experiences that leave recipients in beautiful disbelief. From pop-up birthday setups to elaborate proposal stagings — we handle every logistics, every prop, every perfectly timed reveal.",
    highlights: [
      "Full-service surprise orchestration",
      "Proposal setups and elopement styling",
      "Birthday and anniversary ambushes",
      "Secret coordination with partners and family",
      "Custom signage, balloons, and florals",
      "Photography moment framing",
      "On-the-day presence and management",
    ],
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <circle cx="26" cy="26" r="18" stroke="#C9956C" strokeWidth="2"/>
        <path d="M26 14v7l5 3" stroke="#F2A0B0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 38s4-6 10-6 10 6 10 6" stroke="#C9956C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="22" r="2" fill="#F2A0B0"/>
      </svg>
    ),
    bg: "from-pink-50 to-fuchsia-50",
  },
];

const steps = [
  { number: "1", label: "Order & Brief", body: "Tell us what you need — occasion, budget, who she is. Fill our quick form or drop us a WhatsApp message." },
  { number: "2", label: "We Confirm", body: "Our team reviews your request and gets back to you within 24 hours with a tailored plan and timeline." },
  { number: "3", label: "We Curate", body: "Our team sources, arranges, and perfects every element — whether it's a gift box assembly or full event styling." },
  { number: "4", label: "Delivered with Love", body: "Your experience is delivered exactly as imagined — on time, on brand, and better than expected." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 70% 60% at 60% 0%, #FFD6DF 0%, #FAF6EF 60%)" }}
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
                Our Services
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl font-semibold text-chocolate leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Celebrations that{" "}
              <span className="italic font-normal" style={{ color: "#C9956C" }}>
                live in memory.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg font-body text-chocolate/60 leading-relaxed max-w-xl">
              We don&apos;t just plan events or fill boxes. We craft the kind of moments that people talk about for years — emotional, intentional, unforgettable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service sections */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-24">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual block */}
              <div
                className={`rounded-3xl aspect-square max-h-[440px] bg-gradient-to-br ${s.bg} flex items-center justify-center relative overflow-hidden ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <span
                  className="absolute font-display text-[180px] font-bold text-white/30 leading-none select-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                  aria-hidden="true"
                >
                  {s.number}
                </span>
                <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-blush-sm">
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold mb-3">
                  {s.tagline}
                </p>
                <h2
                  className="font-display text-3xl md:text-4xl font-semibold text-chocolate mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h2>
                <p className="text-sm font-body text-chocolate/60 leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm font-body text-chocolate/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-blush flex-shrink-0 mt-1.5" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" size="md">
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg, #F5EDE0 0%, #FAF6EF 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-xs font-body font-semibold tracking-[0.22em] uppercase text-rose-gold">
                The Process
              </span>
              <div className="section-divider" />
            </div>
            <h2
              className="font-display text-4xl md:text-5xl font-semibold text-chocolate"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              How it works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative bg-white rounded-3xl p-8 shadow-card border border-cream-deep"
              >
                <span
                  className="font-display text-5xl font-bold text-blush/25 leading-none block mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3
                  className="font-display text-lg font-semibold text-chocolate mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.label}
                </h3>
                <p className="text-sm font-body text-chocolate/60 leading-relaxed">{step.body}</p>
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-blush/40 z-10"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
