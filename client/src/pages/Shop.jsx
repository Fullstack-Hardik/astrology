import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Filter } from 'lucide-react';

const products = [
  { id: 1, name: "Amethyst Crystal Pendant", price: "$120.00", rating: 4.8, image: "https://images.unsplash.com/photo-1599643478524-fb666453630f?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Vedic Gold Ring", price: "$450.00", rating: 5.0, image: "https://images.unsplash.com/photo-1605100804763-247f67963c9e?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Rose Quartz Bracelet", price: "$85.00", rating: 4.6, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Sapphire Astrological Gem", price: "$890.00", rating: 4.9, image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, name: "Emerald Harmony Ring", price: "$750.00", rating: 4.7, image: "https://images.unsplash.com/photo-1573408301145-b98c4af01156?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, name: "Spiritual Healing Necklace", price: "$195.00", rating: 4.8, image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1000&auto=format&fit=crop" },
];

const Shop = () => {
  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-purple-900 mb-2">Cosmic Shop</h1>
            <p className="text-slate-600">Discover premium iced jewelry aligned with your destiny.</p>
          </div>
          <button className="mt-4 md:mt-0 flex items-center gap-2 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-purple-900/50 text-purple-900 hover:bg-purple-50 transition-colors">
            <Filter size={18} />
            Filter & Sort
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden border border-purple-900/50">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <Link to={`/product/${product.id}`} className="text-lg font-medium text-slate-50 hover:text-purple-600 transition-colors line-clamp-1">
                    {product.name}
                  </Link>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star size={16} className="fill-orange-400 text-orange-400" />
                  <span className="text-sm text-slate-600">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-900">{product.price}</span>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
