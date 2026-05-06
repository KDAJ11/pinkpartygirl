import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50:  "#fff5f7",
          100: "#ffe0e8",
          200: "#ffc2d1",
          300: "#f2a0b0",
          400: "#e8748a",
          500: "#d94f6a",
          600: "#c23054",
          DEFAULT: "#F2A0B0",
        },
        rose: {
          gold: "#C9956C",
          light: "#E8BFA0",
          deep: "#A8724A",
        },
        cream: {
          DEFAULT: "#FAF6EF",
          warm: "#F5EDE0",
          deep: "#EEE0CC",
        },
        chocolate: "#2D1B14",
        espresso: "#1A0E09",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 4s ease-in-out infinite",
        "petal-fall": "petalFall 8s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(-3deg)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10%) translateX(0) rotate(0deg)", opacity: "0.8" },
          "100%": { transform: "translateY(110vh) translateX(80px) rotate(360deg)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-blush": "linear-gradient(135deg, #FAF6EF 0%, #FFE8ED 50%, #FAF6EF 100%)",
        "gradient-warm": "linear-gradient(180deg, #FAF6EF 0%, #F5EDE0 100%)",
        "gradient-hero": "radial-gradient(ellipse 80% 60% at 50% 0%, #FFD6DF 0%, #FAF6EF 60%, #FAF6EF 100%)",
      },
      boxShadow: {
        "blush-sm": "0 2px 8px rgba(242,160,176,0.25)",
        "blush-md": "0 8px 24px rgba(242,160,176,0.30)",
        "blush-lg": "0 20px 60px rgba(242,160,176,0.35)",
        "gold-sm": "0 2px 8px rgba(201,149,108,0.20)",
        "card": "0 4px 32px rgba(45,27,20,0.08)",
        "card-hover": "0 16px 48px rgba(45,27,20,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
