import React from 'react';
import { ShieldCheck, Activity, Globe, FileText, Award, BadgeCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import { useTranslation } from '../i18n/LanguageContext';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  ShieldCheck: ShieldCheck,
  Activity: Activity,
  Globe: Globe,
  FileText: FileText,
  Award: Award
};

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-radial from-slate-100 to-transparent pointer-events-none opacity-[0.6] " />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-600 uppercase block">
            {t('certs.tagline')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy-900 tracking-tight">
            {t('certs.title')}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded" />
          <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
            {t('certs.desc')}
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => {
            const IconComponent = ICON_MAP[cert.iconName] || ShieldCheck;
            const certKey = cert.id === 'export-lic' ? 'customs' : cert.id;

            return (
              <div
                key={cert.id}
                className="group relative bg-cream-50 p-8 rounded-xl border border-slate-200/80 hover:border-gold-500/30 hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Government Stamp / Seal effect decoration */}
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full border-2 border-gold-600/10 flex items-center justify-center font-serif text-[8px] font-bold text-gold-600/30 select-none group-hover:border-gold-600/30 group-hover:text-gold-600/50 transition-colors pointer-events-none rotate-12">
                  {t('certs.verified')}
                </div>

                <div className="space-y-6">
                  {/* Icon Area */}
                  <div className="inline-flex p-3 rounded bg-navy-900 text-gold-400 border border-gold-600/20 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-navy-900 group-hover:text-gold-600 transition-colors">
                      {t(`certs.${certKey}Name`) || cert.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">
                      {t(`certs.${certKey}Desc`) || cert.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded select-all hover:bg-slate-200 transition">
                    {t(`certs.${certKey}Code`) || cert.code}
                  </span>
                  <span className="inline-flex items-center text-[10px] uppercase tracking-wider font-semibold text-gold-600 font-display">
                    <BadgeCheck className="w-4 h-4 mr-1 text-gold-600" /> {t('certs.active')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Merchant Export Trust Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-sans">
            {t('certs.trustNote')}
          </p>
        </div>

      </div>
    </section>
  );
}
