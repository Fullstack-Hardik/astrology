import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X, Home, Info, BookOpen, CalendarHeart, ShoppingBag, BookText, HelpCircle, Grid } from "lucide-react";
import { CartIcon } from "@/components/CartIcon";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/#top", icon: Home },
  { label: "Services", href: "/#services", icon: BookOpen },
  { label: "Book Session", href: "/#book", icon: CalendarHeart },
  { label: "Shop", href: "/#shop", icon: ShoppingBag },
  { label: "Categories", href: "/#categories", icon: Grid },
  { label: "Journal", href: "/#journal", icon: BookText },
  { label: "About", href: "/#about", icon: Info },
  { label: "FAQ", href: "/#faq", icon: HelpCircle },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const homeHref = (anchor: string) => location.pathname === "/" ? anchor.replace("/", "") : anchor;

  return <header className="sticky top-0 z-50 border-b border-white/5 bg-background/20 backdrop-blur-lg">
    <nav className="container-full mx-auto px-6">
      <div className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/50 bg-primary/10 text-primary">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg tracking-wide md:text-xl">Divine Wheel <span className="hidden lg:inline font-light text-white/80">Of Fortune</span></span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={homeHref(href)} className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-white/70 transition-all hover:text-primary">
              <Icon className="h-3.5 w-3.5 opacity-70" />
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:inline-flex border-none font-medium">
            <a href={homeHref("/#book")}>Book a session</a>
          </Button>
          <CartIcon />
          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-primary" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/5 lg:hidden">
            <div className="grid grid-cols-1 gap-1 py-4 px-2 bg-background/95 backdrop-blur-md">
              {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={homeHref(href)} onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-primary rounded-lg">
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