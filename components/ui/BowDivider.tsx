interface Props {
  className?: string;
}

export default function BowDivider({ className = "" }: Props) {
  return (
    <div
      className={`flex justify-center items-center my-2 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left ribbon arm */}
        <path
          d="M60 20 C48 12, 28 8, 12 14 C4 17, 4 24, 12 26 C24 28, 46 24, 60 20"
          stroke="#F2A0B0"
          strokeWidth="1.5"
          fill="rgba(242,160,176,0.08)"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
        {/* Right ribbon arm */}
        <path
          d="M60 20 C72 12, 92 8, 108 14 C116 17, 116 24, 108 26 C96 28, 74 24, 60 20"
          stroke="#F2A0B0"
          strokeWidth="1.5"
          fill="rgba(242,160,176,0.08)"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
        {/* Center knot */}
        <circle
          cx="60"
          cy="20"
          r="4"
          stroke="#C9956C"
          strokeWidth="1.2"
          fill="rgba(201,149,108,0.2)"
          opacity="0.7"
        />
        {/* Trailing ribbon tails */}
        <path
          d="M57 24 C53 30, 50 34, 48 37"
          stroke="#F2A0B0"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M63 24 C67 30, 70 34, 72 37"
          stroke="#F2A0B0"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Horizontal lines on each side */}
        <line x1="4" y1="20" x2="18" y2="20" stroke="#F2A0B0" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4"/>
        <line x1="102" y1="20" x2="116" y2="20" stroke="#F2A0B0" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4"/>
      </svg>
    </div>
  );
}
