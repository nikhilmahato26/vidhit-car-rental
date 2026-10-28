import { BUSINESS_CONFIG } from "../config/business";

export interface BookingEnquiryPayload {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredVehicle?: string;
  pickupLocation?: string;
  destination?: string;
  travelDate?: string;
  returnDate?: string;
  additionalRequirements?: string;
}

/**
 * Generates the standard general enquiry WhatsApp URL
 */
export function getGeneralWhatsAppUrl(): string {
  const message =
    "Hello Vidhit Car Rental, I would like to enquire about your available vehicles. Please share the rental rates, availability, and booking details.";
  return `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates vehicle-specific enquiry WhatsApp URL
 */
export function getVehicleWhatsAppUrl(vehicleName: string): string {
  const message = `Hello Vidhit Car Rental, I am interested in enquiring about the ${vehicleName}.\n\nPlease share the rental rates, availability, and booking details.`;
  return `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates dynamic WhatsApp booking message from form payload
 * Omits optional fields if they are empty
 */
export function generateBookingWhatsAppUrl(payload: BookingEnquiryPayload): string {
  const lines: string[] = [
    "Hello Vidhit Car Rental, I am interested in booking the following vehicle.",
    "",
  ];

  if (payload.fullName?.trim()) {
    lines.push(`Full Name: ${payload.fullName.trim()}`);
  }
  if (payload.phone?.trim()) {
    lines.push(`Phone Number: ${payload.phone.trim()}`);
  }
  if (payload.email?.trim()) {
    lines.push(`Email Address: ${payload.email.trim()}`);
  }
  if (payload.preferredVehicle?.trim()) {
    lines.push(`Preferred Vehicle: ${payload.preferredVehicle.trim()}`);
  }
  if (payload.pickupLocation?.trim()) {
    lines.push(`Pickup Location: ${payload.pickupLocation.trim()}`);
  }
  if (payload.destination?.trim()) {
    lines.push(`Destination: ${payload.destination.trim()}`);
  }
  if (payload.travelDate?.trim()) {
    lines.push(`Travel Date: ${payload.travelDate.trim()}`);
  }
  if (payload.returnDate?.trim()) {
    lines.push(`Return Date: ${payload.returnDate.trim()}`);
  }
  if (payload.additionalRequirements?.trim()) {
    lines.push(`Additional Requirements: ${payload.additionalRequirements.trim()}`);
  }

  lines.push("");
  lines.push("Please share availability, rental rates, and applicable booking terms.");

  const fullMessage = lines.join("\n");
  return `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(fullMessage)}`;
}
