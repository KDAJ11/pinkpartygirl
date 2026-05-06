"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  color?: string;
}

export default function BlushUnderline({
  children,
  className = "",
  color = "#F2A0B0",
}: Props) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          el.classList.add("blush-underline-visible");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block ${className}`}
    >
      {children}
      {/* Brushstroke SVG underline */}
      <span
        className="absolute left-0 w-full pointer-events-none"
        style={{ bottom: "-6px", height: "10px" }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 10"
          fill="none"
          preserveAspectRatio="none"
          width="100%"
          height="10"
        >
          <path
            ref={pathRef}
            d="M2,5 C20,2 40,8 60,4 C80,1 100,7 120,4 C140,2 160,8 198,5"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
            className="blush-underline-path"
          />
        </svg>
      </span>
    </span>
  );
}
