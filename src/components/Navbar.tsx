import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Globe, Check, ChevronDown, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/images/adgrow_logo.webp';
import { useTranslation, LANGUAGES_LIST, LanguageCodeType } from '../i18n/LanguageContext';

const NAV_ITEMS = [
  { key: 'home', href: '#top' },
  { key: 'about', href: '#about' },
  { key: 'products', href: '#products' },
  { key: 'whyUs', href: '#why-choose-us' },
  { key: 'reach', href: '#global-reach' },
  { key: 'certs', href: '#certifications' },
  { key: 'gallery', href: '#gallery' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, language, changeLanguage, isLoading } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const currentLanguageInfo = LANGUAGES_LIST.find(l => l.code === language) || LANGUAGES_LIST[0];

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
              <div className="relative flex-shrink-0">
                <img
                  src={logoImage}
                  alt="ADGROW GLOBAL ARYA Logo"
                  className="h-10 w-10 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  fetchPriority="high"
                />
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
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="px-3 py-2 rounded-md text-xs font-medium tracking-wide uppercase text-slate-300 hover:text-gold-400 transition-colors duration-200"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </div>

            {/* Language Selector & CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded border border-slate-600/30 hover:border-gold-500/50 bg-navy-900/30 hover:bg-navy-900/60 text-slate-300 hover:text-gold-400 text-xs font-medium transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  {isLoading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-gold-500" />
                  ) : (
                    <Globe className="w-3.5 h-3.5 text-gold-500" />
                  )}
                  <span>{currentLanguageInfo.nativeName}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-72 bg-navy-900/95 backdrop-blur-md border border-gold-600/20 rounded shadow-xl py-2 z-50"
                    >
                      <div className="px-3 py-1 mb-1 border-b border-slate-800 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                        {t('nav.selectLanguage')}
                      </div>
                      <div className="grid grid-cols-2 gap-1 p-2 max-h-80 overflow-y-auto custom-scrollbar">
                        {LANGUAGES_LIST.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              changeLanguage(lang.code);
                              setIsDropdownOpen(false);
                            }}
                            className={`flex items-center justify-between px-2.5 py-2 rounded text-left text-xs transition-colors duration-200 w-full cursor-pointer ${
                              language === lang.code
                                ? 'bg-gold-500/10 text-gold-400 font-bold border border-gold-500/20'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-navy-800/40'
                            }`}
                          >
                            <span className="truncate">{lang.nativeName}</span>
                            {language === lang.code && <Check className="w-3 h-3 text-gold-400 flex-shrink-0" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Get Quote CTA */}
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, '#contact')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded border border-gold-500 bg-transparent text-xs font-semibold uppercase tracking-widest text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
              >
                <span>{t('nav.getQuote')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu trigger + mobile lang selector */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* Simple Mobile Lang Indicator button */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2 rounded border border-slate-700/40 bg-navy-900/40 text-slate-400 hover:text-gold-400"
                  aria-label="Select Language"
                >
                  <Globe className="w-4.5 h-4.5" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-64 bg-navy-950 border border-gold-600/20 rounded shadow-2xl py-2 z-50"
                    >
                      <div className="grid grid-cols-2 gap-1 p-2 max-h-60 overflow-y-auto">
                        {LANGUAGES_LIST.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              changeLanguage(lang.code);
                              setIsDropdownOpen(false);
                            }}
                            className={`px-2 py-1.5 rounded text-xs text-left truncate ${
                              language === lang.code ? 'bg-gold-500/10 text-gold-400 font-bold' : 'text-slate-400'
                            }`}
                          >
                            {lang.nativeName}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="block px-3 py-2.5 rounded-md text-sm font-medium tracking-wide uppercase text-slate-300 hover:text-gold-400 hover:bg-navy-950 transition-all"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
                <div className="pt-4 border-t border-gold-600/10">
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollToSection(e, '#contact')}
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded border border-gold-500 bg-gold-500 text-xs font-bold uppercase tracking-widest text-navy-950 hover:bg-transparent hover:text-gold-400 transition-all duration-300"
                  >
                    <span>{t('nav.getQuote')}</span>
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
