import React from "react";
import { BUSINESS_CONFIG } from "../../config/business";
import { VEHICLES } from "../../data/vehicles";
import { Logo } from "../ui/Logo";
import { scrollToSection } from "../../utils/contact";
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from "lucide-react";

export interface FooterProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectVehicle }) => {
  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "Our Fleet", href: "fleet" },
    { name: "Services", href: "services" },
    { name: "Why Us", href: "why-us" },
    { name: "How to Book", href: "how-to-book" },
    { name: "About Us", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const handleVehicleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();
    if (onSelectVehicle) {
      onSelectVehicle(name);
    } else {
      scrollToSection("booking-form");
    }
  };

  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          {/* Brand Col */}
          <div className="space-y-4">
            <Logo light size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Vidhit Car Rental provides reliable car rental enquiries for Dzire, Ertiga, WagonR, and Scorpio in Bowbazar, Kolkata.
            </p>
            <div className="pt-2 text-xs text-brand-gold font-medium uppercase tracking-wider">
              {BUSINESS_CONFIG.tagline}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-4 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-brand-blue">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Fleet */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-4 font-heading">
              Our Fleet
            </h3>
            <ul className="space-y-2.5 text-sm">
              {VEHICLES.map((vehicle) => (
                <li key={vehicle.id}>
                  <a
                    href="#booking-form"
                    onClick={(e) => handleVehicleClick(e, vehicle.name)}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{vehicle.name}</span>
                    <span className="text-xs text-slate-400 group-hover:text-brand-blue">
                      Enquire
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-4 font-heading">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Inquiry Number
                    </span>
                    <span className="font-semibold text-white group-hover:text-brand-gold transition-colors">
                      {BUSINESS_CONFIG.phone}
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.emailHref}
                  className="flex items-start gap-3 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>{BUSINESS_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>{BUSINESS_CONFIG.address}</span>
                </div>
              </li>
              <li className="pt-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-blue hover:text-brand-gold transition-colors font-semibold"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {BUSINESS_CONFIG.copyrightYear} Vidhit Car Rental. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
