import React from 'react';

const Home = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="FancyBeauty Salon Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            <h2 className="text-5xl font-bold text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">FancyBeauty</span>
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
    </section>
  );
};

export default Home; 