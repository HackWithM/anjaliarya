import { Award, Globe, Clock, Coins, FileText, Network, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useTranslation } from '../i18n/LanguageContext';

const ADVANTAGES = [
  { icon: Award, fallbackTitle: 'Premium Quality Products', fallbackDesc: 'Double-sorted, gravity separated and magnet-cleared agriculture cargo. We guarantee perfect grade compliance, flavor, moisture and size parameters.' },
  { icon: Globe, fallbackTitle: 'Global Shipping & Logistics', fallbackDesc: 'Alliances with major freight shipping lines (Maersk, MSC, CMA CGM) to execute streamlined custom-packed marine transits and cargo bookings.' },
  { icon: Clock, fallbackTitle: 'Timely Delivery Assured', fallbackDesc: 'We respect delivery deadlines. Real-time fleet communication loops and active port handling ensure container embarkation is consistently on schedule.' },
  { icon: Coins, fallbackTitle: 'Highly Competitive Pricing', fallbackDesc: 'Direct procurement alliances with regional growers eliminate intermediate traders, passing maximum savings and price consistency to your enterprise.' },
  { icon: FileText, fallbackTitle: 'Export Documentation Support', fallbackDesc: 'Comprehensive clearance management: Certificate of Origin, Phytosanitary, APEDA, FSSAI regulatory permits, custom invoices handled instantly.' },
  { icon: Network, fallbackTitle: 'Trusted International Network', fallbackDesc: 'Established merchant trading partnerships in North America, Europe, United Arab Emirates, and critical South East Asian industrial networks.' }
];

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background visual graphics - Clean Minimalism */}
      <div className="absolute inset-0 bg-navy-950/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.3em] text-gold-400 uppercase block font-display">
              {t('why.tagline')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              {t('why.title')}
            </h2>
            <div className="w-20 h-1 bg-gold-500 rounded" />
          </div>
          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-md leading-relaxed font-light">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Six Cards Bento Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ADVANTAGES.map((adv, index) => {
            const IconComponent = adv.icon;
            const titleKey = `why.c${index + 1}Title`;
            const descKey = `why.c${index + 1}Desc`;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-navy-800/40 hover:bg-navy-800/80 p-8 rounded-xl border border-slate-700/40 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glowing border effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <div className="space-y-6">
                  {/* Icon Frame */}
                  <div className="inline-flex p-3 rounded bg-gold-600/10 border border-gold-500/20 text-gold-400 group-hover:bg-gold-550 group-hover:text-navy-950 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-gold-300 transition-colors">
                      {t(titleKey) || adv.fallbackTitle}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {t(descKey) || adv.fallbackDesc}
                    </p>
                  </div>
                </div>

                {/* Corner detail accent */}
                <span className="absolute bottom-4 right-4 text-slate-800 font-mono text-[10px] select-none font-bold group-hover:text-gold-600/30 transition-colors">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Quality Note banner */}
        <div className="mt-16 bg-gradient-to-r from-navy-850 to-navy-800/60 p-6 rounded-xl border border-gold-600/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gold-400/15 rounded text-gold-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="font-display font-semibold text-white text-sm sm:text-base">{t('why.noteTitle')}</p>
              <p className="text-xs text-slate-400">{t('why.noteDesc')}</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-widest hover:bg-gold-600 transition duration-300 shadow-md shadow-gold-500/10 shrink-0 w-full sm:w-auto text-center justify-center border border-gold-500"
          >
            <span>{t('why.noteBtn')}</span>
            <CheckCircle2 className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
