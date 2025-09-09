import React from 'react';
import storypic from '../../assets/storypic.png';
import { Star } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with passion for beauty and excellence in 2018, FancyBeauty has been transforming nails and enhancing natural beauty 
                for almost a decade. Our team of certified professionals stays updated with the latest trends and techniques to ensure 
                you receive the highest quality service in a relaxing, hygienic environment.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => {
                    const rating = 4.25;
                    const starValue = i + 1;
                    // For each star, fillPercentage is:
                    // 1 for full, 0.25 for quarter, 0 for empty
                    let fillPercentage = 0;
                    if (rating >= starValue) {
                      fillPercentage = 1;
                    } else if (rating > i) {
                      fillPercentage = rating - i;
                    }
                    // Snap to 0.25 increments for visual accuracy
                    fillPercentage = Math.round(fillPercentage * 4) / 4;
                    return (
                      <div key={i} className="relative">
                        <Star className="h-5 w-5 text-gray-300" />
                        {fillPercentage > 0 && (
                          <div 
                            className="absolute inset-0 overflow-hidden"
                            style={{ width: `${fillPercentage * 100}%` }}
                          >
                            <Star className="h-5 w-5 fill-current" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <span className="text-gray-600">Rated 4.35/5 by our clients</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src={storypic}
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