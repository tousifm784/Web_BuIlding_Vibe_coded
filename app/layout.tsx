import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { MobileCta } from "@/components/mobile-cta";
import { JsonLd } from "@/components/json-ld";
import { travelAgencySchema } from "@/lib/schema";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfarooquetravels.com"),
  title: { default: "Al Farooque Travels | Guided Umrah from India", template: "%s | Al Farooque Travels" },
  description: "Plan your Umrah with a trusted Indian pilgrimage tour operator. Guided group departures from Indore, Mumbai, Bhopal and Delhi.",
  openGraph: { type: "website", locale: "en_IN", siteName: "Al Farooque Travels", title: "Al Farooque Travels | Guided Umrah from India", description: "Thoughtful, end-to-end pilgrimage travel support from Burhanpur, India." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${serif.variable}`}>
      <body><JsonLd data={travelAgencySchema()} /><SiteHeader /><main>{children}</main><footer className="site-footer"><div className="wrap footer-inner"><Link className="brand footer-brand" href="/" aria-label="Al Farooque Travels home"><span className="brand-mark" aria-hidden="true">AF</span><span className="brand-name">Al Farooque <small>TRAVELS</small></span></Link><p>Guiding your journey, with care.</p><div className="footer-links"><Link href="/services/umrah-visa">Visa assistance</Link><Link href="/contact">Contact</Link><a href="tel:+919691017171">+91 96910 17171</a></div><small>© {new Date().getFullYear()} Al Farooque Travels · Burhanpur, Madhya Pradesh</small></div></footer><MobileCta /></body>
    </html>
  );
}