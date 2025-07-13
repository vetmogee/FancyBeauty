import React from 'react';

const Home = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">FancyBeauty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step into a world of luxury and elegance at FancyBeauty, where your nails become a canvas of art. 
            Our expert technicians combine creativity with precision to deliver stunning nail designs that reflect your unique style. 
            From classic manicures to intricate nail art and luxurious lash extensions, we offer a complete beauty experience 
            in our state-of-the-art salon facilities in Zurich and Schlieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home; 