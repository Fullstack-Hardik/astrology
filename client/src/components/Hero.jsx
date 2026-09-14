import React, { useState } from 'react';
import { Search, User, Menu, X, Star, Clock, Calendar, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    "Shop", "Collections", "Astrology", "Services", "About Us"
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-purple-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 mix-blend-overlay"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
      ></video>
      
      {/* Bottom Light Blur Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] backdrop-blur-xl bg-white/40"
        style={{
          WebkitMaskImage: 'linear-gradient(to top, white 0%, transparent 45%)',
          maskImage: 'linear-gradient(to top, white 0%, transparent 45%)'
        }}
      ></div>



      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
          
          {/* Left Side (Content) */}
          <div className="flex-1">
            {/* Metadata Row */}
            <div 
              className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm animate-blur-fade-up text-slate-600"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center gap-1.5 font-medium text-purple-900 bg-purple-100 px-3 py-1 rounded-full">
                <Star size={14} className="fill-orange-500 text-orange-500" />
                <span>Top Rated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} />
                <span>Express Shipping</span>
              </div>
            </div>

            {/* Title */}
            <h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-50 tracking-tight mb-4 md:mb-6 animate-blur-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              Adorn Your <span className="text-purple-600">Soul.</span>
            </h1>

            {/* Description */}
            <p 
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-12 max-w-2xl animate-blur-fade-up"
              style={{ animationDelay: '500ms' }}
            >
              Discover our exclusive collection of spiritually charged, premium iced jewelry designed to align with your cosmic energy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button 
                className="flex items-center gap-2 bg-purple-600 text-white rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-purple-700 shadow-lg shadow-purple-600/30 transition-colors animate-blur-fade-up"
                style={{ animationDelay: '600ms' }}
              >
                <span>Shop Collection</span>
              </button>
              <button 
                className="rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 liquid-glass text-purple-900 animate-blur-fade-up hover:bg-purple-50 transition-colors"
                style={{ animationDelay: '700ms' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side (Navigation Arrows) */}
          <div className="flex items-center justify-start md:justify-end gap-3 w-full md:w-auto mt-4 md:mt-0 shrink-0">
            <button 
              className="flex items-center justify-center rounded-full liquid-glass text-purple-900 px-4 sm:px-6 py-2.5 sm:py-3 animate-blur-fade-up hover:bg-purple-50 transition-colors"
              style={{ animationDelay: '800ms' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="flex items-center justify-center rounded-full liquid-glass text-purple-900 px-4 sm:px-6 py-2.5 sm:py-3 animate-blur-fade-up hover:bg-purple-50 transition-colors"
              style={{ animationDelay: '900ms' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
