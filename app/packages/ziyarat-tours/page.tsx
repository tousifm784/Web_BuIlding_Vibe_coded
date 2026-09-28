import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageIntro } from "@/components/page-parts";

export const metadata: Metadata = { title: "Makkah & Madinah Ziyarat Tours", description: "Explore guided historical ziyarat visits in Makkah and Madinah with Al Farooque Travels." };

const sites = [
  { name: "Makkah · Jabal al-Nour", note: "A visit to the area of the Cave of Hira. The climb is strenuous and is not suitable for everyone; joining is optional.", image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=85" },
  { name: "Makkah · Mina & Arafat", note: "A guided overview of key Hajj sites, with historical context and time for questions.", image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=900&q=85" },
  { name: "Madinah · Quba Mosque", note: "Visit one of Islam’s earliest mosques with group guidance and local etiquette notes.", image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85" },
  { name: "Madinah · Uhud", note: "Learn about the events of Uhud and the significance of the surrounding area.", image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=85" },
];

export default function ZiyaratPage() {
  return <><PageIntro eyebrow="MAKKAH & MADINAH" title={<>History, remembered<br /><em>with reverence.</em></>} description="A thoughtful guided visit can add context to the places around you. Ziyarat stops depend on local access, group needs and the day’s conditions."><Link className="button button-primary" href="/contact">Ask about guided visits <ArrowRight size={17} /></Link></PageIntro><section className="section plain-section"><div className="wrap"><div className="section-head"><div><p className="eyebrow">PLACES & STORIES</p><h2>See more than<br />the view.</h2></div><p className="section-aside">Small groups, clear context and consideration for those who prefer a gentler pace.</p></div><div className="ziyara-grid">{sites.map((site) => <article className="ziyara-card" key={site.name}><div className="ziyara-image" style={{ backgroundImage: `url("${site.image}")` }} /><div className="ziyara-content"><p className="eyebrow"><MapPin size={13} /> GUIDED STOP</p><h3>{site.name}</h3><p>{site.note}</p></div></article>)}</div><p className="data-disclaimer">Visits are subject to local access, opening arrangements, weather and group suitability. No site visit or entry is guaranteed.</p></div></section><section className="closing-cta"><div className="wrap closing-inner"><div><p className="eyebrow">TRAVEL AT YOUR OWN PACE</p><h2>Let’s plan visits<br /><em>that suit your group.</em></h2></div><Link className="button button-light" href="/contact">Talk to our team <ArrowRight size={17} /></Link></div></section></>;
}