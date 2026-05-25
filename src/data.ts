import { Product, Certification, Testimonial, GalleryItem } from './types';
import heroImage from './assets/images/export_hero_1779437187624.png';
import mainSpicesImage from './assets/images/indian_spices_1779437205190.png';
import warehouseImage from './assets/images/warehouse_export_1779437222058.png';
import groundnutOilImage from './assets/images/Gemini_Generated_Image_n5mxubn5mxubn5mx.png';
import coconutOilImage from './assets/images/coconut_oil.png';
import safflowerOilImage from './assets/images/safflower_oil.png';


export const HERO_IMAGE = heroImage;
export const MAIN_SPICES_IMAGE = mainSpicesImage;
export const WAREHOUSE_IMAGE = warehouseImage;

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
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/WR/KJ/OY/51747533/spice-powder-500x500.JPG',
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
    image: 'https://vedicchakki.com/wp-content/uploads/2022/05/haldi-600x600.jpg',
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
    image: 'https://chakkiwalle.com/cdn/shop/files/d69214c8-f3fb-42ab-a9f2-076c9477b65b.jpg?v=1708669172',
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
    image: 'https://usetorg.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftorg-cms-media%2Fmedia%2Foriginal_images%2FDehydrated_Vegetables_Market.png&w=1080&q=75',
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
    image: 'https://cdn.wikifarmer.com/images/thumbnail/2023/08/How-to-Dehydrate-Tropical-Fruits-for-Natural-Healthy-Snacks-1-1200x630.jpg',
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
  },
  // ── Pulses / Lentils ──────────────────────────────────────────────────────
  {
    id: 'toor-dal',
    name: 'Toor Dal (Pigeon Pea)',
    category: 'Pulses',
    description: 'Premium double-polished Toor Dal from Maharashtra & Karnataka, prized for its rich protein content and distinctive earthy flavor profile across global markets.',
    image: 'https://image1.jdomni.in/product/19042024/2B/9A/45/11C2ED7BE58098A412A376588E_1713534268704.webp?fit=around|500:500',
    specifications: [
      'Purity: 99.5% Min',
      'Moisture: 12% Max',
      'Admixture: 0.5% Max',
      'Packaging: 25kg / 50kg PP Bags, FCL'
    ],
    benefits: [
      'High protein content (22g per 100g) ideal for health-conscious markets',
      'Consistent golden-yellow color with uniform bold grain size',
      'Machine-cleaned, gravity-sorted and magnetically de-stoned'
    ]
  },
  {
    id: 'moong-dal',
    name: 'Moong Dal (Green Gram)',
    category: 'Pulses',
    description: 'Split and hulled green moong lentils delivering a delicate, mildly sweet flavour profile—highly sought in Asian, Middle Eastern, and European food markets.',
    image: 'https://www.greendna.in/cdn/shop/products/moong_750x.jpg?v=1560801672',
    specifications: [
      'Purity: 99% Min',
      'Moisture: 11% Max',
      'Form: Split & Hulled / Whole',
      'Packaging: 25kg / 50kg Woven Bags'
    ],
    benefits: [
      'Highly digestible and fast-cooking — reduces industrial processing time',
      'Naturally gluten-free and rich in folate and magnesium',
      'Year-round supply assured through multi-state procurement network'
    ]
  },
  {
    id: 'urad-dal',
    name: 'Urad Dal (Black Gram)',
    category: 'Pulses',
    description: 'Whole and split black gram lentils — the foundational pulse in South Asian cuisine, exported across 40+ countries for idli, dosa, and protein supplement markets.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/439695484/ZY/JV/KJ/225734089/black-urad-chana-dal.jpg',
    specifications: [
      'Purity: 99% Min',
      'Form: Whole Black / Split White',
      'Moisture: 12% Max',
      'Shelf Life: 18 Months in standard conditions'
    ],
    benefits: [
      'Exceptional mucilaginous binding properties for food processing',
      'Rich in iron and B-vitamins, aligning with nutraceutical demand',
      'Dual-form export: whole (black skin-on) and de-husked white split'
    ]
  },
  // ── Edible Oils ───────────────────────────────────────────────────────────
  {
    id: 'groundnut-oil',
    name: 'Groundnut Oil',
    category: 'Oils',
    description: 'Cold-pressed and refined groundnut oil with a high smoke point and naturally sweet, nutty aroma — a preferred cooking medium across Europe, Africa, and the Far East.',
    image: groundnutOilImage,
    specifications: [
      'Free Fatty Acid (FFA): 0.25% Max',
      'Moisture: 0.1% Max',
      'Peroxide Value: 10 meq/kg Max',
      'Packaging: Flexi-tanks / 15L / 200L Drums'
    ],
    benefits: [
      'High oleic content enhances cardiovascular health positioning',
      'Stable at high cooking temperatures — preferred for deep-frying',
      'Available in both crude and double-refined export grades'
    ]
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    category: 'Oils',
    description: 'Virgin and refined coconut oil extracted from fresh Cocos nucifera — exported for food, cosmetics, and pharmaceutical markets with certifications for organic compliance.',
    image: coconutOilImage,
    specifications: [
      'Type: Virgin / RBD Refined',
      'Lauric Acid: 47% Min',
      'Moisture: 0.1% Max',
      'Packaging: 250ml to 200L, ISO Tanks'
    ],
    benefits: [
      'High lauric acid content with proven antimicrobial properties',
      'Dual-market positioning: culinary and cosmetic sectors',
      'USDA Organic and EU Organic certification available on request'
    ]
  },
  {
    id: 'safflower-oil',
    name: 'Safflower Oil',
    category: 'Oils',
    description: 'Light, near-colourless safflower oil with one of the highest linoleic acid concentrations — increasingly demanded by nutraceutical and premium cooking oil markets worldwide.',
    image: safflowerOilImage,
    specifications: [
      'Linoleic Acid: 75% Min',
      'Iodine Value: 140–150',
      'FFA: 0.3% Max',
      'Packaging: Flexi-tanks / 20L Tins / Bulk ISO'
    ],
    benefits: [
      'Highest naturally occurring linoleic acid among all edible oils',
      'Neutral flavour and high smoke point — ideal for gourmet applications',
      'Suitable for diabetic-friendly and heart-health product lines'
    ]
  },
  // ── Herbal & Natural Liquid Extracts ─────────────────────────────────────
  {
    id: 'amla-extract',
    name: 'Amla Extract',
    category: 'Herbal',
    description: 'Standardised Indian gooseberry (Phyllanthus emblica) liquid extract with guaranteed Vitamin C potency — demanded by nutraceutical, Ayurvedic and functional beverage industries.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/546547257/JO/KH/VN/81952928/amla-plant-indian-gooseberry-webp.webp',
    specifications: [
      'Active: Vitamin C ≥ 35% (HPLC)',
      'Form: Liquid / Spray-dried Powder',
      'Solubility: Fully water-soluble',
      'Packaging: 25kg HDPE Drums / 200kg IBCs'
    ],
    benefits: [
      'Highest natural Vitamin C source commercially available',
      'Powerful antioxidant activity for immune and skin health formulations',
      'Shelf-stable up to 24 months in sealed, cold-chain conditions'
    ]
  },
  {
    id: 'lemon-extract',
    name: 'Lemon Extract',
    category: 'Herbal',
    description: 'Pure citrus cold-pressed lemon peel extract and juice concentrate from Indian Eureka lemons — widely used in food flavouring, beverages, cosmetics, and pharmaceutical sectors.',
    image: 'https://assets.clevelandclinic.org/transform/LargeFeatureImage/23b87888-c044-4c32-977a-1635af87fa22/lemons-2178111697',
    specifications: [
      'Citric Acid: 6.5% Min',
      'Limonene Content: ≥ 65%',
      'Brix (Concentrate): 45–55°',
      'Packaging: Aseptic bags / 200L Drums / FCL'
    ],
    benefits: [
      'Natural food-grade preservative properties via citric acid content',
      'Intense, stable citrus aroma profile for beverage flavouring',
      'Non-GMO, pesticide-residue-free certified on request'
    ]
  },
  {
    id: 'neem-extract',
    name: 'Neem Extract',
    category: 'Herbal',
    description: 'Azadirachta indica standardised liquid extract with certified Azadirachtin content — internationally traded for organic agriculture, biopesticide, and pharmaceutical applications.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/TD/KI/KV/11724855/neem-azadirachta-indica-liquid-extract.jpg',
    specifications: [
      'Azadirachtin A: 1000–3000 ppm',
      'Form: Water-soluble Liquid / Granules',
      'Total Triterpenoids: 5% Min',
      'Packaging: 1L, 5L, 25L, 200L Drums'
    ],
    benefits: [
      'FDA-accepted biopesticide active — fast-growing regulatory acceptance globally',
      'Sustainable, zero-synthetic-chemical alternative for organic farming',
      'Broad-spectrum antimicrobial and anti-fungal properties'
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
    image: 'https://www.toufood.com/wp-content/uploads/2016/07/Sous-Vide-Vegetables.jpg'
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
    image: 'https://www.jkcart.com/uploads/blogs/blogImg_342677828644963557286815391452.png'
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
  },
  // New product gallery items
  {
    id: 'g7',
    category: 'raw',
    title: 'Toor Dal (Pigeon Pea)',
    image: 'https://image1.jdomni.in/product/19042024/2B/9A/45/11C2ED7BE58098A412A376588E_1713534268704.webp?fit=around|500:500'
  },
  {
    id: 'g8',
    category: 'raw',
    title: 'Moong Dal (Green Gram)',
    image: 'https://www.greendna.in/cdn/shop/products/moong_750x.jpg?v=1560801672'
  },
  {
    id: 'g9',
    category: 'raw',
    title: 'Urad Dal (Black Gram)',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/439695484/ZY/JV/KJ/225734089/black-urad-chana-dal.jpg'
  },
  {
    id: 'g10',
    category: 'raw',
    title: 'Groundnut Oil',
    image: groundnutOilImage
  },
  {
    id: 'g11',
    category: 'raw',
    title: 'Coconut Oil',
    image: coconutOilImage
  },
  {
    id: 'g12',
    category: 'raw',
    title: 'Safflower Oil',
    image: safflowerOilImage
  },
  {
    id: 'g13',
    category: 'raw',
    title: 'Amla Extract',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/546547257/JO/KH/VN/81952928/amla-plant-indian-gooseberry-webp.webp'
  },
  {
    id: 'g14',
    category: 'raw',
    title: 'Lemon Extract',
    image: 'https://assets.clevelandclinic.org/transform/LargeFeatureImage/23b87888-c044-4c32-977a-1635af87fa22/lemons-2178111697'
  },
  {
    id: 'g15',
    category: 'raw',
    title: 'Neem Extract',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/TD/KI/KV/11724855/neem-azadirachta-indica-liquid-extract.jpg'
  }
];
