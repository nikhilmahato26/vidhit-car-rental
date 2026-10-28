import React from "react";

export type ButtonVariant = "primary" | "secondary" | "gold" | "dark" | "outline" | "ghost" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3.5 py-2 text-xs uppercase tracking-wider gap-1.5",
    md: "px-5 py-2.5 text-sm uppercase tracking-wider gap-2",
    lg: "px-7 py-3.5 text-base uppercase tracking-wider font-bold gap-2.5",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-cta hover:shadow-lg focus:ring-brand-blue",
    gold:
      "bg-brand-gold text-navy-900 hover:bg-brand-gold-hover shadow-cta-gold hover:shadow-lg focus:ring-brand-gold font-bold",
    dark:
      "bg-navy-800 text-white hover:bg-navy-900 shadow-md hover:shadow-lg focus:ring-navy-700",
    secondary:
      "bg-white text-navy-800 hover:bg-navy-50 border border-slate-200 shadow-sm hover:shadow focus:ring-navy-800",
    outline:
      "bg-transparent text-navy-800 border-2 border-navy-800 hover:bg-navy-800 hover:text-white focus:ring-navy-800",
    ghost:
      "bg-transparent text-navy-800 hover:bg-navy-100/60 focus:ring-navy-800",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-md hover:shadow-lg focus:ring-[#25D366]",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};
