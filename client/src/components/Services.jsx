import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "discover",
    title: "Discover",
    letters: "DISCOVER".split(""),
    description: "Unveil the cosmic blueprint of your soul with deep birth chart analysis.",
    image: "/images/mystic_astrology_bg_1789373287874.png"
  },
  {
    id: "intuition",
    title: "Intuition",
    letters: "INTUITION".split(""),
    description: "Connect with mystical forces through tarot and spiritual divination.",
    image: "/images/tarot_reading_1789373361016.png"
  },
  {
    id: "harmony",
    title: "Harmony",
    letters: "HARMONY".split(""),
    description: "Align your personal energy with the ancient science of Vastu Shastra.",
    image: "/images/crystal_pendant_1789373309080.png"
  },
  {
    id: "guidance",
    title: "Guidance",
    letters: "GUIDANCE".split(""),
    description: "Navigate life's hardest questions with expert astrological support.",
    image: "/images/gold_vedic_ring_1789373324078.png"
  },
  {
    id: "remedies",
    title: "Remedies",
    letters: "REMEDIES".split(""),
    description: "Align your planetary energies with ancient mantras, gemstones, and rituals.",
    image: "/images/quartz_bracelet_1789373347411.png"
  }
];

const Services = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      // Set Initial States for the first card (active) and others (inactive)
      gsap.set(cards[0], { flexGrow: 4 });
      gsap.set(cards.slice(1), { flexGrow: 1 });

      cards.forEach((card, i) => {
        const contentBlock = card.querySelector('.content-block');
        const verticalText = card.querySelector('.vertical-text');
        const bgImage = card.querySelector('.bg-image');

        if (i === 0) {
          gsap.set(contentBlock, { opacity: 1, y: 0 });
          gsap.set(verticalText, { opacity: 0 });
          gsap.set(bgImage, { scale: 1.05 });
        } else {
          gsap.set(contentBlock, { opacity: 0, y: 30 });
          gsap.set(verticalText, { opacity: 0.8 });
          gsap.set(bgImage, { scale: 1 });
        }
      });

      // Create scroll-scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center", // Pin when the section hits the middle of viewport
          end: "+=4000", // Increased significantly to slow down the scroll and make it smoother
          pin: true,
          scrub: 1.5, // Smoother catch-up effect
          anticipatePin: 1, // Prevents layout jumps when entering/exiting the pin
        }
      });

      for (let i = 0; i < cards.length - 1; i++) {
        const currentCard = cards[i];
        const nextCard = cards[i + 1];

        const cContent = currentCard.querySelector('.content-block');
        const cVert = currentCard.querySelector('.vertical-text');
        const cBg = currentCard.querySelector('.bg-image');

        const nContent = nextCard.querySelector('.content-block');
        const nVert = nextCard.querySelector('.vertical-text');
        const nBg = nextCard.querySelector('.bg-image');

        // Step animation (crossfading active card)
        tl.to(currentCard, { flexGrow: 1, duration: 1, ease: "power2.inOut" }, `step${i}`)
          .to(nextCard, { flexGrow: 4, duration: 1, ease: "power2.inOut" }, `step${i}`)
          
          // Animate current card out
          .to(cContent, { opacity: 0, y: 30, duration: 0.3 }, `step${i}`)
          .to(cVert, { opacity: 0.8, duration: 0.5 }, `step${i}+=0.5`)
          .to(cBg, { scale: 1, duration: 1, ease: "power2.inOut" }, `step${i}`)

          // Animate next card in
          .to(nVert, { opacity: 0, duration: 0.3 }, `step${i}`)
          .to(nContent, { opacity: 1, y: 0, duration: 0.5 }, `step${i}+=0.5`)
          .to(nBg, { scale: 1.05, duration: 1, ease: "power2.inOut" }, `step${i}`);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-transparent py-12 md:py-16 px-4 sm:px-6 md:px-12 relative z-20 overflow-hidden w-full min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col">
        <div className="text-center mb-8 md:mb-12 shrink-0">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-50 mb-4 tracking-tight">Our Top Categories</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Unlock the mysteries of the cosmos with our expert astrological guidance and intuitive readings.
          </p>
        </div>

        {/* GSAP controlled container */}
        <div className="flex flex-col md:flex-row w-full gap-2 md:gap-4 overflow-hidden pb-12 md:pb-16 h-[500px] md:h-[75vh] min-h-[500px] max-h-[800px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-3xl md:rounded-[2rem] shadow-xl flex shrink-0 border border-transparent transition-[border-color,box-shadow] duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              style={{ minHeight: "80px", minWidth: "60px" }}
            >
              {/* Background Image */}
              <div 
                className="bg-image absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Gradient Overlay (only at bottom so image is super bright) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              {/* Vertical/Horizontal Text */}
              <div className="vertical-text absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                <div className="flex flex-row md:flex-col gap-1 md:gap-0 items-center justify-center">
                  {service.letters.map((letter, i) => (
                    <span key={i} className="text-white font-bold text-lg md:text-3xl uppercase tracking-[0.2em] md:my-1.5 drop-shadow-md">
                      {letter}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanding Content Block */}
              <div className="content-block absolute bottom-0 left-0 p-8 md:p-16 text-white w-full pointer-events-none">
                <div className="pointer-events-auto max-w-2xl">
                  <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-wider drop-shadow-lg">{service.title}</h3>
                  <p className="text-white/95 text-sm md:text-lg lg:text-xl leading-relaxed font-light mb-6 md:mb-10 drop-shadow-md">
                    {service.description}
                  </p>
                  <button className="px-8 py-3.5 md:px-10 md:py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full text-sm md:text-base font-semibold transition-all border border-white/40 hover:border-white/80 cursor-pointer shadow-lg hover:shadow-xl">
                    Explore {service.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
