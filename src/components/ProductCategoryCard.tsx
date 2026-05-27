import { motion } from 'motion/react';
import { ArrowRight, Box } from 'lucide-react';
import { CategoryMeta } from '../categoryData';

interface ProductCategoryCardProps {
  category: CategoryMeta;
  isActive: boolean;
  onClick: () => void;
}

export default function ProductCategoryCard({ category, isActive, onClick }: ProductCategoryCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className={`group flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border ${
        isActive 
          ? 'bg-white border-gold-500 ring-2 ring-gold-500/20 shadow-gold-900/10' 
          : 'bg-cream-50 border-slate-200/60 hover:border-gold-500/40 hover:bg-white'
      }`}
    >
      {/* Category Image Panel */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={category.image}
          alt={category.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isActive ? 'scale-110' : 'group-hover:scale-110'
          }`}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-90" />
        
        {isActive && (
          <div className="absolute inset-0 bg-navy-900/20" />
        )}
      </div>

      {/* Category Meta */}
      <div className="p-6 flex flex-col flex-grow space-y-3 relative">
        <div className="flex items-center justify-between">
          <h3 className={`font-display font-bold text-xl transition-colors ${
            isActive ? 'text-gold-600' : 'text-navy-900 group-hover:text-gold-600'
          }`}>
            {category.title}
          </h3>
          <Box className={`w-5 h-5 transition-colors ${
            isActive ? 'text-gold-500' : 'text-slate-400 group-hover:text-gold-400'
          }`} />
        </div>
        
        <p className="text-slate-500 text-sm font-sans flex-grow leading-relaxed">
          {category.description}
        </p>

        <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-auto">
          <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase font-mono">
            {isActive ? 'Currently Viewing' : 'Explore Category'}
          </span>
          <div className={`inline-flex items-center text-xs font-bold uppercase tracking-wider transition-colors ${
            isActive ? 'text-gold-600' : 'text-navy-900 group-hover:text-gold-600'
          }`}>
            <span>View Products</span>
            <ArrowRight className={`w-4 h-4 ml-1.5 transition-transform ${
              isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
            }`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
