import { Product } from '../types';

// English overrides for PRODUCTS, keyed by product id.
// `variants` and `colorOptions` entries are merged by index onto the Vietnamese originals
// (so price, sku, hex and image always come from products.ts).
export interface ProductEnOverride {
  name: string;
  tagline: string;
  features: string[];
  specs: Record<string, string>;
  videoTitle?: string;
  variants?: { name: string; value: string; badge?: string }[];
  colorOptions?: { name: string }[];
  energyLabel?: Partial<NonNullable<Product['energyLabel']>>;
}

export const PRODUCTS_EN: Record<string, ProductEnOverride> = {
  'lio-666v': {
    name: 'Livotec E-smart LIO-666V Double Induction Hob',
    tagline: 'Genuine Livotec double induction hob',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LIO-666V',
      Category: 'Induction hob',
      'Cooking zones': '2'
    }
  },
  'lid-888': {
    name: 'Livotec LID-888 Double Induction-Infrared Hob',
    tagline: 'Genuine Livotec double induction-infrared hob',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LID-888',
      Category: 'Induction hob',
      'Cooking zones': '2',
      'Hob type': 'Induction + infrared'
    }
  },
  'lv-200': {
    name: 'Livotec LV-200 Cordless Vacuum Cleaner',
    tagline: 'Genuine Livotec cordless vacuum cleaner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LV-200',
      Category: 'Vacuum cleaner',
      Power: 'Cordless (battery)'
    }
  },
  'lv-100': {
    name: 'Livotec LV-100 Cordless Vacuum Cleaner',
    tagline: 'Genuine Livotec cordless vacuum cleaner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LV-100',
      Category: 'Vacuum cleaner',
      Power: 'Cordless (battery)'
    }
  },
  'lv-99': {
    name: 'Livotec LV-99 Cordless Vacuum Cleaner',
    tagline: 'Genuine Livotec cordless vacuum cleaner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LV-99',
      Category: 'Vacuum cleaner',
      Power: 'Cordless (battery)'
    }
  },
  'lac-g62': {
    name: 'Livotec LAC-G62 Evaporative Air Cooler',
    tagline: 'Genuine Livotec evaporative air cooler',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LAC-G62',
      Category: 'Evaporative air cooler'
    }
  },
  'lac-g60': {
    name: 'Livotec LAC-G60 Evaporative Air Cooler',
    tagline: 'Genuine Livotec evaporative air cooler',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LAC-G60',
      Category: 'Evaporative air cooler'
    }
  },
  'lac-h66': {
    name: 'Livotec LAC-H66 Evaporative Air Cooler',
    tagline: 'Genuine Livotec evaporative air cooler',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LAC-H66',
      Category: 'Evaporative air cooler'
    }
  },
  'lac-g66s': {
    name: 'Livotec LAC-G66S Evaporative Air Cooler',
    tagline: 'Genuine Livotec evaporative air cooler',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LAC-G66S',
      Category: 'Evaporative air cooler'
    }
  },
  'lac-h66s': {
    name: 'Livotec LAC-H66S Evaporative Air Cooler',
    tagline: 'Genuine Livotec evaporative air cooler',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LAC-H66S',
      Category: 'Evaporative air cooler'
    }
  },
  'lch-1597d': {
    name: 'Livotec LCH-1597D Ceramic Heater',
    tagline: 'Genuine Livotec ceramic heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LCH-1597D',
      Category: 'Ceramic heater',
      'Heating element': 'Ceramic'
    }
  },
  'lch-2089t': {
    name: 'Livotec LCH-2089T Ceramic Heater',
    tagline: 'Genuine Livotec ceramic heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LCH-2089T',
      Category: 'Ceramic heater',
      'Heating element': 'Ceramic'
    }
  },
  'lch-2079t': {
    name: 'Livotec LCH-2079T Ceramic Heater',
    tagline: 'Genuine Livotec ceramic heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LCH-2079T',
      Category: 'Ceramic heater',
      'Heating element': 'Ceramic'
    }
  },
  'lhd-18iu': {
    name: 'Livotec LHD-18IU Dehumidifier',
    tagline: 'Genuine Livotec dehumidifier',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LHD-18IU',
      Category: 'Dehumidifier'
    }
  },
  'lhd-25ih': {
    name: 'Livotec LHD-25IH Dehumidifier',
    tagline: 'Genuine Livotec dehumidifier',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LHD-25IH',
      Category: 'Dehumidifier'
    }
  },
  'lhd-36iu': {
    name: 'Livotec LHD-36IU Dehumidifier',
    tagline: 'Genuine Livotec dehumidifier',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LHD-36IU',
      Category: 'Dehumidifier'
    }
  },
  'lwh-i30a26s': {
    name: 'Livotec LWH-I30A26S 30L Storage Water Heater',
    tagline: 'Genuine Livotec 30L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I30A26S',
      Category: 'Water heater',
      Capacity: '30 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i30t26': {
    name: 'Livotec LWH-I30T26 30L Storage Water Heater',
    tagline: 'Genuine Livotec 30L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I30T26',
      Category: 'Water heater',
      Capacity: '30 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i30b26': {
    name: 'Livotec LWH-I30B26 30L Storage Water Heater',
    tagline: 'Genuine Livotec 30L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I30B26',
      Category: 'Water heater',
      Capacity: '30 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i30a25': {
    name: 'Livotec LWH-I30A25 30L Storage Water Heater',
    tagline: 'Genuine Livotec 30L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I30A25',
      Category: 'Water heater',
      Capacity: '30 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i30x26': {
    name: 'Livotec LWH-I30X26 30L Storage Water Heater',
    tagline: 'Genuine Livotec 30L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I30X26',
      Category: 'Water heater',
      Capacity: '30 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v15a26s': {
    name: 'Livotec LWH-V15A26S 15L Storage Water Heater',
    tagline: 'Genuine Livotec 15L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V15A26S',
      Category: 'Water heater',
      Capacity: '15 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v15b26': {
    name: 'Livotec LWH-V15B26 15L Storage Water Heater',
    tagline: 'Genuine Livotec 15L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V15B26',
      Category: 'Water heater',
      Capacity: '15 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v15t26': {
    name: 'Livotec LWH-V15T26 15L Storage Water Heater',
    tagline: 'Genuine Livotec 15L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V15T26',
      Category: 'Water heater',
      Capacity: '15 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v15a25': {
    name: 'Livotec LWH-V15A25 15L Storage Water Heater',
    tagline: 'Genuine Livotec 15L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V15A25',
      Category: 'Water heater',
      Capacity: '15 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v15x26': {
    name: 'Livotec LWH-V15X26 15L Storage Water Heater',
    tagline: 'Genuine Livotec 15L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V15X26',
      Category: 'Water heater',
      Capacity: '15 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v20a25': {
    name: 'Livotec LWH-V20A25 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V20A25',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i20a25': {
    name: 'Livotec LWH-I20A25 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I20A25',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i20a26s': {
    name: 'Livotec LWH-I20A26S 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I20A26S',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i20b26': {
    name: 'Livotec LWH-I20B26 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I20B26',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i20t26': {
    name: 'Livotec LWH-I20T26 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I20T26',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-i20x26': {
    name: 'Livotec LWH-I20X26 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-I20X26',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v20a26s': {
    name: 'Livotec LWH-V20A26S 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V20A26S',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v20b26': {
    name: 'Livotec LWH-V20B26 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V20B26',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v20t26': {
    name: 'Livotec LWH-V20T26 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V20T26',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'lwh-v20x26': {
    name: 'Livotec LWH-V20X26 20L Storage Water Heater',
    tagline: 'Genuine Livotec 20L storage water heater',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'LWH-V20X26',
      Category: 'Water heater',
      Capacity: '20 liters',
      'Heating type': 'Storage (indirect)'
    }
  },
  'sb-616': {
    name: 'Livotec SB-616 Standing Fan',
    tagline: 'Genuine Livotec standing fan',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'SB-616',
      Category: 'Standing fan'
    }
  },
  's-420': {
    name: 'Livotec S-420 Standing Fan',
    tagline: 'Genuine Livotec standing fan',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'S-420',
      Category: 'Standing fan'
    }
  },
  's-400': {
    name: 'Livotec S-400 Standing Fan',
    tagline: 'Genuine Livotec standing fan',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'S-400',
      Category: 'Standing fan'
    }
  },
  's-300': {
    name: 'Livotec S-300 Standing Fan',
    tagline: 'Genuine Livotec standing fan',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'S-300',
      Category: 'Standing fan'
    }
  },
  's-150b': {
    name: 'Livotec S-150B Standing Fan',
    tagline: 'Genuine Livotec standing fan',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'S-150B',
      Category: 'Standing fan'
    }
  },
  's-200': {
    name: 'Livotec S-200 Standing Fan',
    tagline: 'Genuine Livotec standing fan',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'S-200',
      Category: 'Standing fan'
    }
  },
  's-100': {
    name: 'Livotec S-100 Standing Fan',
    tagline: 'Genuine Livotec standing fan',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'S-100',
      Category: 'Standing fan'
    }
  },
  dhv12i: {
    name: 'Livotec DHV12I Inverter Air Conditioner (Cooling Only)',
    tagline: 'Genuine Livotec one-way Inverter air conditioner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'DHV12I',
      Category: 'Air conditioner',
      Technology: 'Inverter',
      Function: 'Cooling only'
    }
  },
  'dhv10-8i': {
    name: 'Livotec DHV10.8I Inverter Air Conditioner (Cooling Only)',
    tagline: 'Genuine Livotec one-way Inverter air conditioner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'DHV10.8I',
      Category: 'Air conditioner',
      Technology: 'Inverter',
      Function: 'Cooling only'
    }
  },
  dhv09i: {
    name: 'Livotec DHV09I Inverter Air Conditioner (Cooling Only)',
    tagline: 'Genuine Livotec one-way Inverter air conditioner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'DHV09I',
      Category: 'Air conditioner',
      Technology: 'Inverter',
      Function: 'Cooling only'
    }
  },
  dhv12j: {
    name: 'Livotec DHV12J Inverter Air Conditioner (Cooling Only)',
    tagline: 'Genuine Livotec one-way Inverter air conditioner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'DHV12J',
      Category: 'Air conditioner',
      Technology: 'Inverter',
      Function: 'Cooling only'
    }
  },
  'dhv10-8j': {
    name: 'Livotec DHV10.8J Inverter Air Conditioner (Cooling Only)',
    tagline: 'Genuine Livotec one-way Inverter air conditioner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'DHV10.8J',
      Category: 'Air conditioner',
      Technology: 'Inverter',
      Function: 'Cooling only'
    }
  },
  dhv09j: {
    name: 'Livotec DHV09J Inverter Air Conditioner (Cooling Only)',
    tagline: 'Genuine Livotec one-way Inverter air conditioner',
    features: [],
    specs: {
      Brand: 'Livotec',
      Model: 'DHV09J',
      Category: 'Air conditioner',
      Technology: 'Inverter',
      Function: 'Cooling only'
    }
  }
};

export const CATEGORIES_CONFIG_EN: Record<string, { name: string; subtitle: string; subcategories: string[] }> = {
  fan: { name: 'Standing Fans', subtitle: 'Genuine Livotec standing fans', subcategories: [] },
  ac: { name: 'Air Conditioners', subtitle: 'One-way Inverter air conditioners', subcategories: [] },
  air_cooler: { name: 'Air Coolers', subtitle: 'Evaporative cooling', subcategories: [] },
  water_heater: { name: 'Water Heaters', subtitle: '15L / 20L / 30L storage heaters', subcategories: [] },
  induction: { name: 'Induction Hobs', subtitle: 'Double induction & induction-infrared hobs', subcategories: [] },
  dehumidifier: { name: 'Dehumidifiers', subtitle: 'Keep damp and mold at bay', subcategories: [] },
  heater: { name: 'Heaters', subtitle: 'Warm ceramic heating for winter', subcategories: [] },
  vacuum: { name: 'Vacuum Cleaners', subtitle: 'Cordless vacuum cleaners', subcategories: [] }
};
