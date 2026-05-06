import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesStrip from "@/components/sections/ServicesStrip";
import WhyPinkpartygirl from "@/components/sections/WhyPinkpartygirl";
import GiftBoxShowcase from "@/components/sections/GiftBoxShowcase";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Pinkpartygirl | Moments Made Unforgettable",
  description:
    "Lagos's premier luxury event styling and gift box service. Curated gift boxes, bespoke events, and surprise experiences crafted with love.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesStrip />
      <WhyPinkpartygirl />
      <GiftBoxShowcase />
      <TestimonialsSection />
      <CTABand />
    </>
  );
}
