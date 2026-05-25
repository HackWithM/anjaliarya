import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/images/adgrow_logo.webp';

const NAV_ITEMS = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Global Reach', href: '#global-reach' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // height of sticky header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-display ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md py-4 border-b border-gold-600/20 shadow-lg shadow-navy-950/50'
            : 'bg-gradient-to-b from-navy-950/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a
              href="#top"
              onClick={(e) => handleScrollToSection(e, '#top')}
              className="flex items-center space-x-1.5 group focus:outline-none"
            >
              {/* AGA Shield Logo Image */}
              <div className="relative flex-shrink-0">
                <img
                  src={logoImage}
                  alt="ADGROW GLOBAL ARYA Logo"
                  className="h-10 w-10 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  fetchPriority="high"
                />
                {/* Live indicator dot */}
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-base sm:text-lg font-bold tracking-widest leading-none group-hover:text-gold-300 transition-colors">
                  ADGROW GLOBAL
                </span>
                <span className="text-[10px] text-gold-500 font-medium tracking-[0.25em] leading-none uppercase">
                  Arya Exim
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="px-3 py-2 rounded-md text-xs font-medium tracking-wide uppercase text-slate-300 hover:text-gold-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, '#contact')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded border border-gold-500 bg-transparent text-xs font-semibold uppercase tracking-widest text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-gold-500 hover:bg-navy-900 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy-900 border-t border-gold-600/15 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-1.5 sm:px-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="block px-3 py-2.5 rounded-md text-sm font-medium tracking-wide uppercase text-slate-300 hover:text-gold-400 hover:bg-navy-950 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gold-600/10">
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollToSection(e, '#contact')}
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded border border-gold-500 bg-gold-500 text-xs font-bold uppercase tracking-widest text-navy-950 hover:bg-transparent hover:text-gold-400 transition-all duration-300"
                  >
                    <span>Get a Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Top anchor */}
      <div id="top" className="absolute top-0 left-0 w-1 h-1 pointer-events-none" />
    </>
  );
}
