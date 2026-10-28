import React from "react";
import { SERVICES } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { scrollToSection } from "../../utils/contact";
import { Car, Compass, Users, Shield, ArrowRight } from "lucide-react";

export interface ServicesProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectVehicle }) => {
  const iconMap = {
    Car: <Car className="w-6 h-6 text-brand-blue" />,
    Compass: <Compass className="w-6 h-6 text-brand-blue" />,
    Users: <Users className="w-6 h-6 text-brand-blue" />,
    Shield: <Shield className="w-6 h-6 text-brand-blue" />,
  };

  const handleCardCta = (vehicleTarget?: string) => {
    if (vehicleTarget) {
      onSelectVehicle(vehicleTarget);
    } else {
      scrollToSection("booking-form");
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fleet & Rental Enquiries"
          title="CAR RENTAL ENQUIRIES MADE SIMPLE"
          subtitle="Explore car options suited to your travel requirements and contact Vidhit Car Rental for transparent rental rates and vehicle availability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <div className="group-hover:text-white group-hover:[&>svg]:text-white">
                    {iconMap[service.iconName]}
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-navy-800 mb-2 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <button
                  onClick={() => handleCardCta(service.vehicleTarget)}
                  className="w-full py-2.5 px-4 rounded-xl bg-navy-800 hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
