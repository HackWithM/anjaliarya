import { MAIN_SPICES_IMAGE } from './data';
import groundnutOilImage from './assets/images/Gemini_Generated_Image_n5mxubn5mxubn5mx.webp';

export type ProductCategory = 'Spices' | 'Agriculture' | 'Dehydrated' | 'Pulses' | 'Oils' | 'Herbal';

export interface CategoryMeta {
  id: ProductCategory;
  title: string;
  description: string;
  image: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'Spices',
    title: 'Whole & Ground Spices',
    description: 'Premium aromatic Indian spices, handpicked and hygienically processed.',
    image: MAIN_SPICES_IMAGE,
  },
  {
    id: 'Agriculture',
    title: 'Agriculture Products',
    description: 'High-purity essential agricultural staples including Rice, Wheat, and Jaggery.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'Dehydrated',
    title: 'Dehydrated Veg & Fruits',
    description: 'Luscious, premium-grade naturally dried vegetables and fruits.',
    image: 'https://usetorg.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftorg-cms-media%2Fmedia%2Foriginal_images%2FDehydrated_Vegetables_Market.png&w=1080&q=75',
  },
  {
    id: 'Pulses',
    title: 'Premium Pulses & Lentils',
    description: 'Export-quality pulses, machine-cleaned and gravity-sorted.',
    image: 'https://image1.jdomni.in/product/19042024/2B/9A/45/11C2ED7BE58098A412A376588E_1713534268704.webp?fit=around|500:500',
  },
  {
    id: 'Oils',
    title: 'Edible Oils',
    description: 'Cold-pressed and refined premium cooking oils.',
    image: groundnutOilImage,
  },
  {
    id: 'Herbal',
    title: 'Herbal Extracts',
    description: 'Standardised natural liquid extracts with guaranteed potency.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/546547257/JO/KH/VN/81952928/amla-plant-indian-gooseberry-webp.webp',
  }
];
