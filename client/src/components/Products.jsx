import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Amethyst Crystal Pendant",
      price: "$120.00",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1599643478524-fb666453630f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Vedic Gold Ring",
      price: "$450.00",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1605100804763-247f67963c9e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Rose Quartz Bracelet",
      price: "$85.00",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Sapphire Astrological Gem",
      price: "$890.00",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-light text-slate-50 tracking-tight mb-4">
              Premium <span className="text-purple-600 font-semibold">Collection</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Authentic, spiritually charged jewelry inspired by cosmic alignments.
            </p>
          </div>
          <button className="hidden md:block text-purple-600 font-medium hover:text-orange-500 transition-colors">
            View All Products &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover="hover"
              initial="initial"
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/5] mb-4">
                {/* Product Image */}
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Flashy "Iced" Shine Effect Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  initial={{ x: '-100%', y: '100%' }}
                  variants={{
                    hover: { x: '100%', y: '-100%', transition: { duration: 0.8, ease: "easeInOut" } }
                  }}
                />

                {/* Add to Cart Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-purple-900/90 to-transparent">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/30">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-slate-100 group-hover:text-purple-600 transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={14} className="fill-orange-400 text-orange-400" />
                    <span className="text-sm text-slate-400">{product.rating}</span>
                  </div>
                </div>
                <span className="font-semibold text-purple-900">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 border border-purple-900 text-purple-600 font-medium py-3 rounded-xl hover:bg-purple-50 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Products;
