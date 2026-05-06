interface BadgeProps {
  children: React.ReactNode;
  variant?: "blush" | "gold" | "cream" | "dark";
  className?: string;
}

const variants = {
  blush: "bg-blush-100 text-blush-500 border border-blush-200",
  gold: "bg-amber-50 text-rose-gold border border-amber-200",
  cream: "bg-cream-warm text-chocolate/70 border border-cream-deep",
  dark: "bg-chocolate text-cream border border-chocolate",
};

export default function Badge({ children, variant = "blush", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-semibold tracking-[0.1em] uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
