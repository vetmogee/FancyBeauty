import React from 'react';
import { Star } from 'lucide-react';

const Story = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with passion for beauty and excellence, FancyBeauty has been transforming nails and enhancing natural beauty 
                for over a decade. Our team of certified professionals stays updated with the latest trends and techniques to ensure 
                you receive the highest quality service in a relaxing, hygienic environment.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">Rated 5/5 by our clients</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="FancyBeauty Salon Interior" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story; 