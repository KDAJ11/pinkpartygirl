import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import BowDivider from "@/components/ui/BowDivider";
import ServicesStrip from "@/components/sections/ServicesStrip";
import WhyPinkpartygirl from "@/components/sections/WhyPinkpartygirl";
import GiftBoxShowcase from "@/components/sections/GiftBoxShowcase";
import OccasionsSection from "@/components/sections/OccasionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Pinkpartygirl | Moments Made Unforgettable",
  description:
    "Lagos's premier luxury event styling and gift box service. Curated gift boxes, bespoke events, and surprise experiences crafted with love.",
};

export default function HomePage() {
  return (
    <div className="pb-24 md:pb-0">
      <HeroSection />
      <BowDivider className="bg-cream" />
      <ServicesStrip />
      <WhyPinkpartygirl />
      <BowDivider className="bg-gradient-to-b from-cream-warm to-cream" />
      <GiftBoxShowcase />
      <BowDivider className="bg-cream" />
      <OccasionsSection />
      <TestimonialsSection />
      <CTABand />
    </div>
  );
}
