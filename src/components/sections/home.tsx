import React from 'react';
import homeimg from '../../assets/homeimg.png';
import storypic from '../../assets/storypic.png';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HomeProps {
  location?: 'schlieren' | 'zurich';
}

const HERO_BY_LOCATION = {
  schlieren: { title: 'OBeauty', taglineKey: 'home_tagline_obeauty' },
  zurich: { title: 'Fancy by OBeauty', taglineKey: 'home_tagline_fancy' },
};

const Home: React.FC<HomeProps> = ({ location }) => {
  const { t } = useTranslation();
  const hero = location ? HERO_BY_LOCATION[location] : { title: 'FancyBeauty', taglineKey: 'home_tagline' };

  return (
    <section id="home" aria-labelledby="home-title" className="mt-[75px]">
      {/* Hero */}
      <div className="relative overflow-hidden h-96 lg:h-[900px] md:h-[500px]">
        <div className="absolute inset-0">
          <img
            src={homeimg}
            alt="FancyBeauty Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-400"></div>
        <div className="relative z-10 text-center px-8 flex flex-col justify-center items-center h-full gap-5">
          <p className="text-gold-300 font-raleway font-semibold tracking-[0.35em] uppercase text-xs">{t(hero.taglineKey)}</p>
          <h1 id="home-title" className="text-6xl lg:text-8xl text-white tracking-wider leading-none">
            {hero.title}
          </h1>
          <span className="block w-20 h-px bg-gold-400 mx-auto"></span>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="bg-white border border-stone-100 p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-700 font-raleway font-semibold tracking-[0.25em] uppercase text-xs mb-4">{t('home_since')}</p>
              <h2 id="home-story-title" className="text-4xl text-stone-800 mb-5 tracking-wide">{t('home_story_title')}</h2>
              <span className="block w-12 h-px bg-gold-400 mb-6"></span>
              <p className="text-stone-600 font-raleway font-semibold leading-relaxed mb-8 text-sm">
                {t('home_story_text')}
              </p>
              <div className="flex items-center space-x-3">
                <div className="flex text-pink-400" aria-hidden="true">
                  {[...Array(5)].map((_, i) => {
                    const rating = 4.25;
                    const starValue = i + 1;
                    let fillPercentage = 0;
                    if (rating >= starValue) fillPercentage = 1;
                    else if (rating > i) fillPercentage = rating - i;
                    fillPercentage = Math.round(fillPercentage * 4) / 4;
                    return (
                      <div key={i} className="relative">
                        <Star className="h-4 w-4 text-stone-200" />
                        {fillPercentage > 0 && (
                          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage * 100}%` }}>
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <span className="text-stone-600 font-raleway font-semibold text-xs tracking-wider">{t('home_rating')}</span>
              </div>
            </div>
            <div className="relative">
              <img
                src={storypic}
                alt="Nail technician at work in FancyBeauty studio"
                className="w-full h-80 object-cover shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold-400"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
