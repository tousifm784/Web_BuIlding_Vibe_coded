import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().max(100).optional(),
  phone: z.string().trim().regex(/^(?:\+?91[\s-]?)?[6-9]\d{9}$/, "Enter a valid Indian mobile number."),
  departureCity: z.string().trim().max(80).optional(),
  travelMonth: z.string().trim().max(40).optional(),
  groupSize: z.coerce.number().int().min(1).max(50).optional(),
  packageSlug: z.string().trim().max(100).optional(),
  message: z.string().trim().max(1000).optional(),
  inquiryType: z.enum(["umrah", "hajj", "ziyarat", "visa", "general"]),
});

export type InquiryInput = z.infer<typeof inquirySchema>;