"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const PETALS = [
  { id: 1, left: "8%", delay: "0s", duration: "9s", size: 18, rotation: 20 },
  { id: 2, left: "18%", delay: "1.5s", duration: "11s", size: 14, rotation: -15 },
  { id: 3, left: "30%", delay: "0.8s", duration: "8s", size: 20, rotation: 30 },
  { id: 4, left: "45%", delay: "3s", duration: "12s", size: 12, rotation: -25 },
  { id: 5, left: "58%", delay: "0.3s", duration: "10s", size: 16, rotation: 15 },
  { id: 6, left: "70%", delay: "2s", duration: "9.5s", size: 22, rotation: -10 },
  { id: 7, left: "82%", delay: "1s", duration: "13s", size: 13, rotation: 35 },
  { id: 8, left: "92%", delay: "4s", duration: "8.5s", size: 17, rotation: -30 },
];

function Petal({ left, delay, duration, size, rotation }: (typeof PETALS)[0]) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left,
        top: "-5%",
        animationName: "petalFall",
        animationDuration: duration,
        animationDelay: delay,
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
      }}
    >
      <svg
        width={size}
        height={size * 1.3}
        viewBox="0 0 20 26"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
        aria-hidden="true"
      >
        <path
          d="M10 1 C14 4, 19 8, 18 14 C17 20, 13 25, 10 25 C7 25, 3 20, 2 14 C1 8, 6 4, 10 1Z"
          fill="rgba(242,160,176,0.55)"
        />
        <path
          d="M10 3 C12 7, 16 10, 15 14 C14 18, 12 22, 10 22"
          stroke="rgba(201,149,108,0.35)"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% -5%, #FFD6DF 0%, #FAF6EF 55%, #FAF6EF 100%)",
      }}
    >
      {/* Floating petals */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {PETALS.map((p) => (
          <Petal key={p.id} {...p} />
        ))}
      </div>

      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-25 animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(242,160,176,0.5) 0%, rgba(242,160,176,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-10 -left-16 w-[380px] h-[380px] rounded-full opacity-20 animate-float-medium"
          style={{
            background:
              "radial-gradient(circle, rgba(201,149,108,0.4) 0%, rgba(201,149,108,0) 70%)",
          }}
        />
      </div>

      {/* Ribbon accent SVG */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-8 md:right-20 opacity-15 animate-float-medium"
      >
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
          <path d="M30 0 Q50 30 30 60 Q10 90 30 120" stroke="#C9956C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="30" cy="60" rx="12" ry="8" stroke="#F2A0B0" strokeWidth="1.5" fill="rgba(242,160,176,0.15)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-rose-gold" />
            <span className="text-xs font-body font-semibold tracking-[0.24em] uppercase text-rose-gold">
              Lagos, Nigeria
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-rose-gold" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-chocolate leading-[1.05] tracking-tight mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Moments made{" "}
            <span className="italic font-normal" style={{ color: "#C9956C" }}>
              unforgettable
            </span>
            .
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-body font-light text-chocolate/65 max-w-lg mx-auto leading-relaxed mb-10"
          >
            Your secret to extraordinary celebrations — luxury events, curated gift boxes, and surprise experiences crafted with love.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button href="/contact" size="lg">
              Plan My Moment
            </Button>
            <Button href="/shop" variant="secondary" size="lg">
              Explore Gift Boxes
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-col sm:flex-row items-center gap-5 text-sm text-chocolate/50 font-body"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-rose-gold" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1">5.0</span>
            </div>
            <span className="hidden sm:block text-chocolate/20">·</span>
            <span>200+ celebrations delivered</span>
            <span className="hidden sm:block text-chocolate/20">·</span>
            <span>CAC Registered Business</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] font-body tracking-[0.2em] uppercase text-chocolate/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-blush to-transparent"
        />
      </motion.div>
    </section>
  );
}
