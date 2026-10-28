import React from "react";
import { BUSINESS_CONFIG } from "../../config/business";
import { scrollToSection } from "../../utils/contact";
import { ArrowRight, CalendarCheck, ShieldCheck, MapPin, Car, Phone } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-36 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-white">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-blue/20 text-brand-blue-light border border-brand-blue/40 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
              <span>CAR RENTAL IN BOWBAZAR, KOLKATA</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black font-heading tracking-tight uppercase leading-[1.12]">
              YOUR JOURNEY STARTS WITH THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-400 to-brand-gold">
                RIGHT CAR
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Explore the available car options at Vidhit Car Rental in Bowbazar, Kolkata. Browse our vehicle lineup and contact us to discuss your travel requirements, rental rates, and booking availability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection("fleet")}
                className="py-3.5 px-6 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-cta hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>EXPLORE OUR FLEET</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("booking-form")}
                className="py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <CalendarCheck className="w-4 h-4 text-brand-gold" />
                <span>BOOK A CAR</span>
              </button>

              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="py-3.5 px-5 rounded-xl bg-navy-800/90 hover:bg-navy-800 text-white border border-slate-700/80 backdrop-blur-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 active:scale-95 group shadow-md"
                aria-label={`Call Vidhit Car Rental Inquiry Number: ${BUSINESS_CONFIG.phone}`}
              >
                <Phone className="w-4 h-4 text-brand-gold group-hover:rotate-12 transition-transform" />
                <span>INQUIRY: {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>

            {/* Hero Highlights */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Multiple Vehicle Options
                  </h4>
                  <p className="text-xs text-slate-400">Sedan, SUV & More</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Inquiry: 8582944726
                  </h4>
                  <p className="text-xs text-slate-400">Direct Phone & WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Located in Kolkata
                  </h4>
                  <p className="text-xs text-slate-400">Bowbazar, 700012</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/hero/hero-car.jpg"
                alt="Vidhit Car Rental Vehicle on road"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-white/15 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">
                    Vidhit Car Rental
                  </p>
                  <p className="text-sm font-extrabold text-white">
                    Bowbazar, Kolkata – 700012
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-blue text-white">
                    4 Fleet Models
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
