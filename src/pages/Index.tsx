
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import Book from '../components/sections/book';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activePriceList, setActivePriceList] = useState<'schlieren' | 'zurich'>('schlieren');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scrollToSection(location.state.scrollTo);
      // Remove scrollTo from state so it doesn't repeat
      navigate(location.pathname, { replace: true, state: {} });
    }
    // eslint-disable-next-line
  }, [location.state]);

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

  const sectionIds = [
    'home',
    'story',
    'book',
    'services',
    'pricelist',
    'gallery',
    'reviews',
    'contact',
  ];

  // Track section refs for IntersectionObserver
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Set up refs
    sectionIds.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the entry that is most visible (largest intersectionRatio)
      let maxRatio = 0;
      let visibleSection = activeSection;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          visibleSection = entry.target.id;
        }
      });
      if (visibleSection && visibleSection !== activeSection) {
        setActiveSection(visibleSection);
      }
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px 0px -60% 0px', // Trigger when section is 40% from top
      threshold: [0.2, 0.4, 0.6, 0.8, 1],
    });
    sectionIds.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line
  }, []);

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
      
      {/* Book Section */}
      <Book />

      {/* Services Section */}
      <Services />
      
      {/* Price List Section */}
      <section id="pricelist" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Price List</h2>
            <p className="text-xl text-gray-600">Transparent pricing for all our services</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-10">
            <button
              className={`relative px-8 py-3 rounded-full text-lg font-semibold transition-all duration-500 overflow-hidden focus:outline-none border-2 border-pink-400 shadow-md
                ${activePriceList === 'schlieren' ? 'bg-gradient-to-r from-pink-400 to-rose-300 text-white scale-105' : 'bg-white text-pink-600 hover:bg-pink-50'}`}
              onClick={() => handlePriceListClick('schlieren')}
            >
              <span className="block transition-all duration-500" style={{ opacity: activePriceList === 'schlieren' ? 1 : 0.7 }}>Schlieren</span>
            </button>
            <button
              className={`relative px-8 py-3 rounded-full text-lg font-semibold transition-all duration-500 overflow-hidden focus:outline-none border-2 border-pink-400 shadow-md
                ${activePriceList === 'zurich' ? 'bg-gradient-to-r from-rose-100 to-pink-400 text-white scale-105' : 'bg-white text-pink-600 hover:bg-purple-50'}`}
              onClick={() => handlePriceListClick('zurich')}
            >
              <span className="block transition-all duration-500" style={{ opacity: activePriceList === 'zurich' ? 1 : 0.7 }}>Zurich</span>
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
