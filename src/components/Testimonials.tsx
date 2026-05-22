import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000); // changes every 7 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-navy-950 text-white relative overflow-hidden font-sans">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(184,144,71,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(184,144,71,0.015)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-400 uppercase block font-display">
            International Trade Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
            Client Success & Reviews
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded" />
          <p className="text-slate-400 text-sm sm:text-base font-sans font-light">
            Quality knows no border. Read evaluations from real enterprise procurement leaders across Europe, East Asia, and the Gulf cooperating with ADGROW GLOBAL ARYA.
          </p>
        </div>

        {/* Dynamic Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="bg-navy-900 border border-gold-600/15 rounded-2xl p-8 sm:p-12 shadow-2xl relative min-h-[300px] flex flex-col justify-between"
            >
              {/* Dynamic Quote Icon */}
              <div className="absolute top-6 right-8 text-gold-500/10 pointer-events-none select-none">
                <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1.5]" />
              </div>

              {/* Feedbacks */}
              <div className="space-y-6">
                
                {/* Visual Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Main feedback text */}
                <p className="text-lg sm:text-xl font-sans leading-relaxed text-slate-100 font-light italic">
                  "{TESTIMONIALS[activeIndex].feedback}"
                </p>
              </div>

              {/* User Identity meta */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border border-gold-500 bg-navy-950 flex items-center justify-center font-display font-extrabold text-gold-400 shrink-0 select-none shadow shadow-gold-500/10">
                    {TESTIMONIALS[activeIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white tracking-wide">
                      {TESTIMONIALS[activeIndex].name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {TESTIMONIALS[activeIndex].role} &middot; <span className="text-gold-400">{TESTIMONIALS[activeIndex].company}</span>
                    </p>
                  </div>
                </div>

                {/* Country Flag Badge and clearance state */}
                <div className="flex items-center space-x-2 bg-navy-950 px-3.5 py-1.5 rounded-full border border-slate-800 shrink-0">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-400 font-sans text-xs tracking-wide">
                    Import Sourced: <strong className="text-white font-medium">{TESTIMONIALS[activeIndex].country}</strong>
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigational Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-16 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-navy-900 border border-gold-600/10 text-white hover:text-gold-400 hover:bg-navy-800 transition focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-16 z-20">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-navy-900 border border-gold-600/10 text-white hover:text-gold-400 hover:bg-navy-800 transition focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Slider dots indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === index ? 'w-8 bg-gold-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
