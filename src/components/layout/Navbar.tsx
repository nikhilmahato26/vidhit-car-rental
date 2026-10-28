import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "../../config/business";
import { Logo } from "../ui/Logo";
import { scrollToSection } from "../../utils/contact";
import { Phone, Menu, X, CalendarCheck } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "How to Book", href: "#how-to-book" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
          : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="flex items-center gap-2 text-sm font-bold text-navy-800 hover:text-brand-blue transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100"
              aria-label={`Call Vidhit Car Rental at ${BUSINESS_CONFIG.phone}`}
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Phone className="w-4 h-4" />
              </div>
              <span className="tracking-tight">{BUSINESS_CONFIG.phone}</span>
            </a>

            <button
              onClick={() => scrollToSection("booking-form")}
              className="py-2.5 px-5 rounded-xl bg-brand-blue text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-blue-hover shadow-cta transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Car</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => scrollToSection("booking-form")}
              className="py-2 px-3 rounded-lg bg-brand-blue text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-lg text-navy-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-4 pb-6 mt-3 transition-all duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-50 text-navy-800 font-bold text-sm border border-slate-200"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
