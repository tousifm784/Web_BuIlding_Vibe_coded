"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/packages/umrah", label: "Umrah" },
  { href: "/packages/hajj", label: "Hajj" },
  { href: "/packages/ziyarat-tours", label: "Ziyarat" },
  { href: "/past-tours", label: "Our journeys" },
  { href: "/guides/umrah-step-by-step", label: "Umrah guide" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link className="brand" href="/" aria-label="Al Farooque Travels home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">AF</span>
          <span className="brand-name">Al Farooque <small>TRAVELS</small></span>
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link className="nav-contact" href="/contact" onClick={() => setOpen(false)}>Talk to an adviser <span aria-hidden="true">↗</span></Link>
        </nav>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}