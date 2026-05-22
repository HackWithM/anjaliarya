import { Product, Certification, Testimonial, GalleryItem } from './types';

export const HERO_IMAGE = '/src/assets/images/export_hero_1779437187624.png';
export const MAIN_SPICES_IMAGE = '/src/assets/images/indian_spices_1779437205190.png';
export const WAREHOUSE_IMAGE = '/src/assets/images/warehouse_export_1779437222058.png';

export const PRODUCTS: Product[] = [
  {
    id: 'spices',
    name: 'Spices (Whole)',
    category: 'Spices',
    description: 'A aromatic range of premium handpicked whole Indian spices including Cardamom, Black Pepper, Cloves, Star Anise, and Cumin.',
    image: MAIN_SPICES_IMAGE,
    specifications: [
      'Purity: 99% Min',
      'Moisture: 8-12% Max',
      'Origin: Western Ghats, India',
      'Grading: Premium Organic Quality'
    ],
    benefits: [
      'Rich in antioxidant compounds',
      'Retains strong natural aroma & essential oils',
      'Ethically cultivated under high-quality standard processes'
    ]
  },
  {
    id: 'spices-powder',
    name: 'Spices Powder',
    category: 'Spices',
    description: 'Finely ground, rich, and aromatic blended spice powders manufactured under highly hygienic low-temperature grinding standards.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Type: Ground Blends',
      'Additives: No artificial coloring or preservatives',
      'Grinding Temp: Low-temperature ground to preserve oils',
      'Mesh Size: 60-80 Mesh'
    ],
    benefits: [
      'Instant rich flavor infusion',
      'Perfect culinary dispersion',
      'Hygienically packaged to maintain long-term freshness'
    ]
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    category: 'Spices',
    description: 'High curcumin turmeric powder featuring extreme golden-yellow hue, sourced from fertile, certified farms of Sangli.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Curcumin Content: 3.5% to 5.0% Min',
      'Color: Dynamic Deep Golden Yellow',
      'Moisture: 9% Max',
      'Ashes: 8% Max'
    ],
    benefits: [
      'Highly valued for anti-inflammatory curcumin components',
      '100% pure organic sorting without starch adulterations',
      'Excellent for culinary coloring and premium healthcare supplements'
    ]
  },
  {
    id: 'agriculture',
    name: 'Agriculture Products',
    category: 'Agriculture',
    description: 'High-purity essential agricultural staples including Basmati Rice, Wheat, Millets, and various dynamic pulses direct from farms.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Quality: Grade-A Export Standard',
      'Admixture: 0.5% Max',
      'Crop Year: Current Financial Year',
      'Cleanliness: Magnetically and gravity sorted'
    ],
    benefits: [
      'Exceptional nutritive and protein profiling',
      'Carefully sun-dried and aerated for safe long ocean transits',
      'Sourced directly from certified marginal grower collectives'
    ]
  },
  {
    id: 'jaggery',
    name: 'Premium Jaggery',
    category: 'Agriculture',
    description: 'Organic unrefined cane sugars (blocks and powders) manufactured naturally without harmful clarifying chemicals.',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Form: Solid Blocks / Granular Powder',
      'Sucrose Level: 85% to 90% Min',
      'Chemicals: 100% Sulphur-Free processing',
      'Color: Rich Amber Yellow to Dark Brown'
    ],
    benefits: [
      'Healthy alternative sweetener containing essential trace minerals',
      'Aids healthy respiratory and digestive detox',
      'Retains standard moisture profile preventing mold formation'
    ]
  },
  {
    id: 'dehydrated-vegetables',
    name: 'Dehydrated Vegetables',
    category: 'Dehydrated',
    description: 'Sleek, heat-air dehydrated vegetable flakes and powders of wholesome Red Onions, Garlic, Ginger, Tomato, and Green Chili.',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Variants: Flakes, Minced, Chopped, Powder',
      'Dehydration Process: Advanced Hot Air Tunnel',
      'Rehydration Ratio: 1:6 to 1:8 average',
      'Shelf Life: 12-18 Months minimum'
    ],
    benefits: [
      'Saves high logistic costs and heavy volumetric export space',
      'Excellent instantaneous culinary reconstitution parameters',
      'No refrigeration needed, reducing cold chain energy overheads'
    ]
  },
  {
    id: 'dehydrated-fruits',
    name: 'Dehydrated Fruits',
    category: 'Dehydrated',
    description: 'Luscious, premium-grade naturally dried Indian Mangoes, Papaya, Bananas, and Pineapples without excess added corn syrups.',
    image: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&q=80&w=800',
    specifications: [
      'Moisture: 15-20% max',
      'Process: Low-temp solar and convective drying',
      'Preservation: Light sulfur-dioxide standard where appropriate',
      'Packaging: Food-grade nitrogen-flushed high-barrier bags'
    ],
    benefits: [
      'Concentrated, intense natural fruit flavors and fibers',
      'Elite snacking quality or dry cereal inclusion elements',
      'Retains vital heat-stable vitamins and mineral components'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'apeda',
    name: 'APEDA',
    description: 'Agricultural & Processed Food Products Export Development Authority',
    code: 'Reg. No: APEDA/AGR/2026/09X',
    iconName: 'ShieldCheck'
  },
  {
    id: 'fssai',
    name: 'FSSAI License',
    description: 'Food Safety and Standards Authority of India (Central Export license)',
    code: 'Lic. No: 10024099380126',
    iconName: 'Activity'
  },
  {
    id: 'iec',
    name: 'IEC (Import Export Code)',
    description: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce',
    code: 'IEC No: ADG994812G',
    iconName: 'Globe'
  },
  {
    id: 'gst',
    name: 'GST Certified',
    description: 'Goods and Services Tax Authority of India Registration',
    code: 'GSTIN: 27AADCA8821R1ZK',
    iconName: 'FileText'
  },
  {
    id: 'export-lic',
    name: 'Customs Export License',
    description: 'Authorized Merchant Exporter clearance with Indian Customs Authorities',
    code: 'Port Reg: JNPT/NSICT/MUM-01',
    iconName: 'Award'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Hiroshi Tanaka',
    role: 'Director of Procurement',
    company: 'Sato Foods Co., Ltd.',
    country: 'Japan',
    feedback: 'Adgrow Global Arya has consistently delivered the highest curcumin-content Turmeric Powder to our facility near Tokyo. Their export documentation is incredibly precise, resulting in fast custom clearance and no logistical delay.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Head of Sourcing',
    company: 'EuroSpices Import-Export',
    country: 'Germany',
    feedback: 'Quality is non-negotiable for the European union food market. The dehydrated garlic flakes and ground whole spices from Adgrow Global Arya met all our strict microbiological criteria effortlessly. They are our primary merchant exporter in South Asia.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Marcus Vance',
    role: 'Chief Operational Officer',
    company: 'Nile Logistics LLC',
    country: 'United Arab Emirates',
    feedback: 'Outstanding customer service and absolute timeline adherence. We ordered 15 metric tons of premium Indian jaggery blocks and cargo arrived in pristine temperature-controlled condition exactly on the agreed date.',
    rating: 5
  },
  {
    id: 't4',
    name: 'Sarah Jenkins',
    role: 'Global Category Lead',
    company: 'NatureWhole Organics',
    country: 'United States',
    feedback: 'Their team makes Indian export documentation simple. The Basmati Rice and whole spices reflect authentic Indian farm-fresh quality. Incredible pricing with ultra-professional communication channels.',
    rating: 5
  }
];

export const GLOBAL_STATS = {
  clients: '50+ Enterprise Clients',
  countries: '20+ Importing Nations',
  shipments: '100+ Freight Deliveries',
  years: '8+ Sourcing Partners'
};

export const EXPORT_COUNTRIES = [
  { name: 'United States', code: 'US', x: '22%', y: '35%', volume: 'High' },
  { name: 'Germany', code: 'DE', x: '48%', y: '28%', volume: 'Premium' },
  { name: 'United Kingdom', code: 'GB', x: '46%', y: '25%', volume: 'Consistent' },
  { name: 'Japan', code: 'JP', x: '82%', y: '38%', volume: 'Elite Custom' },
  { name: 'United Arab Emirates', code: 'AE', x: '58%', y: '45%', volume: 'High Bulk' },
  { name: 'Saudi Arabia', code: 'SA', x: '56%', y: '48%', volume: 'High Bulk' },
  { name: 'Singapore', code: 'SG', x: '75%', y: '58%', volume: 'Consistent' },
  { name: 'Netherlands', code: 'NL', x: '47%', y: '23%', volume: 'Premium' },
  { name: 'Australia', code: 'AU', x: '85%', y: '75%', volume: 'Elite Bulk' },
  { name: 'Malaysia', code: 'MY', x: '73%', y: '56%', volume: 'Standard' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'packaging',
    title: 'Hygienic Vacuum Spice Sealing',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    category: 'warehouse',
    title: 'Climate-Controlled Sourcing Facility',
    image: WAREHOUSE_IMAGE
  },
  {
    id: 'g3',
    category: 'cargo',
    title: 'Seaside Container Ocean Vessel Loading',
    image: HERO_IMAGE
  },
  {
    id: 'g4',
    category: 'raw',
    title: 'Pure Organic Turmeric Sortation',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    category: 'packaging',
    title: 'Woven Gunny Bags for Basmati Export',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    category: 'cargo',
    title: 'Merchant Pallet Freight Secure Wrapping',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800'
  }
];
