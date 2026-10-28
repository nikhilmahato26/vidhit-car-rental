import React from "react";
import { BUSINESS_CONFIG } from "../../config/business";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";
import { scrollToSection } from "../../utils/contact";
import { SectionHeading } from "../ui/SectionHeading";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CalendarCheck,
  ExternalLink,
  Navigation,
} from "lucide-react";

export const Contact: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="CONTACT VIDHIT CAR RENTAL"
          subtitle="Reach out directly to enquire about vehicle options, rental rates, and travel requirements in Bowbazar, Kolkata."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact info & CTAs */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-black text-navy-850 text-[#14263D] uppercase mt-1">
                  {BUSINESS_CONFIG.name}
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Connect with us via phone, WhatsApp, or email to discuss your preferred vehicle.
                </p>
              </div>

              {/* Contact list items */}
              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-brand-blue group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </p>
                    <p className="text-base font-extrabold text-navy-800 group-hover:text-brand-blue transition-colors">
                      {BUSINESS_CONFIG.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={BUSINESS_CONFIG.emailHref}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-brand-blue group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </p>
                    <p className="text-base font-extrabold text-navy-800 truncate group-hover:text-brand-blue transition-colors">
                      {BUSINESS_CONFIG.email}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Address & PIN
                    </p>
                    <p className="text-sm font-bold text-navy-800 leading-snug">
                      {BUSINESS_CONFIG.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reusable Action Buttons: Call Now, WhatsApp Us, Email Us, Book a Car */}
            <div className="pt-8 grid grid-cols-2 gap-3">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="py-3 px-4 rounded-xl bg-navy-800 hover:bg-navy-900 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={BUSINESS_CONFIG.emailHref}
                className="py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-navy-800 border border-slate-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>Email Us</span>
              </a>

              <button
                onClick={() => scrollToSection("booking-form")}
                className="py-3 px-4 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center shadow-cta cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book a Car</span>
              </button>
            </div>
          </div>

          {/* Right Column: Location Card & Google Maps link */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background Map Graphic Accent */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <img
                src="/images/hero/hero-bg.jpg"
                alt="Bowbazar Kolkata Map Area"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                <Navigation className="w-3.5 h-3.5" />
                <span>Kolkata Location</span>
              </div>

              <div>
                <h3 className="text-2xl font-black font-heading uppercase text-white">
                  Visit or Search Bowbazar, Kolkata
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Vidhit Car Rental operates from Bowbazar, Kolkata (PIN: 700013), West Bengal. Customers can locate our service area on Google Maps or connect with us directly.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Verified Service Region</span>
                </div>
                <p className="text-lg font-bold text-white">
                  {BUSINESS_CONFIG.location}
                </p>
                <p className="text-xs text-slate-300">
                  PIN Code: <span className="text-white font-bold">{BUSINESS_CONFIG.pinCode}</span>, West Bengal, India
                </p>
              </div>

              <div className="p-4 rounded-xl bg-navy-800/80 border border-navy-700 text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Notice:</span> Exact meeting points and vehicle pickup details are coordinated directly upon rental enquiry confirmation.
              </div>
            </div>

            {/* Google Maps Search CTA */}
            <div className="pt-8 relative z-10">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-brand-blue to-sky-600 hover:from-brand-blue-hover hover:to-sky-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2.5 transition-all active:scale-95"
              >
                <span>OPEN BOWBAZAR ON GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
