import type { Metadata } from "next";
import { PackageFilter } from "@/components/package-filter";
import { packages } from "@/lib/data/packages";
import { Breadcrumbs } from "@/components/page-parts";

export const metadata: Metadata = { title: "Umrah Packages from India", description: "Compare guided Umrah departures from Mumbai, Indore, Bhopal and Delhi. Ask our team about dates, hotel options and inclusions." };

export default function UmrahPackagesPage() {
  return <><section className="page-hero page-hero-image umrah-page-hero"><div className="wrap page-hero-content"><Breadcrumbs items={[{ label: "Umrah packages" }]} /><p className="eyebrow">PILGRIMAGE, PERSONALLY PLANNED</p><h1>Find your way<br /><em>to Umrah.</em></h1><p>Compare the shape of each journey, then talk to our team about dates, availability and what matters most to you.</p></div></section><section className="section page-list-section"><div className="wrap"><div className="filter-intro"><div><p className="eyebrow">OUR DEPARTURES</p><h2>Choose the pace<br />that feels right.</h2></div><p>Every departure includes group guidance. Fares and hotel details are indicative until confirmed with your travel dates.</p></div><PackageFilter items={packages} /><p className="data-disclaimer">Sample packages shown to help you compare. Current fares, hotel names, distances, flight schedules and availability are confirmed in writing for each batch.</p></div></section></>;
}