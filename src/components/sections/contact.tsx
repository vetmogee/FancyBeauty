import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="contact-title" className="text-5xl text-stone-800 mb-3 tracking-wide">{t('contact_title')}</h2>
          <span className="block w-16 h-px bg-gold-400 mx-auto mb-4"></span>
          <p className="text-stone-600 font-raleway font-semibold tracking-wider text-sm uppercase">{t('contact_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Zurich */}
          <div className="bg-white border border-stone-100 p-8 shadow-sm">
            <p className="text-gold-700 font-raleway font-semibold tracking-[0.25em] uppercase text-xs mb-2">{t('contact_location')}</p>
            <h3 className="text-3xl text-stone-800 mb-2 tracking-wide">{t('location_zurich')}</h3>
            <span className="block w-10 h-px bg-gold-400 mb-7"></span>

            <div className="space-y-4 mb-7">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-700 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+41782002699" className="text-stone-600 hover:text-pink-600 transition-colors font-raleway font-semibold text-sm">+41 078 200 26 99</a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-gold-700 flex-shrink-0" aria-hidden="true" />
                <a href="https://wa.me/41782002699" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-pink-600 transition-colors font-raleway font-semibold text-sm">WhatsApp</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold-700 flex-shrink-0" aria-hidden="true" />
                <a href="https://maps.app.goo.gl/bcjDb1y8XfT6LjdD9" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-pink-600 transition-colors font-raleway font-semibold text-sm">Bleicherweg 20, 8002 Zürich</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gold-700 flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25z" />
                </svg>
                <a href="https://www.instagram.com/fancyobeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-pink-600 transition-colors font-raleway font-semibold text-sm">@fancyobeauty.nails</a>
              </div>
            </div>

            <div className="mb-7">
              <p className="text-pink-600 font-raleway font-semibold tracking-[0.2em] uppercase text-xs mb-3">{t('contact_opening_hours')}</p>
              <ul className="text-stone-600 space-y-1 font-raleway font-semibold text-sm">
                <li>{t('contact_mon_fri')}</li>
                <li>{t('contact_sat')}</li>
                <li>{t('contact_sun')}</li>
              </ul>
            </div>

            <div className="w-full h-56 overflow-hidden border border-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10808.985515812854!2d8.536166999999999!3d47.3681096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b5d1f65d61d%3A0xec2f65fd7ca29d5e!2sFancy%20Beauty%20GmbH!5e0!3m2!1sen!2sch!4v1751979188946!5m2!1sen!2sch"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="FancyBeauty Zurich Location"
              />
            </div>
          </div>

          {/* Schlieren */}
          <div className="bg-white border border-stone-100 p-8 shadow-sm">
            <p className="text-gold-700 font-raleway font-semibold tracking-[0.25em] uppercase text-xs mb-2">{t('contact_location')}</p>
            <h3 className="text-3xl text-stone-800 mb-2 tracking-wide">{t('location_schlieren')}</h3>
            <span className="block w-10 h-px bg-gold-400 mb-7"></span>

            <div className="space-y-4 mb-7">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-700 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+41779811788" className="text-stone-600 hover:text-pink-600 transition-colors font-raleway font-semibold text-sm">+41 077 981 17 88</a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-gold-700 flex-shrink-0" aria-hidden="true" />
                <a href="https://wa.me/41779811788" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-pink-600 transition-colors font-raleway font-semibold text-sm">WhatsApp</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold-700 flex-shrink-0" aria-hidden="true" />
                <a href="https://maps.app.goo.gl/ovD47MnugcvtzYg38" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-pink-600 transition-colors font-raleway font-semibold text-sm">Wiesenstrasse 12a, 8952 Schlieren</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gold-700 flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25z" />
                </svg>
                <a href="https://www.instagram.com/obeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-pink-600 transition-colors font-raleway font-semibold text-sm">@obeauty.nails</a>
              </div>
            </div>

            <div className="mb-7">
              <p className="text-pink-600 font-raleway font-semibold tracking-[0.2em] uppercase text-xs mb-3">{t('contact_opening_hours')}</p>
              <ul className="text-stone-600 space-y-1 font-raleway font-semibold text-sm">
                <li>{t('contact_mon_fri')}</li>
                <li>{t('contact_sat')}</li>
                <li>{t('contact_sun')}</li>
              </ul>
            </div>

            <div className="w-full h-56 overflow-hidden border border-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.6254407430106!2d8.44040267684534!3d47.399740602238815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900dec7a57cddb%3A0xe63fff5fd7fbebb0!2sO%20Beauty%20Nails%20%26%20Lashes!5e0!3m2!1sen!2sch!4v1751979300344!5m2!1sen!2sch"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="FancyBeauty Schlieren Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
