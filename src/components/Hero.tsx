import { ArrowRight, Globe, Shield, Anchor } from 'lucide-react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { HERO_IMAGE } from '../data';

export default function Hero() {
  const handleScrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden pt-20">
      {/* Background Image with Dark Mesh and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Container vessel at sunset - Adgrow Global Arya Exim"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,144,71,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,144,71,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 space-y-8"
          >
            {/* Tag Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gold-600/10 border border-gold-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-gold-400 font-display text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                AUTHENTIC INDIAN MERCHANT EXPORTER
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight leading-[1.1]">
                Connecting Indian <br className="hidden sm:inline" />
                <span className="relative">
                  <span className="relative z-10 text-gold-400 drop-shadow">Quality</span>
                  <span className="absolute left-0 bottom-1 w-full h-2.5 bg-gold-600/20 -rotate-1 z-0" />
                </span> to Global Markets
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-slate-300 font-sans text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light"
            >
              ADGROW GLOBAL ARYA is a trusted Indian export company delivering premium agricultural and food products worldwide. We bridge local cultivation perfection with rigorous global distribution standards.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={() => handleScrollToSection('products')}
                className="px-8 py-4 rounded bg-gold-500 hover:bg-gold-600 text-navy-950 text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-gold-500/20 active:scale-95 flex items-center justify-center space-x-2 border border-gold-500"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => handleScrollToSection('contact')}
                className="px-8 py-4 rounded border border-white/20 hover:border-gold-500 bg-white/5 hover:bg-navy-900/40 text-white hover:text-gold-400 text-sm font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
              >
                <span>Contact Us</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-500/20 max-w-2xl text-left"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 text-gold-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs sm:text-sm font-semibold">100% Export</span>
                  <span className="text-[10px] text-slate-400">Strictly Global</span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 text-gold-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs sm:text-sm font-semibold">Assured Quality</span>
                  <span className="text-[10px] text-slate-400">SGS / APEDA Standards</span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 text-gold-400">
                  <Anchor className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs sm:text-sm font-semibold">Port Access</span>
                  <span className="text-[10px] text-slate-400">Direct Port Sourcing</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Decorative Side Visual */}
          <div className="hidden lg:col-span-4 lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="relative w-80 h-96 rounded-2xl border border-gold-500/20 p-4 bg-navy-900/60 backdrop-blur-md shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
              <div className="h-full w-full rounded-xl border border-gold-600/10 overflow-hidden relative group">
                <img
                  src="https://cdn-diekm.nitrocdn.com/HOwlnarUJjGHsEfHJVXlNeqNRJOnjIWW/assets/images/optimized/rev-4f278e7/www.globalgrinders.com/wp-content/uploads/2016/04/Facts-About-Whole-Spices.jpg.pagespeed.ce.SI-lP9yTyL.jpg"
                  alt="Quality Saffron and Spices"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-gold-400 tracking-widest uppercase font-medium">Core Speciality</span>
                  <p className="text-white font-display text-sm font-bold">Premium Indian Saffron & Ground Spices</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Elegant Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120 309.19 8.37C413.4 54.43 521.02 120 711.66 120 892.4 120 1011.08 30.63 1200 120Z" className="fill-cream-50" />
        </svg>
      </div>
    </div>
  );
}
