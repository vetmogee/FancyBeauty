import React from 'react';

export const schlierenPriceList = [
  {
    category: 'Manicure',
    items: [
      { name: 'Classic without color', price: 'CHF 35' },
      { name: 'With nail polish', price: 'CHF 55' },
      { name: 'With shellac', price: 'CHF 65' },
    ],
  },
  {
    category: 'Pedicure',
    items: [
      { name: 'Classic without color', price: 'CHF 55' },
      { name: 'With nail polish', price: 'CHF 70' },
      { name: 'With shellac', price: 'CHF 85' },
      { name: 'Footlogix', price: 'CHF 90' },
      { name: 'Footlogix with shellac', price: 'CHF 125' },
      { name: 'With shellac french', price: 'CHF 95' },
    ],
  },
  {
    category: 'Gel/Acrylic Set',
    items: [
      { name: 'Natural (without color)', refillPrice: 'CHF 70', newPrice: 'CHF 75' },
      { name: 'With color', refillPrice: 'CHF 80', newPrice: 'CHF 85' },
      { name: 'French', refillPrice: 'CHF 90', newPrice: 'CHF 95' },
      { name: 'Ombre', refillPrice: 'CHF 95', newPrice: 'CHF 95' },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'Shellac for hands', price: 'CHF 45' },
      { name: 'Shellac for feet', price: 'CHF 50' },
      { name: 'Shellac + dry manicure', price: 'CHF 55' },
      { name: 'Nail polish', price: 'CHF 30' },
      { name: 'Nail repair', price: 'from CHF 9' },
      { name: 'Gel/acrylic removal', price: 'CHF 35' },
      { name: 'Shellac removal', price: 'CHF 25' },
    ],
  },
  {
    category: 'Extras Design',
    items: [
      { name: 'Glitter', price: 'CHF 3' },
      { name: 'Rhinestones', price: 'CHF 1' },
      { name: 'Hand design (1 nail)', price: 'from CHF 3' },
      { name: '3D design (1 nail)', price: 'from CHF 8' },
      { name: 'Extra long nails', price: 'from CHF 10' },
      { name: 'Chrome (1 nail)', price: 'from CHF 3' },
    ],
  },
  {
    category: 'Lashes',
    items: [
      { name: 'Natural look', price: 'CHF 100' },
      { name: 'Refill (natural look)', price: 'from CHF 80' },
      { name: 'Mascara look', price: 'CHF 130' },
      { name: 'Refill (mascara look)', price: 'from CHF 90' },
      { name: 'Mega volume/Whispy', price: 'CHF 160' },
      { name: 'Refill (mega volume/whispy)', price: 'from CHF 110' },
      { name: 'Anime look', price: 'CHF 140' },
      { name: 'Lash removal ', price: 'CHF 50' },
    ],
  },
];

interface ObeatPLProps {
  filter?: string;
}

const ObeatPL: React.FC<ObeatPLProps> = ({ filter = 'all' }) => {
  const filteredSections = filter === 'all' 
    ? schlierenPriceList 
    : schlierenPriceList.filter(section => section.category === filter);

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`obeat-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Category Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {schlierenPriceList.map((section) => (
          <button
            key={section.category}
            onClick={() => scrollToCategory(section.category)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-pink-200 rounded-full hover:bg-pink-50 hover:border-pink-300 transition-all duration-200 shadow-sm hover:shadow-md"
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
            id={`obeat-${section.category.toLowerCase().replace(/\s+/g, '-')}`}
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

export default ObeatPL;
