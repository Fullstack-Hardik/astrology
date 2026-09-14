import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const AnimatedCartButton = ({ onAdd, className = "" }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if (isAdding) return;
    setIsAdding(true);
    
    // Simulate drop animation time
    setTimeout(() => {
      setCount(prev => prev + 1);
      if (onAdd) onAdd();
      setTimeout(() => setIsAdding(false), 500);
    }, 600);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleAdd}
      className={`relative inline-flex items-center justify-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-purple-600/30 hover:bg-purple-700 transition-colors overflow-visible ${className}`}
    >
      <div className="relative flex items-center justify-center w-6 h-6">
        <motion.div
          animate={isAdding ? { 
            rotate: [0, -20, 20, -10, 0],
            scale: [1, 1.2, 1],
            y: [0, 5, 0]
          } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ShoppingCart size={22} />
        </motion.div>

        {/* 3D Drop Item */}
        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ y: -60, opacity: 0, scale: 0.5, rotate: 0 }}
              animate={{ 
                y: [-60, -20, 5, 0, 5], 
                opacity: [0, 1, 1, 1, 0],
                scale: [0.5, 1, 1, 1, 0.5],
                rotate: 180
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.6, 
                times: [0, 0.4, 0.7, 0.9, 1],
                ease: "easeIn" 
              }}
              className="absolute bg-orange-400 w-3 h-3 rounded-full z-20 shadow-sm border border-white"
            />
          )}
        </AnimatePresence>

        {/* Count Badge */}
        <AnimatePresence>
          {count > 0 && (
            <motion.div
              key={count}
              initial={{ scale: 0, y: 10 }}
              animate={{ scale: [0, 1.5, 1], y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-3 -right-3 bg-orange-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-purple-600 z-30"
            >
              {count}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="relative z-10 text-lg">Add to Cart</span>
    </motion.button>
  );
};

export default AnimatedCartButton;
