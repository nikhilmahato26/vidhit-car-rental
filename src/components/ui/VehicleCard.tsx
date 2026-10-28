import React from "react";
import type { Vehicle } from "../../data/vehicles";
import { BUSINESS_CONFIG } from "../../config/business";
import { getVehicleWhatsAppUrl } from "../../utils/whatsapp";
import { MessageSquare, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onSelectVehicle,
}) => {
  const whatsappUrl = getVehicleWhatsAppUrl(vehicle.name);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-80" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-navy-800 shadow-sm backdrop-blur-md">
            {vehicle.category}
          </span>
        </div>

        {/* Rates Notice badge */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90 bg-navy-900/80 px-2.5 py-1 rounded-md backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
            <span>{vehicle.ratesNotice}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-navy-800 group-hover:text-brand-blue transition-colors">
            {vehicle.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
          {/* Main Booking Enquiry CTA */}
          <button
            onClick={() => onSelectVehicle(vehicle.name)}
            className="w-full py-3 px-4 rounded-xl bg-brand-blue text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-blue-hover transition-colors shadow-cta flex items-center justify-center gap-2 group/btn cursor-pointer"
          >
            <span>{vehicle.ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>

          {/* Quick Actions (WhatsApp & Call) */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp enquiry for ${vehicle.name}`}
              className="py-2.5 px-3 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phoneHref}
              aria-label={`Call Vidhit Car Rental inquiry number for ${vehicle.name}`}
              className="py-2.5 px-3 rounded-lg bg-navy-50 text-navy-800 hover:bg-navy-800 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Inquiry Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
