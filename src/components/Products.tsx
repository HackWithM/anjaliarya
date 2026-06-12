import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { PRODUCTS } from '../data';
import { CATEGORIES, ProductCategory } from '../categoryData';
import ProductCategoryCard from './ProductCategoryCard';
import ProductGrid from './ProductGrid';
import { useTranslation } from '../i18n/LanguageContext';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const { t } = useTranslation();

  // Listen to screen width changes for animation settings
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryClick = (categoryId: ProductCategory) => {
    lastActiveElementRef.current = document.activeElement as HTMLElement;
    setActiveCategory(categoryId);
  };

  // Lock page scrolling when modal is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCategory]);

  // Focus trapping and keyboard accessibility
  useEffect(() => {
    if (!activeCategory) {
      if (lastActiveElementRef.current) {
        lastActiveElementRef.current.focus();
      }
      return;
    }

    // Delay focus slightly to let the animation start
    const focusTimer = setTimeout(() => {
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      }
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // If a specs modal is open on top, ignore Escape key here (let specs modal handle it)
        if (document.querySelector('.product-specs-modal')) {
          return;
        }
        setActiveCategory(null);
      }
    };

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      // If product specs modal is open, let its own handler handle focus trapping
      if (document.querySelector('.product-specs-modal')) {
        return;
      }

      if (!modalRef.current) return;
      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
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
      clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [activeCategory]);

  const activeProducts = activeCategory 
    ? PRODUCTS.filter(p => p.category === activeCategory)
    : [];

  const activeCategoryObject = CATEGORIES.find(c => c.id === activeCategory);

  // Responsive dynamic motion variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? '100%' : '30px',
      scale: isMobile ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 220,
      }
    },
    exit: {
      opacity: 0,
      y: isMobile ? '100%' : '20px',
      scale: isMobile ? 1 : 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <section id="products" className="py-24 bg-white relative">
      {/* Background visual flair */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.4px,transparent_0.4px)] [background-size:24px_24px] opacity-[0.25] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-600 uppercase block">
            {t('products.tagline')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy-900 tracking-tight">
            {t('products.title')}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded" />
          <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
            {t('products.desc')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <ProductCategoryCard
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>

        {/* Category Modal / Drawer Popup */}
        <AnimatePresence>
          {activeCategory && activeCategoryObject && (
            <div className="fixed inset-0 z-[45] flex items-end sm:items-center justify-center p-0 sm:p-4">
              
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCategory(null)}
                className="absolute inset-0 bg-navy-950/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                ref={modalRef}
                tabIndex={-1}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                role="dialog"
                aria-modal="true"
                className="relative bg-white w-full h-[100dvh] sm:h-[80vh] sm:max-w-5xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gold-600/10 z-10 flex flex-col"
              >
                
                {/* Header Banner */}
                <div className="relative h-48 sm:h-56 md:h-64 bg-slate-100 flex-shrink-0">
                  <img
                    src={activeCategoryObject.image}
                    alt={t(`categories.${activeCategoryObject.id}.title`)}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Premium overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition focus:outline-none cursor-pointer z-10 hover:scale-105 active:scale-95"
                    aria-label="Close category catalog"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Title & Description overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
                    <span className="text-[10px] bg-gold-500 text-navy-950 font-bold uppercase tracking-widest px-2.5 py-0.5 rounded mb-2 inline-block">
                      {t('products.catalog')}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                      {t(`categories.${activeCategoryObject.id}.title`)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed mt-2 line-clamp-2 sm:line-clamp-none">
                      {t(`categories.${activeCategoryObject.id}.desc`)}
                    </p>
                  </div>
                </div>

                {/* Scrollable Products list */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-grow bg-slate-50">
                  <ProductGrid products={activeProducts} isModal={true} />
                </div>
                
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
