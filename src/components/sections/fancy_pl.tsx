import React from 'react';
import PriceListGrid from './PriceListGrid';
import { zurichPriceList } from './priceList';

interface FancyPLProps {
  filter?: string;
}

const FancyPL: React.FC<FancyPLProps> = ({ filter = 'all' }) => (
  <PriceListGrid sections={zurichPriceList} idPrefix="fancy" filter={filter} />
);

export default FancyPL;
