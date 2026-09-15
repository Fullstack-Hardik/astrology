import { Link } from "react-router-dom";
import { Instagram, Sparkles, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-white text-foreground overflow-hidden border-t border-black/5">
      {/* Massive background text */}
      <div className="absolute -bottom-8 inset-x-0 overflow-hidden pointer-events-none flex justify-center opacity-[0.03]">
        <h1 className="text-[15vw] font-serif leading-none tracking-tighter font-bold whitespace-nowrap select-none">
          DIVINE
        </h1>
      </div>

      <div className="container-full py-16 md:py-24 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 border-b border-black/5 pb-16">
          {/* Brand section */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-serif text-2xl tracking-wide">Divine Wheel<br/><span className="italic text-primary/80 text-xl font-light">Of Fortune</span></span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-foreground/70">
              Intuitive guidance, energetic practices, and sacred objects for a more conscious inner life.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[13px] font-bold text-foreground mb-6">About Us</h3>
            <ul className="space-y-4 text-sm text-foreground/70 font-medium">
              <li><a href="/#about" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/#journal" className="hover:text-primary transition-colors">Journal</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[13px] font-bold text-foreground mb-6">Helpful Links</h3>
            <ul className="space-y-4 text-sm text-foreground/70 font-medium">
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="lg:col-span-4">
            <h3 className="text-[13px] font-bold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm text-foreground/80 font-medium">
              <li>
                <a href="mailto:hello@divinewheeloffortune.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" /> hello@divinewheeloffortune.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" /> +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> India, Sessions worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-foreground/60">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
          <p>© {new Date().getFullYear()} Divine Wheel Of Fortune. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};