"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { inquirySchema } from "@/lib/inquiry";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";

const formSchema = inquirySchema.extend({
  departureCity: z.string().min(1, "Choose a departure city."),
  travelMonth: z.string().min(1, "Choose a travel month."),
  groupSize: z.coerce.number().int().min(1).max(50),
});
type FormInput = z.input<typeof formSchema>;
type FormValues = z.output<typeof formSchema>;

type LeadFormProps = { inquiryType?: "umrah" | "hajj" | "ziyarat" | "visa" | "general"; compact?: boolean };

export function LeadForm({ inquiryType = "umrah", compact = false }: LeadFormProps) {
  const [success, setSuccess] = useState<{ whatsappUrl: string; emailSent: boolean } | null>(null);
  const [formError, setFormError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInput, unknown, FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { inquiryType, groupSize: 2 },
  });

  async function onSubmit(values: FormValues) {
    setFormError("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "We could not send your request. Please call us.");
      setSuccess({ whatsappUrl: result.whatsappUrl, emailSent: result.emailSent });
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Please try again or call us directly.");
    }
  }

  if (success) {
    return <div className="form-success" role="status"><CheckCircle2 size={24} /><div><span>{success.emailSent ? "Your inquiry has reached our team." : "Your inquiry is ready to send."} Continue on WhatsApp so we can reply directly.</span><a href={success.whatsappUrl} target="_blank" rel="noreferrer">Continue to WhatsApp <ArrowRight size={14} /></a></div></div>;
  }

  return (
    <form className={`lead-form ${compact ? "lead-form-compact" : ""}`} onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("inquiryType")} />
      {!compact && <label className="field"><span>Your name</span><input placeholder="Name" autoComplete="name" {...register("name")} /></label>}
      <label className="field"><span>Departure city</span><select {...register("departureCity")} defaultValue=""><option value="" disabled>Select city</option>{["Indore", "Mumbai", "Bhopal", "Delhi", "Burhanpur", "Other"].map((city) => <option key={city}>{city}</option>)}</select>{errors.departureCity && <small className="field-error">{errors.departureCity.message}</small>}</label>
      <div className="field-row">
        <label className="field"><span>Travel month</span><select {...register("travelMonth")} defaultValue=""><option value="" disabled>Select month</option>{["October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September"].map((month) => <option key={month}>{month}</option>)}</select>{errors.travelMonth && <small className="field-error">{errors.travelMonth.message}</small>}</label>
        <label className="field"><span>Travellers</span><select {...register("groupSize")} defaultValue={2}>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => <option key={count} value={count}>{count}{count === 10 ? "+" : ""}</option>)}</select></label>
      </div>
      <label className="field"><span>WhatsApp number</span><input type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" {...register("phone")} />{errors.phone && <small className="field-error">{errors.phone.message}</small>}</label>
      {formError && <p className="form-error" role="alert">{formError}</p>}
      <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? <LoaderCircle size={17} className="spin" /> : null}{isSubmitting ? "Sending..." : "Get my custom quote"}<ArrowRight size={17} /></button>
      <p className="form-note">No obligation. A real person from our team will reply.</p>
    </form>
  );
}