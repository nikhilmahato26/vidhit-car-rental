import React from "react";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";
import { MessageSquare } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <aside aria-label="Quick contact" className="fixed bottom-20 md:bottom-8 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vidhit Car Rental on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20BA5A] hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="font-bold text-xs uppercase tracking-wider hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
