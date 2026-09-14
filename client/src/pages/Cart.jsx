import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  // Mock cart items
  const cartItems = [
    { id: 1, name: "Amethyst Crystal Pendant", price: 120.00, quantity: 1, image: "https://images.unsplash.com/photo-1599643478524-fb666453630f?q=80&w=200&auto=format&fit=crop" },
    { id: 2, name: "Vedic Gold Ring", price: 450.00, quantity: 2, image: "https://images.unsplash.com/photo-1605100804763-247f67963c9e?q=80&w=200&auto=format&fit=crop" }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-50 mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-6 bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-purple-900/50">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-slate-50 line-clamp-1">{item.name}</h3>
                    <p className="text-purple-600 font-semibold mt-1">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                    <div className="flex items-center border border-slate-700 rounded-lg">
                      <button className="px-3 py-1 text-slate-400 hover:text-purple-600">-</button>
                      <span className="px-2 font-medium text-sm">{item.quantity}</span>
                      <button className="px-3 py-1 text-slate-400 hover:text-purple-600">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-sm border border-purple-900/50 h-fit">
              <h2 className="text-xl font-bold text-slate-50 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-slate-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-50">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Estimate</span>
                  <span className="font-medium text-slate-50">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-purple-900/50 pt-4 flex justify-between">
                  <span className="font-bold text-lg text-slate-50">Total</span>
                  <span className="font-bold text-lg text-purple-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
                Proceed to Checkout
              </button>
              
              <Link to="/shop" className="block text-center mt-4 text-sm font-medium text-purple-600 hover:text-purple-700">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900 rounded-2xl shadow-sm border border-purple-900/50">
            <p className="text-slate-400 text-lg mb-6">Your cart is completely empty.</p>
            <Link to="/shop" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-xl transition-colors">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
