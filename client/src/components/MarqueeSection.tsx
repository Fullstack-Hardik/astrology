import { Heart, Globe, CalendarHeart, Gem, Sparkles } from "lucide-react";

export default function MarqueeSection() {
  const items = [
    { text: "Private, caring sessions", icon: <Heart className="w-5 h-5 text-[#D4AF37]" /> },
    { text: "Guidance worldwide", icon: <Globe className="w-5 h-5 text-[#D4AF37]" /> },
    { text: "Thoughtful booking", icon: <CalendarHeart className="w-5 h-5 text-[#D4AF37]" /> },
    { text: "Sacredly selected goods", icon: <Gem className="w-5 h-5 text-[#D4AF37]" /> },
  ];

  // Duplicate items a few times to ensure seamless infinite scroll
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-8 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Blurred transparent edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Marquee container */}
      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8 group">
            {item.icon}
            <span className="mx-4 text-sm md:text-base font-medium tracking-widest uppercase text-white/80 group-hover:text-white transition-colors duration-300">
              {item.text}
            </span>
            {/* Star separator */}
            <Sparkles className="w-4 h-4 text-[#D4AF37]/50 ml-4" />
          </div>
        ))}
      </div>
    </section>
  );
}
