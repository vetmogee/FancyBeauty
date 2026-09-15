import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/sections/navbar';
import Footer from '@/components/sections/footer';
import { activePromos } from '@/lib/promo';

// Promo overview page: fancybeauty.ch/promo
// Lists every studio promo whose date window is currently running.
const PromoIndex = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const running = activePromos();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // The navbar/footer intercept nav clicks on /promo internally (they route to
  // /home). These are just fallbacks to satisfy the shared component props.
  const goHome = () => navigate('/home');

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar
        activeSection={''}
        scrollToSection={goHome}
        handlePriceListSectionClick={goHome}
        activePriceList={'schlieren'}
        handlePriceListClick={goHome}
      />

      <main className="px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-3 font-cormorant text-5xl tracking-wide text-stone-800">
              {t('promo_index_title')}
            </h1>
            <span className="mx-auto mb-4 block h-px w-16 bg-gold-400"></span>
            <p className="font-raleway text-sm font-light uppercase tracking-wider text-stone-600">
              {t('promo_index_subtitle')}
            </p>
          </div>

          {running.length === 0 ? (
            <p className="mx-auto max-w-md text-center font-raleway text-stone-500">
              {t('promo_index_empty')}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {running.map((promo) => (
                <Link
                  key={promo.slug}
                  to={promo.path}
                  className="group flex flex-col overflow-hidden border border-stone-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-[#efe2d8]">
                    <img
                      src={promo.image}
                      alt={t(promo.titleKey)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-cormorant text-2xl text-stone-800">
                      {t(promo.titleKey)}
                    </h2>
                    <p className="mt-2 font-raleway text-sm font-semibold uppercase tracking-[0.15em] text-[#c85a5a]">
                      {t(promo.offerKey, { percent: promo.discountPercent })}
                    </p>
                    <p className="mt-1 font-raleway text-sm text-stone-500">
                      {t(promo.datesKey)}
                    </p>
                    <span className="mt-5 inline-block font-raleway text-xs font-semibold uppercase tracking-[0.2em] text-[#c85a5a] group-hover:underline">
                      {t('promo_index_view')} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer scrollToSection={goHome} />
    </div>
  );
};

export default PromoIndex;
