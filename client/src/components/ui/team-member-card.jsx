import React, { useMemo } from 'react';
import { Camera, Play, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import './team-member-card.css';

function cn(...inputs) { return twMerge(clsx(inputs)); }

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Master Astrologer',
  firstName = 'Cosmic',
  lastName = 'Guide',
  imageUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  description = 'I am a skilled spiritual guide with decades of experience in modern Vedic astrology and tarot. My passion lies in creating a seamless cosmic experience and offering unparalleled clarity on your life journey.',
  className,
}) {
  const fullName = `${firstName} ${lastName}`;
  const isPositionRight = position === 'right';

  // Generate stable random particles
  const particles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      top: `${Math.random() * 90 + 5}%`,
      animationDelay: `${Math.random() * 2}s`
    }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative my-16 flex flex-col justify-center overflow-visible', className)}
    >
      {/* jobPosition label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 text-xs font-semibold tracking-[0.3em] text-purple-600 uppercase',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className='flex flex-col items-center justify-center w-full'>
        {/* Portrait image with smooth fade-up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className='relative h-80 md:h-[450px] w-full shrink-0 overflow-hidden rounded-[2rem] shadow-2xl z-10'
        >
          <div className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
          <img
            src={imageUrl}
            alt={fullName}
            className='h-full w-full object-cover object-top duration-700 ease-[0.22,1,0.36,1] hover:scale-105'
          />
        </motion.div>

        {/* Info block with magical continuous effect */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className='magical-card group/card relative -mt-16 md:-mt-24 z-20 flex w-[92%] flex-col gap-6 md:gap-8 p-6 md:p-10 rounded-[2rem] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'
        >
          {/* Continuous Floating Particles */}
          {particles.map(p => (
            <div 
              key={p.id} 
              className="particle-star" 
              style={{ left: p.left, top: p.top, animationDelay: p.animationDelay }} 
            />
          ))}

          {/* Display name */}
          <div className="relative z-10 text-center">
            <p className='text-3xl md:text-5xl leading-[1.1] font-extralight tracking-tight text-slate-50 transition-colors duration-500 group-hover/card:text-purple-950'>
              {firstName} <span className='font-normal text-purple-700 transition-colors duration-500 group-hover/card:text-purple-600'>{lastName}</span>
            </p>
          </div>

          <div className='flex flex-col gap-6 relative z-10 items-center'>
            {/* Bio copy */}
            <div className='w-full text-center'>
              <p className='text-sm md:text-base leading-[1.8] text-slate-300 transition-colors duration-500 group-hover/card:text-slate-50'>
                {description}
              </p>
              
              {/* Circular Social CTA Icons */}
              <div className='flex gap-4 mt-6 justify-center'>
                <motion.a 
                  whileHover={{ scale: 1.15, rotate: 5 }} 
                  whileTap={{ scale: 0.95 }} 
                  href="#" 
                  className="group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 shadow-sm hover:shadow-md transition-all"
                >
                  <Camera size={20} className="text-white" />
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.15, rotate: -5 }} 
                  whileTap={{ scale: 0.95 }} 
                  href="#" 
                  className="group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-green-500 shadow-sm hover:shadow-md hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={20} className="text-white fill-white" />
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.15, rotate: 5 }} 
                  whileTap={{ scale: 0.95 }} 
                  href="#" 
                  className="group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-red-600 shadow-sm hover:shadow-md hover:bg-red-700 transition-all"
                >
                  <Play size={20} className="text-white fill-white" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
