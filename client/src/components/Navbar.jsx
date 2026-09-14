import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X, ShoppingCart, Home, ShoppingBag, Info, BookOpen, HelpCircle, Phone, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Homepage", path: "/", icon: <Home size={14} /> },
    { name: "Products", path: "/shop", icon: <ShoppingBag size={14} /> },
    { name: "About", path: "/about", icon: <Info size={14} /> },
    { name: "Blog", path: "/blog", icon: <BookOpen size={14} /> },
    { name: "FAQs", path: "/faqs", icon: <HelpCircle size={14} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={14} /> },
    { name: "Gallery", path: "/gallery", icon: <ImageIcon size={14} /> },
    { name: "New", path: "/new", icon: <Sparkles size={14} /> }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-1' 
          : 'bg-white/50 backdrop-blur-md py-3 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-lg font-bold tracking-widest text-slate-50 flex items-center transition-transform hover:scale-105"
        >
          COSMIC
        </Link>

        {/* Center Nav Links (Desktop) - Apple Style Minimalist */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link 
                to={link.path} 
                className="flex items-center gap-1.5 text-[13px] font-medium text-slate-900 hover:text-purple-700 transition-colors opacity-90 hover:opacity-100"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Section (Search, User, Cart, Mobile Toggle) */}
        <div className="flex items-center gap-5">
          <button className="text-slate-900 hover:text-white transition-colors opacity-90 hover:opacity-100 hidden sm:block">
            <Search size={17} />
          </button>
          
          <Link to="/login" className="text-slate-900 hover:text-white transition-colors opacity-90 hover:opacity-100 hidden sm:block">
            <User size={17} />
          </Link>
          
          <Link to="/cart" className="relative text-slate-900 hover:text-white transition-colors opacity-90 hover:opacity-100">
            <ShoppingCart size={17} />
            <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>

          {/* Hamburger Menu Button (Mobile) */}
          <button 
            className="lg:hidden text-slate-900 hover:text-white transition-colors w-6 h-6 flex justify-center items-center relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`absolute transition-all duration-500 ease-out ${mobileMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
              <Menu size={22} />
            </div>
            <div className={`absolute transition-all duration-500 ease-out ${mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}>
              <X size={22} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl transition-all duration-500 ease-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-3 text-[15px] font-medium text-slate-900 border-b border-slate-100 hover:text-purple-600 transition-colors"
            >
              <div className="text-purple-500">{link.icon}</div>
              {link.name}
            </Link>
          ))}
          
          <div className="sm:hidden flex gap-4 mt-6">
            <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900/40 backdrop-blur-md text-slate-900 py-3 text-sm font-medium">
              <Search size={16} />
              <span>Search</span>
            </button>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900/40 backdrop-blur-md text-slate-900 py-3 text-sm font-medium">
              <User size={16} />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
