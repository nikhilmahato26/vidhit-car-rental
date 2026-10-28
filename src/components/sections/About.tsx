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
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="/images/about/about-showroom.jpg"
                alt="Vidhit Car Rental Showroom and Customer Office"
                className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />

              {/* Authentic Vidhit Car Rental Logo Card */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md p-3 px-4 rounded-2xl shadow-lg border border-white/40 flex items-center gap-3">
                <img
                  src="/images/logo/vidhit-logo.png"
                  alt="Vidhit Car Rental Official Logo"
                  className="h-10 sm:h-12 w-auto object-contain select-none"
                />
              </div>

              {/* Location & Inquiry Number Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-blue-hover hover:underline transition-colors"
                    title="View Vidhit Car Rental on Google"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Bowbazar, Kolkata – 700012</span>
                  </a>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Kolkata Verified
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Inquiry Number
                    </span>
                    <a
                      href={BUSINESS_CONFIG.phoneHref}
                      className="text-sm sm:text-base font-black text-navy-850 text-[#14263D] hover:text-brand-blue transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{BUSINESS_CONFIG.phone}</span>
                    </a>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.phoneHref}
                    className="py-2 px-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors active:scale-95"
                  >
                    Call Inquiry
                  </a>
                </div>
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
                Contact our Bowbazar team on our direct inquiry number to discuss your travel requirements, preferred vehicle, rental rates, and booking availability.
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
                className="inline-flex items-center gap-2.5 py-3 px-5 rounded-xl bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue font-bold text-xs uppercase tracking-wider transition-colors border border-brand-blue/20"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Inquiry Number: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
