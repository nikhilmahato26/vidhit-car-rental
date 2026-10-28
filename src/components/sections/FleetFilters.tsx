import React from "react";
import { type VehicleCategory, VEHICLE_CATEGORIES } from "../../data/vehicles";

export interface FleetFiltersProps {
  activeCategory: VehicleCategory;
  onSelectCategory: (category: VehicleCategory) => void;
}

export const FleetFilters: React.FC<FleetFiltersProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
      {VEHICLE_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-brand-blue text-white shadow-cta scale-105"
                : "bg-white text-navy-800 hover:bg-slate-100 border border-slate-200 shadow-sm"
            }`}
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
