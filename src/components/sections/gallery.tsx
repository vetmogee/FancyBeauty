import React from 'react';
import { useTranslation } from 'react-i18next';

interface GalleryProps {
  location?: 'schlieren' | 'zurich';
}

const LOCATIONS = [
  { key: 'zurich' as const, handle: '@fancyobeauty.nails', url: 'https://www.instagram.com/fancyobeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { key: 'schlieren' as const, handle: '@obeauty.nails', url: 'https://www.instagram.com/obeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
];

const Gallery: React.FC<GalleryProps> = ({ location }) => {
  const { t } = useTranslation();
  const locations = LOCATIONS.filter((l) => !location || l.key === location);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 id="gallery-title" className="text-5xl text-stone-800 mb-3 tracking-wide">{t('gallery_title')}</h2>
          <span className="block w-16 h-px bg-gold-400 mx-auto mb-4"></span>
          <p className="text-stone-600 font-raleway font-semibold tracking-wider text-sm uppercase mb-8">
            {t('gallery_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {locations.map((loc) => (
              <a
                key={loc.key}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-3 border border-pink-400 text-pink-600 font-raleway font-semibold tracking-[0.2em] uppercase text-xs hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25z" />
                </svg>
                <span>{loc.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
