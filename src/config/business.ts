export const BUSINESS_CONFIG = {
  name: "Vidhit Car Rental",
  shortName: "Vidhit",
  tagline: "Your journey starts with the right car.",
  phone: "+91 8582944726",
  phoneRaw: "918582944726",
  phoneHref: "tel:+918582944726",
  inquiryNumber: "+91 8582944726",
  inquiryNumberRaw: "918582944726",
  inquiryPhoneHref: "tel:+918582944726",
  email: "jsrivastav640@gmail.com",
  emailHref: "mailto:jsrivastav640@gmail.com",
  location: "Bowbazar, Kolkata, West Bengal",
  pinCode: "700012",
  address: "Bowbazar, Kolkata, West Bengal – 700012, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bowbazar,+Kolkata,+West+Bengal+700012",
  whatsappBaseUrl: "https://wa.me/918582944726",
  copyrightYear: 2026,
} as const;

export type BusinessConfig = typeof BUSINESS_CONFIG;
