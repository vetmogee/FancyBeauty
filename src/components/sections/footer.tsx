import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // Helper for nav buttons: if on /abg, navigate home and pass section; else, scroll
  const handleNav = (section: string) => {
    if (location.pathname === '/abg') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scrollToSection(section);
    }
  };
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-rose-300 text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FancyBeauty</h3>
            <p className="text-black-100 leading-relaxed">
              Your premier destination for luxury nail care and beauty services in Zurich and Schlieren.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Services', 'Price List', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => handleNav(link.toLowerCase().replace(' ', ''))}
                  className="block text-gray-900 hover:text-black transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
              {/* Book Button */}
              <button
                onClick={() => handleNav('book')}
                className="block text-back-100 hover:text-black transition-colors duration-200"
              >
                Book
              </button>
              {/* ABG Page Button */}
              <button
                onClick={() => navigate('/abg')}
                className="block text-back-100 hover:text-black transition-colors duration-200"
              >
                ABG
              </button>
            </div>
          </div>
          
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-pink-200 text-center">
          <p className="text-black-100">
            © 2024 FancyBeauty GmbH. All rights reserved. | Crafted with ❤️ in Switzerland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 