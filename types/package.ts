export type RoomSharing = "Quad" | "Triple" | "Double";

export interface Hotel {
  name: string;
  city: "Makkah" | "Madinah";
  distanceToHaramMeters: number;
  image: string;
  note?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  location?: string;
}

export interface Package {
  slug: string;
  name: string;
  category: "Economy" | "Deluxe" | "Executive" | "Ramadan Special";
  durationDays: number;
  priceFromINR: number;
  summary: string;
  departureCities: string[];
  roomSharing: RoomSharing[];
  inclusions: string[];
  hotels: Hotel[];
  itinerary: ItineraryDay[];
  image: string;
  availableMonths: string[];
  isIndicative: boolean;
}

export interface Inquiry {
  name?: string;
  phone: string;
  departureCity?: string;
  travelMonth?: string;
  groupSize?: number;
  packageSlug?: string;
  message?: string;
  inquiryType: "umrah" | "hajj" | "ziyarat" | "visa" | "general";
}

export interface FaqItem {
  question: string;
  answer: string;
}