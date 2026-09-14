import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import ColorChangeCards from '../components/ui/color-change-card';
import { Skiper47 } from '../components/ui/product-carousel';
import ColorBends from '../components/ui/ColorBends';
import AboutSection from '../components/AboutSection';
import DriftWall from '../components/ui/DriftWall';

const Home = () => {
  return (
    <main className="relative min-h-screen">
      {/* Global Fixed Background for the entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={90}
          speed={0.2}
          scale={1.5}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
        />
        <div className="absolute inset-0 backdrop-blur-[40px] bg-white/15"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full bg-transparent">
        <Hero />
        
        <Marquee />
        <Services />
        
        <div className="relative w-full overflow-hidden">
          <Skiper47 />
          <ColorChangeCards />
          
          {/* New Custom About Section */}
          <AboutSection />
          
          {/* Testimonials Section */}
          <div className="py-20 md:py-32 w-full relative z-20">
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl md:text-5xl font-light text-slate-50 mb-4 tracking-tight">Community Voices</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Hear from those who have discovered their cosmic path.
              </p>
            </div>
            <div className="w-full" style={{ height: '750px' }}>
              <DriftWall 
                columns={5}
                speed={35}
                direction="up"
                pauseOnHover={true}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
