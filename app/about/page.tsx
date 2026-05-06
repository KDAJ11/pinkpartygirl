import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind Pinkpartygirl — a Lagos-born luxury events and gifting brand built on the belief that every woman deserves to feel extraordinary.",
};

export default function Page() {
  return <AboutClient />;
}
