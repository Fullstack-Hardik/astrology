import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border/50">
      <div className="container-full py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand section */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-primary/5 text-primary">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-serif text-2xl tracking-wide">Divine Wheel<br/><span className="italic text-primary/80 text-xl font-light">Of Fortune</span></span>
            </Link>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Intuitive guidance, energetic practices, and sacred objects for a more conscious inner life.
            </p>
            <Button asChild variant="outline" className="mt-8 rounded-full border-border bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-6 shadow-sm transition-all">
              <a href="/#book">Book a session <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links section */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-muted-foreground/80">
              <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/#journal" className="hover:text-primary transition-colors">Journal</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Connect section */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-6">Connect</h3>
            <ul className="space-y-4 text-sm text-muted-foreground/80">
              <li><a href="mailto:hello@divinewheeloffortune.com" className="hover:text-primary transition-colors">Email Natassha Sharrma</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Divine Wheel Of Fortune. All rights reserved.</p>
          <p className="tracking-wider uppercase">India <span className="mx-2 text-primary">✦</span> Sessions worldwide</p>
        </div>
      </div>
    </footer>
  );
};