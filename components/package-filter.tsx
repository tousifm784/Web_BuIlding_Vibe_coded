"use client";

import { useState } from "react";
import { PackageCard } from "@/components/package-card";
import type { Package } from "@/types/package";

const filters = ["All", "Economy", "Deluxe", "Executive", "Ramadan Special"] as const;

export function PackageFilter({ items }: { items: Package[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visibleItems = active === "All" ? items : items.filter((item) => item.category === active);

  return <>
    <div className="category-pills" role="group" aria-label="Filter Umrah packages">
      {filters.map((filter) => <button key={filter} type="button" aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
    </div>
    {visibleItems.length ? <div className="package-grid">{visibleItems.map((item) => <PackageCard key={item.slug} item={item} />)}</div> : <p className="empty-filter">No {active.toLowerCase()} departure is listed right now. Contact our team about upcoming groups.</p>}
  </>;
}