import React from 'react';
import { isPromoActive, discountPrice } from '@/lib/promo';

interface PromoPriceProps {
  price?: string;
  /** Extra classes for the price text (e.g. sizing). */
  className?: string;
  /** Horizontal alignment of the stacked promo/original prices. */
  align?: 'right' | 'center';
}

// Renders a price. While the studio promo is active it shows the discounted
// price (pink) with the original price struck through in gray-500 underneath.
const PromoPrice: React.FC<PromoPriceProps> = ({ price, className = '', align = 'right' }) => {
  if (!price) return null;

  const priceClass = `text-pink-600 font-raleway font-semibold ${className}`;

  if (!isPromoActive()) {
    return <span className={priceClass}>{price}</span>;
  }

  return (
    <span className={`flex flex-col leading-tight ${align === 'center' ? 'items-center' : 'items-end'}`}>
      <span className={priceClass}>{discountPrice(price)}</span>
      <span className="text-gray-500 font-raleway line-through text-xs">{price}</span>
    </span>
  );
};

export default PromoPrice;
