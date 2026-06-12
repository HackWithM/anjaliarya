import { useState, useEffect, useRef } from 'react';
import { ArrowRight, BadgeCheck, FileCheck2, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { useTranslation } from '../i18n/LanguageContext';

interface ProductGridProps {
  products: Product[];
  isModal?: boolean;
}

const toCamelCase = (str: string) => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

export default function ProductGrid({ products, isModal = false }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t } = useTranslation();
  const specsModalRef = useRef<HTMLDivElement>(null);
  const lastActiveProductElementRef = useRef<HTMLElement | null>(null);

  const handleOpenSpecs = (product: Product) => {
    lastActiveProductElementRef.current = document.activeElement as HTMLElement;
    setSelectedProduct(product);
  };

  useEffect(() => {
    if (!selectedProduct) {
      if (lastActiveProductElementRef.current) {
        lastActiveProductElementRef.current.focus();
      }
      return;
    }

    // Focus the specs modal container or first button
    const focusable = specsModalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!specsModalRef.current) return;

      const focusableElements = Array.from(
        specsModalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => !el.hasAttribute('disabled') && el.getAttribute('tabindex') !== '-1');

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleTabKey);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [selectedProduct]);

  return (
    <div className={isModal ? "relative" : "mt-16 pt-16 border-t border-slate-200/60 relative"}>
      {!isModal && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6">
          <span className="text-xs font-bold tracking-[0.2em] text-gold-600 uppercase bg-cream-50 px-4 py-1.5 rounded-full border border-gold-500/20 shadow-sm">
            {t('products.availableProducts')}
          </span>
        </div>
      )}
      
      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {products.map((product) => {
            const camelId = toCamelCase(product.id);
            const translatedName = t(`products.${camelId}.name`) || product.name;
            const translatedDesc = t(`products.${camelId}.desc`) || product.description;

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
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
                     alt={translatedName}
                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                     referrerPolicy="no-referrer"
                     loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-90" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 inline-flex items-center bg-navy-900/90 text-gold-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded border border-gold-500/20 backdrop-blur-sm">
                    {t(`categories.${product.category}.title`)}
                  </span>
                </div>

                {/* Product Meta */}
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="font-display font-bold text-xl text-navy-900 group-hover:text-gold-600 transition-colors">
                    {translatedName}
                  </h3>
                  <p className="text-slate-500 text-sm font-sans flex-grow leading-relaxed">
                    {translatedDesc}
                  </p>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase font-mono flex items-center gap-1">
                      <BadgeCheck className="w-4.5 h-4.5 text-gold-600" /> {t('products.exportQualityVerified')}
                    </span>
                    <button
                      onClick={() => handleOpenSpecs(product)}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-gold-600 transition-colors cursor-pointer"
                    >
                      <span>{t('products.specifications')}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Dynamic Specifications Drawer (Modal Box) */}
      <AnimatePresence>
        {selectedProduct && (() => {
          const camelId = toCamelCase(selectedProduct.id);
          const translatedName = t(`products.${camelId}.name`) || selectedProduct.name;
          const translatedDesc = t(`products.${camelId}.desc`) || selectedProduct.description;
          const translatedSpecs: string[] = t(`products.${camelId}.specs`) || selectedProduct.specifications;
          const translatedBenefits: string[] = t(`products.${camelId}.benefits`) || selectedProduct.benefits;

          return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Box Content */}
              <motion.div
                ref={specsModalRef}
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="product-specs-modal relative bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-gold-600/20 z-10 flex flex-col max-h-[90vh]"
              >
                {/* Header banner */}
                <div className="relative h-48 sm:h-56 bg-slate-100 flex-shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={translatedName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition focus:outline-none cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-[10px] bg-gold-500 text-navy-950 font-bold uppercase tracking-widest px-2.5 py-0.5 rounded mb-2 inline-block">
                      {t(`categories.${selectedProduct.category}.title`)} {t('products.catalog')}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                      {translatedName}
                    </h3>
                  </div>
                </div>

                {/* Specs list & details */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  {/* description block */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-gold-600 font-display flex items-center gap-1.5">
                      <Info className="w-4 h-4" /> {t('products.exportOutline')}
                    </h4>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {translatedDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Specifications List */}
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase font-bold tracking-widest text-navy-900 font-display flex items-center gap-1.5">
                        <FileCheck2 className="w-4.5 h-4.5 text-gold-600" /> {t('products.exportSpecs')}
                      </h4>
                      <ul className="space-y-2">
                        {translatedSpecs.map((spec, index) => (
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
                        <BadgeCheck className="w-4.5 h-4.5 text-gold-600" /> {t('products.keyFeatures')}
                      </h4>
                      <ul className="space-y-2">
                        {translatedBenefits.map((benefit, index) => (
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
                    {t('products.specsDisclaimer')}
                  </p>
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProduct(null);
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
                    className="w-full sm:w-auto px-6 py-3 text-center rounded bg-navy-900 text-white text-xs font-bold tracking-widest uppercase text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-colors duration-300"
                  >
                    {t('products.requestPricing')}
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
