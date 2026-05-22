import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show inviting tooltip after 5 seconds to capture attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      
      {/* Tooltip greeting speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-3 mr-1 bg-white border border-emerald-500 text-slate-800 p-3.5 rounded-xl shadow-2xl relative w-60 text-left pointer-events-auto flex items-start space-x-2 justify-between"
          >
            <div className="space-y-1">
              <p className="text-xs font-bold text-emerald-700 tracking-wide">Arya Sourcing Desk</p>
              <p className="text-[10px] text-slate-500 leading-normal font-sans">
                Chat live about metric ton prices, port availability or custom labels.
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 focus:outline-none"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Triangle graphic tail bubble pointer */}
            <div className="absolute top-full right-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
            <div className="absolute top-full right-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-emerald-500 -z-10 translate-y-[1px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating green circular trigger */}
      <a
        href="https://wa.me/918830737035?text=Hello%20Adgrow%20Global%20Arya,%20I'm%20interested%20in%20inquiring%20about%20your%20export%20import%20services."
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 shadow-2xl transition duration-300 group focus:outline-none"
        aria-label="Direct WhatsApp link to Sourcing Support desk"
      >
        {/* Pulse ring loops */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        
        {/* Main WhatsApp vector icon replacement inside lucide */}
        <MessageSquare className="w-6 h-6 relative z-10 shrink-0" />

        {/* Hover label hint tooltip */}
        <span className="absolute right-16 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-navy-950 text-gold-400 text-xs font-bold uppercase tracking-widest px-3.5 py-2.5 rounded-lg border border-gold-600/30 whitespace-nowrap transition duration-300 shadow">
          Chat Sourcing Direct
        </span>
      </a>

    </div>
  );
}
