import React from 'react';
import { useTranslation } from 'react-i18next';

interface BookProps {
  location?: 'schlieren' | 'zurich';
}

const LOCATIONS = [
  {
    key: 'schlieren' as const,
    nameKey: 'location_schlieren',
    whatsapp: 'https://wa.me/41779811788',
    instagram: 'https://www.instagram.com/obeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    key: 'zurich' as const,
    nameKey: 'location_zurich',
    whatsapp: 'https://wa.me/41782002699',
    instagram: 'https://www.instagram.com/fancyobeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
];

const Book: React.FC<BookProps> = ({ location }) => {
  const { t } = useTranslation();
  const locations = LOCATIONS.filter((l) => !location || l.key === location);

  return (
    <section id="book" aria-labelledby="book-title" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="border border-stone-100 p-10 shadow-sm">
          <div className="text-center mb-10">
            <h2 id="book-title" className="text-4xl text-stone-800 mb-3 tracking-wide">{t('book_title')}</h2>
            <span className="block w-12 h-px bg-gold-400 mx-auto mb-4"></span>
            <p className="text-stone-600 font-raleway font-semibold tracking-wider text-sm">{t('book_subtitle')}</p>
          </div>

          <div className={location ? 'max-w-md mx-auto' : 'grid md:grid-cols-2 gap-8 items-center'}>
            {locations.map((loc) => (
              <div key={loc.key} className="flex flex-col items-center text-center border border-stone-100 p-8">
                <p className="text-gold-700 font-raleway font-semibold tracking-[0.25em] uppercase text-xs mb-3">{t('book_location')}</p>
                <h3 className="text-2xl text-stone-800 mb-2 tracking-wide">{t(loc.nameKey)}</h3>
                <span className="block w-8 h-px bg-gold-300 mb-5"></span>
                <div className="flex flex-col sm:flex-row gap-3 w-full items-center justify-center">
                  <a
                    href={loc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border border-pink-400 text-pink-600 font-raleway font-semibold py-3 px-10 tracking-[0.2em] uppercase text-xs hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-colors duration-300"
                  >
                    {t('book_whatsapp')}
                  </a>
                  <a
                    href={loc.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border border-pink-400 text-pink-600 font-raleway font-semibold py-3 px-10 tracking-[0.2em] uppercase text-xs hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-colors duration-300"
                  >
                    {t('book_instagram')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
