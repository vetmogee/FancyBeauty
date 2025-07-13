import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
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
                <MessageCircle className="h-5 w-5 text-green-600" />
                <a href="https://wa.me/41782002699" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline focus:underline outline-none">+41 078 200 26 99</a>
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
                <MessageCircle className="h-5 w-5 text-green-600" />
                <a href="https://wa.me/41779811788" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline focus:underline outline-none">+41 077 981 17 88</a>
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
  );
};

export default Contact; 