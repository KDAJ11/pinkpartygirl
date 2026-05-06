"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function CTABand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F2A0B0 0%, #E8748A 40%, #C9956C 100%)",
      }}
      ref={ref}
    >
      {/* Background texture dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Ribbon accents */}
      <div className="absolute top-4 left-12 opacity-20 animate-float-slow" aria-hidden="true">
        <svg width="50" height="80" viewBox="0 0 50 80" fill="none">
          <path d="M25 0 Q40 20 25 40 Q10 60 25 80" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="absolute bottom-4 right-12 opacity-20 animate-float-medium" aria-hidden="true">
        <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
          <path d="M20 0 Q30 15 20 30 Q10 45 20 60" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
        >
          <p className="text-xs font-body font-semibold tracking-[0.24em] uppercase text-white/70 mb-4">
            Let&apos;s Create Something Beautiful
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to make someone feel{" "}
            <span className="italic font-normal">truly special?</span>
          </h2>
          <p className="text-base font-body text-white/80 max-w-md mx-auto mb-10 leading-relaxed">
            Every moment deserves to be extraordinary. Tell us about your celebration and let us handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://wa.me/2348000000000?text=Hi%20Pinkpartygirl!%20I%27d%20like%20to%20plan%20something%20special"
              external
              className="bg-white !text-chocolate hover:!bg-cream hover:!text-chocolate min-w-[180px] text-center justify-center"
              size="lg"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#25D366" width="20" height="20" aria-hidden="true">
                  <path d="M16.003 3C9.376 3 4 8.373 4 15.001c0 2.183.588 4.23 1.61 5.995L4 29l8.212-1.589A11.94 11.94 0 0 0 16.003 28C22.628 28 28 22.625 28 15.999 28 9.373 22.628 3 16.003 3zm0 21.9c-1.9 0-3.73-.512-5.306-1.473l-.38-.226-3.936.76.8-3.822-.248-.39A9.879 9.879 0 0 1 5.9 15c0-5.563 4.535-10.09 10.101-10.09 5.565 0 10.099 4.527 10.099 10.09C26.1 20.37 21.568 24.9 16.003 24.9zm5.55-7.574c-.304-.153-1.798-.887-2.077-.988-.279-.102-.481-.153-.684.153-.203.305-.783.987-.96 1.19-.177.203-.354.228-.657.076-.304-.153-1.28-.472-2.438-1.503-.9-.803-1.509-1.795-1.685-2.1-.177-.304-.019-.469.133-.62.136-.136.304-.355.456-.532.153-.178.203-.305.304-.508.102-.203.051-.382-.025-.533-.076-.153-.684-1.647-.937-2.254-.247-.592-.498-.512-.684-.521l-.583-.011c-.203 0-.533.076-.812.38-.279.305-1.062 1.037-1.062 2.53 0 1.495 1.087 2.938 1.24 3.14.152.203 2.14 3.268 5.185 4.581.724.314 1.29.502 1.73.641.727.23 1.39.198 1.913.12.584-.088 1.798-.734 2.052-1.444.253-.709.253-1.318.177-1.444-.076-.127-.279-.204-.583-.356z" />
                </svg>
              }
            >
              Chat on WhatsApp
            </Button>
            <Button
              href="/contact"
              className="border-2 !border-white !text-white !bg-transparent hover:!bg-white/15 min-w-[180px] justify-center"
              size="lg"
            >
              Send an Enquiry
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
