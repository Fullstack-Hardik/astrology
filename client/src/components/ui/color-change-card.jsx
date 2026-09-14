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
          imgSrc="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
        />
        <Card
          heading="Intuition"
          description="Connect with mystical forces through tarot and spiritual divination."
          imgSrc="https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=2000&auto=format&fit=crop"
        />
        <Card
          heading="Harmony"
          description="Align your personal energy with the ancient science of Vastu Shastra."
          imgSrc="https://images.unsplash.com/photo-1601296200636-ea39e0339d22?q=80&w=2000&auto=format&fit=crop"
        />
        <Card
          heading="Guidance"
          description="Navigate life's hardest questions with expert astrological support."
          imgSrc="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=2000&auto=format&fit=crop"
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
      className="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-900 rounded-xl border border-purple-900 shadow-sm hover:shadow-lg hover:shadow-purple-200 transition-shadow"
    >
      <div
        className="absolute inset-0 saturate-50 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100 opacity-20 group-hover:opacity-100"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Light gradient overlay when not hovered, changes to dark on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-purple-900/90 group-hover:via-purple-900/50 pointer-events-none transition-colors duration-500" />
      
      <div className="relative z-20 flex h-full flex-col justify-between p-6 text-purple-900 transition-colors duration-500 group-hover:text-white">
        <FiArrowRight className="ml-auto text-3xl text-orange-500 transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          <h4 className="flex mb-2">
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p className="text-sm text-slate-600 group-hover:text-purple-100 drop-shadow-sm transition-colors duration-500">{description}</p>
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
