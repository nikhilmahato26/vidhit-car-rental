export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  vehicleTarget?: string;
  iconName: "Car" | "Compass" | "Users" | "Shield";
}

export const SERVICES: ServiceItem[] = [
  {
    id: "rental-enquiries",
    title: "Vehicle Rental Enquiries",
    description: "Contact us to discuss your preferred vehicle, rental requirements, and applicable rates.",
    ctaText: "ENQUIRE NOW",
    iconName: "Car",
  },
  {
    id: "sedan-options",
    title: "Sedan Options",
    description: "Enquire about the Maruti Suzuki Dzire for your travel requirements.",
    ctaText: "ENQUIRE ABOUT SEDAN",
    vehicleTarget: "Maruti Suzuki Dzire",
    iconName: "Compass",
  },
  {
    id: "family-vehicle-options",
    title: "Family Vehicle Options",
    description: "Explore the Maruti Suzuki Ertiga and ask about availability.",
    ctaText: "ENQUIRE ABOUT ERTIGA",
    vehicleTarget: "Maruti Suzuki Ertiga",
    iconName: "Users",
  },
  {
    id: "suv-options",
    title: "SUV Options",
    description: "Contact us to enquire about the Mahindra Scorpio.",
    ctaText: "ENQUIRE ABOUT SUV",
    vehicleTarget: "Mahindra Scorpio",
    iconName: "Shield",
  },
];

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: "Layers" | "MessageSquare" | "PhoneCall" | "CheckCircle2";
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Multiple Vehicle Options",
    description: "Explore a selection of sedan, hatchback, family vehicle, and SUV options.",
    iconName: "Layers",
  },
  {
    title: "Easy Enquiries",
    description: "Contact the business directly to ask about rates and availability.",
    iconName: "MessageSquare",
  },
  {
    title: "Convenient Contact",
    description: "Reach the business by phone or email.",
    iconName: "PhoneCall",
  },
  {
    title: "Vehicle Selection",
    description: "Browse the fleet and enquire about the car that suits your requirements.",
    iconName: "CheckCircle2",
  },
];

export interface BookingStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: "Search" | "Car" | "FileText" | "CheckCircle";
}

export const BOOKING_STEPS: BookingStep[] = [
  {
    stepNumber: 1,
    title: "Browse the Fleet",
    description: "Explore the four available vehicle options.",
    iconName: "Search",
  },
  {
    stepNumber: 2,
    title: "Select Your Vehicle",
    description: "Choose your preferred vehicle.",
    iconName: "Car",
  },
  {
    stepNumber: 3,
    title: "Share Your Requirements",
    description: "Provide your pickup location, destination, travel date, and contact details.",
    iconName: "FileText",
  },
  {
    stepNumber: 4,
    title: "Confirm with the Business",
    description: "Discuss rental rates, availability, and applicable conditions directly with Vidhit Car Rental.",
    iconName: "CheckCircle",
  },
];
