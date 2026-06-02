import { useState } from 'react';
import { Globe2, Navigation, Ship, Users, Compass, Waves } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPORT_COUNTRIES } from '../data';
import { useTranslation } from '../i18n/LanguageContext';

export default function GlobalReach() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <section id="global-reach" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Decorative details - standard, pure, clean graphics */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-6 hover:shadow-md hover:border-gold-500/20 transition group">
            <div className="p-4 rounded-lg bg-gold-600/10 text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-navy-900 tracking-tight">50+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans mt-1">{t('reach.stats.clients')}</p>
              <p className="text-[10px] text-slate-400 font-sans">{t('reach.stats.clientsSub')}</p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-6 hover:shadow-md hover:border-gold-500/20 transition group">
            <div className="p-4 rounded-lg bg-gold-600/10 text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
              <Globe2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-navy-900 tracking-tight">20+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans mt-1">{t('reach.stats.countries')}</p>
              <p className="text-[10px] text-slate-400 font-sans">{t('reach.stats.countriesSub')}</p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-6 hover:shadow-md hover:border-gold-500/20 transition group">
            <div className="p-4 rounded-lg bg-gold-600/10 text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
              <Ship className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-navy-900 tracking-tight">100+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans mt-1">{t('reach.stats.shipments')}</p>
              <p className="text-[10px] text-slate-400 font-sans">{t('reach.stats.shipmentsSub')}</p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase block">
              {t('reach.tagline')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-navy-900 tracking-tight leading-tight">
              {t('reach.title')}
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded" />
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              {t('reach.desc')}
            </p>
          </div>
        </div>

        {/* Interactive Stylized World Map Component */}
        <div className="bg-navy-900 rounded-2xl p-6 sm:p-8 lg:p-12 border border-gold-600/15 shadow-xl relative">
          
          {/* Compass grid lines */}
          <div className="absolute top-6 right-6 text-gold-400/20 flex items-center space-x-1 font-mono text-[9px] pointer-events-none">
            <Compass className="w-4 h-4" />
            <span>{t('reach.compass')}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* World Vector Blueprint & Pins overlay (Col span 8) */}
            <div className="lg:col-span-8 relative min-h-[300px] sm:min-h-[400px] bg-navy-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
              
              {/* Clean abstract ocean map structure */}
              <div className="absolute inset-0 bg-blue-950/20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-[9px] text-slate-500 font-mono flex items-center gap-1.5 uppercase tracking-widest leading-none">
                <Waves className="w-3.5 h-3.5 text-gold-500/40" /> {t('reach.seaChannels')}
              </div>

              {/* Clean Map Graphic background */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-auto opacity-30 select-none pointer-events-none stroke-blue-800/20 fill-slate-800"
              >
                <path d="M0,100 L1000,100 M0,200 L1000,200 M0,300 L1000,300 M0,400 L1000,400 M100,0 L100,500 M200,0 L200,500 M300,0 L300,500 M400,0 L400,500 M500,0 L500,500 M600,0 L600,500 M700,0 L700,500 M800,0 L800,500 M900,0 L900,500" strokeWidth="0.5" strokeDasharray="3,3" />
                <path d="M 50 100 C 100 80, 200 120, 250 140 C 270 170, 250 250, 180 260 C 150 240, 100 240, 80 200 Z" />
                <path d="M 180 270 C 220 300, 240 370, 210 450 C 190 480, 160 480, 150 420 C 140 350, 150 300, 180 270 Z" />
                <path d="M 400 80 C 450 60, 600 50, 700 80 C 720 120, 800 145, 870 120 C 900 150, 900 200, 850 250 C 750 220, 700 260, 650 300 C 650 350, 500 370, 480 320 C 450 310, 400 250, 400 200 C 370 180, 370 120, 400 80 Z" />
                <path d="M 450 230 C 500 210, 550 230, 580 280 C 570 330, 550 400, 500 420 C 470 410, 440 330, 430 280 Z" />
                <path d="M 600 200 L 630 245 L 610 260 L 595 235 Z" fill="#d4af37" opacity="0.8" />
                <path d="M 780 380 C 850 370, 900 390, 920 440 C 880 470, 820 470, 780 440 Z" />
              </svg>

              {/* Central India Sourcing Hub Core Indicator (Dynamic Pulse) */}
              <div
                className="absolute flex items-center justify-center z-10"
                style={{ left: '61.5%', top: '48.5%' }}
              >
                <span className="absolute inline-flex h-9 w-9 rounded-full bg-gold-400 opacity-60 animate-ping" />
                <span className="relative flex h-4.5 w-4.5 rounded-full bg-gold-500 border-2 border-white shadow shadow-gold-500" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gold-500 text-navy-950 font-display font-extrabold text-[9px] px-1.5 py-0.5 rounded tracking-wider shadow uppercase">
                  {t('reach.sourceBase')}
                </span>
              </div>

              {/* Export Nations Spotlights Overlay */}
              {EXPORT_COUNTRIES.map((country) => (
                <div
                  key={country.code}
                  className="absolute cursor-pointer group flex items-center justify-center"
                  style={{ left: country.x, top: country.y }}
                  onMouseEnter={() => setHoveredCountry(country.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${hoveredCountry === country.name ? 'bg-gold-400' : 'bg-blue-400'} border border-white transition-colors`} />
                  </span>

                  {/* Absolute Card Float */}
                  <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-navy-900 border border-gold-600/30 text-white p-3 rounded-lg shadow-xl text-center w-36 pointer-events-none transition-all duration-300 z-30 ${
                    hoveredCountry === country.name ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90 pointer-events-none'
                  }`}>
                    <p className="text-xs font-bold font-display uppercase tracking-wider text-gold-400">{t(`countries.${country.code}`) || country.name}</p>
                    <p className="text-[9px] text-slate-300 font-sans mt-1">{t('reach.consignmentStatus')}</p>
                    <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-blue-950 text-[8px] font-bold text-blue-300 uppercase tracking-widest border border-blue-500/10">
                      {country.volume} {t('reach.channel')}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar regions panel (Col span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="font-display font-bold text-lg text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-gold-400" /> {t('reach.corridorsTitle')}
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-navy-950/50 rounded-lg border border-slate-800/60 hover:border-gold-500/20 transition">
                  <div className="flex justify-between text-xs font-bold tracking-wider uppercase mb-1">
                    <span className="text-slate-300">{t('reach.c1Name')}</span>
                    <span className="text-gold-400">42% {t('reach.volume')}</span>
                  </div>
                  <div className="w-full bg-blue-950 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '42%' }} />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1.5 font-sans">{t('reach.c1Desc')}</p>
                </div>

                <div className="p-4 bg-navy-950/50 rounded-lg border border-slate-800/60 hover:border-gold-500/20 transition">
                  <div className="flex justify-between text-xs font-bold tracking-wider uppercase mb-1">
                    <span className="text-slate-300">{t('reach.c2Name')}</span>
                    <span className="text-gold-400">28% {t('reach.volume')}</span>
                  </div>
                  <div className="w-full bg-blue-950 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '28%' }} />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1.5 font-sans">{t('reach.c2Desc')}</p>
                </div>

                <div className="p-4 bg-navy-950/50 rounded-lg border border-slate-800/60 hover:border-gold-500/20 transition">
                  <div className="flex justify-between text-xs font-bold tracking-wider uppercase mb-1">
                    <span className="text-slate-300">{t('reach.c3Name')}</span>
                    <span className="text-gold-400">20% {t('reach.volume')}</span>
                  </div>
                  <div className="w-full bg-blue-950 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '20%' }} />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1.5 font-sans">{t('reach.c3Desc')}</p>
                </div>

                <div className="p-4 bg-navy-950/50 rounded-lg border border-slate-800/60 hover:border-gold-500/20 transition">
                  <div className="flex justify-between text-xs font-bold tracking-wider uppercase mb-1">
                    <span className="text-slate-300">{t('reach.c4Name')}</span>
                    <span className="text-gold-400">10% {t('reach.volume')}</span>
                  </div>
                  <div className="w-full bg-blue-950 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '10%' }} />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1.5 font-sans">{t('reach.c4Desc')}</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/20 text-center">
                <p className="text-xs text-gold-400 font-semibold font-display tracking-wide uppercase">{t('reach.traceText')}</p>
                <p className="text-[10px] text-slate-400 mt-1">{t('reach.traceSub')}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
