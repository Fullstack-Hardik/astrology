import React from 'react';

const Marquee = () => {
  const astrologyTerms = [
    "Vedic Astrology",
    "Tarot Reading",
    "Numerology",
    "Palmistry",
    "Vastu Shastra",
    "Aura Healing",
    "Birth Chart Analysis",
    "Horoscope Matching"
  ];

  // Duplicate the array to ensure smooth infinite scrolling
  const scrollItems = [...astrologyTerms, ...astrologyTerms, ...astrologyTerms];

  return (
    <div className="w-full bg-transparent border-y border-purple-900/50/50 py-6 md:py-8 overflow-hidden relative flex items-center z-20">
      {/* Left/Right fading gradients for smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white/20 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white/20 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling container */}
      <div className="flex animate-marquee whitespace-nowrap">
        {scrollItems.map((term, index) => (
          <div key={index} className="flex items-center mx-6 md:mx-10">
            <span className="text-xl md:text-2xl font-light text-purple-900 tracking-wider">
              {term}
            </span>
            <span className="mx-6 md:mx-10 text-orange-400 text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
