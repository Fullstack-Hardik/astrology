import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Sparkles, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="container-full py-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
          
          {/* Brand section */}
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-start hover:bg-white/[0.03] transition-colors duration-500">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-lg shadow-primary/20 shrink-0">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-serif text-2xl tracking-wide text-white leading-tight">Divine Wheel<br/><span className="italic text-primary/80 text-xl font-light">Of Fortune</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 mb-8 flex-1">
              Intuitive guidance, energetic practices, and sacred objects for a more conscious inner life.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="mailto:hello@divinewheeloffortune.com" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col hover:bg-white/[0.03] transition-colors duration-500">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/90 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/50"></span> Explore
            </h3>
            <ul className="space-y-4 text-sm text-white/50 font-medium">
              <li><a href="/#about" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Our Story</a></li>
              <li><a href="/#services" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Services</a></li>
              <li><a href="/#shop" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Sacred Shop</a></li>
              <li><a href="/#journal" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Journal</a></li>
              <li><a href="/#faq" className="hover:text-primary hover:translate-x-1 transition-all inline-block">FAQ</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col hover:bg-white/[0.03] transition-colors duration-500">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/90 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/50"></span> Support
            </h3>
            <ul className="space-y-4 text-sm text-white/50 font-medium">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Contact Us</a></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="p-8 lg:p-12 flex flex-col hover:bg-white/[0.03] transition-colors duration-500">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/90 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/50"></span> Begin
            </h3>
            <p className="text-sm text-white/60 mb-8 leading-relaxed flex-1">
              Ready for clarity and deep spiritual healing? Start your journey today.
            </p>
            <Button asChild className="w-full rounded-xl border border-primary bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-12 shadow-xl shadow-primary/20 transition-all mt-auto group">
              <a href="/#book" className="flex items-center justify-center font-medium">Book a session <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
            </Button>
          </div>

        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/30 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Divine Wheel Of Fortune.</p>
          <div className="flex items-center gap-2">
             <MapPin className="h-3 w-3" />
             <p className="uppercase">India <span className="mx-2 text-primary/40">✦</span> Worldwide Sessions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};