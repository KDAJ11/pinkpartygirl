import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pinkpartygirl. Fill in an enquiry form or reach us directly on WhatsApp. We respond within 24 hours.",
};

export default function Page() {
  return <ContactClient />;
}
