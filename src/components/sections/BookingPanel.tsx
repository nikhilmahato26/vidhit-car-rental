import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { VEHICLE_OPTIONS } from "../../data/vehicles";
import { generateBookingWhatsAppUrl } from "../../utils/whatsapp";
import {
  Calendar,
  MapPin,
  Car,
  User,
  Phone,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const quickBookingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z
    .string()
    .min(10, "Valid 10-digit phone number is required")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  destination: z.string().optional(),
  preferredVehicle: z.string().min(1, "Please select a vehicle option"),
  travelDate: z.string().min(1, "Travel date is required"),
  returnDate: z.string().optional(),
  rentalRequirements: z.string().optional(),
});

type QuickBookingFormData = z.infer<typeof quickBookingSchema>;

export interface BookingPanelProps {
  selectedVehicle?: string;
}

export const BookingPanel: React.FC<BookingPanelProps> = ({
  selectedVehicle,
}) => {
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuickBookingFormData>({
    resolver: zodResolver(quickBookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      pickupLocation: "",
      destination: "",
      preferredVehicle: selectedVehicle || "Any Available Vehicle",
      travelDate: "",
      returnDate: "",
      rentalRequirements: "",
    },
  });

  // Sync selectedVehicle prop if it changes
  React.useEffect(() => {
    if (selectedVehicle) {
      setValue("preferredVehicle", selectedVehicle);
    }
  }, [selectedVehicle, setValue]);

  const onSubmit = (data: QuickBookingFormData) => {
    const whatsappUrl = generateBookingWhatsAppUrl({
      fullName: data.fullName,
      phone: data.phone,
      pickupLocation: data.pickupLocation,
      destination: data.destination,
      preferredVehicle: data.preferredVehicle,
      travelDate: data.travelDate,
      returnDate: data.returnDate,
      additionalRequirements: data.rentalRequirements,
    });

    setSubmittedWhatsAppUrl(whatsappUrl);
    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue mb-2">
              <Car className="w-3.5 h-3.5" />
              <span>Quick Booking Enquiry</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-navy-850 text-[#14263D] uppercase">
              Check Vehicle Rates & Booking Availability
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Fill in your trip details to generate an enquiry. Rates and vehicle availability are confirmed directly by Vidhit Car Rental.
          </p>
        </div>

        {submittedWhatsAppUrl && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="text-sm">
                <span className="font-bold">Enquiry Prepared!</span> Your formatted message has been opened in WhatsApp. Please send it to connect with Vidhit Car Rental for rate and booking confirmation.
              </div>
            </div>
            <a
              href={submittedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] text-white font-bold text-xs shrink-0 shadow-sm hover:bg-[#20BA5A] transition-colors"
            >
              <span>Re-open WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="quick-fullName"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="quick-fullName"
                  type="text"
                  placeholder="Your Name"
                  {...register("fullName")}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                    errors.fullName ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-slate-50/50"
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
                htmlFor="quick-phone"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="quick-phone"
                  type="tel"
                  placeholder="+91 8582944726"
                  {...register("phone")}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                    errors.phone ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-slate-50/50"
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

            {/* Preferred Vehicle */}
            <div>
              <label
                htmlFor="quick-preferredVehicle"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Preferred Vehicle *
              </label>
              <div className="relative">
                <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  id="quick-preferredVehicle"
                  {...register("preferredVehicle")}
                  className={`w-full pl-10 pr-8 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all appearance-none bg-no-repeat bg-right ${
                    errors.preferredVehicle ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-slate-50/50"
                  }`}
                >
                  {VEHICLE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              {errors.preferredVehicle && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.preferredVehicle.message}
                </p>
              )}
            </div>

            {/* Travel Date */}
            <div>
              <label
                htmlFor="quick-travelDate"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Travel Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  id="quick-travelDate"
                  type="date"
                  {...register("travelDate")}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                    errors.travelDate ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-slate-50/50"
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Pickup Location */}
            <div>
              <label
                htmlFor="quick-pickupLocation"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Pickup Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="quick-pickupLocation"
                  type="text"
                  placeholder="e.g., Bowbazar, Kolkata"
                  {...register("pickupLocation")}
                  className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                    errors.pickupLocation ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-slate-50/50"
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
                htmlFor="quick-destination"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Destination (Optional)
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="quick-destination"
                  type="text"
                  placeholder="e.g., Kolkata or nearby"
                  {...register("destination")}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                />
              </div>
            </div>

            {/* Return Date (optional) */}
            <div>
              <label
                htmlFor="quick-returnDate"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Return Date (Optional)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  id="quick-returnDate"
                  type="date"
                  {...register("returnDate")}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                />
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0"></span>
              <span>
                Note: Enquiries are directly confirmed by Vidhit Car Rental via WhatsApp / Phone.
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs uppercase tracking-wider shadow-cta hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>REQUEST A BOOKING</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
