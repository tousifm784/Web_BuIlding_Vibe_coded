import type { Metadata } from "next";
import { CustomTravelPage } from "@/components/custom-travel-page";

export const metadata: Metadata = {
  title: "Private Car Booking",
  description: "Choose a Dzire, Ciaz, Ertiga or Innova Crysta for city rides, airport transfers or outstation travel. Contact our team to confirm availability and fares.",
};

export default function CustomTravelRoute() {
  return <CustomTravelPage />;
}