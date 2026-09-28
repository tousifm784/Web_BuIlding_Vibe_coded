import type { FaqItem, Package } from "@/types/package";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfarooquetravels.com";

export function travelAgencySchema() {
  const latitude = Number(process.env.BUSINESS_LATITUDE);
  const longitude = Number(process.env.BUSINESS_LONGITUDE);
  const hasCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude);

  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: "Al Farooque Travels",
    url: siteUrl,
    telephone: "+91-969-101-7171",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nizamuddin Gate, Azad Nagar",
      addressLocality: "Burhanpur",
      addressRegion: "Madhya Pradesh",
      postalCode: "450331",
      addressCountry: "IN",
    },
    ...(hasCoordinates ? { geo: { "@type": "GeoCoordinates", latitude, longitude } } : {}),
    areaServed: ["Mumbai", "Indore", "Bhopal", "Delhi", "Burhanpur"],
    sameAs: ["https://wa.me/919691017171"],
    description: "Guided Umrah, Hajj inquiry and Ziyarat travel support from Burhanpur, India.",
  };
}

export function touristTripSchema(trip: Package) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.name,
    description: trip.summary,
    touristType: "Pilgrims",
    itinerary: {
      "@type": "ItemList",
      itemListElement: trip.itinerary.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Day ${day.day}: ${day.title}`,
        description: day.description,
      })),
    },
    departurePoint: trip.departureCities.map((city) => ({ "@type": "Place", name: city })),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: trip.priceFromINR,
      availability: "https://schema.org/LimitedAvailability",
      url: `${siteUrl}/packages/umrah/${trip.slug}`,
      description: "Indicative per-person fare; confirm current dates, room sharing and availability.",
    },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}