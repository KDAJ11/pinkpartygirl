import type { Metadata } from "next";
import ServicesPage from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Luxury event styling, curated gift boxes, and bespoke surprise experiences in Lagos, Nigeria. Discover how Pinkpartygirl brings your celebrations to life.",
};

export default function Page() {
  return <ServicesPage />;
}
