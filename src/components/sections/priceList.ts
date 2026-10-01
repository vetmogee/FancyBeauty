// Price lists for OBeauty (Schlieren) and Fancy (Zürich).
//
// A section either lists one price per item (`price`), or declares `columns`
// and gives each item one price per column (`prices`). `priceKey` renders a
// translated text (e.g. "On request") instead of a price.

export interface PriceItem {
  nameKey: string;
  price?: string;
  prices?: string[];
  priceKey?: string;
}

export interface PriceSection {
  category: string;
  categoryKey: string;
  columns?: string[];
  items: PriceItem[];
}

export const schlierenPriceList: PriceSection[] = [
  {
    category: 'Manicure',
    categoryKey: 'pl_category_manicure',
    items: [
      { nameKey: 'pl_item_classic', price: 'CHF 40' },
      { nameKey: 'pl_item_with_nail_polish', price: 'CHF 55' },
      { nameKey: 'pl_item_with_shellac_color_only', price: 'CHF 70' },
      { nameKey: 'pl_item_with_shellac_french_milky', price: 'CHF 75' },
      { nameKey: 'pl_item_shellac_new_fill', price: 'CHF 50 / 55' },
      { nameKey: 'pl_item_shellac_only_color', price: 'CHF 55' },
      { nameKey: 'pl_item_shellac_only_milky_french', price: 'CHF 60 / 65' },
      { nameKey: 'pl_item_nail_polish_only', price: 'CHF 30' },
    ],
  },
  {
    category: 'Pedicure',
    categoryKey: 'pl_category_pedicure',
    items: [
      { nameKey: 'pl_item_classic', price: 'CHF 60' },
      { nameKey: 'pl_item_with_nail_polish', price: 'CHF 75' },
      { nameKey: 'pl_item_with_shellac_cmf', price: 'CHF 85 / 90 / 95' },
      { nameKey: 'pl_item_with_extension_cmf', price: 'CHF 115 / 120 / 125' },
      { nameKey: 'pl_item_shellac_only', price: 'CHF 55 / 65 / 60' },
      { nameKey: 'pl_item_nail_polish_only', price: 'CHF 35' },
      { nameKey: 'pl_item_extension_only_cmf', price: 'CHF 90 / 90 / 95' },
    ],
  },
  {
    category: "Men's Service",
    categoryKey: 'pl_category_mens',
    items: [
      { nameKey: 'pl_item_classic_manicure', price: 'CHF 40' },
      { nameKey: 'pl_item_classic_pedicure', price: 'CHF 60' },
    ],
  },
  {
    category: 'Gel/Acrylic Set',
    categoryKey: 'pl_category_gel_acrylic',
    columns: ['pl_col_refill', 'pl_col_new'],
    items: [
      { nameKey: 'pl_item_natural_no_color', prices: ['CHF 70', 'CHF 75'] },
      { nameKey: 'pl_item_color', prices: ['CHF 80', 'CHF 85'] },
      { nameKey: 'pl_item_french', prices: ['CHF 90', 'CHF 95'] },
      { nameKey: 'pl_item_milky', prices: ['CHF 85', 'CHF 90'] },
      { nameKey: 'pl_item_ombre_babyboomer', prices: ['CHF 90', 'CHF 90'] },
      { nameKey: 'pl_item_nail_art_set', priceKey: 'pl_price_on_request' },
    ],
  },
  {
    category: 'Other',
    categoryKey: 'pl_category_other',
    items: [
      { nameKey: 'pl_item_refill_external', price: 'from CHF 5' },
      { nameKey: 'pl_item_color_changing', price: 'from CHF 50' },
      { nameKey: 'pl_item_form_changing', price: 'from CHF 5' },
      { nameKey: 'pl_item_nail_repair_per_nail', price: 'from CHF 10' },
      { nameKey: 'pl_item_gel_acrylic_removal', price: 'from CHF 35' },
      { nameKey: 'pl_item_shellac_removal', price: 'from CHF 20' },
      { nameKey: 'pl_item_milky_ombre_removal', price: 'from CHF 5' },
    ],
  },
  {
    category: 'Extras Design',
    categoryKey: 'pl_category_extras',
    items: [
      { nameKey: 'pl_item_chrome_per_nail', price: 'CHF 3' },
      { nameKey: 'pl_item_glitter_per_nail', price: 'CHF 3' },
      { nameKey: 'pl_item_rhinestones_charm', price: 'from CHF 1' },
      { nameKey: 'pl_item_hand_design_per_nail', price: 'from CHF 3' },
      { nameKey: 'pl_item_3d_design_per_nail', price: 'from CHF 5' },
      { nameKey: 'pl_item_extra_long_nails_set', price: 'from CHF 5' },
      { nameKey: 'pl_item_cat_eye_set', price: 'from CHF 10' },
    ],
  },
  {
    category: 'Lashes',
    categoryKey: 'pl_category_lashes_brows',
    columns: ['pl_col_new', 'pl_col_2w', 'pl_col_3w'],
    items: [
      { nameKey: 'pl_item_natural_look', prices: ['CHF 100', 'CHF 80', 'CHF 90'] },
      { nameKey: 'pl_item_mascara_look', prices: ['CHF 130', 'CHF 90', 'CHF 110'] },
      { nameKey: 'pl_item_mega_volume_only', prices: ['CHF 160', 'CHF 110', 'CHF 130'] },
      { nameKey: 'pl_item_wispy', prices: ['CHF 160', 'CHF 110', 'CHF 130'] },
      { nameKey: 'pl_item_hybrid_volume', prices: ['CHF 120', 'CHF 90', 'CHF 100'] },
      { nameKey: 'pl_item_wet_look', priceKey: 'pl_price_on_request' },
      { nameKey: 'pl_item_anime_manga_look', prices: ['CHF 140'] },
      { nameKey: 'pl_item_lash_removal_new_set', prices: ['CHF 50 / 30'] },
      { nameKey: 'pl_item_lash_lifting', prices: ['CHF 85'] },
      { nameKey: 'pl_item_brows', prices: ['CHF 30'] },
    ],
  },
];

export const zurichPriceList: PriceSection[] = [
  {
    category: 'Manicure',
    categoryKey: 'pl_category_manicure',
    items: [
      { nameKey: 'pl_item_classic_male_female', price: 'CHF 45 / 40' },
      { nameKey: 'pl_item_with_nail_polish', price: 'CHF 55' },
      { nameKey: 'pl_item_with_shellac_color', price: 'CHF 70' },
      { nameKey: 'pl_item_with_milky_french', price: 'CHF 75' },
    ],
  },
  {
    category: 'Pedicure',
    categoryKey: 'pl_category_pedicure',
    items: [
      { nameKey: 'pl_item_classic_male_female', price: 'CHF 65 / 60' },
      { nameKey: 'pl_item_with_nail_polish', price: 'CHF 75' },
      { nameKey: 'pl_item_with_shellac_color_french', price: 'CHF 90 / 95' },
      { nameKey: 'pl_item_extension_color_french', price: 'CHF 115 / 135' },
    ],
  },
  {
    category: 'Gel/Acrylic Set',
    categoryKey: 'pl_category_gel_acrylic',
    columns: ['pl_col_refill', 'pl_col_new'],
    items: [
      { nameKey: 'pl_item_natural', prices: ['CHF 70', 'CHF 80'] },
      { nameKey: 'pl_item_color', prices: ['CHF 85', 'CHF 90'] },
      { nameKey: 'pl_item_french', prices: ['CHF 90', 'CHF 95'] },
      { nameKey: 'pl_item_ombre', prices: ['CHF 100', 'CHF 100'] },
      { nameKey: 'pl_item_milky', prices: ['CHF 90', 'CHF 95'] },
    ],
  },
  {
    category: 'Other',
    categoryKey: 'pl_category_other',
    items: [
      { nameKey: 'pl_item_refill_external', price: 'from CHF 5' },
      { nameKey: 'pl_item_color_changing', price: 'CHF 50' },
      { nameKey: 'pl_item_form_changing', price: 'CHF 5' },
      { nameKey: 'pl_item_nail_repair', price: 'from CHF 10' },
      { nameKey: 'pl_item_gel_acrylic_removal', price: 'CHF 40' },
      { nameKey: 'pl_item_shellac_removal', price: 'CHF 25' },
      { nameKey: 'pl_item_milky_ombre_removal', price: 'CHF 10' },
    ],
  },
  {
    category: 'Extras Design',
    categoryKey: 'pl_category_extras',
    items: [
      { nameKey: 'pl_item_glitter', price: 'from CHF 4' },
      { nameKey: 'pl_item_rhinestones', price: 'from CHF 2' },
      { nameKey: 'pl_item_hand_design', price: 'from CHF 4' },
      { nameKey: 'pl_item_3d_design', price: 'from CHF 10' },
      { nameKey: 'pl_item_extra_long_nails', price: 'from CHF 5' },
      { nameKey: 'pl_item_chrome_nail_set', price: 'from CHF 4 / 30' },
      { nameKey: 'pl_item_cat_eye', price: 'from CHF 10' },
    ],
  },
  {
    category: 'Lashes',
    categoryKey: 'pl_category_lashes',
    items: [
      { nameKey: 'pl_item_natural_look', price: 'CHF 100' },
      { nameKey: 'pl_item_refill_2w3w', price: 'CHF 80 / 90' },
      { nameKey: 'pl_item_mascara_look', price: 'CHF 140' },
      { nameKey: 'pl_item_refill_2w3w', price: 'CHF 100 / 120' },
      { nameKey: 'pl_item_mega_volume', price: 'CHF 180' },
      { nameKey: 'pl_item_refill_2w3w', price: 'CHF 120 / 140' },
    ],
  },
];
