import { MessageCircle, Phone } from "lucide-react";

const message = encodeURIComponent("Assalamu Alaikum, I would like to inquire about upcoming Umrah packages.");

export function MobileCta() {
  return (
    <div className="mobile-cta" aria-label="Contact Al Farooque Travels">
      <a className="mobile-whatsapp" href={`https://wa.me/919691017171?text=${message}`} target="_blank" rel="noreferrer">
        <MessageCircle size={18} /> Chat on WhatsApp
      </a>
      <a className="mobile-call" href="tel:+919691017171"><Phone size={17} /> Call Now</a>
    </div>
  );
}