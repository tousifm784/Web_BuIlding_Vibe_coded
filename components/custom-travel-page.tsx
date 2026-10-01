"use client";

import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, BadgeCheck, BriefcaseBusiness, Clock3, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { travelCars } from "@/lib/data/custom-travel";
import { CarFleet } from "@/components/car-fleet";
import styles from "./custom-travel.module.css";

export function CustomTravelPage() {
  const [selectedCarId, setSelectedCarId] = useState("dzire");
  const [city, setCity] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [duration, setDuration] = useState("8 hours");
  const [passengers, setPassengers] = useState(2);
  const [customUse, setCustomUse] = useState("");
  const selectedCar = travelCars.find((car) => car.id === selectedCarId) ?? travelCars[0];
  function sendBookingRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello, I would like to enquire about a car booking.",
      `Vehicle: ${selectedCar.name}`,
      `City / area: ${city}`,
      `Pickup: ${pickup}`,
      `Drop / destination: ${drop || "Please advise"}`,
      `Date: ${travelDate}`,
      `Pickup time: ${pickupTime || "To be discussed"}`,
      `Duration: ${duration}`,
      `Passengers: ${passengers}`,
      customUse ? `Additional details: ${customUse}` : "",
    ].join("\n");
    window.location.assign(`https://wa.me/919691017171?text=${encodeURIComponent(message)}`);
  }

  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroShade} />
      <div className={`${styles.wrap} ${styles.heroContent}`}>
        <p className={styles.heroKicker}><span /> PRIVATE CAR HIRE, MADE SIMPLE</p>
        <h1>A car for your plans.<br /><em>Nothing extra.</em></h1>
        <p className={styles.heroDescription}>Choose a familiar vehicle, share where and when you need it, then contact our team to confirm availability and pricing.</p>
        <div className={styles.heroActions}>
          <a className={styles.primaryAction} href="#vehicles">Choose a vehicle <ArrowDown size={16} /></a>
          <a className={styles.textAction} href="https://wa.me/919691017171" target="_blank" rel="noreferrer">Ask us first <ArrowRight size={16} /></a>
        </div>
      </div>
      <div className={styles.heroCaption}><span>LOCAL RIDES · AIRPORT TRANSFERS</span><span>OUTSTATION · CUSTOM USE</span></div>
    </section>

    <div className={styles.promiseBand}>
      <div className={styles.wrap}>
        <span><ShieldCheck size={17} /> Private driver, door to door</span>
        <span><Clock3 size={17} /> Choose your booking duration</span>
        <span><BadgeCheck size={17} /> Price confirmed before booking</span>
      </div>
    </div>

    <CarFleet selectedCarId={selectedCar.id} onSelect={(car) => { setSelectedCarId(car.id); setPassengers((count) => Math.min(count, car.seats)); }} />

    <section className={`${styles.section} ${styles.bookingSection}`} aria-labelledby="booking-title">
      <div className={styles.wrap}>
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>TELL US WHAT YOU NEED</p><h2 id="booking-title">Request your <em>car booking.</em></h2></div>
          <p>No online payment or fixed fare. Send the details and our team will contact you to confirm the vehicle, availability and price.</p>
        </div>
        <div className={styles.bookingLayout}>
          <form className={styles.bookingForm} onSubmit={sendBookingRequest}>
            <div className={styles.bookingSelected}><BriefcaseBusiness size={18} /><span>Selected vehicle<strong>{selectedCar.name} · up to {selectedCar.seats} passengers</strong></span></div>
            <div className={styles.bookingFields}>
              <label className={styles.bookingControl}><span>City or area</span><input required value={city} onChange={(event) => setCity(event.target.value)} placeholder="e.g. Indore" autoComplete="address-level2" /></label>
              <label className={styles.bookingControl}><span>Pickup location</span><input required value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Hotel, airport or address" autoComplete="street-address" /></label>
              <label className={styles.bookingControl}><span>Drop-off or destination</span><input value={drop} onChange={(event) => setDrop(event.target.value)} placeholder="Add a destination if known" /></label>
              <label className={styles.bookingControl}><span>Travel date</span><input required type="date" value={travelDate} onChange={(event) => setTravelDate(event.target.value)} /></label>
              <label className={styles.bookingControl}><span>Pickup time</span><input type="time" value={pickupTime} onChange={(event) => setPickupTime(event.target.value)} /></label>
              <label className={styles.bookingControl}><span>How long do you need the car?</span><select value={duration} onChange={(event) => setDuration(event.target.value)}><option>One-way transfer</option><option>4 hours</option><option>8 hours</option><option>Full day</option><option>Multiple days</option></select></label>
              <label className={styles.bookingControl}><span>Passengers</span><select value={passengers} onChange={(event) => setPassengers(Number(event.target.value))}>{Array.from({ length: selectedCar.seats }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? "passenger" : "passengers"}</option>)}</select></label>
              <label className={`${styles.bookingControl} ${styles.bookingNotes}`}><span>Custom use or extra details</span><textarea value={customUse} onChange={(event) => setCustomUse(event.target.value)} placeholder="For example: family outing, shopping, or a multi-stop day" rows={3} /></label>
            </div>
            <button className={styles.requestButton} type="submit"><MessageCircle size={17} /> Contact us on WhatsApp <ArrowRight size={17} /></button>
            <p className={styles.bookingNote}>Your request opens WhatsApp with these details filled in. We’ll confirm everything with you before booking.</p>
          </form>
          <aside className={styles.bookingContact}>
            <p className={styles.eyebrow}>WANT TO CHECK SOMETHING FIRST?</p>
            <h3>Talk to our team.</h3>
            <p>Ask about vehicle availability, luggage space, child seats, outstation trips or a custom schedule.</p>
            <a href="tel:+919691017171"><Phone size={16} /> +91 96910 17171</a>
            <a href="https://wa.me/919691017171" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a>
          </aside>
        </div>
      </div>
    </section>
  </div>;
}