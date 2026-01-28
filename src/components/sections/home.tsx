import React from 'react';
import homeimg from '../../assets/homeimg.png';
import storypic from '../../assets/storypic.png';
import { Star } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="mt-16">
      <div className="">
        <div className="relative overflow-hidden shadow-2xl h-96 lg:h-[900px] md:h-[500px] ">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 ">
            <img 
              src={homeimg} 
              alt="FancyBeauty Salon Interior" 
              className="w-full h-full object-cover unoptimized"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-8 flex flex-col justify-center items-center h-full">
            <h2 className="text-5xl font-bold text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">FancyBeauty</span>
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Step into a world of luxury and elegance at FancyBeauty, where your nails become a canvas of art. 
              Our expert technicians combine creativity with precision to deliver stunning nail designs that reflect your unique style. 
              From classic manicures to intricate nail art and luxurious lash extensions, we offer a complete beauty experience 
              in our state-of-the-art salon facilities in Zurich and Schlieren.
            </p> */}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 py-20">
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

export default Home; 