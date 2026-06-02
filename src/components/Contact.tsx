import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, FileSignature, CheckCircle, MessageSquare, ShieldAlert } from 'lucide-react';
import { PRODUCTS } from '../data';
import Toast from './Toast';
import { useTranslation } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    product: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // Field Validations
    if (!formData.name || !formData.email || !formData.phone || !formData.country || !formData.message) {
      const errMsg = t('contact.errorMandatory') || 'Please populate all mandatory fields labeled with asterisk (*).';
      setErrorMsg(errMsg);
      setToast({
        message: errMsg,
        type: 'error',
      });
      setIsSubmitting(false);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const accessToken = import.meta.env.VITE_EMAILJS_ACCESS_TOKEN;

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        'EmailJS environment variables are not configured in your .env file. Running in local fallback state.'
      );
      
      // Simulate form action locally
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMsg(true);
        setToast({
          message: t('contact.toastLocalFallback') || 'Lead recorded locally! Setup Guide: To send real emails to your Gmail account, configure your EmailJS credentials in the .env file.',
          type: 'error',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          product: '',
          message: '',
        });
      }, 1200);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          ...(accessToken ? { accessToken } : {}),
          template_params: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company || 'N/A',
            product: formData.product || 'Not Specified',
            country: formData.country,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSuccessMsg(true);
        setToast({
          message: t('contact.toastSuccess') || 'Your commercial inquiry trade dispatch was transmitted successfully!',
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          product: '',
          message: '',
        });
      } else {
        const errorText = await response.text();
        throw new Error(errorText || `HTTP status ${response.status}`);
      }
    } catch (err: any) {
      console.error('EmailJS transmission failed:', err);
      setIsSubmitting(false);
      const errMsg = `${t('contact.toastError') || 'Transmission Blocked: '}${err.message || 'API error'}`;
      setErrorMsg(errMsg);
      setToast({
        message: errMsg,
        type: 'error',
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#0a1128_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold tracking-[0.3em] text-gold-600 uppercase block">
            {t('contact.tagline')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy-900 tracking-tight">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded" />
          <p className="text-slate-500 font-sans text-sm sm:text-base pr-2 pl-2">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-navy-900 tracking-tight">
                {t('contact.officeTitle')}
              </h3>
              <p className="text-slate-500 font-sans text-sm leading-relaxed">
                {t('contact.officeDesc')}
              </p>
            </div>

            {/* Coordinates visual block card */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cream-100 border border-gold-600/10 rounded-lg text-gold-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-900 uppercase tracking-widest">{t('contact.officeAddressLabel')}</h4>
                  <p className="text-sm text-slate-600 font-sans mt-1">
                    {t('contact.officeAddressValue')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cream-100 border border-gold-600/10 rounded-lg text-gold-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-900 uppercase tracking-widest">{t('contact.helplineLabel')}</h4>
                  <p className="text-sm text-slate-600 font-sans mt-0.5">
                    Tel: <a href="tel:+918830737035" className="hover:text-gold-600 transition font-medium">+91 88307 37035</a>
                  </p>
                  <p className="text-xs text-slate-400 font-sans">{t('contact.helplineHours')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cream-100 border border-gold-600/10 rounded-lg text-gold-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-900 uppercase tracking-widest">{t('contact.mailboxLabel')}</h4>
                  <p className="text-sm text-slate-600 font-sans mt-0.5">
                    Inquiries: <a href="mailto:sales@adgrowglobal.com" className="hover:text-gold-600 transition font-medium">sales@adgrowglobal.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Iframe */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-sm h-64 bg-slate-100">
              <iframe
                title="Adgrow Global Arya Nilanga Corporate Office Map"
                src="https://maps.google.com/maps?q=Nilkantheshwar%20market%20yard%20anand%20muni%20chowk%20Nilanga%20Latur%20Maharashtra%20413521&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-cream-100 p-8 sm:p-10 rounded-2xl border border-slate-200/60 shadow-lg shadow-cream-100/30">
            <div className="space-y-3 mb-8">
              <h3 className="font-display font-extrabold text-2xl text-navy-900 tracking-tight flex items-center gap-2">
                <FileSignature className="w-6 h-6 text-gold-600" /> {t('contact.formTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-sans">
                {t('contact.formDesc')}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs sm:text-sm flex items-start space-x-3">
                <ShieldAlert className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Lead Form */}
            {successMsg ? (
              <div className="text-center py-10 px-6 space-y-6 bg-white rounded-xl border border-gold-600/10 shadow shadow-gold-500/5 animate-fade-in">
                <div className="inline-flex p-4 rounded-full bg-gold-400/15 text-gold-600">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xl text-navy-900">{t('contact.successTitle')}</h4>
                  <p className="text-sm text-slate-500 font-sans max-w-md mx-auto">
                    {t('contact.successDesc')}
                  </p>
                </div>
                <button
                  onClick={() => setSuccessMsg(false)}
                  className="px-6 py-2.5 rounded bg-navy-900 text-gold-400 hover:bg-gold-500 hover:text-navy-950 font-display font-bold uppercase text-xs tracking-wider transition-colors cursor-pointer"
                >
                  {t('contact.btnAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-xs uppercase font-bold tracking-wider text-navy-900 font-display block">
                      {t('contact.labelName')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-navy-900 font-sans transition-all"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-xs uppercase font-bold tracking-wider text-navy-900 font-display block">
                      {t('contact.labelEmail')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sourcing@eurospices.com"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-navy-900 font-sans transition-all"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-phone" className="text-xs uppercase font-bold tracking-wider text-navy-900 font-display block">
                      {t('contact.labelPhone')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +49 89 201938"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-navy-900 font-sans transition-all"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-company" className="text-xs uppercase font-bold tracking-wider text-navy-900 font-display block">
                      {t('contact.labelCompany')}
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. EuroSpices Import-Export"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-navy-900 font-sans transition-all"
                    />
                  </div>

                  {/* Category of Sourcing / Product select */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-product" id="label-product" className="text-xs uppercase font-bold tracking-wider text-navy-900 font-display block">
                      {t('contact.labelCategory')}
                    </label>
                    <select
                      id="form-product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-navy-900 font-sans transition-all"
                    >
                      <option value="">{t('contact.selectCommodity')}</option>
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {t(`products.${prod.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}.name`) || prod.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Country Destination */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-country" className="text-xs uppercase font-bold tracking-wider text-navy-900 font-display block">
                      {t('contact.labelCountry')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-country"
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g. Germany (Rotterdam Port)"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-navy-900 font-sans transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Message / Quantity */}
                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs uppercase font-bold tracking-wider text-navy-900 font-display block">
                    {t('contact.labelMessage')} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe specific grain grade curcumins, bulk volume requirements in metric tons (MT), desired packaging spec details, or delivery timelines."
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-navy-900 font-sans transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded bg-navy-900 text-gold-400 hover:bg-gold-500 hover:text-navy-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center space-x-2 border border-navy-900 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 border-t-gold-400 animate-spin" />
                      <span>{t('contact.btnSending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('contact.btnSend')}</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Quick Live Contact Link */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <span className="flex items-center gap-1.5 leading-none">
                <HelpCircle className="w-4 h-4 text-slate-400" /> {t('contact.whatsappPrefer')}
              </span>
              <a
                href="https://wa.me/918830737035?text=Hello%20Adgrow%20Global%20Arya,%20I'm%20interested%20in%20inquiring%20about%20your%20export%20products."
                target="hello"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-550 text-emerald-700 font-bold hover:bg-emerald-500 hover:text-white transition cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t('contact.whatsappNegotiate')}</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
