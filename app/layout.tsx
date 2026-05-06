import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pinkpartygirl | Moments Made Unforgettable",
    template: "%s | Pinkpartygirl",
  },
  description:
    "Lagos's premier luxury event styling and gift box service. We craft unforgettable celebrations — curated gift boxes, surprise experiences, and bespoke event styling. CAC registered.",
  keywords: ["luxury events Lagos", "gift boxes Nigeria", "party planning Lagos", "surprise experiences", "birthday gifts Lagos", "Pinkpartygirl"],
  openGraph: {
    title: "Pinkpartygirl | Moments Made Unforgettable",
    description: "Your secret to unforgettable celebrations in Lagos, Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-cream font-body text-chocolate">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
