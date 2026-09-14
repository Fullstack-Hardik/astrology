import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Shield, Truck, RotateCcw } from 'lucide-react';
import AnimatedCartButton from '../components/ui/AnimatedCartButton';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // Mock product data based on ID (normally fetched from API)
  const product = {
    id: id,
    name: "Vedic Gold Ring",
    price: "$450.00",
    rating: 5.0,
    reviews: 124,
    description: "An authentic, spiritually charged Vedic ring designed to balance your planetary energies. Crafted with pure 24k gold and adorned with premium iced gems that align perfectly with your cosmic path.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67963c9e?q=80&w=1000&auto=format&fit=crop",
    features: ["Blessed by Vedic Scholars", "Premium Iced Out Gems", "24K Solid Gold Base", "Certificate of Authenticity"]
  };

  return (
    <div className="pt-24 pb-20 bg-slate-900/40 backdrop-blur-md min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-slate-400 mb-8">
          <Link to="/" className="hover:text-purple-600">Home</Link> &gt; 
          <Link to="/shop" className="hover:text-purple-600 ml-2">Shop</Link> &gt; 
          <span className="text-slate-50 ml-2">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden border border-purple-900/50 shadow-sm aspect-square bg-transparent relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-light text-purple-900">{product.price}</span>
              <div className="flex items-center gap-1 border-l border-slate-700 pl-4">
                <Star size={18} className="fill-orange-400 text-orange-400" />
                <span className="font-medium text-slate-300">{product.rating}</span>
                <span className="text-slate-400 text-sm">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-8">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-purple-900 rounded-xl bg-transparent w-32">
                <button 
                  className="px-4 py-3 text-slate-600 hover:text-purple-600"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >-</button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button 
                  className="px-4 py-3 text-slate-600 hover:text-purple-600"
                  onClick={() => setQuantity(quantity + 1)}
                >+</button>
              </div>
              <AnimatedCartButton className="w-full md:w-auto md:flex-1" />
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-purple-900/50">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Shield size={20} />
                </div>
                <span className="text-xs text-slate-600 font-medium">Secure Checkout</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                  <Truck size={20} />
                </div>
                <span className="text-xs text-slate-600 font-medium">Fast Worldwide Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <RotateCcw size={20} />
                </div>
                <span className="text-xs text-slate-600 font-medium">30-Day Returns</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
