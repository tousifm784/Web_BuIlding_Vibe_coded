"use client";

import { BriefcaseBusiness, Check, Users } from "lucide-react";
import { travelCars, type TravelCar } from "@/lib/data/custom-travel";
import styles from "./custom-travel.module.css";

type Props = { selectedCarId: string; onSelect: (car: TravelCar) => void };

export function CarFleet({ selectedCarId, onSelect }: Props) {
  return (
    <section className={`${styles.section} ${styles.fleetSection}`} id="vehicles" aria-labelledby="fleet-title">
      <div className={styles.wrap}>
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>A SMALL, USEFUL FLEET</p><h2 id="fleet-title">Choose your <em>vehicle.</em></h2></div>
        </div>
        <div className={styles.fleetTrack} aria-label="Available private vehicles">
          {travelCars.map((car) => {
            const selected = selectedCarId === car.id;
            return <article className={`${styles.vehicleCard} ${selected ? styles.vehicleSelected : ""}`} key={car.id}>
              <div className={styles.vehicleImage} style={{ backgroundImage: `url("${car.image}")` }}>
                {selected && <span className={styles.selectedLabel}><Check size={13} /> Selected</span>}
                <span className={styles.vehicleKind}>{car.kind}</span>
              </div>
              <div className={styles.vehicleInfo}>
                <div className={styles.vehicleTitle}><div><h3>{car.name}</h3><p>{car.kind}</p></div></div>
                <div className={styles.vehicleCapacity}><span><Users size={15} /> Up to {car.seats} passengers</span><span><BriefcaseBusiness size={15} /> {car.bags} bags</span></div>
                <ul>{car.features.map((feature) => <li key={feature}><Check size={13} /> {feature}</li>)}</ul>
                <button type="button" className={styles.chooseVehicle} aria-pressed={selected} onClick={() => onSelect(car)}>{selected ? "Selected" : "Choose vehicle"}</button>
              </div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}