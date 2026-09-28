import Link from "next/link";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import type { Package } from "@/types/package";
import { formatINR } from "@/lib/utils";

export function PackageCard({ item }: { item: Package }) {
  const makkah = item.hotels.find((hotel) => hotel.city === "Makkah");
  const madinah = item.hotels.find((hotel) => hotel.city === "Madinah");
  return (
    <article className="package-card">
      <Link href={`/packages/umrah/${item.slug}`} className="package-image" style={{ backgroundImage: `url("${item.image}")` }} aria-label={`View ${item.name}`}>
        <span className="package-category">{item.category}</span><span className="image-arrow"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="package-body">
        <div className="package-heading"><div><p className="eyebrow">{item.durationDays} days · Guided group</p><h3><Link href={`/packages/umrah/${item.slug}`}>{item.name}</Link></h3></div><strong className="package-price">{formatINR(item.priceFromINR)}<small>from / person</small></strong></div>
        <p className="package-summary">{item.summary}</p>
        <div className="distance-row"><span><MapPin size={14} /> Makkah <b>{makkah?.distanceToHaramMeters}m</b></span><span><MapPin size={14} /> Madinah <b>{madinah?.distanceToHaramMeters}m</b></span></div>
        <p className="distance-disclaimer">Sample distances only. Confirm hotel and walking route for your departure.</p>
        <div className="room-list">Room sharing <b>{item.roomSharing.join(" · ")}</b></div>
        <ul className="inclusion-list">{item.inclusions.map((inclusion) => <li key={inclusion}><Check size={14} />{inclusion}</li>)}</ul>
        <Link href={`/packages/umrah/${item.slug}`} className="package-link">Explore this journey <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}