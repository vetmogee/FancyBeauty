import React from 'react';
import homeimg from '../../assets/homeimg.png';

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
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-8 flex flex-col justify-center items-center h-full">
            <h2 className="text-5xl font-bold text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-pink-400 to-rose-200 bg-clip-text text-transparent">FancyBeauty</span>
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