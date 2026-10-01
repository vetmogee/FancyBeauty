import React from 'react';
import { useTranslation } from 'react-i18next';
import PromoPrice from '@/components/PromoPrice';
import type { PriceSection } from './priceList';

interface PriceListGridProps {
  /** Prefix for the section anchor ids, so two grids can share a page. */
  sections: PriceSection[];
  idPrefix: string;
  filter?: string;
}

const PriceListGrid: React.FC<PriceListGridProps> = ({ sections, idPrefix, filter = 'all' }) => {
  const { t } = useTranslation();

  const sectionId = (category: string) =>
    `${idPrefix}-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  const filteredSections = filter === 'all'
    ? sections
    : sections.filter(s => s.category === filter);

  const scrollToCategory = (category: string) => {
    const el = document.getElementById(sectionId(category));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {sections.map((s) => (
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
            id={sectionId(section.category)}
            className="bg-white border border-stone-100 p-6 sm:p-8 shadow-sm scroll-mt-8"
          >
            <span className="block w-6 h-px bg-gold-400 mb-4 mx-auto"></span>
            <h3 className="text-xl text-center text-stone-800 mb-5 tracking-wide">{t(section.categoryKey)}</h3>
            <div className="space-y-3">
              {section.columns ? (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-gold-100 text-stone-600 font-raleway font-semibold text-xs uppercase tracking-wider">
                    <span className="flex-[1.5]">{t('pl_col_service')}</span>
                    {section.columns.map((col) => (
                      <span key={col} className="text-center flex-1">{t(col)}</span>
                    ))}
                  </div>
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-b-0">
                      <span className="text-stone-600 font-raleway font-semibold flex-[1.5] text-sm">{t(item.nameKey)}</span>
                      {item.priceKey ? (
                        <span
                          className="text-center text-pink-600 font-raleway font-semibold text-sm"
                          style={{ flex: section.columns!.length }}
                        >
                          {t(item.priceKey)}
                        </span>
                      ) : (
                        section.columns!.map((col, c) => (
                          <span key={col} className="flex-1 flex justify-center">
                            <PromoPrice price={item.prices?.[c]} className="text-sm" align="center" />
                          </span>
                        ))
                      )}
                    </div>
                  ))}
                </>
              ) : (
                section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center gap-3 py-2 border-b border-stone-50 last:border-b-0">
                    <span className="text-stone-600 font-raleway font-semibold text-sm">{t(item.nameKey)}</span>
                    {item.priceKey ? (
                      <span className="text-pink-600 font-raleway font-semibold text-sm">{t(item.priceKey)}</span>
                    ) : (
                      <PromoPrice price={item.price} className="text-sm whitespace-nowrap" />
                    )}
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

export default PriceListGrid;
