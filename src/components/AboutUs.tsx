import { useState } from 'react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { WAREHOUSE_IMAGE } from '../data';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  return (
    <section id="about" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -mr-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl -ml-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase block">
                Establishing Global Legacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 tracking-tight leading-tight">
                About ADGROW GLOBAL ARYA
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded" />
            </div>

            <p className="text-slate-700 font-sans leading-relaxed text-base sm:text-lg">
              Authorized and certified, <strong className="text-navy-900 font-semibold">ADGROW GLOBAL ARYA</strong> operates as a premium Indian merchant exporter specializing in sourcing, inspecting, and shipping elite-grade agricultural staples, premium whole spices, ground powders, and dehydrated foods elements.
            </p>
            
            <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              With a sophisticated procurement presence spanning major cultivation regions of India, we inspect crops right from sowing to packaging. Every container that sails from Indian harbors is a testament to our pledge of delivering pure, unadulterated food products complying with international food health directives such as APEDA, FSSAI, and European microbiological regulations.
            </p>

            {/* Quality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-900 font-display">100% Quality Assurance</h4>
                  <p className="text-xs text-slate-500">Dual-level sorting and magnetic gravity checks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-900 font-display">Flawless Documentation</h4>
                  <p className="text-xs text-slate-500">IEC, APEDA phytosanitary, and customs handled.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-900 font-display">Ethical Farmer Alliances</h4>
                  <p className="text-xs text-slate-500">Fair price agreements with regional growers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-900 font-display">Global Logistics Support</h4>
                  <p className="text-xs text-slate-500">Seamless maritime container packing and freight.</p>
                </div>
              </div>
            </div>

            {/* Vision and Mission Toggles */}
            <div className="border border-slate-200 bg-white rounded-lg p-6 shadow-sm">
              <div className="flex border-b border-slate-100 pb-3 mb-4 space-x-6">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex items-center space-x-2 pb-2 text-sm font-bold tracking-wider uppercase font-display border-b-2 transition-all focus:outline-none ${
                    activeTab === 'vision'
                      ? 'border-gold-500 text-navy-900'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex items-center space-x-2 pb-2 text-sm font-bold tracking-wider uppercase font-display border-b-2 transition-all focus:outline-none ${
                    activeTab === 'mission'
                      ? 'border-gold-500 text-navy-900'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </button>
              </div>

              <div className="min-h-[80px]">
                {activeTab === 'vision' ? (
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed animate-fade-in font-sans">
                    To be established globally as the premier Indian benchmark for food and agriculture exports, driving absolute trust, sustainable agricultural alliances, and providing authentic healthy Indian ingredients to households on every continent.
                  </p>
                ) : (
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed animate-fade-in font-sans">
                    To facilitate standard-governed export operations that boost smallholder Indian growers, utilize sterile state-of-the-art dehydrated food manufacturing technologies, and exceed client expectations on quality, purity, and timelines.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Imagery Bento */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            {/* Visual background frame */}
            <div className="absolute inset-4 border-2 border-gold-600/20 rounded-2xl -z-10 translate-x-4 translate-y-4 hidden sm:block" />
            
            <div className="space-y-6">
              {/* Primary Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 relative group">
                <img
                  src={WAREHOUSE_IMAGE}
                  alt="Corporate high-quality packaging and warehousing"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center space-x-3 bg-navy-950/40 backdrop-blur-sm p-4 rounded-lg">
                  <Award className="w-8 h-8 text-gold-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-display font-semibold text-sm">International Compliant Facility</h5>
                    <p className="text-[10px] text-slate-200">ISO 22000 & HACCP aligned storage</p>
                  </div>
                </div>
              </div>

              {/* Grid of secondary smaller imagery highlights */}
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200/40 group">
                  <img
                    src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400"
                    alt="Indian grain field"
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200/40 group">
                  <img
                    src="https://www.globalgrinders.com/wp-content/uploads/2015/01/Buying-Whole-Spices.jpg"
                    alt="Inspection grading spices"
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
