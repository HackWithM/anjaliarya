/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Ship, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import GlobalReach from './components/GlobalReach';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

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
              
              {/* Rotating Emblem */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative flex items-center justify-center mx-auto w-20 h-20 rounded-2xl border-2 border-gold-500 bg-navy-900 shadow-2xl shadow-gold-500/10"
              >
                <span className="text-gold-400 font-extrabold text-3xl leading-none">A</span>
                <div className="absolute inset-0 rounded-2xl border-t-2 border-t-gold-500 animate-spin" style={{ animationDuration: '3s' }} />
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
              <AboutUs />
              <Products />
              <WhyChooseUs />
              <GlobalReach />
              <Certifications />
              <Gallery />
              <Testimonials />
              <Contact />
            </main>

            {/* Corporate Footer */}
            <Footer />

            {/* WhatsApp Speed-dial Floating Desk */}
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
