import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    text: 'I have been in O beauty nails couple of times for designed gel nails. I am so happy with the quality of their work. I can highly recommend.',
    author: 'Ozde Sueslue',
  },
  {
    text: 'The best Manicure, Pedicure and Lashes in whole zurich! The whole team is very kind and friendly. I will never change the Studio ❤️.',
    author: 'Giulia Del Grosso',
  },
  {
    text: 'Great pedicures; it was a relaxing "me time" with a massage chair. I also liked the fact that they offer coffee or soft drink to customers. Next time will try also their manicures.',
    author: 'Tugce Z. Ragazzini',
  },
];

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-marble">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl text-stone-800 mb-3 tracking-wide">{t('reviews_title')}</h2>
          <span className="block w-16 h-px bg-gold-400 mx-auto mb-4"></span>
          <p className="text-stone-400 font-raleway font-semibold tracking-wider text-sm uppercase">{t('reviews_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.author} className="bg-white border border-stone-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex text-pink-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-500 font-raleway font-semibold leading-relaxed mb-6 text-sm italic">
                "{r.text}"
              </p>
              <span className="block w-6 h-px bg-gold-300 mb-4"></span>
              <div className="text-stone-700 font-raleway font-semibold text-xs tracking-[0.15em] uppercase">{r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
