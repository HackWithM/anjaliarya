import React, { useEffect, useState } from 'react';
import { CheckCircle, ShieldAlert, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  const [progress, setProgress] = useState(100);
  const { t } = useTranslation();

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (elapsed >= duration) {
        clearInterval(interval);
        onClose();
      }
    }, 16);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  const isSuccess = type === 'success';

  return (
    <div
      role="alert"
      className={`fixed bottom-6 right-6 z-[99999] max-w-sm w-full bg-navy-950/95 backdrop-blur-md text-white border ${
        isSuccess ? 'border-gold-500/30' : 'border-rose-500/30'
      } rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform translate-y-0`}
      style={{
        animation: 'toast-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      <div className="p-4 flex items-start gap-3">
        {/* Status Icon */}
        <div className="shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle className="w-5 h-5 text-gold-400" />
          ) : (
            <ShieldAlert className="w-5 h-5 text-rose-400" />
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-1">
          <p className="font-display font-bold text-xs tracking-widest uppercase text-gold-400">
            {isSuccess ? t('contact.toastSuccessTitle') : t('contact.toastErrorTitle')}
          </p>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            {message}
          </p>
        </div>

        {/* Close trigger */}
        <button
          onClick={onClose}
          className="shrink-0 text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Countdown Progress indicator */}
      <div className="w-full h-1 bg-slate-800/40 relative">
        <div
          className={`h-full absolute left-0 top-0 transition-all ease-linear ${
            isSuccess ? 'bg-gold-500' : 'bg-rose-500'
          }`}
          style={{ width: `${progress}%`, transitionDuration: '16ms' }}
        />
      </div>

      {/* Embedded slide-in animation styles */}
      <style>{`
        @keyframes toast-slide-in {
          from {
            opacity: 0;
            transform: translateY(1.5rem) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
