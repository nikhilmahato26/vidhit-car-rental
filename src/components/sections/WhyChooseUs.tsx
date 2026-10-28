import React from "react";
import { WHY_CHOOSE_ITEMS } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Layers, MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const iconMap = {
    Layers: <Layers className="w-6 h-6 text-brand-gold" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-brand-gold" />,
    PhoneCall: <PhoneCall className="w-6 h-6 text-brand-gold" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-brand-gold" />,
  };

  return (
    <section id="why-us" className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Key Benefits"
          title="WHY CHOOSE VIDHIT CAR RENTAL?"
          subtitle="Explore our fleet and connect directly with our Bowbazar team to plan your travel requirements."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-navy-900/80 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm hover:border-brand-gold/40 hover:bg-navy-900 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {iconMap[item.iconName]}
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand-gold transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
