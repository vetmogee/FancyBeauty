import React from 'react';
import PriceListGrid from './PriceListGrid';
import { schlierenPriceList } from './priceList';

interface ObeatPLProps {
  filter?: string;
}

const ObeatPL: React.FC<ObeatPLProps> = ({ filter = 'all' }) => (
  <PriceListGrid sections={schlierenPriceList} idPrefix="obeat" filter={filter} />
);

export default ObeatPL;
