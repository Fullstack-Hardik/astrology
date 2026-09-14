"use client";
import { gsap } from "gsap";
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram as Instagram, FaTwitter as Twitter, FaLinkedin as Linkedin, FaYoutube as Youtube } from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <footer className="relative w-full bg-slate-950/80 backdrop-blur-md text-slate-100 border-t border-purple-900/50 overflow-hidden pt-24 pb-12 z-10 font-sans">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* TOP SECTION: Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          {/* Left: Subscribe */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
              Stay ahead with Cosmic.
            </h2>
            <p className="text-slate-600 text-lg max-w-md">
              Join thousands of souls who trust Cosmic for innovative spiritual jewelry and astrological insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-xl border border-slate-700 bg-slate-900/40 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all w-full sm:max-w-xs"
              />
              <button className="px-8 py-4 bg-slate-900/40 backdrop-blur-md hover:bg-purple-700 text-white font-medium rounded-xl transition-colors shadow-md hover:shadow-xl w-full sm:w-auto whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div variants={itemVariants} className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* Offset decorative shadow mimicking the image */}
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md translate-x-4 translate-y-4 rounded-3xl -z-10 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" 
                alt="Beautiful mystical landscape" 
                className="w-full h-full object-cover rounded-3xl relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 pt-16 border-t border-slate-700">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-50 mb-6 tracking-widest flex items-center gap-2">
              <span className="bg-slate-900/40 backdrop-blur-md text-white p-1 rounded-full"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22h20L12 2z"/></svg></span>
              COSMIC
            </h3>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed mb-8">
              Empowering souls with reliable, scalable, and innovative spiritual solutions and premium jewelry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-purple-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-purple-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-purple-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-purple-600 transition-colors"><Youtube size={20} /></a>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-slate-50 mb-6">Solutions</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Premium Jewelry</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Birth Charts</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Vastu Shastra</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Tarot Reading</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Support</a></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-slate-50 mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Community</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-slate-50 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-purple-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Press</a></li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
