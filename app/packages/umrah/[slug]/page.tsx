import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, MapPin } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { Breadcrumbs } from "@/components/page-parts";
import { JsonLd } from "@/components/json-ld";
import { getPackageBySlug, packages } from "@/lib/data/packages";
import { touristTripSchema } from "@/lib/schema";
import { formatINR } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return packages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPackageBySlug(slug);
  if (!item) return { title: "Umrah package not found" };
  return { title: item.name, description: `${item.summary} Ask Al Faroque Tours and Travels about current dates, hotel options and departures from India.`, openGraph: { images: [item.image] } };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getPackageBySlug(slug);
  if (!item) notFound();
  return <><JsonLd data={touristTripSchema(item)} /><section className="detail-hero" style={{ backgroundImage: `url("${item.image}")` }}><div className="detail-hero-shade" /><div className="wrap detail-hero-content"><Breadcrumbs items={[{ label: "Umrah", href: "/packages/umrah" }, { label: item.name }]} /><span className="package-category">{item.category}</span><p className="eyebrow">A GROUP JOURNEY · {item.durationDays} DAYS</p><h1>{item.name}</h1><p>{item.summary}</p><a className="button button-light" href="#enquire">Ask about this departure <ArrowRight size={17} /></a></div></section><section className="section detail-section"><div className="wrap detail-layout"><div className="detail-main"><div className="detail-facts"><div><span className="fact-label"><Clock3 size={15} /> Duration</span><b>{item.durationDays} days</b></div><div><span className="fact-label"><MapPin size={15} /> Departure hubs</span><b>{item.departureCities.join(" · ")}</b></div><div><span className="fact-label">Indicative fare</span><b>{formatINR(item.priceFromINR)} <small>/ person</small></b></div></div><div className="detail-copy"><p className="eyebrow">THE JOURNEY</p><h2>A little more peace<br />of mind, at every step.</h2><p>{item.summary} Dates, flights, hotels and final pricing depend on the selected batch. Ask us for a written, current itinerary before you book.</p></div><div className="hotel-grid">{item.hotels.map((hotel) => <article className="hotel-panel" key={hotel.city}><div className="hotel-image" style={{ backgroundImage: `url("${hotel.image}")` }} /><div className="hotel-details"><span className="eyebrow">{hotel.city.toUpperCase()} STAY</span><h3>{hotel.name}</h3><p><MapPin size={15} /> {hotel.distanceToHaramMeters}m indicative distance to {hotel.city === "Makkah" ? "Haram" : "Al-Masjid an-Nabawi"}</p><small>{hotel.note}</small></div></article>)}</div><p className="data-disclaimer">Hotel names and distances above are examples, not a confirmed booking. Your exact hotel and route will be shared for the chosen departure.</p><div className="rooms-block"><p className="eyebrow">ROOM OPTIONS</p><h2>Choose how you share.</h2><div className="room-cards">{item.roomSharing.map((room) => <div key={room}><b>{room}</b><span>{room === "Quad" ? "4 per room" : room === "Triple" ? "3 per room" : "2 per room"}</span></div>)}</div></div><div className="inclusions-block"><p className="eyebrow">WHAT'S INCLUDED</p><h2>Care, in the details.</h2><ul className="detail-inclusions">{item.inclusions.map((inclusion) => <li key={inclusion}><Check size={17} />{inclusion}</li>)}</ul></div><div className="itinerary-block"><p className="eyebrow">DAY BY DAY</p><h2>A considered itinerary.</h2><ol className="timeline">{item.itinerary.map((day) => <li key={day.day}><span className="timeline-day">{String(day.day).padStart(2, "0")}</span><div><b>{day.title}</b><p>{day.description}</p></div>{day.location && <span className="timeline-location">{day.location}</span>}</li>)}</ol></div></div><aside className="booking-aside" id="enquire"><div className="booking-card"><span className="eyebrow">LET'S TALK DETAILS</span><h2>Ask us about<br />this journey.</h2><p>Share your number and our team will help you check dates, room options and current availability.</p><LeadForm /><p className="aside-phone">Prefer a call? <a href="tel:+919691017171">+91 96910 17171</a></p></div></aside></div></section><div className="wrap back-link-wrap"><Link className="text-link" href="/packages/umrah"><ArrowLeft size={17} /> Back to all Umrah packages</Link></div></>;
}