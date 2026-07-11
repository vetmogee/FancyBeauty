import React, { useEffect, useRef, useState } from 'react';
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

// hidden state per element: mobile always drops down; on md+ the text
// comes in from the left and the image from the right
const hiddenStates = [
  'opacity-0 -translate-y-10 md:translate-y-0 md:-translate-x-10',
  'opacity-0 -translate-y-10 md:translate-y-0 md:translate-x-10',
];

const Home: React.FC<HomeProps> = ({ location }) => {
  const { t } = useTranslation();
  const hero = location ? HERO_BY_LOCATION[location] : { title: 'FancyBeauty', taglineKey: 'home_tagline' };
  const [visible, setVisible] = useState<boolean[]>([false, false]);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heroShown, setHeroShown] = useState(false);

  useEffect(() => {
    // wait a frame so the hidden state paints before animating in
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setHeroShown(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = revealRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx === -1) return;
          setVisible((v) => v.map((shown, i) => (i === idx ? true : shown)));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const revealClass = (i: number) =>
    `transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
      visible[i] ? 'opacity-100 translate-x-0 translate-y-0' : hiddenStates[i]
    }`;

  return (
    <section id="home" aria-labelledby="home-title" className="mt-[60px] lg:mt-[75px]">
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
          <p
            className={`text-gold-300 font-raleway font-semibold tracking-[0.35em] uppercase text-xs transition-all duration-1000 delay-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroShown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
            }`}
          >
            {t(hero.taglineKey)}
          </p>
          <h1
            id="home-title"
            className={`text-6xl lg:text-8xl text-white tracking-wider leading-none transition-all duration-1000 delay-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              heroShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {hero.title}
          </h1>
          <span className="block w-20 h-px bg-gold-400 mx-auto"></span>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="bg-white border border-stone-100 p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={(el) => { revealRefs.current[0] = el; }} className={revealClass(0)}>
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
            <div ref={(el) => { revealRefs.current[1] = el; }} className={`relative ${revealClass(1)}`}>
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
