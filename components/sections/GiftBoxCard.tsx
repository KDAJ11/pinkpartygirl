"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { GiftBox } from "@/lib/data/giftBoxes";
import { Check } from "lucide-react";

/* ── Bow SVG decoration (hover) ────────────────────────────────── */
function BowAccent() {
  return (
    <svg width="72" height="36" viewBox="0 0 72 36" fill="none" aria-hidden="true" className="drop-shadow-sm">
      <path d="M36 18 C28 10, 10 6, 4 12 C0 16, 4 22, 12 20 C20 18, 30 16, 36 18"
        stroke="#F2A0B0" strokeWidth="1.8" fill="rgba(242,160,176,0.15)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 18 C44 10, 62 6, 68 12 C72 16, 68 22, 60 20 C52 18, 42 16, 36 18"
        stroke="#F2A0B0" strokeWidth="1.8" fill="rgba(242,160,176,0.15)" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="36" cy="18" r="4" fill="rgba(242,160,176,0.8)" stroke="#E8748A" strokeWidth="1"/>
      <path d="M33 22 C30 28, 28 32, 26 34" stroke="#F2A0B0" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M39 22 C42 28, 44 32, 46 34" stroke="#F2A0B0" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Tier illustrations ─────────────────────────────────────────── */
function PetiteAffectionSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="pa-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF5F7"/><stop offset="100%" stopColor="#FFEEF3"/>
        </linearGradient>
        <linearGradient id="pa-box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9B8C8"/><stop offset="100%" stopColor="#F2A0B0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#pa-bg)"/>
      {/* Dot texture */}
      <circle cx="40" cy="40" r="1.5" fill="#F2A0B0" opacity="0.2"/>
      <circle cx="80" cy="40" r="1.5" fill="#F2A0B0" opacity="0.2"/>
      <circle cx="360" cy="260" r="1.5" fill="#F2A0B0" opacity="0.2"/>
      <circle cx="320" cy="260" r="1.5" fill="#F2A0B0" opacity="0.2"/>
      {/* Rose stem */}
      <path d="M80 190 C78 170, 82 150, 80 130" stroke="#7A9E6A" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Rose leaf */}
      <path d="M80 165 C68 158, 62 148, 70 144 C76 148, 80 158, 80 165Z" fill="#8BAD7A" opacity="0.8"/>
      {/* Rose outer petals */}
      <ellipse cx="80" cy="112" rx="14" ry="10" fill="#F2B8C6" opacity="0.9" transform="rotate(-20 80 112)"/>
      <ellipse cx="90" cy="122" rx="14" ry="10" fill="#F2B8C6" opacity="0.9" transform="rotate(30 90 122)"/>
      <ellipse cx="88" cy="102" rx="12" ry="9" fill="#EFA0B4" opacity="0.9" transform="rotate(10 88 102)"/>
      <ellipse cx="70" cy="108" rx="12" ry="9" fill="#EFA0B4" opacity="0.9" transform="rotate(-30 70 108)"/>
      {/* Rose inner */}
      <ellipse cx="80" cy="116" rx="9" ry="7" fill="#E88AA0" transform="rotate(5 80 116)"/>
      <circle cx="82" cy="112" r="5" fill="#D4607A"/>
      {/* Gift box body */}
      <rect x="185" y="120" width="80" height="65" rx="4" fill="url(#pa-box)"/>
      {/* Box lid */}
      <rect x="180" y="108" width="90" height="18" rx="3" fill="#F5AEC0"/>
      {/* Ribbon vertical */}
      <rect x="221" y="108" width="8" height="77" fill="#E8748A" opacity="0.7"/>
      {/* Ribbon horizontal */}
      <rect x="180" y="114" width="90" height="6" fill="#E8748A" opacity="0.7"/>
      {/* Bow left wing */}
      <path d="M225 108 C215 98, 199 96, 199 102 C199 108, 213 106, 225 108" fill="#E8748A" stroke="#D45A70" strokeWidth="0.8"/>
      {/* Bow right wing */}
      <path d="M225 108 C235 98, 251 96, 251 102 C251 108, 237 106, 225 108" fill="#E8748A" stroke="#D45A70" strokeWidth="0.8"/>
      <circle cx="225" cy="108" r="5" fill="#D45A70"/>
      {/* Box shine */}
      <rect x="191" y="126" width="16" height="30" rx="2" fill="rgba(255,255,255,0.2)"/>
      {/* Lip gloss cap */}
      <rect x="322" y="95" width="20" height="18" rx="4" fill="#C9956C"/>
      {/* Lip gloss tube */}
      <rect x="320" y="111" width="24" height="80" rx="5" fill="#F2C4A8"/>
      <rect x="323" y="117" width="6" height="50" rx="3" fill="rgba(255,255,255,0.35)"/>
      {/* Label */}
      <rect x="320" y="149" width="24" height="22" fill="rgba(255,255,255,0.5)"/>
      <rect x="323" y="153" width="18" height="1.5" rx="1" fill="#C9956C" opacity="0.6"/>
      {/* Scattered petals */}
      <ellipse cx="150" cy="230" rx="8" ry="5" fill="#F2A0B0" opacity="0.3" transform="rotate(25 150 230)"/>
      <ellipse cx="280" cy="250" rx="6" ry="4" fill="#F2A0B0" opacity="0.25" transform="rotate(-15 280 250)"/>
    </svg>
  );
}

function SweetEditSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="se-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF8EC"/><stop offset="100%" stopColor="#FFF0DE"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#se-bg)"/>
      {/* Candle flame */}
      <path d="M70 60 C64 48, 62 36, 70 28 C78 36, 76 48, 70 60Z" fill="#FFD060" opacity="0.9"/>
      <path d="M70 56 C67 47, 66 38, 70 32 C74 38, 73 47, 70 56Z" fill="#FF9040" opacity="0.8"/>
      <line x1="70" y1="60" x2="70" y2="68" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Candle body */}
      <rect x="50" y="68" width="40" height="120" rx="4" fill="#FAF6EF"/>
      <ellipse cx="70" cy="68" rx="22" ry="4" fill="#F5EDE0"/>
      <rect x="50" y="110" width="40" height="4" fill="#F2A0B0" opacity="0.5"/>
      <rect x="50" y="140" width="40" height="4" fill="#F2A0B0" opacity="0.5"/>
      <ellipse cx="70" cy="190" rx="18" ry="5" fill="rgba(45,27,20,0.08)"/>
      {/* Wine glass bowl */}
      <path d="M152 30 C148 50, 152 80, 180 90 C208 80, 212 50, 208 30Z" fill="rgba(255,255,255,0.5)" stroke="#C9956C" strokeWidth="1.2"/>
      {/* Wine liquid */}
      <path d="M158 50 C154 68, 158 82, 180 88 C202 82, 206 68, 202 50Z" fill="rgba(180,80,100,0.35)"/>
      <path d="M162 54 C166 52, 172 52, 176 54" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Stem */}
      <rect x="177" y="90" width="6" height="70" fill="rgba(255,255,255,0.6)" stroke="#C9956C" strokeWidth="0.8"/>
      {/* Base */}
      <ellipse cx="180" cy="162" rx="28" ry="7" fill="rgba(255,255,255,0.5)" stroke="#C9956C" strokeWidth="1"/>
      {/* Chocolate box */}
      <rect x="265" y="140" width="80" height="60" rx="4" fill="#7A4528"/>
      <rect x="265" y="140" width="80" height="8" rx="4" fill="#8B5535"/>
      <rect x="273" y="154" width="22" height="16" rx="3" fill="#5C3218"/>
      <rect x="299" y="154" width="22" height="16" rx="3" fill="#6B3A1E"/>
      <rect x="273" y="174" width="22" height="16" rx="3" fill="#6B3A1E"/>
      <rect x="299" y="174" width="22" height="16" rx="3" fill="#7A4528"/>
      <rect x="275" y="156" width="8" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
      <rect x="301" y="156" width="8" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
      <rect x="301" y="140" width="8" height="60" fill="#C9956C" opacity="0.5"/>
      <rect x="265" y="167" width="80" height="6" fill="#C9956C" opacity="0.5"/>
      <path d="M305 140 C299 132, 287 132, 287 138 C287 144, 299 142, 305 140" fill="#C9956C" opacity="0.8"/>
      <path d="M305 140 C311 132, 323 132, 323 138 C323 144, 311 142, 305 140" fill="#C9956C" opacity="0.8"/>
      <circle cx="305" cy="140" r="4" fill="#B8803C"/>
      {/* Confetti */}
      <rect x="150" y="240" width="8" height="4" rx="2" fill="#F2A0B0" opacity="0.4" transform="rotate(25 150 240)"/>
      <circle cx="50" cy="230" r="3" fill="#F2A0B0" opacity="0.3"/>
      <circle cx="370" cy="200" r="4" fill="#C9956C" opacity="0.2"/>
    </svg>
  );
}

function IndulgenceBoxSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ib-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0EE"/><stop offset="100%" stopColor="#FFE6E2"/>
        </linearGradient>
        <linearGradient id="ib-bottle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5EDE0"/><stop offset="100%" stopColor="#EDD8C0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#ib-bg)"/>
      {/* Perfume bottle cap */}
      <rect x="189" y="50" width="22" height="22" rx="4" fill="#C9956C"/>
      <rect x="191" y="52" width="8" height="16" rx="2" fill="rgba(255,255,255,0.25)"/>
      {/* Neck */}
      <rect x="193" y="70" width="14" height="18" rx="2" fill="#C9956C" opacity="0.8"/>
      {/* Bottle body */}
      <rect x="179" y="86" width="42" height="90" rx="8" fill="url(#ib-bottle)" stroke="#C9956C" strokeWidth="1.2"/>
      <rect x="185" y="94" width="10" height="60" rx="5" fill="rgba(255,255,255,0.35)"/>
      {/* Label */}
      <rect x="183" y="115" width="34" height="36" rx="4" fill="rgba(255,255,255,0.7)" stroke="#C9956C" strokeWidth="0.8"/>
      <rect x="187" y="120" width="26" height="2" rx="1" fill="#C9956C" opacity="0.7"/>
      <rect x="189" y="126" width="22" height="1.5" rx="1" fill="#C9956C" opacity="0.4"/>
      <rect x="189" y="131" width="18" height="1.5" rx="1" fill="#C9956C" opacity="0.4"/>
      <ellipse cx="200" cy="178" rx="22" ry="5" fill="rgba(45,27,20,0.08)"/>
      {/* Macarons - 3 stacked */}
      <ellipse cx="80" cy="200" rx="29" ry="12" fill="#F2A0B0"/>
      <rect x="52" y="200" width="56" height="4" fill="#E8748A" opacity="0.5"/>
      <ellipse cx="80" cy="198" rx="28" ry="9" fill="#F2A0B0"/>
      <ellipse cx="80" cy="188" rx="29" ry="12" fill="#F9D0B8"/>
      <rect x="52" y="188" width="56" height="4" fill="#E8B899" opacity="0.5"/>
      <ellipse cx="80" cy="176" rx="29" ry="12" fill="#FBECD5"/>
      <rect x="52" y="176" width="56" height="4" fill="#F2C4A8" opacity="0.5"/>
      <ellipse cx="72" cy="172" rx="8" ry="5" fill="rgba(255,255,255,0.25)"/>
      <ellipse cx="80" cy="212" rx="28" ry="5" fill="rgba(45,27,20,0.07)"/>
      {/* Flowers top-right */}
      <circle cx="330" cy="70" r="6" fill="#C9956C" opacity="0.9"/>
      <ellipse cx="330" cy="57" rx="8" ry="11" fill="#F2A0B0" opacity="0.75"/>
      <ellipse cx="340" cy="63" rx="8" ry="11" fill="#F2A0B0" opacity="0.75" transform="rotate(45 340 63)"/>
      <ellipse cx="343" cy="74" rx="8" ry="11" fill="#F2A0B0" opacity="0.75" transform="rotate(90 343 74)"/>
      <ellipse cx="337" cy="83" rx="8" ry="11" fill="#EFA0B4" opacity="0.75" transform="rotate(135 337 83)"/>
      <ellipse cx="323" cy="83" rx="8" ry="11" fill="#EFA0B4" opacity="0.75" transform="rotate(-135 323 83)"/>
      <ellipse cx="317" cy="74" rx="8" ry="11" fill="#EFA0B4" opacity="0.75" transform="rotate(-90 317 74)"/>
      <ellipse cx="320" cy="63" rx="8" ry="11" fill="#F2A0B0" opacity="0.75" transform="rotate(-45 320 63)"/>
      <ellipse cx="330" cy="57" rx="5" ry="7" fill="#F9C0D0" opacity="0.5"/>
      {/* Small flower 2 */}
      <circle cx="370" cy="110" r="5" fill="#C9956C" opacity="0.8"/>
      <ellipse cx="370" cy="99" rx="6" ry="9" fill="#F9C0D0" opacity="0.65"/>
      <ellipse cx="379" cy="104" rx="6" ry="9" fill="#F9C0D0" opacity="0.65" transform="rotate(45 379 104)"/>
      <ellipse cx="381" cy="114" rx="6" ry="9" fill="#EFA0B4" opacity="0.65" transform="rotate(90 381 114)"/>
      <ellipse cx="361" cy="114" rx="6" ry="9" fill="#EFA0B4" opacity="0.65" transform="rotate(-90 361 114)"/>
      {/* Silk ribbon */}
      <path d="M80 270 C140 255, 220 265, 300 258 C350 252, 380 260, 400 250"
        stroke="#F2A0B0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function AscendSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="asc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8D8DF"/><stop offset="100%" stopColor="#F0C8D0"/>
        </linearGradient>
        <linearGradient id="asc-champ" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,248,220,0.7)"/><stop offset="100%" stopColor="rgba(240,220,160,0.5)"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#asc-bg)"/>
      {/* Subtle texture */}
      <circle cx="30" cy="30" r="1.2" fill="rgba(255,255,255,0.2)"/>
      <circle cx="90" cy="30" r="1.2" fill="rgba(255,255,255,0.2)"/>
      <circle cx="370" cy="280" r="1.2" fill="rgba(255,255,255,0.2)"/>
      <circle cx="310" cy="280" r="1.2" fill="rgba(255,255,255,0.2)"/>
      <circle cx="370" cy="30" r="1.2" fill="rgba(255,255,255,0.2)"/>
      <circle cx="30" cy="280" r="1.2" fill="rgba(255,255,255,0.2)"/>
      {/* Jewellery box base */}
      <ellipse cx="200" cy="238" rx="52" ry="8" fill="rgba(45,27,20,0.12)"/>
      <rect x="145" y="155" width="110" height="80" rx="5" fill="#8B4A6B"/>
      <rect x="151" y="161" width="98" height="68" rx="3" fill="#A85580"/>
      <rect x="151" y="161" width="98" height="12" rx="3" fill="rgba(0,0,0,0.15)"/>
      {/* Lid */}
      <rect x="145" y="91" width="110" height="68" rx="5" fill="#7A3D5C"/>
      <rect x="151" y="95" width="98" height="58" rx="3" fill="#9B5075"/>
      {/* Hinge */}
      <rect x="193" y="155" width="14" height="8" rx="3" fill="#C9956C"/>
      {/* Sparkle inside box */}
      <circle cx="175" cy="195" r="3" fill="rgba(255,220,150,0.9)"/>
      <line x1="169" y1="195" x2="181" y2="195" stroke="rgba(255,230,180,0.7)" strokeWidth="0.8"/>
      <line x1="175" y1="189" x2="175" y2="201" stroke="rgba(255,230,180,0.7)" strokeWidth="0.8"/>
      <circle cx="200" cy="185" r="3" fill="rgba(255,220,150,0.9)"/>
      <line x1="194" y1="185" x2="206" y2="185" stroke="rgba(255,230,180,0.7)" strokeWidth="0.8"/>
      <line x1="200" y1="179" x2="200" y2="191" stroke="rgba(255,230,180,0.7)" strokeWidth="0.8"/>
      <circle cx="225" cy="200" r="3" fill="rgba(255,220,150,0.9)"/>
      <line x1="219" y1="200" x2="231" y2="200" stroke="rgba(255,230,180,0.7)" strokeWidth="0.8"/>
      <line x1="225" y1="194" x2="225" y2="206" stroke="rgba(255,230,180,0.7)" strokeWidth="0.8"/>
      <circle cx="185" cy="210" r="2.5" fill="rgba(255,220,150,0.8)"/>
      {/* Gold trim */}
      <rect x="145" y="155" width="110" height="4" fill="#C9956C" opacity="0.8"/>
      <rect x="145" y="91" width="110" height="4" rx="2" fill="#C9956C" opacity="0.8"/>
      <rect x="197" y="91" width="6" height="80" fill="#C9956C" opacity="0.45"/>
      {/* Champagne flute */}
      <path d="M301 25 C297 50, 301 80, 315 93 C329 80, 333 50, 329 25Z" fill="url(#asc-champ)" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
      <circle cx="306" cy="65" r="2" fill="rgba(255,255,255,0.6)"/>
      <circle cx="313" cy="77" r="2" fill="rgba(255,255,255,0.6)"/>
      <circle cx="308" cy="53" r="1.5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="320" cy="61" r="1.5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="310" cy="81" r="1.8" fill="rgba(255,255,255,0.5)"/>
      <path d="M305 33 C309 31, 313 33, 315 37" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="312" y="93" width="5" height="88" fill="rgba(255,255,255,0.5)" stroke="rgba(200,180,150,0.4)" strokeWidth="0.5"/>
      <ellipse cx="315" cy="183" rx="22" ry="6" fill="rgba(255,255,255,0.45)" stroke="rgba(200,180,150,0.5)" strokeWidth="0.8"/>
      {/* Truffle box */}
      <rect x="30" y="150" width="90" height="70" rx="4" fill="#4A2818"/>
      <rect x="30" y="150" width="90" height="10" rx="4" fill="#5C3220"/>
      <rect x="30" y="159" width="90" height="2" fill="#C9956C" opacity="0.7"/>
      {/* 4 truffles */}
      <ellipse cx="56" cy="181" rx="16" ry="13" fill="#8B5230"/>
      <ellipse cx="56" cy="179" rx="15" ry="11" fill="#9B6040"/>
      <ellipse cx="50" cy="176" rx="7" ry="4" fill="rgba(255,255,255,0.12)"/>
      <ellipse cx="94" cy="181" rx="16" ry="13" fill="#7A4528"/>
      <ellipse cx="94" cy="179" rx="15" ry="11" fill="#8B5230"/>
      <ellipse cx="88" cy="176" rx="7" ry="4" fill="rgba(255,255,255,0.12)"/>
      <ellipse cx="56" cy="205" rx="16" ry="13" fill="#8B5230"/>
      <ellipse cx="56" cy="203" rx="15" ry="11" fill="#7A4528"/>
      <ellipse cx="94" cy="205" rx="16" ry="13" fill="#9B6040"/>
      <ellipse cx="94" cy="203" rx="15" ry="11" fill="#8B5230"/>
      {/* Gold ribbon on truffle box */}
      <rect x="72" y="150" width="6" height="70" fill="#C9956C" opacity="0.4"/>
      <rect x="30" y="182" width="90" height="5" fill="#C9956C" opacity="0.4"/>
      <ellipse cx="45" cy="222" rx="18" ry="5" fill="rgba(45,27,20,0.1)"/>
      {/* Premium ribbon cascade */}
      <path d="M100 280 C160 265, 220 270, 290 260 C340 252, 380 262, 400 250"
        stroke="#C9956C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M60 290 C110 278, 200 282, 310 272"
        stroke="#F2A0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35"/>
      {/* Sparkle accents */}
      <line x1="42" y1="50" x2="58" y2="50" stroke="#C9956C" strokeWidth="1" opacity="0.5"/>
      <line x1="50" y1="42" x2="50" y2="58" stroke="#C9956C" strokeWidth="1" opacity="0.5"/>
      <circle cx="50" cy="50" r="2" fill="#C9956C" opacity="0.5"/>
      <line x1="372" y1="80" x2="388" y2="80" stroke="#C9956C" strokeWidth="1" opacity="0.5"/>
      <line x1="380" y1="72" x2="380" y2="88" stroke="#C9956C" strokeWidth="1" opacity="0.5"/>
      <circle cx="380" cy="80" r="2" fill="#C9956C" opacity="0.5"/>
    </svg>
  );
}

const SVG_MAP: Record<string, () => JSX.Element> = {
  "petite-affection": PetiteAffectionSVG,
  "sweet-edit": SweetEditSVG,
  "indulgence-box": IndulgenceBoxSVG,
  "the-ascend": AscendSVG,
};

interface Props {
  box: GiftBox;
  index?: number;
}

export default function GiftBoxCard({ box, index = 0 }: Props) {
  const IllustrationSVG = SVG_MAP[box.id] ?? PetiteAffectionSVG;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" as const }}
      className={`group relative rounded-3xl overflow-visible bg-white border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${
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

      {/* Bow — centered at top edge, reveals on hover */}
      <div
        className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 transition-all duration-[250ms] ease-out origin-top"
        aria-hidden="true"
      >
        <BowAccent />
      </div>

      {/* Badge */}
      {box.badge && (
        <div className="absolute top-4 right-4 z-20">
          <Badge variant={box.featured ? "blush" : "gold"}>{box.badge}</Badge>
        </div>
      )}

      {/* SVG Illustration */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl">
        <IllustrationSVG />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3
            className="font-display text-xl font-semibold text-chocolate leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {box.name}
          </h3>
          <span className="font-body font-semibold text-lg text-rose-gold whitespace-nowrap tabular-nums">
            {box.priceDisplay}
          </span>
        </div>

        <p className="text-xs font-body font-medium tracking-[0.12em] uppercase text-blush-400 mb-3">
          {box.tagline}
        </p>

        <p className="text-sm font-body text-chocolate/60 leading-relaxed mb-5">
          {box.description}
        </p>

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
