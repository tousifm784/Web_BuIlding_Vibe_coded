import type { Metadata } from "next";
import { ArrowRight, BookOpen, Check, CircleHelp } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/page-parts";
import { JsonLd } from "@/components/json-ld";
import { faqPageSchema } from "@/lib/schema";
import type { FaqItem } from "@/types/package";

export const metadata: Metadata = { title: "Umrah Step by Step: A Pilgrim's Guide", description: "A clear overview of the main Umrah rites: Ihram, Tawaf, Sa'i and Halq or Taqsir. Confirm religious questions with a qualified scholar." };

const faqs: FaqItem[] = [
  { question: "What are the main steps of Umrah?", answer: "The main rites are entering Ihram with intention at the appropriate Miqat, performing Tawaf around the Ka'bah, performing Sa'i between Safa and Marwah, and completing Halq or Taqsir. Details and rulings can vary; seek guidance from a qualified scholar." },
  { question: "When should I enter Ihram?", answer: "Pilgrims enter Ihram before crossing the Miqat applicable to their route. The right point depends on your journey. Ask your tour leader and a qualified scholar before travel." },
  { question: "How many circuits are in Tawaf?", answer: "Tawaf consists of seven circuits around the Ka'bah. Follow official crowd guidance and ask a qualified guide about the details of your situation." },
  { question: "What is Sa'i?", answer: "Sa'i is walking between Safa and Marwah, completing seven lengths. Ask a qualified scholar or guide about the rulings and accommodations relevant to you." },
];

const steps = [
  { title: "Ihram & intention", subtitle: "Before crossing the Miqat", text: "Prepare for Ihram before reaching the Miqat for your route, make the intention for Umrah and follow the applicable Ihram rules. Your guide will confirm timing and practical arrangements before departure.", verse: "Route-specific · Ask your guide" },
  { title: "Tawaf", subtitle: "Seven circuits around the Ka'bah", text: "Begin Tawaf from the designated starting point and complete seven circuits, following crowd direction and local safety guidance. Stay with your group if that helps you feel settled.", verse: "7 circuits" },
  { title: "Sa'i", subtitle: "Between Safa and Marwah", text: "Complete seven lengths between Safa and Marwah. There are accessible routes and facilities; speak with your group leader about the options that work for your mobility.", verse: "7 lengths" },
  { title: "Halq or Taqsir", subtitle: "Completing Umrah", text: "Umrah is completed with shaving (Halq) or shortening (Taqsir) the hair, according to the guidance you follow. Ask a qualified scholar if you need a ruling for your own circumstances.", verse: "Ask a qualified scholar" },
];

export default function UmrahGuidePage() {
  return <><JsonLd data={faqPageSchema(faqs)} /><PageIntro eyebrow="A PILGRIM'S FIELD GUIDE" title={<>Umrah, step by<br /><em>step and with care.</em></>} description="A practical overview to help you prepare. It is not a religious ruling; confirm the details of your practice with a qualified scholar you trust."><span className="guide-meta"><BookOpen size={15} /> 4 steps · 6 minute read</span></PageIntro><section className="section guide-section"><div className="wrap guide-layout"><article className="guide-article"><div className="guide-callout"><CircleHelp size={19} /><p>Different schools and personal circumstances may affect the details. This guide is for orientation; your scholar and tour leader are the right people for personal guidance.</p></div>{steps.map((step, index) => <section className="guide-step" key={step.title}><div className="guide-step-number">0{index + 1}</div><div><p className="eyebrow">{step.subtitle}</p><h2>{step.title}</h2><p>{step.text}</p><span className="guide-detail"><Check size={14} />{step.verse}</span></div></section>)}<section className="guide-faq"><p className="eyebrow">COMMON QUESTIONS</p><h2>Before you go.</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</section></article><aside className="guide-aside"><p className="eyebrow">KEEP PREPARING</p><h3>Good preparation brings peace of mind.</h3><p>Learn what to pack, check your travel documents and speak with your group leader before departure.</p><Link className="text-link" href="/services/umrah-visa">Read about visa support <ArrowRight size={16} /></Link><hr /><p className="eyebrow">TRAVELLING SOON?</p><Link className="button button-primary" href="/packages/umrah">View Umrah journeys <ArrowRight size={16} /></Link></aside></div></section></>;
}