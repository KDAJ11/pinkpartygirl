export interface GiftBox {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  tagline: string;
  description: string;
  inclusions: string[];
  badge?: string;
  featured?: boolean;
  color: string;
  accentColor: string;
}

export const giftBoxes: GiftBox[] = [
  {
    id: "petite-affection",
    name: "Petite Affection",
    price: 27000,
    priceDisplay: "₦27,000",
    tagline: "Sweet beginnings",
    description: "A tender first impression — thoughtfully curated for gestures that speak volumes without words.",
    inclusions: [
      "Luxury scented candle",
      "Artisan chocolates (assorted)",
      "Handwritten message card",
      "Rose gold ribbon wrap",
      "Branded tissue paper & box",
    ],
    color: "from-pink-50 to-rose-50",
    accentColor: "#F2A0B0",
  },
  {
    id: "sweet-edit",
    name: "Sweet Edit",
    price: 35000,
    priceDisplay: "₦35,000",
    tagline: "Curated with intention",
    description: "The go-to for birthdays, anniversaries, and moments that deserve more than ordinary.",
    inclusions: [
      "Premium skincare duo",
      "Artisan chocolates & snacks",
      "Scented bath salts",
      "Luxury scented candle",
      "Personalised message card",
      "Decorative box & ribbons",
    ],
    badge: "Most Popular",
    featured: true,
    color: "from-rose-50 to-amber-50",
    accentColor: "#C9956C",
  },
  {
    id: "indulgence-box",
    name: "Indulgence Box",
    price: 50000,
    priceDisplay: "₦50,000",
    tagline: "She deserves this",
    description: "Elevated. Intentional. Unforgettable. For the woman who deserves to be celebrated fully.",
    inclusions: [
      "Luxury fragrance (50ml)",
      "Premium skincare set (3-piece)",
      "Artisan truffles & chocolates",
      "Silk sleep mask",
      "Gold-rim ceramic mug + tea set",
      "Personalised keepsake card",
      "Organza bag & premium box",
    ],
    color: "from-amber-50 to-yellow-50",
    accentColor: "#B8860B",
  },
  {
    id: "the-ascend",
    name: "The Ascend",
    price: 65000,
    priceDisplay: "₦65,000",
    tagline: "The pinnacle of gifting",
    description: "Our most coveted offering. A statement of devotion — curated for her most extraordinary moments.",
    inclusions: [
      "Designer fragrance (100ml)",
      "Luxury 5-piece skincare ritual",
      "Premium silk scarf or wrap",
      "Artisan chocolates & champagne truffles",
      "Crystal wine glass set (2)",
      "Personalised leather journal",
      "Custom keepsake box",
      "Hand-tied floral accent",
      "Premium velvet gift box",
    ],
    badge: "Our Finest",
    color: "from-rose-50 to-pink-100",
    accentColor: "#8B4A6B",
  },
];
