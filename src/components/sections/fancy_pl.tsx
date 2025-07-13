import React from 'react';

export const zurichPriceList = [
  {
    category: 'Manicure',
    items: [
        /*male female*/
      { name: 'Classic (Male / Female)', price: 'CHF 45 / 40' },
      { name: 'With nail polish', price: 'CHF 55' },
      { name: 'With shellac / color', price: 'CHF 70' },
      { name: 'With Milky / French', price: 'CHF 75' },
    ],
  },
  {
    category: 'Pedicure',
    items: [
        /*male/ female*/
      { name: 'Classic (Male / Female)', price: 'CHF 65 / 60' },
      { name: 'With nail polish', price: 'CHF 75' },
      { name: 'With shellac (color / French)', price: 'CHF 90 / 95' },
      { name: 'Extention (color / French)', price: 'CHF 115 / 135' },
    ],
  },
  {
    category: 'Gel/Acrylic Set',
    items: [
      { name: 'Natural', refillPrice: 'CHF 70', newPrice: 'CHF 80' },
      { name: 'Color', refillPrice: 'CHF 85', newPrice: 'CHF 90' },
      { name: 'French', refillPrice: 'CHF 90', newPrice: 'CHF 95' },
      { name: 'Ombre', refillPrice: 'CHF 100', newPrice: 'CHF 100' },
      { name: 'Milky', refillPrice: 'CHF 90', newPrice: 'CHF 95' },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'Refill by external provider', price: 'from CHF 5'},
      { name: 'Color changing', price: 'CHF 50' },
      { name: 'Form changing', price: 'CHF 5' },
      { name: 'Nail repair', price: 'from CHF 10' },
      { name: 'Gel/acrylic removal', price: 'CHF 40' },
      { name: 'Shellac removal', price: 'CHF 25' },
      { name: 'Milky / Ombre removal', price: 'CHF 10' },
    ],
  },
  {
    category: 'Extras Design',
    items: [
      { name: 'Glitter', price: 'from CHF 4' },
      { name: 'Rhinestones', price: 'from CHF 2' },
      { name: 'Hand design (1 nail)', price: 'from CHF 4' },
      { name: '3D design (1 nail)', price: 'from CHF 10' },
      { name: 'Extra long nails', price: 'from CHF 5' },
      { name: 'Chrome 1 nail / set', price: 'from CHF 4 / 30' },
      { name: 'Cat eye', price: 'from CHF 10' },
    ],
  },
  {
    category: 'Lashes',
    items: [
      { name: 'Natural look', price: 'CHF 100' },
      { name: 'Refill 2w/3w ', price: 'CHF 80 / 90' },
      { name: 'Mascara look', price: 'CHF 140' },
      { name: 'Refill 2w/3w ', price: 'CHF 100 / 120' },
      { name: 'Mega volume/Whispy', price: 'CHF 180' },
      { name: 'Refill 2w/3w', price: 'CHF 120 / 140' },
    ],
  },
];

interface FancyPLProps {
  filter?: string;
}

const FancyPL: React.FC<FancyPLProps> = ({ filter = 'all' }) => {
  const filteredSections = filter === 'all' 
    ? zurichPriceList 
    : zurichPriceList.filter(section => section.category === filter);

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`fancy-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Category Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {zurichPriceList.map((section) => (
          <button
            key={section.category}
            onClick={() => scrollToCategory(section.category)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-purple-200 rounded-full hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {section.category}
          </button>
        ))}
      </div>

      {/* Price List Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredSections.map((section) => (
          <div 
            key={section.category} 
            id={`fancy-${section.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-pink-100 mb-4 sm:mb-8 scroll-mt-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-4 sm:mb-6">{section.category}</h3>
            <div className="space-y-3 sm:space-y-4">
              {section.category === 'Gel/Acrylic Set' ? (
                <>
                  {/* Header for Gel/Acrylic Set */}
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 font-semibold text-gray-700 text-sm sm:text-base">
                    <span className="flex-1">Service</span>
                    <span className="text-center flex-1">Refill</span>
                    <span className="text-center flex-1">New</span>
                  </div>
                  {/* Items for Gel/Acrylic Set */}
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 flex-1 text-sm sm:text-base">{item.name}</span>
                      <span className="font-semibold text-pink-600 text-center flex-1 text-sm sm:text-base">{item.refillPrice}</span>
                      <span className="font-semibold text-pink-600 text-center flex-1 text-sm sm:text-base">{item.newPrice}</span>
                    </div>
                  ))}
                </>
              ) : (
                /* Regular items for other categories */
                section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 text-sm sm:text-base">{item.name}</span>
                    <span className="font-semibold text-pink-600 text-sm sm:text-base">{item.price}</span>
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

export default FancyPL; 