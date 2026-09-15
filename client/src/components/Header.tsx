import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X, ChevronDown, Home, Info, Grid, ShoppingBag, MoreHorizontal, HelpCircle } from "lucide-react";
import { CartIcon } from "@/components/CartIcon";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/#top", icon: Home },
  { label: "About", href: "/#about", icon: Info },
  { label: "Category", href: "/#categories", icon: Grid },
  { label: "Shop", href: "/#shop", icon: ShoppingBag },
  { 
    label: "More", 
    isDropdown: true,
    icon: MoreHorizontal,
    dropdownItems: [
      { label: "Gallery", href: "/#gallery" },
      { label: "New", href: "/#new" },
      { label: "Blog", href: "/#journal" },
    ]
  },
  { label: "FAQ", href: "/#faq", icon: HelpCircle },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const homeHref = (anchor: string) => location.pathname === "/" ? anchor.replace("/", "") : anchor;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">
      <nav className="container-full mx-auto px-4 md:px-6">
        <div className="flex h-12 items-center justify-between gap-4 md:h-14">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/50 bg-primary/10 text-primary">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="font-serif text-sm tracking-wide md:text-base whitespace-nowrap">Divine Wheel <span className="hidden lg:inline font-light text-white/80">Of Fortune</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.label} className="relative group py-4">
                  <button className="flex items-center gap-1.5 text-[10px] xl:text-[11px] font-medium uppercase tracking-wider text-white/70 transition-all group-hover:text-primary whitespace-nowrap">
                    {link.icon && <link.icon className="h-3.5 w-3.5 opacity-80" />}
                    {link.label} <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 bg-white shadow-xl rounded-md border border-gray-100 py-2 overflow-hidden z-50">
                    {link.dropdownItems?.map((subItem) => (
                      <a 
                        key={subItem.label} 
                        href={homeHref(subItem.href)} 
                        className="block px-5 py-2.5 text-[10px] xl:text-[11px] font-medium uppercase tracking-wider text-charcoal/70 hover:bg-gray-100 hover:text-primary transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.label} href={homeHref(link.href)} className="flex items-center gap-1.5 text-[10px] xl:text-[11px] font-medium uppercase tracking-wider text-white/70 transition-all hover:text-primary whitespace-nowrap">
                  {link.icon && <link.icon className="h-3.5 w-3.5 opacity-80" />}
                  {link.label}
                </a>
              )
            ))}
          </div>

          <div className="flex items-center gap-3 xl:gap-4">
            <Link to="/login" className="hidden text-[10px] xl:text-[11px] font-medium uppercase tracking-wider text-white/70 hover:text-white sm:inline-block">Login</Link>
            <span className="hidden sm:inline-block text-white/30 text-[10px]">/</span>
            <Link to="/signup" className="hidden text-[10px] xl:text-[11px] font-medium uppercase tracking-wider text-white/70 hover:text-white sm:inline-block">Sign Up</Link>
            <Button asChild size="sm" className="hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 sm:inline-flex border-none font-medium whitespace-nowrap text-xs h-9 ml-2">
              <a href={homeHref("/#book")}>Book a session</a>
            </Button>
            <CartIcon />
            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-primary" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setOpen(false)}
              />
              <motion.div 
                initial={{ x: "100%" }} 
                animate={{ x: 0 }} 
                exit={{ x: "100%" }} 
                transition={{ duration: 0.25, ease: "easeOut" }} 
                className="fixed top-0 right-0 h-[100dvh] w-[80%] max-w-sm bg-black/95 backdrop-blur-xl z-50 shadow-2xl border-l border-white/10 lg:hidden flex flex-col"
              >
                <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
                  <span className="font-serif text-white tracking-wide">Menu</span>
                  <Button variant="ghost" size="icon" className="text-white hover:text-primary" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto px-2 py-4">
                  {navLinks.map((link) => (
                    link.isDropdown ? (
                      <div key={link.label} className="py-2">
                        <p className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-widest flex items-center gap-2">
                          {link.icon && <link.icon className="h-4 w-4" />}
                          {link.label}
                        </p>
                        <div className="grid grid-cols-1 pl-4">
                          {link.dropdownItems?.map((subItem) => (
                            <a 
                              key={subItem.label} 
                              href={homeHref(subItem.href)} 
                              onClick={() => setOpen(false)} 
                              className="block px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-primary rounded-lg"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a key={link.label} href={homeHref(link.href)} onClick={() => setOpen(false)} className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-primary rounded-lg">
                        {link.icon && <link.icon className="h-4 w-4" />}
                        {link.label}
                      </a>
                    )
                  ))}
                  <div className="border-t border-white/5 mt-4 pt-6 px-4 flex flex-col gap-4">
                    <a href={homeHref("/#book")} onClick={() => setOpen(false)} className="text-sm font-medium text-primary flex items-center gap-2">Book a session</a>
                    <Link to="/login" onClick={() => setOpen(false)} className="text-sm font-medium text-white/70">Login</Link>
                    <Link to="/signup" onClick={() => setOpen(false)} className="text-sm font-medium text-white/70">Sign Up</Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};