import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradualBlur from "@/components/GradualBlur";

export const Footer = () => (
  <footer className="relative overflow-hidden bg-foreground text-background">
    <GradualBlur position="top" height="7rem" strength={2.5} />
    <div className="container-full relative z-10 py-16 md:py-20">
      <div className="grid gap-12 border-b border-background/15 pb-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
        <div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-background/40"><Sparkles className="h-4 w-4" /></span><p className="font-serif text-3xl">Divine Wheel Of Fortune</p></div><p className="mt-5 max-w-md leading-7 text-background/60">Intuitive guidance, energetic practices, and sacred objects for a more conscious inner life.</p><Button asChild variant="outline" className="mt-7 rounded-none border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"><a href="/#book">Book a session <ArrowRight /></a></Button></div>
        <div><h3 className="text-xs font-semibold uppercase tracking-editorial text-background/45">Explore</h3><ul className="mt-5 space-y-3 text-sm text-background/70"><li><a href="/#services">Services</a></li><li><a href="/#journal">Journal</a></li><li><a href="/#faq">FAQ</a></li></ul></div>
        <div><h3 className="text-xs font-semibold uppercase tracking-editorial text-background/45">Connect</h3><ul className="mt-5 space-y-3 text-sm text-background/70"><li><a href="mailto:hello@divinewheeloffortune.com">Email Natassha Sharrma</a></li><li><a href="#" className="inline-flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li></ul></div>
      </div>
      <div className="flex flex-col gap-3 pt-6 text-xs text-background/40 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Divine Wheel Of Fortune</p><p>India · Sessions worldwide</p></div>
    </div>
  </footer>
);