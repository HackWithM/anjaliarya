import { useState } from 'react';
import { ArrowRight, BadgeCheck, FileCheck2, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Spices' | 'Agriculture' | 'Dehydrated' | 'Pulses' | 'Oils' | 'Herbal'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const categories: ('All' | 'Spices' | 'Agriculture' | 'Dehydrated' | 'Pulses' | 'Oils' | 'Herbal')[] = ['All', 'Spices', 'Agriculture', 'Dehydrated', 'Pulses', 'Oils', 'Herbal'];

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

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                selectedCategory === category
                  ? 'bg-navy-900 text-gold-400 font-bold border border-navy-900 shadow-md shadow-navy-900/10'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-navy-900 border border-slate-200'
              }`}
            >
              {category === 'All' ? 'All Products' : category === 'Herbal' ? 'Herbal Extracts' : category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col h-full bg-cream-50 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-gold-500/40 hover:bg-white transition-all duration-300"
              >
                {/* Product Image Panel */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-90" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 inline-flex items-center bg-navy-900/90 text-gold-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded border border-gold-500/20 backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                {/* Product Meta */}
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="font-display font-bold text-xl text-navy-900 group-hover:text-gold-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-sans flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase font-mono flex items-center gap-1">
                      <BadgeCheck className="w-4.5 h-4.5 text-gold-600" /> Export Quality Verified
                    </span>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-gold-600 transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Specifications Drawer (Modal Box) */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
              />

              {/* Modal Box Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-gold-600/20 z-10 flex flex-col max-h-[90vh]"
              >
                {/* Header banner */}
                <div className="relative h-48 sm:h-56 bg-slate-100 flex-shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition focus:outline-none"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-[10px] bg-gold-500 text-navy-950 font-bold uppercase tracking-widest px-2.5 py-0.5 rounded mb-2 inline-block">
                      {selectedProduct.category} Catalog
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                      {selectedProduct.name}
                    </h3>
                  </div>
                </div>

                {/* Specs list & details */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  {/* description block */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-gold-600 font-display flex items-center gap-1.5">
                      <Info className="w-4 h-4" /> Export Outline
                    </h4>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Specifications List */}
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase font-bold tracking-widest text-navy-900 font-display flex items-center gap-1.5">
                        <FileCheck2 className="w-4.5 h-4.5 text-gold-600" /> Export Specs
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.specifications.map((spec, index) => (
                          <li key={index} className="flex items-start text-xs font-sans text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-2 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nutrition & Advantages */}
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase font-bold tracking-widest text-navy-900 font-display flex items-center gap-1.5">
                        <BadgeCheck className="w-4.5 h-4.5 text-gold-600" /> Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-xs font-sans text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-navy-900 mt-2 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
                  <p className="text-xs text-slate-500 font-sans text-center sm:text-left">
                    Standard marine cargo packaging is custom-molded to client specifications.
                  </p>
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProduct(null);
                      // Let scroll trigger Contact and pre-fill or focus
                      setTimeout(() => {
                        const contactSec = document.getElementById('contact');
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: 'smooth' });
                          const selectEl = document.getElementById('form-product') as HTMLSelectElement;
                          if (selectEl) {
                            selectEl.value = selectedProduct.name;
                          }
                        }
                      }, 300);
                    }}
                    className="w-full sm:w-auto px-6 py-3 text-center rounded bg-navy-900 color-white text-xs font-bold tracking-widest uppercase text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-colors duration-300"
                  >
                    Request Pricing
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
