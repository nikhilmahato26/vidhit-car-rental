import React from "react";
import { BUSINESS_CONFIG } from "../../config/business";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";
import { scrollToSection } from "../../utils/contact";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";

export const MobileActionBar: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <nav
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call button */}
        <a
          href={BUSINESS_CONFIG.phoneHref}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 active:bg-slate-100 text-navy-800 transition-colors border border-slate-200/80"
          aria-label="Call Vidhit Car Rental"
        >
          <Phone className="w-5 h-5 text-brand-blue" />
          <span className="text-[11px] font-bold mt-1 tracking-wide uppercase">Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/10 active:bg-[#25D366]/20 text-[#128C7E] transition-colors border border-[#25D366]/30"
          aria-label="Chat on WhatsApp with Vidhit Car Rental"
        >
          <MessageSquare className="w-5 h-5 text-[#25D366]" />
          <span className="text-[11px] font-bold mt-1 tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* Book button */}
        <button
          onClick={() => scrollToSection("booking-form")}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-blue active:bg-brand-blue-hover text-white transition-colors shadow-sm"
          aria-label="Scroll to Booking Form"
        >
          <CalendarCheck className="w-5 h-5 text-white" />
          <span className="text-[11px] font-bold mt-1 tracking-wide uppercase">Book</span>
        </button>
      </div>
    </nav>
  );
};
