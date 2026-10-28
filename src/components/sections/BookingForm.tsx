import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { VEHICLE_OPTIONS } from "../../data/vehicles";
import { generateBookingWhatsAppUrl } from "../../utils/whatsapp";
import { BUSINESS_CONFIG } from "../../config/business";
import { SectionHeading } from "../ui/SectionHeading";
import {
  Calendar,
  MapPin,
  Car,
  User,
  Phone,
  Mail,
  FileText,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  PhoneCall,
  ExternalLink,
} from "lucide-react";

const fullBookingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z
    .string()
    .min(10, "Valid 10-digit phone number is required")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  preferredVehicle: z.string().min(1, "Please select a vehicle option"),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  destination: z.string().optional().or(z.literal("")),
  travelDate: z.string().min(1, "Travel date is required"),
  returnDate: z.string().optional().or(z.literal("")),
  additionalRequirements: z.string().optional().or(z.literal("")),
});

type FullBookingFormData = z.infer<typeof fullBookingSchema>;

export interface BookingFormProps {
  selectedVehicle?: string;
  onVehicleReset?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedVehicle,
  onVehicleReset,
}) => {
  const [successUrl, setSuccessUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FullBookingFormData>({
    resolver: zodResolver(fullBookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      preferredVehicle: selectedVehicle || "Maruti Suzuki Dzire",
      pickupLocation: "",
      destination: "",
      travelDate: "",
      returnDate: "",
      additionalRequirements: "",
    },
  });

  React.useEffect(() => {
    if (selectedVehicle) {
      setValue("preferredVehicle", selectedVehicle);
    }
  }, [selectedVehicle, setValue]);

  const onSubmit = (data: FullBookingFormData) => {
    const whatsappUrl = generateBookingWhatsAppUrl({
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || undefined,
      preferredVehicle: data.preferredVehicle,
      pickupLocation: data.pickupLocation,
      destination: data.destination || undefined,
      travelDate: data.travelDate,
      returnDate: data.returnDate || undefined,
      additionalRequirements: data.additionalRequirements || undefined,
    });

    setSuccessUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking-form" className="py-20 bg-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Booking Enquiry"
          title="LET'S PLAN YOUR NEXT JOURNEY"
          subtitle="Submit your travel requirements to enquire about vehicle rates, availability, and rental terms with Vidhit Car Rental in Bowbazar, Kolkata."
        />

        {/* Quick direct inquiry banner */}
        <div className="mb-6 p-3.5 px-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">Need immediate help? Call our official Inquiry Number:</span>
          </div>
          <a
            href={BUSINESS_CONFIG.phoneHref}
            className="inline-flex items-center gap-1.5 font-extrabold text-brand-blue hover:text-brand-blue-hover transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-10">
          {successUrl && (
            <div className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-emerald-900">
                    Enquiry Formatted for WhatsApp
                  </h4>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    We have generated your custom booking enquiry and opened WhatsApp to connect with Vidhit Car Rental (+91 8582944726). Please send the message to confirm vehicle availability and rates.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={successUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#20BA5A] transition-colors"
                    >
                      <span>Open WhatsApp Again</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setSuccessUrl(null);
                        reset();
                        if (onVehicleReset) onVehicleReset();
                      }}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="full-fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="full-fullName"
                    type="text"
                    placeholder="Enter your full name"
                    {...register("fullName")}
                    className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                      errors.fullName ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-slate-50/40"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="full-phone"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="full-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                      errors.phone ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-slate-50/40"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email Address (optional) */}
              <div>
                <label
                  htmlFor="full-email"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="full-email"
                    type="email"
                    placeholder="name@example.com"
                    {...register("email")}
                    className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                      errors.email ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-slate-50/40"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Preferred Vehicle */}
              <div>
                <label
                  htmlFor="full-preferredVehicle"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Preferred Vehicle *
                </label>
                <div className="relative">
                  <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    id="full-preferredVehicle"
                    {...register("preferredVehicle")}
                    className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 bg-slate-50/40 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                  >
                    {VEHICLE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Pickup Location */}
              <div>
                <label
                  htmlFor="full-pickupLocation"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Pickup Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="full-pickupLocation"
                    type="text"
                    placeholder="e.g., Bowbazar, Kolkata"
                    {...register("pickupLocation")}
                    className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                      errors.pickupLocation ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-slate-50/40"
                    }`}
                  />
                </div>
                {errors.pickupLocation && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.pickupLocation.message}
                  </p>
                )}
              </div>

              {/* Destination (optional) */}
              <div>
                <label
                  htmlFor="full-destination"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Destination (Optional)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="full-destination"
                    type="text"
                    placeholder="e.g., Kolkata or nearby destination"
                    {...register("destination")}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/40 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Travel Date */}
              <div>
                <label
                  htmlFor="full-travelDate"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Travel Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    id="full-travelDate"
                    type="date"
                    {...register("travelDate")}
                    className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                      errors.travelDate ? "border-red-400 bg-red-50/20" : "border-slate-200 bg-slate-50/40"
                    }`}
                  />
                </div>
                {errors.travelDate && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.travelDate.message}
                  </p>
                )}
              </div>

              {/* Return Date (optional) */}
              <div>
                <label
                  htmlFor="full-returnDate"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Return Date (Optional)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    id="full-returnDate"
                    type="date"
                    {...register("returnDate")}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/40 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Additional Requirements (optional) */}
            <div>
              <label
                htmlFor="full-additionalRequirements"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Additional Requirements (Optional)
              </label>
              <div className="relative">
                <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <textarea
                  id="full-additionalRequirements"
                  rows={3}
                  placeholder="Specify any preferences or questions regarding vehicle rates and travel requirements..."
                  {...register("additionalRequirements")}
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/40 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none"
                />
              </div>
            </div>

            {/* Confirmation Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-navy-800">Booking Confirmation Notice:</span> Submitting this form prepares your details for WhatsApp enquiry. Rental rates, vehicle availability, and conditions are discussed and confirmed directly with Vidhit Car Rental.
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-4 px-8 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-cta hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                <span>SEND BOOKING ENQUIRY</span>
              </button>

              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="w-full sm:w-auto py-4 px-6 rounded-xl bg-navy-50 hover:bg-navy-100 text-navy-800 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors border border-slate-200 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-brand-blue" />
                <span>Call to Enquire</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
