import { motion } from 'motion/react';
import {
  Leaf,
  Package,
  Droplets,
  Globe,
  Heart,
  Clock,
} from 'lucide-react';
import vegFruitImage from '../assets/images/veg_fruit_export.webp';
import { useTranslation } from '../i18n/LanguageContext';

const keyPoints = [
  { icon: Leaf,    key: 'p1Label', descKey: 'p1Desc', fallbackLabel: 'Farm Fresh Produce',          fallbackDesc: 'Sourced directly from trusted Indian farms' },
  { icon: Package, key: 'p2Label', descKey: 'p2Desc', fallbackLabel: 'Export Quality Packaging',    fallbackDesc: 'Food-grade, oxygen-barrier material' },
  { icon: Droplets,key: 'p3Label', descKey: 'p3Desc', fallbackLabel: 'Hygienic Processing',         fallbackDesc: 'Strict phytosanitary & fumigation standards' },
  { icon: Globe,   key: 'p4Label', descKey: 'p4Desc', fallbackLabel: 'Global Shipping Support',     fallbackDesc: 'Reliable logistics to 30+ countries' },
  { icon: Heart,   key: 'p5Label', descKey: 'p5Desc', fallbackLabel: 'Rich Nutritional Value',      fallbackDesc: 'Preserved freshness with cold-chain handling' },
  { icon: Clock,   key: 'p6Label', descKey: 'p6Desc', fallbackLabel: 'Timely International Delivery', fallbackDesc: 'On-time fulfilment, every shipment' },
];

export default function ProduceBanner() {
  const { t } = useTranslation();

  return (
    <section
      id="produce-export"
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0faf4 0%, #f8fbff 50%, #fffdf0 100%)',
      }}
    >
      {/* Subtle decorative dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, #4ade8088 0.8px, transparent 0.8px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top accent border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 2-COLUMN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-7"
          >
            {/* Label badge */}
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.28em] text-emerald-700 uppercase bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <Leaf className="w-3.5 h-3.5" />
              {t('produce.tagline')}
            </span>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 leading-tight tracking-tight">
                {t('produce.titlePart1')}{' '}
                <span
                  className="relative inline-block"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #059669, #16a34a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {t('produce.titlePart2')}
                </span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />
              <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed font-sans max-w-lg">
                {t('produce.desc')}
              </p>
            </div>

            {/* Key Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyPoints.map(({ icon: Icon, key, descKey, fallbackLabel, fallbackDesc }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-emerald-100 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-emerald-300 hover:bg-white transition-all duration-250 cursor-default"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-100 to-green-50 flex items-center justify-center group-hover:from-emerald-500 group-hover:to-green-500 transition-all duration-250">
                    <Icon className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors duration-250" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-navy-900 leading-snug group-hover:text-emerald-700 transition-colors duration-200">
                      {t(`produce.points.${key}`) || fallbackLabel}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-snug mt-0.5 font-sans">
                      {t(`produce.points.${descKey}`) || fallbackDesc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-1">
              <a
                href="#contact"
                onClick={() => {
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-700 hover:to-green-600 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                {t('produce.btnQuote')}
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative ring behind image */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, #4ade80 0%, transparent 70%)',
              }}
            />

            {/* Image card */}
            <div className="relative w-full max-w-md lg:max-w-full overflow-hidden rounded-2xl shadow-xl shadow-emerald-900/10 border border-emerald-100 group">
              <img
                src={vegFruitImage}
                alt="Fresh Vegetables and Fruits Export — Adgrow Global Arya"
                loading="lazy"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none rounded-2xl" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-xl px-4 py-2.5 shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  {t('produce.badgeReady')}
                </p>
                <p className="text-[13px] font-extrabold text-navy-900 leading-tight">
                  {t('produce.badgeAssured')}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
    </section>
  );
}
