
import { useState } from 'react';
import { Phone, MapPin, Star } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                FancyBeauty
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'services', 'pricelist', 'gallery', 'reviews', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize ${
                      activeSection === section
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
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
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded with passion for beauty and excellence, FancyBeauty has been transforming nails and enhancing natural beauty 
                  for over a decade. Our team of certified professionals stays updated with the latest trends and techniques to ensure 
                  you receive the highest quality service in a relaxing, hygienic environment.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">Rated 5/5 by our clients</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="FancyBeauty Salon Interior" 
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Manicure/Pedicure Prices */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Manicure & Pedicure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Classic Manicure</span>
                  <span className="font-semibold text-pink-600">CHF 45</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Gel Manicure</span>
                  <span className="font-semibold text-pink-600">CHF 65</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Classic Pedicure</span>
                  <span className="font-semibold text-pink-600">CHF 55</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Spa Pedicure</span>
                  <span className="font-semibold text-pink-600">CHF 75</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Mani + Pedi Combo</span>
                  <span className="font-semibold text-pink-600">CHF 90</span>
                </div>
              </div>
            </div>

            {/* Nail Art Prices */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Nail Art Design</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Simple Design (per nail)</span>
                  <span className="font-semibold text-purple-600">CHF 8</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Complex Design (per nail)</span>
                  <span className="font-semibold text-purple-600">CHF 15</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">3D Art (per nail)</span>
                  <span className="font-semibold text-purple-600">CHF 20</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Full Set Art Design</span>
                  <span className="font-semibold text-purple-600">CHF 120</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Seasonal Special</span>
                  <span className="font-semibold text-purple-600">CHF 95</span>
                </div>
              </div>
            </div>

            {/* Lashes Prices */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Lashes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Classic Lashes</span>
                  <span className="font-semibold text-indigo-600">CHF 120</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Volume Lashes</span>
                  <span className="font-semibold text-indigo-600">CHF 180</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Hybrid Lashes</span>
                  <span className="font-semibold text-indigo-600">CHF 150</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Lash Fill (2-3 weeks)</span>
                  <span className="font-semibold text-indigo-600">CHF 80</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Lash Removal</span>
                  <span className="font-semibold text-indigo-600">CHF 30</span>
                </div>
              </div>
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
                  <span className="text-gray-700">+41 44 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-pink-600" />
                  <span className="text-gray-700">Bahnhofstrasse 123, 8001 Zurich</span>
                </div>
              </div>
              
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.0424!2d8.5386!3d47.3769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIyJzM3LjAiTiA4wrAzMicxOS4wIkU!5e0!3m2!1sen!2sch!4v1620000000000!5m2!1sen!2sch"
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
                  <span className="text-gray-700">+41 44 987 6543</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Zürcherstrasse 45, 8952 Schlieren</span>
                </div>
              </div>
              
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.8945!2d8.4486!3d47.3989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIzJzU2LjAiTiA4wrAyNic1NS4wIkU!5e0!3m2!1sen!2sch!4v1620000000000!5m2!1sen!2sch"
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
              © 2024 FancyBeauty. All rights reserved. | Crafted with ❤️ in Switzerland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
