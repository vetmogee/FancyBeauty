
import { useState } from 'react';
import { Phone, MapPin, Star, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '../components/ui/dropdown-menu';
import ObeatPL from '../components/sections/obeat_pl';
import FancyPL from '../components/sections/fancy_pl';
import Navbar from '../components/sections/navbar';
import Home from '../components/sections/home';
import Story from '../components/sections/story';

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
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Discover our range of premium beauty services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Manicure/Pedicure */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Manicure and Pedicure" 
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manicure & Pedicure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Indulge in our luxurious manicure and pedicure treatments. From classic French tips to modern gel applications, 
                  our skilled technicians ensure your nails are perfectly shaped, polished, and pampered. Includes cuticle care, 
                  hand and foot massage, and your choice of premium polish colors.
                </p>
              </div>
            </div>

            {/* Nail Art Design */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Nail Art Design" 
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nail Art Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Express your creativity with our custom nail art designs. From intricate patterns and geometric shapes to 
                  seasonal themes and personalized artwork, our artists create unique masterpieces on your nails. 
                  We use high-quality materials and the latest techniques for long-lasting, stunning results.
                </p>
              </div>
            </div>

            {/* Lashes */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Eyelash Extensions" 
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lashes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhance your natural beauty with our professional eyelash extension services. Choose from classic, 
                  volume, or hybrid lash styles to achieve your desired look. Our certified lash technicians use premium, 
                  lightweight lashes that are safe, comfortable, and designed to last for weeks with proper care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600">Coming soon - showcase of our beautiful work</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
            <p className="text-xl text-gray-600">What our satisfied clients say about us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <div className="font-semibold text-gray-900">- Sarah M.</div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="font-semibold text-gray-900">- Maria K.</div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."
              </p>
              <div className="font-semibold text-gray-900">- Anna L.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Visit us at one of our convenient locations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Zurich Location */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Zurich Location</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-pink-600" />
                  <a href="tel:+41782002699" className="text-gray-700 hover:underline focus:underline outline-none">+41 078 200 26 99</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-pink-600" />
                  <a href="https://maps.app.goo.gl/bcjDb1y8XfT6LjdD9" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline focus:underline outline-none">Bleicherweg 20, 8002 Zürich</a>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-pink-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25z" />
                  </svg>
                  <a href="https://www.instagram.com/fancyobeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline focus:underline outline-none">@fancyobeauty.nails</a>
                </div>
              </div>
              {/* Opening Hours Zurich */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-pink-600 mb-2">Opening Hours</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>Monday - Friday: 9:30 - 7:30 </li>
                  <li>Saturday: 9:30 - 6:00 </li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10808.985515812854!2d8.536166999999999!3d47.3681096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b5d1f65d61d%3A0xec2f65fd7ca29d5e!2sFancy%20Beauty%20GmbH!5e0!3m2!1sen!2sch!4v1751979188946!5m2!1sen!2sch"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FancyBeauty Zurich Location"
                />
              </div>
            </div>

            {/* Schlieren Location */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Schlieren Location</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <a href="tel:+41779811788" className="text-gray-700 hover:underline focus:underline outline-none">+41 077 981 17 88</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <a href="https://maps.app.goo.gl/ovD47MnugcvtzYg38" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline focus:underline outline-none">Wiesenstrasse 12a, 8952 Schlieren</a>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25z" />
                  </svg>
                  <a href="https://www.instagram.com/obeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline focus:underline outline-none">@obeauty.nails</a>
                </div>
              </div>
              {/* Opening Hours Schlieren */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Opening Hours</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>Monday - Friday: 9:30 -7:30 </li>
                  <li>Saturday: 9:30 - 6:00 </li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.6254407430106!2d8.44040267684534!3d47.399740602238815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900dec7a57cddb%3A0xe63fff5fd7fbebb0!2sO%20Beauty%20Nails%20%26%20Lashes!5e0!3m2!1sen!2sch!4v1751979300344!5m2!1sen!2sch"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FancyBeauty Schlieren Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">FancyBeauty</h3>
              <p className="text-pink-100 leading-relaxed">
                Your premier destination for luxury nail care and beauty services in Zurich and Schlieren.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Services', 'Price List', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                    className="block text-pink-100 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-pink-100">
                <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                <div>Saturday: 9:00 AM - 6:00 PM</div>
                <div>Sunday: 10:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-pink-400 text-center">
            <p className="text-pink-100">
              © 2024 FancyBauty GMBH. All rights reserved. | Crafted with ❤️ in Switzerland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
