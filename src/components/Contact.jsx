import { Linkedin, MapPin, Send, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/50">
      <div className="grid lg:grid-cols-2 gap-12 items-center bg-blue-950/20 rounded-3xl p-8 border border-blue-900/50">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t('contact.title')}</h2>
          <p className="text-slate-400 font-light leading-relaxed mb-8">
            {t('contact.subtitle')}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">{t('contact.location')}</p>
                <p className="text-lg text-slate-200">{t('contact.locationValue')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/fernandobzsilva/" target="_blank" rel="noreferrer" className="text-lg text-slate-200 hover:text-blue-400 transition-colors">/in/fernandobzsilva/</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400">E-mail</p>
                <a href="mailto:fbsilva08@hotmail.com" className="text-lg text-slate-200 hover:text-blue-400 transition-colors">fbsilva08@hotmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-900/80 p-10 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center shadow-xl">
          <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
          <p className="text-slate-400 mb-8 font-light max-w-sm">{t('contact.whatsappSubtitle')}</p>
          <a href="https://wa.me/5584981602864" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-4 px-6 rounded-xl flex justify-center items-center gap-3 transition-all hover:scale-105 active:scale-95 text-lg shadow-lg shadow-green-900/20">
            {t('contact.whatsappBtn')}
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
