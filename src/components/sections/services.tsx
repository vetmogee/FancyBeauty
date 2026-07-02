import React from 'react';
import servicepedi from '../../assets/servicepedi.png';
import servicelash from '../../assets/servicelash.png';
import servicenailart from '../../assets/servicenailart.png';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      img: servicepedi,
      alt: t('service_manicure_title'),
      title: t('service_manicure_title'),
      text: t('service_manicure_text'),
    },
    {
      img: servicenailart,
      alt: t('service_nailart_title'),
      title: t('service_nailart_title'),
      text: t('service_nailart_text'),
    },
    {
      img: servicelash,
      alt: t('service_lashes_title'),
      title: t('service_lashes_title'),
      text: t('service_lashes_text'),
    },
  ];

  return (
    <section id="services" aria-labelledby="services-title" className="py-20 px-4 sm:px-6 lg:px-8 bg-marble">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="services-title" className="text-5xl text-stone-800 mb-3 tracking-wide">{t('services_title')}</h2>
          <span className="block w-16 h-px bg-gold-400 mx-auto mb-4"></span>
          <p className="text-stone-600 font-raleway font-semibold tracking-wider text-sm uppercase">{t('services_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <span className="block w-6 h-px bg-gold-400 mb-4"></span>
                <h3 className="text-2xl text-stone-800 mb-3 tracking-wide">{s.title}</h3>
                <p className="text-stone-600 font-raleway font-semibold leading-relaxed text-sm">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
