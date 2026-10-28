import React from "react";
import { BUSINESS_CONFIG } from "../../config/business";
import { scrollToSection } from "../../utils/contact";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image & Location Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/images/hero/hero-banner.jpg"
                alt="Vidhit Car Rental Kolkata"
                className="w-full h-80 sm:h-96 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Bowbazar, Kolkata – 700013</span>
                </div>
                <p className="text-sm font-extrabold text-navy-800">
                  {BUSINESS_CONFIG.name}
                </p>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-blue/10 text-brand-blue">
              <span>About Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight text-navy-850 text-[#14263D] uppercase leading-tight">
              YOUR CAR RENTAL CONTACT IN KOLKATA
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Vidhit Car Rental is located in Bowbazar, Kolkata, West Bengal. Customers can explore our available vehicle options, including Maruti Suzuki Dzire, Maruti Suzuki Ertiga, Maruti Suzuki WagonR, and Mahindra Scorpio.
              </p>
              <p>
                Contact us to discuss your travel requirements, preferred vehicle, rental rates, and booking availability.
              </p>
            </div>

            {/* Key Fleet Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {["Maruti Suzuki Dzire", "Maruti Suzuki Ertiga", "Maruti Suzuki WagonR", "Mahindra Scorpio"].map((car) => (
                <div
                  key={car}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-navy-800 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span>{car}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact & Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="py-3.5 px-7 rounded-xl bg-navy-800 hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>CONTACT VIDHIT CAR RENTAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-800 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
