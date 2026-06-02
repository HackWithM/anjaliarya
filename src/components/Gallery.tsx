import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { useTranslation } from '../i18n/LanguageContext';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'packaging' | 'warehouse' | 'cargo' | 'raw'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const tabs: { value: 'all' | 'packaging' | 'warehouse' | 'cargo' | 'raw'; key: string; fallback: string }[] = [
    { value: 'all', key: 'filterAll', fallback: 'All Photos' },
    { value: 'packaging', key: 'filterPackaging', fallback: 'Packaging' },
    { value: 'warehouse', key: 'filterWarehouse', fallback: 'Warehouse & Storage' },
    { value: 'cargo', key: 'filterCargo', fallback: 'Cargo & Shipments' },
    { value: 'raw', key: 'filterRaw', fallback: 'Sourcing & Agro' },
  ];

  return (
    <section id="gallery" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-600 uppercase block">
            {t('gallery.tagline')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy-900 tracking-tight">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded" />
          <p className="text-slate-500 font-sans text-sm sm:text-base pr-2 pl-2">
            {t('gallery.desc')}
          </p>
        </div>

        {/* Dynamic Category Selector tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setSelectedCategory(tab.value);
                setLightboxIndex(null); 
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer ${
                selectedCategory === tab.value
                  ? 'bg-navy-900 text-gold-400 font-bold border border-navy-900 shadow'
                  : 'bg-white hover:bg-slate-50 text-slate-500 hover:text-navy-900 border border-slate-200'
              }`}
            >
              {t(`gallery.${tab.key}`) || tab.fallback}
            </button>
          ))}
        </div>

        {/* Images Grid with hover effects */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const translatedTitle = t(`gallery.items.${item.id}`) || item.title;
              const filterTab = tabs.find(tb => tb.value === item.category);
              const translatedCategory = filterTab ? t(`gallery.${filterTab.key}`) : item.category;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group relative h-72 rounded-xl overflow-hidden shadow-sm border border-slate-200 cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  {/* Photo */}
                  <img
                    src={item.image}
                    alt={translatedTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Glassy overlay backdrop on hover */}
                  <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                  {/* Dynamic Floating Zoom button */}
                  <div className="absolute top-4 right-4 p-2 bg-gold-500 text-navy-950 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Subtitle bottom banner */}
                  <div className="absolute bottom-4 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white space-y-1">
                    <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">
                      {translatedCategory} {t('gallery.highlight')}
                    </span>
                    <p className="font-display font-bold text-sm tracking-wide">
                      {translatedTitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (() => {
            const item = filteredItems[lightboxIndex];
            const translatedTitle = t(`gallery.items.${item.id}`) || item.title;
            const filterTab = tabs.find(tb => tb.value === item.category);
            const translatedCategory = filterTab ? t(`gallery.${filterTab.key}`) : item.category;

            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Dark backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setLightboxIndex(null)}
                  className="absolute inset-0 bg-navy-950/90 [backdrop-filter:blur(4px)]"
                />

                {/* Lightbox Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative max-w-4xl w-full flex flex-col justify-center z-10 select-none"
                >
                  {/* Floating controls */}
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="absolute -top-12 right-0 p-2 text-white hover:text-gold-400 bg-navy-900 border border-slate-800 rounded-full transition focus:outline-none cursor-pointer"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Main Lightbox Frame */}
                  <div className="relative aspect-video max-h-[70vh] bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={translatedTitle}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Left / Right Navigational Arrows */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 p-3 rounded-full bg-navy-900/60 hover:bg-navy-900/90 text-white hover:text-gold-400 border border-slate-800/10 transition cursor-pointer"
                      aria-label="Previous view"
                    >
                      <ChevronLeft className="w-5 h-5 animate-pulse-slow" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="absolute right-4 p-3 rounded-full bg-navy-900/60 hover:bg-navy-900/90 text-white hover:text-gold-400 border border-slate-800/10 transition cursor-pointer"
                      aria-label="Next view"
                    >
                      <ChevronRight className="w-5 h-5 animate-pulse-slow" />
                    </button>
                  </div>

                  {/* Photo labels panel */}
                  <div className="p-4 bg-navy-900 rounded-xl mt-4 border border-gold-600/10 text-white flex justify-between items-center space-x-4">
                    <div>
                      <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">
                        {t('gallery.categoryLabel')} {translatedCategory}
                      </span>
                      <p className="font-display font-semibold text-sm">
                        {translatedTitle}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 font-mono shrink-0">
                      Image {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}
