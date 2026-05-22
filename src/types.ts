export interface Product {
  id: string;
  name: string;
  category: 'Spices' | 'Agriculture' | 'Dehydrated';
  description: string;
  image: string;
  specifications: string[];
  benefits: string[];
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  code: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  feedback: string;
  rating: number;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  product: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  category: 'packaging' | 'warehouse' | 'cargo' | 'raw';
  title: string;
  image: string;
}
