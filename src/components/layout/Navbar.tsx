import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "../../config/business";
import { Logo } from "../ui/Logo";
import { scrollToSection } from "../../utils/contact";
import { Phone, Menu, X, CalendarCheck, MapPin } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar with Direct Inquiry Number */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"
              title="View Vidhit Car Rental on Google"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Bowbazar, Kolkata – 700012</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Available: Dzire, Ertiga, WagonR, Scorpio</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
              Direct Inquiry Number:
            </span>
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="font-extrabold text-brand-gold hover:text-white transition-colors flex items-center gap-1.5 tracking-wide text-xs"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80"
            : "bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/50"
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
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="flex items-center gap-2.5 text-left py-1.5 px-3 rounded-xl hover:bg-slate-100 transition-colors group"
                aria-label={`Inquiry Number: ${BUSINESS_CONFIG.phone}`}
              >
                <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-none">
                    Inquiry Number
                  </span>
                  <span className="text-sm font-extrabold text-navy-800 tracking-tight group-hover:text-brand-blue transition-colors leading-tight mt-0.5">
                    {BUSINESS_CONFIG.phone}
                  </span>
                </div>
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
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="py-2 px-2.5 rounded-lg bg-navy-50 hover:bg-navy-100 text-navy-800 border border-slate-200 font-bold text-xs flex items-center gap-1"
                aria-label={`Call Inquiry Number: ${BUSINESS_CONFIG.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span className="hidden sm:inline">Inquiry:</span>
                <span>8582944726</span>
              </a>

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
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-50 text-navy-800 font-bold text-sm border border-slate-200 hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Inquiry Number: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
