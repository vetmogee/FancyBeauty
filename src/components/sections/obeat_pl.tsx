import React from 'react';
import { useTranslation } from 'react-i18next';

export const schlierenPriceList = [
  {
    category: 'Manicure',
    categoryKey: 'pl_category_manicure',
    items: [
      { nameKey: 'pl_item_classic_no_color', price: 'CHF 35' },
      { nameKey: 'pl_item_with_nail_polish', price: 'CHF 55' },
      { nameKey: 'pl_item_with_shellac', price: 'CHF 65' },
    ],
  },
  {
    category: 'Pedicure',
    categoryKey: 'pl_category_pedicure',
    items: [
      { nameKey: 'pl_item_classic_no_color', price: 'CHF 55' },
      { nameKey: 'pl_item_with_nail_polish', price: 'CHF 70' },
      { nameKey: 'pl_item_with_shellac', price: 'CHF 85' },
      { nameKey: 'pl_item_footlogix', price: 'CHF 90' },
      { nameKey: 'pl_item_footlogix_shellac', price: 'CHF 125' },
      { nameKey: 'pl_item_with_shellac_french', price: 'CHF 95' },
    ],
  },
  {
    category: 'Gel/Acrylic Set',
    categoryKey: 'pl_category_gel_acrylic',
    items: [
      { nameKey: 'pl_item_natural_no_color', refillPrice: 'CHF 70', newPrice: 'CHF 75' },
      { nameKey: 'pl_item_with_color', refillPrice: 'CHF 80', newPrice: 'CHF 85' },
      { nameKey: 'pl_item_french', refillPrice: 'CHF 90', newPrice: 'CHF 95' },
      { nameKey: 'pl_item_ombre', refillPrice: 'CHF 95', newPrice: 'CHF 95' },
    ],
  },
  {
    category: 'Other',
    categoryKey: 'pl_category_other',
    items: [
      { nameKey: 'pl_item_shellac_hands', price: 'CHF 45' },
      { nameKey: 'pl_item_shellac_feet', price: 'CHF 50' },
      { nameKey: 'pl_item_shellac_dry_manicure', price: 'CHF 55' },
      { nameKey: 'pl_item_nail_polish', price: 'CHF 30' },
      { nameKey: 'pl_item_nail_repair', price: 'from CHF 9' },
      { nameKey: 'pl_item_gel_acrylic_removal', price: 'CHF 35' },
      { nameKey: 'pl_item_shellac_removal', price: 'CHF 25' },
    ],
  },
  {
    category: 'Extras Design',
    categoryKey: 'pl_category_extras',
    items: [
      { nameKey: 'pl_item_glitter', price: 'CHF 3' },
      { nameKey: 'pl_item_rhinestones', price: 'CHF 1' },
      { nameKey: 'pl_item_hand_design', price: 'from CHF 3' },
      { nameKey: 'pl_item_3d_design', price: 'from CHF 8' },
      { nameKey: 'pl_item_extra_long_nails', price: 'from CHF 10' },
      { nameKey: 'pl_item_chrome_1nail', price: 'from CHF 3' },
    ],
  },
  {
    category: 'Lashes',
    categoryKey: 'pl_category_lashes',
    items: [
      { nameKey: 'pl_item_natural_look', price: 'CHF 100' },
      { nameKey: 'pl_item_refill_natural', price: 'from CHF 80' },
      { nameKey: 'pl_item_mascara_look', price: 'CHF 130' },
      { nameKey: 'pl_item_refill_mascara', price: 'from CHF 90' },
      { nameKey: 'pl_item_mega_volume', price: 'CHF 160' },
      { nameKey: 'pl_item_refill_mega', price: 'from CHF 110' },
      { nameKey: 'pl_item_anime_look', price: 'CHF 140' },
      { nameKey: 'pl_item_lash_removal', price: 'CHF 50' },
    ],
  },
];

interface ObeatPLProps {
  filter?: string;
}

const ObeatPL: React.FC<ObeatPLProps> = ({ filter = 'all' }) => {
  const { t } = useTranslation();

  const filteredSections = filter === 'all'
    ? schlierenPriceList
    : schlierenPriceList.filter(s => s.category === filter);

  const scrollToCategory = (category: string) => {
    const el = document.getElementById(`obeat-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {schlierenPriceList.map((s) => (
          <button
            key={s.category}
            onClick={() => scrollToCategory(s.category)}
            className="px-5 py-2 text-xs font-raleway font-semibold tracking-[0.15em] uppercase text-pink-600 bg-transparent border border-pink-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-colors duration-200"
          >
            {t(s.categoryKey)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSections.map((section) => (
          <div
            key={section.category}
            id={`obeat-${section.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-white border border-stone-100 p-6 sm:p-8 shadow-sm scroll-mt-8"
          >
            <span className="block w-6 h-px bg-gold-400 mb-4 mx-auto"></span>
            <h3 className="text-xl text-center text-stone-800 mb-5 tracking-wide">{t(section.categoryKey)}</h3>
            <div className="space-y-3">
              {section.category === 'Gel/Acrylic Set' ? (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-gold-100 text-stone-600 font-raleway font-semibold text-xs uppercase tracking-wider">
                    <span className="flex-1">{t('pl_col_service')}</span>
                    <span className="text-center flex-1">{t('pl_col_refill')}</span>
                    <span className="text-center flex-1">{t('pl_col_new')}</span>
                  </div>
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-b-0">
                      <span className="text-stone-600 font-raleway font-semibold flex-1 text-sm">{t(item.nameKey)}</span>
                      <span className="text-pink-600 font-raleway font-semibold text-center flex-1 text-sm">{item.refillPrice}</span>
                      <span className="text-pink-600 font-raleway font-semibold text-center flex-1 text-sm">{item.newPrice}</span>
                    </div>
                  ))}
                </>
              ) : (
                section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-b-0">
                    <span className="text-stone-600 font-raleway font-semibold text-sm">{t(item.nameKey)}</span>
                    <span className="text-pink-600 font-raleway font-semibold text-sm">{item.price}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObeatPL;
