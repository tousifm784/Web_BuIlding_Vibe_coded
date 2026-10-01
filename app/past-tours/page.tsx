import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "Past Umrah Groups & Journeys",
  description: "Learn about Al Faroque Tours and Travels' 19+ completed pilgrimage group journeys and ask our team about group support.",
};

const destinations = [
  { label: "Makkah · Masjid al-Haram", image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=85" },
  { label: "Madinah · Al-Masjid an-Nabawi", image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=85" },
  { label: "Makkah · A pilgrimage destination", image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1000&q=85" },
  { label: "Madinah · A pilgrimage destination", image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=85" },
];

export default function PastToursPage() {
  return (
    <>
      <PageIntro
        eyebrow="19+ GROUP JOURNEYS COMPLETED"
        title={<>Every group has<br /><em>a story to carry home.</em></>}
        description="Since 2021, Al Faroque Tours and Travels has guided more than 19 pilgrimage groups from central India and beyond."
      >
        <Link className="button button-primary" href="/packages/umrah">
          Explore upcoming journeys <ArrowRight size={17} />
        </Link>
      </PageIntro>
      <section className="section plain-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">PLACES ALONG THE JOURNEY</p>
              <h2>Shared steps.<br />Lasting meaning.</h2>
            </div>
            <p className="section-aside">Destination photography is illustrative. We share identifiable pilgrim photos and personal stories only with permission.</p>
          </div>
          <div className="memory-grid">
            {destinations.map((destination, index) => (
              <article className={`memory-card memory-card-${index + 1}`} key={destination.label}>
                <div className="memory-image" role="img" aria-label={destination.label} style={{ backgroundImage: `url("${destination.image}")` }} />
                <p>{destination.label}</p>
              </article>
            ))}
          </div>
          <div className="archive-note">
            <strong>19+ completed group journeys</strong>
            <p>Ask our team about departure planning, group arrangements and the support available for your journey.</p>
            <a className="text-link" href="tel:+919691017171">Ask about our groups <ArrowRight size={16} /></a>
          </div>
          <div className="media-placeholder">
            <p className="eyebrow">PLANNING WITH FAMILY?</p>
            <h3>Talk through the journey with our team</h3>
            <p>We can answer questions about group travel and help you decide what to ask before booking.</p>
          </div>
        </div>
      </section>
    </>
  );
}