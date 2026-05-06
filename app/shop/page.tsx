import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Gift Boxes",
  description:
    "Browse our four tiers of luxury gift boxes — from Petite Affection (₦27,000) to The Ascend (₦65,000). Every box curated with love, delivered with care.",
};

export default function Page() {
  return <ShopClient />;
}
