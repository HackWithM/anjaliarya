import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { CATEGORIES, ProductCategory } from '../categoryData';
import ProductCategoryCard from './ProductCategoryCard';
import ProductGrid from './ProductGrid';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);
  const productsGridRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (categoryId: ProductCategory) => {
    setActiveCategory(categoryId);
    
    // Slight delay to allow the grid to mount/animate before scrolling
    setTimeout(() => {
      if (productsGridRef.current) {
        const y = productsGridRef.current.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const activeProducts = activeCategory 
    ? PRODUCTS.filter(p => p.category === activeCategory)
    : [];

  return (
    <section id="products" className="py-24 bg-white relative">
      {/* Background visual flair */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.4px,transparent_0.4px)] [background-size:24px_24px] opacity-[0.25] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-600 uppercase block">
            Premium Global Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy-900 tracking-tight">
            Our Export Specialties
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded" />
          <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
            Every product in our export roster undergoes strict calibration, standard phytosanitary fumigation, and is safely packaged in food-grade, multi-layer oxygen-barrier material ready for marine journeys.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CATEGORIES.map((category) => (
            <ProductCategoryCard
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </motion.div>

        {/* Expandable Product Grid Section */}
        <div ref={productsGridRef}>
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ProductGrid products={activeProducts} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
