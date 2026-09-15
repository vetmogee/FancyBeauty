import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import { PROMO_RATE } from '@/lib/promo';

const discountPercent = Math.round(PROMO_RATE * 100);

// Studio promo landing page: fancybeauty.ch/promo/zoomin
const ZoomIn = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#efe2d8]">
      {/* Back to /promo — like the AGB back button, always returns to the promo overview */}
      <Link
        to="/promo"
        className="absolute left-4 top-4 z-20 inline-flex items-center gap-1 rounded-full bg-white/70 px-4 py-2 font-raleway text-xs font-semibold uppercase tracking-[0.1em] text-stone-700 shadow-sm backdrop-blur-sm transition-colors hover:text-[#c85a5a]"
      >
        <ChevronLeft className="h-4 w-4" />
        {t('promo_back')}
      </Link>

      <div className="lg:mx-auto lg:flex lg:min-h-screen lg:max-w-6xl lg:items-center lg:justify-center lg:gap-12 lg:p-10">
        {/* Image — full screen on mobile, capped to a maximum size on desktop */}
        <img
          src="/promo.png"
          alt={t('promo_zoomin_alt', { percent: discountPercent })}
          className="h-screen w-full object-cover lg:h-auto lg:max-h-[85vh] lg:w-auto lg:max-w-[46%] lg:rounded-lg lg:object-contain lg:shadow-lg"
        />

        {/* Text — paddingX of 10px on mobile, sits parallel to the image on desktop */}
        <div className="px-[10px] py-12 text-center lg:flex lg:max-w-md lg:flex-1 lg:flex-col lg:justify-center lg:py-0 lg:text-left">
          <h1 className="font-cormorant text-5xl leading-none text-[#c85a5a] sm:text-6xl">
            {t('promo_zoomin_title')}
          </h1>

          <p className="mt-6 font-raleway text-lg font-semibold uppercase tracking-[0.15em] text-[#c85a5a]">
            ✨ {t('promo_zoomin_offer', { percent: discountPercent })} ✨
          </p>
          <p className="mt-1 font-raleway text-base font-medium tracking-wide text-stone-600">
            {t('promo_zoomin_dates')}
          </p>

          <p className="mx-auto mt-8 max-w-sm font-raleway text-base leading-relaxed text-stone-600 lg:mx-0">
            {t('promo_zoomin_body')}
          </p>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-block bg-[#c85a5a] px-10 py-3 font-raleway text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#b34848]"
            >
              {t('promo_zoomin_cta')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomIn;
