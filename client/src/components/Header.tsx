import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X, Home, Info, BookOpen, CalendarHeart, ShoppingBag, BookText, HelpCircle, Grid } from "lucide-react";
import { CartIcon } from "@/components/CartIcon";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Categories", href: "/#categories", icon: Grid },
  { label: "Book Appointment", href: "/#book", icon: CalendarHeart },
  { label: "Shop", href: "/#shop", icon: ShoppingBag },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const homeHref = (anchor: string) => location.pathname === "/" ? anchor.replace("/", "") : anchor;

  return <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
    <nav className="container-full mx-auto px-4 md:px-6">
      <div className="flex h-12 items-center justify-between gap-4 md:h-14">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/50 bg-primary/10 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="font-serif text-sm tracking-wide md:text-base whitespace-nowrap">Divine Wheel <span className="hidden lg:inline font-light text-white/80">Of Fortune</span></span>
        </Link>
        <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {links.map(({ label, href }) => (
            <a key={label} href={homeHref(href)} className="text-[10px] xl:text-[11px] font-medium uppercase tracking-wider text-white/70 transition-all hover:text-primary whitespace-nowrap">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden text-xs font-medium text-white/70 hover:text-white sm:inline-block">Login</Link>
          <Link to="/signup" className="hidden text-xs font-medium text-white/70 hover:text-white sm:inline-block">Sign Up</Link>
          <Button asChild size="sm" className="hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:inline-flex border-none font-medium whitespace-nowrap text-xs h-8">
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
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.15, ease: "easeOut" }} className="overflow-hidden border-t border-white/5 lg:hidden">
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