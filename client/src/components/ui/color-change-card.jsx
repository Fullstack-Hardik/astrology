import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ColorChangeCards = () => {
  return (
    <div className="p-4 py-12 md:p-8 relative z-20 bg-transparent">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <Card
          heading="Discover"
          description="Unveil the cosmic blueprint of your soul with deep birth chart analysis."
          imgSrc="/images/mystic_astrology_bg_1789373287874.png"
        />
        <Card
          heading="Intuition"
          description="Connect with mystical forces through tarot and spiritual divination."
          imgSrc="/images/tarot_reading_1789373361016.png"
        />
        <Card
          heading="Harmony"
          description="Align your personal energy with the ancient science of Vastu Shastra."
          imgSrc="/images/crystal_pendant_1789373309080.png"
        />
        <Card
          heading="Guidance"
          description="Navigate life's hardest questions with expert astrological support."
          imgSrc="/images/gold_vedic_ring_1789373324078.png"
        />
      </div>
    </div>
  );
};

// --- Card Component ---
const Card = ({ heading, description, imgSrc }) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-900/40 backdrop-blur-md rounded-xl border border-purple-900 shadow-sm hover:shadow-lg hover:shadow-purple-200 transition-shadow"
    >
      <div
        className="absolute inset-0 saturate-0 transition-all duration-500 group-hover:scale-110 group-hover:saturate-100 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Light gradient overlay when not hovered, changes to dark on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transition-colors duration-500" />
      
      <div className="relative z-20 flex h-full flex-col justify-between p-6 text-slate-100 transition-colors duration-500">
        <FiArrowRight className="ml-auto text-3xl text-orange-500 transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          <h4 className="flex mb-2">
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p className="text-sm text-slate-300 group-hover:text-purple-100 drop-shadow-sm transition-colors duration-500">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- AnimatedLetter Helper Component ---
const letterVariants = {
  hover: {
    y: "-50%",
  },
};

const AnimatedLetter = ({ letter }) => {
  // Add a non-breaking space for spaces to render correctly
  const displayLetter = letter === " " ? "\u00A0" : letter;
  return (
    <div className="inline-block h-[36px] overflow-hidden font-semibold text-3xl">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{displayLetter}</span>
        <span>{displayLetter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
