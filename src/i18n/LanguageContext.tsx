import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './locales/en';

export type LanguageCode =
  | 'en' | 'hi' | 'mr' | 'gu' | 'bn'
  | 'ta' | 'te' | 'kn' | 'ml' | 'pa'
  | 'ur' | 'or' | 'as' | 'sa' | 'ne'
  | 'fr' | 'de' | 'es' | 'pt' | 'ar';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', dir: 'ltr' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', dir: 'ltr' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', dir: 'ltr' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', dir: 'ltr' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', dir: 'ltr' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', dir: 'ltr' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', dir: 'ltr' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', dir: 'ltr' },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्', dir: 'ltr' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' }
];

/**
 * Static loader map — every entry is a real, literal import() that Vite can
 * analyze at build time and code-split into separate chunks.
 * Template-literal dynamic imports like `import(`./locales/${code}.ts`)` are
 * NOT supported by Vite and will throw "Unknown variable dynamic import" at runtime.
 */
const LOCALE_LOADERS: Record<Exclude<LanguageCode, 'en'>, () => Promise<any>> = {
  hi: () => import('./locales/hi'),
  mr: () => import('./locales/mr'),
  gu: () => import('./locales/gu'),
  bn: () => import('./locales/bn'),
  ta: () => import('./locales/ta'),
  te: () => import('./locales/te'),
  kn: () => import('./locales/kn'),
  ml: () => import('./locales/ml'),
  pa: () => import('./locales/pa'),
  ur: () => import('./locales/ur'),
  or: () => import('./locales/or'),
  as: () => import('./locales/as'),
  sa: () => import('./locales/sa'),
  ne: () => import('./locales/ne'),
  fr: () => import('./locales/fr'),
  de: () => import('./locales/de'),
  es: () => import('./locales/es'),
  pt: () => import('./locales/pt'),
  ar: () => import('./locales/ar'),
};

interface LanguageContextProps {
  language: LanguageCode;
  dir: 'ltr' | 'rtl';
  changeLanguage: (code: LanguageCode) => Promise<void>;
  t: (path: string) => any;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [translations, setTranslations] = useState<any>(en);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const activeLangInfo = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  const dir = activeLangInfo.dir;

  useEffect(() => {
    // Load persisted language selection
    const savedLang = localStorage.getItem('preferred-language') as LanguageCode;
    if (savedLang && savedLang !== 'en' && LANGUAGES.some(l => l.code === savedLang)) {
      changeLanguage(savedLang);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = async (code: LanguageCode) => {
    setIsLoading(true);
    try {
      let loadedTranslations: any;
      if (code === 'en') {
        loadedTranslations = en;
      } else {
        const loader = LOCALE_LOADERS[code as Exclude<LanguageCode, 'en'>];
        const module = await loader();
        // Each locale file exports a named export matching its code (e.g. `export const hi = {...}`)
        loadedTranslations = module[code];
      }
      setTranslations(loadedTranslations);
      setLanguage(code);
      localStorage.setItem('preferred-language', code);

      // Set document attributes for HTML element
      const langInfo = LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
      document.documentElement.dir = langInfo.dir;
      document.documentElement.lang = code;
    } catch (error) {
      console.error(`Failed to load translation file for language "${code}":`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const t = (path: string): any => {
    const parts = path.split('.');
    let current: any = translations;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // Fallback to English
        let fallback: any = en;
        for (const fPart of parts) {
          if (fallback && typeof fallback === 'object' && fPart in fallback) {
            fallback = fallback[fPart];
          } else {
            return path; // Key not found anywhere
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, dir, changeLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
export { LANGUAGES as LANGUAGES_LIST };
export type { LanguageCode as LanguageCodeType };
export type { LanguageInfo as LanguageInfoType };
