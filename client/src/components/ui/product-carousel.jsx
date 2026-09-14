"use client";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";
import { cn } from "../../lib/utils";

const Skiper47 = () => {
  const images = [
    { src: "/images/crystal_pendant_1789373309080.png", alt: "Amethyst Crystal Pendant" },
    { src: "/images/gold_vedic_ring_1789373324078.png", alt: "Vedic Gold Ring" },
    { src: "/images/quartz_bracelet_1789373347411.png", alt: "Rose Quartz Bracelet" },
    { src: "/images/tarot_reading_1789373361016.png", alt: "Sapphire Astrological Gem" },
    { src: "/images/crystal_pendant_1789373309080.png", alt: "Emerald Harmony Ring" },
    { src: "/images/gold_vedic_ring_1789373324078.png", alt: "Spiritual Healing Necklace" },
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center overflow-hidden bg-transparent py-20 relative z-20">
      <div className="text-center w-full z-30 mb-8 px-4">
        <h2 className="text-3xl md:text-5xl font-light text-slate-50 tracking-tight">
          Featured <span className="text-purple-600 font-semibold">Products</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Authentic, spiritually charged jewelry inspired by cosmic alignments.
        </p>
      </div>
      <Carousel_001 className="mt-6 w-full" images={images} showPagination loop autoplay />
    </div>
  );
};

export { Skiper47 };

const Carousel_001 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}) => {
  const css = `
  .Carousal_001 {
    padding-bottom: 50px !important;
  }
  .swiper-pagination-bullet {
    background: #9333ea !important; /* purple-600 */
  }
  .swiper-pagination-bullet-active {
    background: #f97316 !important; /* orange-500 */
  }
  `;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("w-full max-w-5xl relative", className)}
    >
      <style>{css}</style>
      <Swiper
        spaceBetween={spaceBetween}
        autoplay={autoplay ? { delay: 1500, disableOnInteraction: false } : false}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.8 },
          1024: { slidesPerView: 2.43 }
        }}
        coverflowEffect={{ rotate: 0, slideShadows: false, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } : false}
        className="Carousal_001 px-4"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!h-[320px] md:!h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-purple-900/50 group">
            <img className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" src={image.src} alt={image.alt} />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:bg-orange-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                Quick View
              </button>
            </div>
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden"><ChevronRightIcon className="h-6 w-6 text-purple-600" /></div>
            <div className="swiper-button-prev after:hidden"><ChevronLeftIcon className="h-6 w-6 text-purple-600" /></div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_001 };
