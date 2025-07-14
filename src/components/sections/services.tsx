import React from 'react';
import servicepedi from '../../assets/servicepedi.png';
import servicelash from '../../assets/servicelash.png';
import servicenailart from '../../assets/servicenailart.png'

const Services = () => {
  return (
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
                src={servicepedi}                
                alt="Manicure and Pedicure" 
                className="w-full h-48 object-cover     rounded-2xl mb-6"
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
                src={servicenailart }
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
                src={servicelash}
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
  );
};

export default Services; 