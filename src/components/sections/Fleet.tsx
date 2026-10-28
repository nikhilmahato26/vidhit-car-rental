import React, { useState } from "react";
import { VEHICLES, type VehicleCategory } from "../../data/vehicles";
import { VehicleCard } from "../ui/VehicleCard";
import { FleetFilters } from "./FleetFilters";
import { SectionHeading } from "../ui/SectionHeading";

export interface FleetProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>("All Vehicles");

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (activeCategory === "All Vehicles") return true;
    return vehicle.category === activeCategory;
  });

  return (
    <section id="fleet" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Available Vehicles"
          title="FIND THE RIGHT CAR FOR YOUR JOURNEY"
          subtitle="Explore our available vehicles and contact Vidhit Car Rental for rental rates, availability, and booking details."
        />

        {/* Category Filters */}
        <FleetFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={onSelectVehicle}
            />
          ))}
        </div>

        {/* Rates Disclaimer Badge */}
        <div className="mt-12 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-xs text-slate-500">
          <span className="font-bold text-navy-800">Rates Notice:</span> Official rental rates, availability, and travel parameters are shared directly upon enquiry. Please contact Vidhit Car Rental for exact terms.
        </div>
      </div>
    </section>
  );
};
