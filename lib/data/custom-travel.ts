export type TravelCity = {
  id: string;
  name: string;
  country: string;
  region: "India" | "International";
  airportName: string;
  airportCode: string;
  airportPlaceId: string;
  defaultStops: string[];
};

export type TravelPlace = {
  id: string;
  cityId: string;
  name: string;
  area: string;
  latitude: number;
  longitude: number;
  mapX: number;
  mapY: number;
};

export type TravelCar = {
  id: string;
  name: string;
  kind: string;
  seats: number;
  bags: number;
  image: string;
  features: string[];
};

export type CuratedTour = {
  id: string;
  cityId: string;
  title: string;
  duration: string;
  description: string;
  priceFrom: number;
  image: string;
  stops: string[];
};

export const travelCities: TravelCity[] = [
  { id: "mumbai", name: "Mumbai", country: "India", region: "India", airportName: "Chhatrapati Shivaji Maharaj International Airport", airportCode: "BOM", airportPlaceId: "bom-airport", defaultStops: ["gateway-india", "marine-drive"] },
  { id: "jaipur", name: "Jaipur", country: "India", region: "India", airportName: "Jaipur International Airport", airportCode: "JAI", airportPlaceId: "jai-airport", defaultStops: ["hawa-mahal", "amber-fort"] },
  { id: "goa", name: "Goa", country: "India", region: "India", airportName: "Manohar International Airport", airportCode: "GOX", airportPlaceId: "gox-airport", defaultStops: ["panaji", "candolim"] },
  { id: "dubai", name: "Dubai", country: "United Arab Emirates", region: "International", airportName: "Dubai International Airport", airportCode: "DXB", airportPlaceId: "dxb-airport", defaultStops: ["downtown-dubai", "dubai-marina"] },
  { id: "singapore", name: "Singapore", country: "Singapore", region: "International", airportName: "Changi Airport", airportCode: "SIN", airportPlaceId: "sin-airport", defaultStops: ["marina-bay", "gardens-by-bay"] },
  { id: "istanbul", name: "Istanbul", country: "Türkiye", region: "International", airportName: "Istanbul Airport", airportCode: "IST", airportPlaceId: "ist-airport", defaultStops: ["sultanahmet", "galata-tower"] },
];

export const travelPlaces: TravelPlace[] = [
  { id: "bom-airport", cityId: "mumbai", name: "Mumbai Airport", area: "Pickup", latitude: 19.0896, longitude: 72.8656, mapX: 17, mapY: 57 },
  { id: "gateway-india", cityId: "mumbai", name: "Gateway of India", area: "Colaba", latitude: 18.922, longitude: 72.8347, mapX: 78, mapY: 67 },
  { id: "marine-drive", cityId: "mumbai", name: "Marine Drive", area: "Churchgate", latitude: 18.9432, longitude: 72.8236, mapX: 70, mapY: 43 },
  { id: "bandra-fort", cityId: "mumbai", name: "Bandra Fort", area: "Bandra West", latitude: 19.0437, longitude: 72.8198, mapX: 48, mapY: 26 },
  { id: "jai-airport", cityId: "jaipur", name: "Jaipur Airport", area: "Pickup", latitude: 26.8242, longitude: 75.8122, mapX: 15, mapY: 73 },
  { id: "hawa-mahal", cityId: "jaipur", name: "Hawa Mahal", area: "Pink City", latitude: 26.9239, longitude: 75.8267, mapX: 52, mapY: 48 },
  { id: "amber-fort", cityId: "jaipur", name: "Amber Fort", area: "Amer", latitude: 26.9855, longitude: 75.8513, mapX: 82, mapY: 23 },
  { id: "jal-mahal", cityId: "jaipur", name: "Jal Mahal", area: "Amer Road", latitude: 26.9535, longitude: 75.8467, mapX: 71, mapY: 35 },
  { id: "gox-airport", cityId: "goa", name: "Manohar Airport", area: "Pickup", latitude: 15.3808, longitude: 73.8314, mapX: 78, mapY: 20 },
  { id: "panaji", cityId: "goa", name: "Fontainhas", area: "Panaji", latitude: 15.4909, longitude: 73.8278, mapX: 47, mapY: 43 },
  { id: "candolim", cityId: "goa", name: "Candolim Beach", area: "North Goa", latitude: 15.5181, longitude: 73.7626, mapX: 27, mapY: 29 },
  { id: "old-goa", cityId: "goa", name: "Old Goa", area: "North Goa", latitude: 15.5009, longitude: 73.9112, mapX: 64, mapY: 60 },
  { id: "dxb-airport", cityId: "dubai", name: "Dubai Airport", area: "Pickup", latitude: 25.2532, longitude: 55.3657, mapX: 18, mapY: 21 },
  { id: "downtown-dubai", cityId: "dubai", name: "Downtown Dubai", area: "Downtown", latitude: 25.1972, longitude: 55.2744, mapX: 48, mapY: 45 },
  { id: "dubai-marina", cityId: "dubai", name: "Dubai Marina", area: "Dubai Marina", latitude: 25.0805, longitude: 55.1403, mapX: 79, mapY: 77 },
  { id: "palm-jumeirah", cityId: "dubai", name: "Palm Jumeirah", area: "Palm Jumeirah", latitude: 25.1124, longitude: 55.139, mapX: 67, mapY: 64 },
  { id: "sin-airport", cityId: "singapore", name: "Changi Airport", area: "Pickup", latitude: 1.3644, longitude: 103.9915, mapX: 84, mapY: 23 },
  { id: "marina-bay", cityId: "singapore", name: "Marina Bay", area: "Downtown Core", latitude: 1.2834, longitude: 103.8607, mapX: 48, mapY: 53 },
  { id: "gardens-by-bay", cityId: "singapore", name: "Gardens by the Bay", area: "Marina South", latitude: 1.2816, longitude: 103.8636, mapX: 58, mapY: 63 },
  { id: "sentosa", cityId: "singapore", name: "Sentosa", area: "Southern Islands", latitude: 1.2494, longitude: 103.8303, mapX: 25, mapY: 80 },
  { id: "ist-airport", cityId: "istanbul", name: "Istanbul Airport", area: "Pickup", latitude: 41.2753, longitude: 28.7519, mapX: 14, mapY: 20 },
  { id: "sultanahmet", cityId: "istanbul", name: "Sultanahmet Square", area: "Fatih", latitude: 41.0054, longitude: 28.9768, mapX: 67, mapY: 57 },
  { id: "galata-tower", cityId: "istanbul", name: "Galata Tower", area: "Beyoğlu", latitude: 41.0256, longitude: 28.9741, mapX: 51, mapY: 42 },
  { id: "ortakoy", cityId: "istanbul", name: "Ortaköy waterfront", area: "Beşiktaş", latitude: 41.047, longitude: 29.027, mapX: 81, mapY: 25 },
];

export const travelCars: TravelCar[] = [
  {
    id: "dzire",
    name: "Maruti Suzuki Dzire",
    kind: "Compact sedan",
    seats: 4,
    bags: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_3ngodXU_xApu5gKz9t_3ZKwb99jjMWdcCjU4OmKuA&s=10",
    features: ["Comfortable city rides", "Air conditioning", "Best for small groups"],
  },
  {
    id: "ciaz",
    name: "Maruti Suzuki Ciaz",
    kind: "Premium sedan",
    seats: 4,
    bags: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0OSCL5iX7L237byOypVypBd_yJaQhnzQLFRWGaOHCg&s=10",
    features: ["Extra cabin comfort", "Air conditioning", "Ideal for business travel"],
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    kind: "6-seater MPV",
    seats: 6,
    bags: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA3Y5sNyr2WriTvEhAnjdIFZnwv8qU2rs-L_MZ6NrQ5KLyIsyslr5Wl_w3eNU3u8ptqwps64lLR8RPzUZzVkoMrqOkvACo6lh597jure3nw&s=10",
    features: ["Flexible family seating", "Room for luggage", "Good for day trips"],
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    kind: "Premium MPV",
    seats: 6,
    bags: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgQIOXZ82KfrciBB17Oi4_zM4WGMADCxtP4b_8rKA1eglBPg5hx-riNYO6SCKh0djTUwFHkuCud4N8oIlisYUvxSxsFsJwwcq9iRLyW9sGQ&s=10",
    features: ["Spacious long-distance travel", "Comfortable cabin", "Ideal for families and groups"],
  },
];

export const curatedTours: CuratedTour[] = [
  {
    id: "mumbai-highlights",
    cityId: "mumbai",
    title: "Mumbai, from the sea",
    duration: "Full day · Mumbai",
    description: "Trace the waterfront from the Gateway of India to Marine Drive, with time for a long lunch along the way.",
    priceFrom: 3400,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1100&q=85",
    stops: ["gateway-india", "marine-drive", "bandra-fort"],
  },
  {
    id: "jaipur-stories",
    cityId: "jaipur",
    title: "Jaipur’s old and new",
    duration: "Full day · Jaipur",
    description: "Pair the Pink City’s landmarks with the hilltop views and quieter corners that make the day yours.",
    priceFrom: 3900,
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1100&q=85",
    stops: ["hawa-mahal", "amber-fort", "jal-mahal"],
  },
  {
    id: "goa-coast",
    cityId: "goa",
    title: "A slower day in Goa",
    duration: "Full day · Goa",
    description: "Mix a heritage quarter with a North Goa beach stop, with a private car between each place.",
    priceFrom: 3600,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1100&q=85",
    stops: ["panaji", "candolim", "old-goa"],
  },
  {
    id: "dubai-city",
    cityId: "dubai",
    title: "Dubai, by your design",
    duration: "Full day · Dubai",
    description: "Join the landmarks you want to see, from Downtown to the Marina, without a fixed group schedule.",
    priceFrom: 7800,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1100&q=85",
    stops: ["downtown-dubai", "dubai-marina", "palm-jumeirah"],
  },
  {
    id: "singapore-family",
    cityId: "singapore",
    title: "Singapore, together",
    duration: "Full day · Singapore",
    description: "Make room for gardens, skyline views and a stop on Sentosa, paced for your family or group.",
    priceFrom: 8200,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1100&q=85",
    stops: ["marina-bay", "gardens-by-bay", "sentosa"],
  },
  {
    id: "istanbul-heritage",
    cityId: "istanbul",
    title: "Istanbul across the ages",
    duration: "Full day · Istanbul",
    description: "Connect the old city, Galata and the waterfront in a day shaped around your interests.",
    priceFrom: 7600,
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1100&q=85",
    stops: ["sultanahmet", "galata-tower", "ortakoy"],
  },
];

export function findTravelPlace(id: string) {
  return travelPlaces.find((place) => place.id === id);
}

export function findTravelCity(id: string) {
  return travelCities.find((city) => city.id === id);
}

function distanceBetween(first: TravelPlace, second: TravelPlace) {
  const radians = Math.PI / 180;
  const latitudeDelta = (second.latitude - first.latitude) * radians;
  const longitudeDelta = (second.longitude - first.longitude) * radians;
  const haversine = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(first.latitude * radians) * Math.cos(second.latitude * radians) * Math.sin(longitudeDelta / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine)) * 1.28;
}

export function estimateRoute(cityId: string, stopIds: string[]) {
  const city = findTravelCity(cityId) ?? travelCities[0];
  const route = [findTravelPlace(city.airportPlaceId), ...stopIds.map(findTravelPlace)]
    .filter((place): place is TravelPlace => place !== undefined && place.cityId === city.id);
  let distanceKm = 0;
  for (let index = 1; index < route.length; index += 1) {
    distanceKm += distanceBetween(route[index - 1], route[index]);
  }
  const hours = distanceKm / 32 + Math.max(0, route.length - 1) * 0.18;
  return { distanceKm: Math.round(distanceKm), driveHours: Math.floor(hours), driveMinutes: Math.round((hours % 1) * 60), route };
}