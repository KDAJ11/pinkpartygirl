"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { GiftBox } from "@/lib/data/giftBoxes";
import { Check } from "lucide-react";

interface Props {
  box: GiftBox;
  index?: number;
}

export default function GiftBoxCard({ box, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" as const }}
      className={`group relative rounded-3xl overflow-hidden bg-white border transition-all duration-300 hover:shadow-card-hover flex flex-col ${
        box.featured
          ? "border-blush/60 shadow-blush-md"
          : "border-cream-deep shadow-card hover:border-blush/30"
      }`}
    >
      {/* Featured ring */}
      {box.featured && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
          style={{ boxShadow: "inset 0 0 0 2px rgba(242,160,176,0.5)" }}
          aria-hidden="true"
        />
      )}

      {/* Badge */}
      {box.badge && (
        <div className="absolute top-4 right-4 z-20">
          <Badge variant={box.featured ? "blush" : "gold"}>{box.badge}</Badge>
        </div>
      )}

      {/* Image slot */}
      <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${box.color} flex items-center justify-center overflow-hidden`}>
        <Image
          src="/images/gift-box-placeholder.jpg"
          alt={`${box.name} gift box`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFEiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amr23aQk3E7cJJz4bUSST8kknJNc7Q6DvMmS4oMthI4ANkAZH3qsoorpjZUmQ6lwJeI6sE4z5xxSigD//2Q=="
          placeholder="blur"
        />
        {/* Placeholder visual */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 group-hover:opacity-0 transition-opacity duration-500">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect x="6" y="12" width="20" height="16" rx="2" stroke={box.accentColor} strokeWidth="1.8"/>
              <path d="M16 12V8M10 12V8M22 12V8" stroke={box.accentColor} strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16 8c0-3.3-3-5-6-3M16 8c0-3.3 3-5 6-3" stroke={box.accentColor} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        {/* Title & price */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3
            className="font-display text-xl font-semibold text-chocolate leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {box.name}
          </h3>
          <span
            className="font-body font-semibold text-lg text-rose-gold whitespace-nowrap tabular-nums"
          >
            {box.priceDisplay}
          </span>
        </div>

        <p className="text-xs font-body font-medium tracking-[0.12em] uppercase text-blush-400 mb-3">
          {box.tagline}
        </p>

        <p className="text-sm font-body text-chocolate/60 leading-relaxed mb-5">
          {box.description}
        </p>

        {/* Inclusions */}
        <ul className="flex flex-col gap-2 mb-7 flex-1">
          {box.inclusions.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm font-body text-chocolate/70">
              <Check size={14} className="text-rose-gold flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <Button
          href="/contact"
          variant={box.featured ? "primary" : "secondary"}
          className="w-full justify-center"
        >
          Get This Box
        </Button>
      </div>
    </motion.div>
  );
}
