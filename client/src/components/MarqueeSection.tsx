import { Heart, Globe, CalendarHeart, Gem, Sparkles } from "lucide-react";

export default function MarqueeSection() {
  const items = [
    { text: "A truly transformative reading. Will definitely book again!", user: "@sarah_m", avatar: "https://i.pravatar.cc/100?img=1" },
    { text: "Natasha's guidance was exactly what I needed right now.", user: "@james_leo", avatar: "https://i.pravatar.cc/100?img=11" },
    { text: "Such a calming and clarifying session. Thank you so much!", user: "@elena.r", avatar: "https://i.pravatar.cc/100?img=5" },
    { text: "The cord-cutting ritual changed everything for me. ✨", user: "@michael_t", avatar: "https://i.pravatar.cc/100?img=8" },
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
          <div key={index} className="flex items-center mx-6 group">
            <div className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-white/5">
              <img src={item.avatar} alt={item.user} className="w-10 h-10 rounded-full border border-primary/50 object-cover" />
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-wide text-primary/90">{item.user}</span>
                <span className="text-sm font-medium text-white/90">
                  {item.text}
                </span>
              </div>
            </div>
            {/* Star separator */}
            <Star className="w-4 h-4 mx-6 text-primary/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
