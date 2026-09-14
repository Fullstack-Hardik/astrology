import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-slate-900 mt-12 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50">
      
      {/* Decorative Orbs (Parallax) */}
      <motion.div style={{ y: y1 }} className="absolute top-10 left-0 md:left-10 w-48 h-48 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-0 md:right-10 w-64 h-64 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-purple-600 font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
        >
          Our Philosophy
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extralight text-slate-50 tracking-tight leading-[1.15] max-w-4xl"
        >
          We bridge the gap between <span className="font-normal text-purple-600">ancient wisdom</span> and modern luxury.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 w-full max-w-2xl text-slate-600 text-lg md:text-xl leading-relaxed font-light"
        >
          <p className="mb-6">
            Cosmic was born from a desire to carry the energy of the universe with you, wherever you go. Every piece of jewelry is deeply rooted in astrological science, designed not just to adorn, but to empower.
          </p>
          <p>
            By combining premium craftsmanship with expert spiritual guidance, we create pieces that resonate with your unique birth chart and soul blueprint.
          </p>
        </motion.div>

        {/* Large aesthetic image */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 40 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="mt-24 relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop" alt="Cosmic Philosophy" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent flex items-end p-8 md:p-16">
            <h3 className="text-white text-3xl md:text-5xl font-light tracking-tight">Align your energy.</h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
