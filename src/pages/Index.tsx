
import { useState } from 'react';
import ObeatPL from '../components/sections/obeat_pl';
import FancyPL from '../components/sections/fancy_pl';
import Navbar from '../components/sections/navbar';
import Home from '../components/sections/home';
import Story from '../components/sections/story';
import Services from '../components/sections/services';
import Gallery from '../components/sections/gallery';
import Reviews from '../components/sections/reviews';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activePriceList, setActivePriceList] = useState<'schlieren' | 'zurich'>('schlieren');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handlePriceListClick = (location: 'schlieren' | 'zurich') => {
    scrollToSection('pricelist');
    setActivePriceList(location);
  };

  const handlePriceListSectionClick = () => {
    scrollToSection('pricelist');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        handlePriceListSectionClick={handlePriceListSectionClick}
        activePriceList={activePriceList}
        handlePriceListClick={handlePriceListClick}
      />

      {/* Home Section */}
      <Home />

      {/* Story Section */}
      <Story />

      {/* Services Section */}
      <Services />

      {/* Price List Section */}
      <section id="pricelist" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Price List</h2>
            <p className="text-xl text-gray-600">Transparent pricing for all our services</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-10">
            <button
              className={`relative px-8 py-3 rounded-full text-lg font-semibold transition-all duration-500 overflow-hidden focus:outline-none border-2 border-pink-400 shadow-md
                ${activePriceList === 'schlieren' ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white scale-105' : 'bg-white text-pink-600 hover:bg-pink-50'}`}
              onClick={() => handlePriceListClick('schlieren')}
            >
              <span className="block transition-all duration-500" style={{ opacity: activePriceList === 'schlieren' ? 1 : 0.7 }}>Obeauty</span>
            </button>
            <button
              className={`relative px-8 py-3 rounded-full text-lg font-semibold transition-all duration-500 overflow-hidden focus:outline-none border-2 border-purple-400 shadow-md
                ${activePriceList === 'zurich' ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white scale-105' : 'bg-white text-purple-600 hover:bg-purple-50'}`}
              onClick={() => handlePriceListClick('zurich')}
            >
              <span className="block transition-all duration-500" style={{ opacity: activePriceList === 'zurich' ? 1 : 0.7 }}>Fancy</span>
            </button>
          </div>
          

          <div className="relative">
            <div
              className={`transition-all duration-700 ${activePriceList === 'schlieren' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-10 z-0 absolute w-full'} pointer-events-${activePriceList === 'schlieren' ? 'auto' : 'none'}`}
            >
              <ObeatPL />
            </div>
            <div
              className={`transition-all duration-700 ${activePriceList === 'zurich' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 z-0 absolute w-full'} pointer-events-${activePriceList === 'zurich' ? 'auto' : 'none'}`}
            >
              <FancyPL />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
