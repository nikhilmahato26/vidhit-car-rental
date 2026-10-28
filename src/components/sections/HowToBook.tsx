import React from "react";
import { BOOKING_STEPS } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { scrollToSection } from "../../utils/contact";
import { Search, Car, FileText, CheckCircle, ArrowRight } from "lucide-react";

export const HowToBook: React.FC = () => {
  const iconMap = {
    Search: <Search className="w-6 h-6 text-brand-blue" />,
    Car: <Car className="w-6 h-6 text-brand-blue" />,
    FileText: <FileText className="w-6 h-6 text-brand-blue" />,
    CheckCircle: <CheckCircle className="w-6 h-6 text-brand-blue" />,
  };

  return (
    <section id="how-to-book" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple 4-Step Process"
          title="HOW TO BOOK YOUR RENTAL"
          subtitle="Follow these clear steps to enquire and confirm your preferred car rental with Vidhit Car Rental."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {BOOKING_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                    {iconMap[step.iconName]}
                  </div>
                  <span className="text-3xl font-black font-heading text-slate-200">
                    0{step.stepNumber}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-navy-800 mb-2">
                  Step {step.stepNumber} — {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < BOOKING_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA to start booking */}
        <div className="mt-12 text-center">
          <button
            onClick={() => scrollToSection("booking-form")}
            className="py-3.5 px-8 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-cta transition-all duration-300 inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>START YOUR ENQUIRY NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
