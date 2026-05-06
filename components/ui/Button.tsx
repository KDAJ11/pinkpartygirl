"use client";

import { forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-blush text-white hover:bg-blush-400 shadow-blush-sm hover:shadow-blush-md",
  secondary:
    "border-2 border-blush text-blush bg-transparent hover:bg-blush hover:text-white",
  ghost:
    "text-chocolate/80 hover:text-blush-400 bg-transparent hover:bg-blush-50",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20BD5A]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-sm min-h-[44px]",
  lg: "px-8 py-4 text-base min-h-[52px]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", href, external, loading, icon, className = "", children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-gold disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5";

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {icon}
          {children}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {icon}
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={loading || props.disabled} {...props}>
        {loading ? (
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        ) : icon}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
