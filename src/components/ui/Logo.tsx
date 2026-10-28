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
  // Height sizing for the official logo lockup
  const heightStyles = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-12",
    lg: "h-12 sm:h-14",
  };

  if (light) {
    // On dark backgrounds (like the navy footer), wrap in a clean white rounded card
    // so the authentic navy and crimson logo colors pop with crisp contrast
    return (
      <a
        href="#home"
        aria-label="Vidhit Car Rental Home"
        className={`inline-flex items-center bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-md border border-white/20 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      >
        <img
          src="/images/logo/vidhit-logo.png"
          alt="Vidhit Car Rental Logo"
          className={`${heightStyles[size]} w-auto object-contain select-none`}
        />
      </a>
    );
  }

  return (
    <a
      href="#home"
      aria-label="Vidhit Car Rental Home"
      className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <img
        src="/images/logo/vidhit-logo.png"
        alt="Vidhit Car Rental Logo"
        className={`${heightStyles[size]} w-auto object-contain`}
      />
    </a>
  );
};
