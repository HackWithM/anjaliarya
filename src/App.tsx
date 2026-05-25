/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from './assets/images/adgrow_logo.webp';

import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const AboutUs = lazy(() => import('./components/AboutUs'));
const Products = lazy(() => import('./components/Products'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const GlobalReach = lazy(() => import('./components/GlobalReach'));
const Certifications = lazy(() => import('./components/Certifications'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant loading delay to simulate secure blockchain tracing verification or global catalog setup
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-cream-50 min-h-screen text-slate-800 font-sans antialiased selection:bg-gold-500 selection:text-navy-950 overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        {loading ? (
          /* Premium Full-Screen Corporate Preloader Overlay */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            className="fixed inset-0 bg-navy-950 z-[9999] flex flex-col items-center justify-center font-display"
          >
            {/* Visual background flair for pre-loader */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(184,144,71,0.03)_1.5px,transparent_1.5px)] bg-[size:40px_40px] pointer-events-none" />
            
            <div className="text-center space-y-6 relative max-w-sm px-6">
              
              {/* Rotating Logo Emblem */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative flex items-center justify-center mx-auto w-24 h-24"
              >
                <img
                  src={logoImage}
                  alt="ADGROW GLOBAL ARYA"
                  className="w-20 h-20 object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full border-t-2 border-t-gold-500/60 animate-spin" style={{ animationDuration: '3s' }} />
              </motion.div>

              {/* Title brand details */}
              <div className="space-y-1">
                <h2 className="text-xl font-bold tracking-[0.2em] text-white uppercase">ADGROW GLOBAL</h2>
                <p className="text-[10px] text-gold-500 font-medium tracking-[0.3em] uppercase">Arya Exim Portal</p>
              </div>

              {/* Status text */}
              <div className="flex flex-col items-center space-y-2 pt-4">
                <div className="flex items-center space-x-2 text-slate-400 text-xs tracking-wide">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-gold-500" />
                  <span>Loading Sourcing Catalog...</span>
                </div>
                
                {/* Visual loading bar slider */}
                <div className="w-48 bg-navy-900 border border-gold-600/10 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="bg-gold-500 h-full rounded"
                  />
                </div>
              </div>

              <span className="text-[9px] text-slate-600 tracking-wider absolute bottom-0 left-0 right-0 leading-none">
                AUTHENTIC MERCHANT TRADING CHANNELS
              </span>

            </div>
          </motion.div>
        ) : (
          /* Main Landing Portal */
          <motion.div
            key="portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen"
          >
            {/* Navigation Header */}
            <Navbar />

            {/* Content Layout Sections */}
            <main className="flex-grow">
              <Hero />
              <Suspense fallback={<div className="min-h-[600px] bg-cream-50" />}>
                <AboutUs />
              </Suspense>
              <Suspense fallback={<div className="min-h-[800px] bg-white" />}>
                <Products />
              </Suspense>
              <Suspense fallback={<div className="min-h-[600px] bg-navy-900" />}>
                <WhyChooseUs />
              </Suspense>
              <Suspense fallback={<div className="min-h-[600px] bg-cream-50" />}>
                <GlobalReach />
              </Suspense>
              <Suspense fallback={<div className="min-h-[500px] bg-white" />}>
                <Certifications />
              </Suspense>
              <Suspense fallback={<div className="min-h-[600px] bg-cream-50" />}>
                <Gallery />
              </Suspense>
              <Suspense fallback={<div className="min-h-[500px] bg-navy-950" />}>
                <Testimonials />
              </Suspense>
              <Suspense fallback={<div className="min-h-[600px] bg-white" />}>
                <Contact />
              </Suspense>
            </main>

            {/* Corporate Footer */}
            <Suspense fallback={<div className="min-h-[200px] bg-navy-950" />}>
              <Footer />
            </Suspense>

            {/* WhatsApp Speed-dial Floating Desk */}
            <Suspense fallback={null}>
              <WhatsAppButton />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
