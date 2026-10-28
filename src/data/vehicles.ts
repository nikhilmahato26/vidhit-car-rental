export interface Vehicle {
  id: string;
  name: string;
  category: "Sedan" | "Family Vehicle" | "Hatchback" | "SUV";
  description: string;
  image: string;
  ctaText: string;
  ratesNotice: string;
}

export type VehicleCategory = "All Vehicles" | "Sedan" | "Family Vehicle" | "Hatchback" | "SUV";

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  "All Vehicles",
  "Sedan",
  "Hatchback",
  "Family Vehicle",
  "SUV",
];

export const VEHICLES: Vehicle[] = [
  {
    id: "dzire",
    name: "Maruti Suzuki Dzire",
    category: "Sedan",
    description: "Explore this vehicle option for your planned travel requirements.",
    image: "/images/vehicles/dzire.jpg",
    ctaText: "ENQUIRE ABOUT DZIRE",
    ratesNotice: "CONTACT FOR RATES",
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "Family Vehicle",
    description: "Contact us to enquire about this vehicle for your journey.",
    image: "/images/vehicles/ertiga.jpg",
    ctaText: "ENQUIRE ABOUT ERTIGA",
    ratesNotice: "CONTACT FOR RATES",
  },
  {
    id: "wagonr",
    name: "Maruti Suzuki WagonR",
    category: "Hatchback",
    description: "Ask about availability and rental details for this vehicle.",
    image: "/images/vehicles/wagonr.jpg",
    ctaText: "ENQUIRE ABOUT WAGONR",
    ratesNotice: "CONTACT FOR RATES",
  },
  {
    id: "scorpio",
    name: "Mahindra Scorpio",
    category: "SUV",
    description: "Enquire about this SUV option for your planned trip.",
    image: "/images/vehicles/scorpio.jpg",
    ctaText: "ENQUIRE ABOUT SCORPIO",
    ratesNotice: "CONTACT FOR RATES",
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.id === id);
}

export const VEHICLE_OPTIONS = [
  "Maruti Suzuki Dzire",
  "Maruti Suzuki Ertiga",
  "Maruti Suzuki WagonR",
  "Mahindra Scorpio",
  "Any Available Vehicle",
] as const;

export type VehicleOption = (typeof VEHICLE_OPTIONS)[number];
