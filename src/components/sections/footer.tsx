import React from 'react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
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
  );
};

export default Footer; 