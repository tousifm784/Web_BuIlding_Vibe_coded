import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Compass, HeartHandshake, ShieldCheck, Star } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { PackageCard } from "@/components/package-card";
import { packages } from "@/lib/data/packages";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="wrap hero-grid">
          <div className="hero-copy reveal-up">
            <p className="hero-kicker"><span /> A journey of faith, held with care</p>
            <h1>Make your<br /><em>Umrah</em> meaningful.</h1>
            <p className="hero-description">From your first question to your journey home, travel with a team that understands what this means to you.</p>
            <div className="hero-trust"><span className="trust-stars"><Star /><Star /><Star /><Star /><Star /></span><span>19+ completed group journeys</span><span className="trust-divider" /> <span>Guiding pilgrims since 2021</span></div>
            <a className="hero-scroll" href="#journeys"><ArrowDown size={16} /> Discover your journey</a>
          </div>
          <div className="hero-form-wrap reveal-up" style={{ animationDelay: "120ms" }}>
            <div className="form-heading"><span className="form-icon"><Compass size={19} /></span><div><span className="eyebrow">YOUR NEXT STEP</span><h2>Let's plan your journey</h2></div></div>
            <p className="form-intro">Tell us a little about the trip you have in mind. We’ll help you find the right group.</p>
            <LeadForm compact />
          </div>
        </div>
        <div className="hero-bottom"><span>BURHANPUR · INDIA</span><span>MECCA · MADINAH</span></div>
      </section>

      <section className="trust-band"><div className="wrap trust-band-inner"><span><strong>4+</strong> years of dedicated service</span><span><strong>19+</strong> groups guided</span><span><strong>4</strong> convenient departure hubs</span><span><strong>One team</strong> beside you throughout</span></div></section>

      <section className="section journeys-section" id="journeys"><div className="wrap"><div className="section-head"><div><p className="eyebrow">FIND YOUR WAY</p><h2>Journeys made<br /><em>with intention.</em></h2></div><p className="section-aside">Every detail is handled with care, so you can be present for the moments that matter.</p></div><div className="package-grid">{packages.slice(0, 3).map((item) => <PackageCard key={item.slug} item={item} />)}</div><div className="center-cta"><Link className="text-link" href="/packages/umrah">Explore all Umrah departures <ArrowRight size={17} /></Link></div></div></section>

      <section className="section support-section"><div className="wrap support-layout"><div className="support-image" role="img" aria-label="The courtyard of Al-Masjid an-Nabawi in Madinah" /><div className="support-content"><p className="eyebrow">MORE THAN A BOOKING</p><h2>Good guidance<br />makes room for <em>presence.</em></h2><p>We look after the practical pieces of your pilgrimage, and stay close when you need a reassuring answer. Especially for families and first-time travellers.</p><div className="support-points"><div><span><ShieldCheck /></span><div><b>Clear, honest planning</b><small>Know what’s included, what it costs and what comes next.</small></div></div><div><span><HeartHandshake /></span><div><b>People with you throughout</b><small>Real guidance before departure and while you’re away.</small></div></div><div><span><Check /></span><div><b>Thoughtful group care</b><small>Practical support for elders, families and first-time pilgrims.</small></div></div></div><Link className="text-link" href="/contact">Speak with our team <ArrowRight size={17} /></Link></div></div></section>

      <section className="review-section"><div className="wrap review-inner"><div className="review-mark" aria-hidden="true">19+</div><div><p className="eyebrow">A RECORD OF CARE</p><blockquote>More than 19 completed pilgrimage group journeys, guided with care since 2021.</blockquote><div className="review-attribution"><span>Al Faroque Tours and Travels</span><span>Burhanpur, Madhya Pradesh</span></div></div><Link className="review-link" href="/past-tours" aria-label="Learn about our completed group journeys"><ArrowUpRight size={23} /></Link></div></section>

      <section className="closing-cta"><div className="wrap closing-inner"><div><p className="eyebrow">YOUR JOURNEY STARTS WITH A CONVERSATION</p><h2>Here when you're<br /><em>ready to begin.</em></h2></div><Link className="button button-light" href="/contact">Talk to an adviser <ArrowRight size={17} /></Link></div></section>
    </>
  );
}