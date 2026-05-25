import { Linkedin, Twitter, Instagram, Award, Phone, Mail, MapPin, Globe, ArrowUp } from 'lucide-react';
import logoImage from '../assets/images/adgrow_logo.webp';

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 font-sans border-t border-gold-600/15 pt-20 pb-12 relative overflow-hidden">
      {/* Visual map motif detail in background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(184,144,71,0.01)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(184,144,71,0.01)_1.5px,transparent_1.5px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Column 1: Brand details (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#top" className="flex items-center space-x-2 group focus:outline-none">
              <img
                src={logoImage}
                alt="ADGROW GLOBAL ARYA Logo"
                className="h-10 w-10 object-contain drop-shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold tracking-widest leading-none">
                  ADGROW GLOBAL
                </span>
                <span className="text-[10px] text-gold-500 font-medium tracking-[0.25em] leading-none uppercase">
                  Arya Exim
                </span>
              </div>
            </a>
            
            <p className="text-sm leading-relaxed text-slate-300">
              A certified food and agricultural merchant trading firm bridging local cultivation excellence with rigor-tested global food supply standards. Shipping pure Indian nutrition worldwide.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-400 transition" aria-label="LinkedIn profile">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2 rounded bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-400 transition" aria-label="Twitter handle">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2 rounded bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-400 transition" aria-label="Instagram gallery">
                <Instagram className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (Col span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white border-l-2 border-gold-500 pl-3">
              Corporate Desk
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#about" className="hover:text-gold-400 transition">About Company</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition">Agricultural Catalog</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-gold-400 transition">Partner Advantages</a>
              </li>
              <li>
                <a href="#global-reach" className="hover:text-gold-400 transition">Our Export Map</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-gold-400 transition">Licenses &amp; Permits</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition">Warehouse Gallery</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Category quick shortcuts (Col span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white border-l-2 border-gold-500 pl-3">
              Core Products
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#products" className="hover:text-gold-400 transition">Spices Whole</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition">Turmeric Powder</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition">Agriculture Staples</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition">Organic Jaggery</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition">Dried Vegetables</a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold-400 transition">Dried Fruits</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details summary (Col span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white border-l-2 border-gold-500 pl-3">
              Direct Contact
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>PO: Nilanga, Dist. Latur, Maharashtra - 413521, India.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <span>+91 93259 86821</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <a href="mailto:sales@adgrowglobal.com" className="hover:text-gold-400 transition text-[13px]">sales@adgrowglobal.com</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Globe className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <span>www.adgrowglobal.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row: Copyright disclaimer & scroll top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <p>
              &copy; {currentYear} <strong>ADGROW GLOBAL ARYA</strong> (Arya Exim). All Rights Reserved globally.
            </p>
            <p className="text-[10px] leading-relaxed max-w-2xl text-slate-600 font-light">
              Disclaimer: Sourcing parameters, standard packaging sizes (5kg/10kg/25kg), laboratory moisture content checks (SGS, Eurofins), and custom port rates fluctuate depending on direct harvesting yields and dynamic regional trade conditions.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-navy-900 border border-gold-600/10 rounded-full text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-all flex items-center justify-center shadow"
            aria-label="Scroll to top of website"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
