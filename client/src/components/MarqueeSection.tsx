import { Heart, Globe, CalendarHeart, Gem, Sparkles, Star } from "lucide-react";

export default function MarqueeSection() {
  const items = [
    { text: "Private, caring sessions", icon: <Heart className="w-5 h-5 text-primary/70" /> },
    { text: "Guidance worldwide", icon: <Globe className="w-5 h-5 text-primary/70" /> },
    { text: "Clarifying sessions", icon: <CalendarHeart className="w-5 h-5 text-primary/70" /> },
    { text: "Transformative rituals", icon: <Gem className="w-5 h-5 text-primary/70" /> },
  ];

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-8 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8 group">
            {item.icon}
            <span className="mx-4 text-sm md:text-base font-medium tracking-wide text-white/90 group-hover:text-white transition-colors duration-300 italic">
              {item.text}
            </span>
            <Star className="w-4 h-4 mx-8 text-primary/50" />
          </div>
        ))}
      </div>
    </section>
  );
}
