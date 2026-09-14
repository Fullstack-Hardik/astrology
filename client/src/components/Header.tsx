import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X, Home, Info, BookOpen, CalendarHeart, ShoppingBag, Star, BookText, HelpCircle } from "lucide-react";
import { CartIcon } from "@/components/CartIcon";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/#top", icon: Home },
  { label: "About", href: "/#about", icon: Info },
  { label: "Services", href: "/#services", icon: BookOpen },
  { label: "Book", href: "/#book", icon: CalendarHeart },
  { label: "Shop", href: "/#shop", icon: ShoppingBag },
  { label: "Testimonials", href: "/#testimonials", icon: Star },
  { label: "Blog", href: "/#journal", icon: BookText },
  { label: "FAQ", href: "/#faq", icon: HelpCircle },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const homeHref = (anchor: string) => location.pathname === "/" ? anchor.replace("/", "") : anchor;

  return <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">
    <nav className="container mx-auto px-6">
      <div className="flex h-20 items-center justify-between gap-8 md:h-24">
        <Link to="/" className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37]">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl tracking-wide md:text-2xl">Divine Wheel <span className="hidden lg:inline font-light text-white/80">Of Fortune</span></span>
        </Link>
        <div className="hidden items-center gap-8 xl:flex">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={homeHref(href)} className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/60 transition-all hover:text-[#D4AF37]">
              <Icon className="h-3.5 w-3.5" />
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden rounded-full bg-[#D4AF37] text-black hover:bg-[#F3E5AB] px-6 sm:inline-flex border-none">
            <a href={homeHref("/#book")}>Book a session</a>
          </Button>
          <CartIcon />
          <Button variant="ghost" size="icon" className="xl:hidden text-white hover:text-[#D4AF37]" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/10 xl:hidden">
            <div className="grid grid-cols-1 gap-2 py-6 px-4 bg-black/95">
              {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={homeHref(href)} onClick={() => setOpen(false)} className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-[#D4AF37] rounded-lg">
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  </header>;
};