import React from "react";

export interface LogoProps {
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  light = false,
  className = "",
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const titleSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const subSizes = {
    sm: "text-[9px] tracking-[0.25em]",
    md: "text-[10px] tracking-[0.28em]",
    lg: "text-xs tracking-[0.3em]",
  };

  return (
    <a
      href="#home"
      aria-label="Vidhit Car Rental Home"
      className={`inline-flex items-center gap-3 select-none group transition-opacity hover:opacity-95 ${className}`}
    >
      <div
        className={`${iconSizes[size]} rounded-xl flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105 ${
          light
            ? "bg-gradient-to-br from-brand-blue to-navy-800 border border-white/20"
            : "bg-gradient-to-br from-navy-800 to-navy-950 border border-navy-700/50"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 text-brand-gold"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized minimal car silhouette & road line */}
          <path
            d="M3 15C3 13.5 4 12 5.5 11.5L8.5 7.5C9.2 6.5 10.3 6 11.5 6H15.5C16.7 6 17.8 6.5 18.5 7.5L21.5 11.5C22.5 12.2 23 13.2 23 14.5V17C23 17.6 22.6 18 22 18H21C21 16.3 19.7 15 18 15C16.3 15 15 16.3 15 18H9C9 16.3 7.7 15 6 15C4.3 15 3 16.3 3 18H2C1.4 18 1 17.6 1 17V15C1 14.5 1.5 14 2 13.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="2" fill="#246BCE" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="2" fill="#246BCE" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="21" x2="22" y2="21" stroke="#246BCE" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-heading font-black tracking-wider uppercase ${titleSizes[size]} ${
            light ? "text-white" : "text-navy-800 text-[#14263D]"
          }`}
        >
          VIDHIT
        </span>
        <span
          className={`font-sans font-bold uppercase mt-1 ${subSizes[size]} ${
            light ? "text-brand-gold" : "text-brand-blue"
          }`}
        >
          CAR RENTAL
        </span>
      </div>
    </a>
  );
};
