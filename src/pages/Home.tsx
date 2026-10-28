import React, { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MobileActionBar } from "../components/layout/MobileActionBar";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { Hero } from "../components/sections/Hero";
import { BookingPanel } from "../components/sections/BookingPanel";
import { Fleet } from "../components/sections/Fleet";
import { Services } from "../components/sections/Services";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { HowToBook } from "../components/sections/HowToBook";
import { About } from "../components/sections/About";
import { BookingForm } from "../components/sections/BookingForm";
import { Contact } from "../components/sections/Contact";
import { scrollToSection } from "../utils/contact";

export const Home: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("Maruti Suzuki Dzire");

  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    scrollToSection("booking-form");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#263238] antialiased selection:bg-brand-blue selection:text-white pb-16 md:pb-0">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Booking Enquiry Panel */}
        <BookingPanel selectedVehicle={selectedVehicle} />

        {/* 4 & 5. Our Fleet & Vehicle Filters */}
        <Fleet onSelectVehicle={handleSelectVehicle} />

        {/* 6. Services Section */}
        <Services onSelectVehicle={handleSelectVehicle} />

        {/* 7. Why Choose Vidhit Car Rental */}
        <WhyChooseUs />

        {/* 8. How to Book */}
        <HowToBook />

        {/* 9. About Us */}
        <About />

        {/* 10. Booking Enquiry Form */}
        <BookingForm
          selectedVehicle={selectedVehicle}
          onVehicleReset={() => setSelectedVehicle("Maruti Suzuki Dzire")}
        />

        {/* 11. Contact and Location */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer onSelectVehicle={handleSelectVehicle} />

      {/* 13. Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* 14. Mobile Sticky Call / WhatsApp / Book Bar */}
      <MobileActionBar />
    </div>
  );
};
