
import { useState } from 'react';
import ObeatPL from '../components/sections/obeat_pl';
import FancyPL from '../components/sections/fancy_pl';
import Navbar from '../components/sections/navbar';
import Home from '../components/sections/home';
import Services from '../components/sections/services';
import Gallery from '../components/sections/gallery';
import Reviews from '../components/sections/reviews';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/footer';
import Book from '../components/sections/book';
import { useSectionTracking } from '../hooks/useSectionTracking';
import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t } = useTranslation();
    const [activePriceList, setActivePriceList] = useState<'schlieren' | 'zurich'>('schlieren');

    const sectionIds = [
        'home',
        'book',
        'services',
        'pricelist',
        'gallery',
        'reviews',
        'contact',
    ];

  const { activeSection, scrollToSection, isScrolling } = useSectionTracking(sectionIds, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0.5,
    scrollOffset: 100,
    debounceMs: 50,
  });

    const handlePriceListClick = (location: 'schlieren' | 'zurich') => {
        scrollToSection('pricelist');
        setActivePriceList(location);
    };

    const handlePriceListSectionClick = () => {
        scrollToSection('pricelist');
    };

  return (
    <div className="min-h-screen bg-marble">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        handlePriceListSectionClick={handlePriceListSectionClick}
        activePriceList={activePriceList}
        handlePriceListClick={handlePriceListClick}
        isScrolling={isScrolling}
      />

      <Home />
      <Book />
      <Services />

      {/* Price List Section */}
      <section id="pricelist" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl text-stone-800 mb-3 tracking-wide">Price List</h2>
            <span className="block w-16 h-px bg-gold-400 mx-auto mb-4"></span>
            <p className="text-stone-500 font-raleway font-light tracking-wider text-sm uppercase">Transparent pricing for all our services</p>
          </div>

          <div className="flex justify-center gap-0 mb-12">
            <button
              className={`px-10 py-3 text-sm font-raleway font-light tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none border border-pink-400
                ${activePriceList === 'schlieren' ? 'bg-pink-500 text-white border-pink-500' : 'bg-transparent text-pink-500 hover:bg-pink-50'}`}
              onClick={() => handlePriceListClick('schlieren')}
            >
              Schlieren
            </button>
            <button
              className={`px-10 py-3 text-sm font-raleway font-light tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none border border-pink-400 border-l-0
                ${activePriceList === 'zurich' ? 'bg-pink-500 text-white border-pink-500' : 'bg-transparent text-pink-500 hover:bg-pink-50'}`}
              onClick={() => handlePriceListClick('zurich')}
            >
              Zurich
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
