import { Terminal, Database, Cloud } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">{t('about.title')}</h2>
          <div className="space-y-4 text-slate-400 font-light leading-relaxed">
            <p>
              {t('about.p1')} <strong className="text-slate-200">AWS Certified Cloud Practitioner</strong>.
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p>
              {t('about.p3')} <strong className="text-slate-200">{t('about.p3Highlight')}</strong> {t('about.p3End')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors">
            <Terminal className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Back-End</h3>
            <p className="text-slate-400 text-sm">{t('about.backendDesc')}</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors sm:-translate-y-4">
            <Cloud className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Cloud Computing</h3>
            <p className="text-slate-400 text-sm">{t('about.cloudDesc')}</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-colors sm:col-span-2">
            <Database className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">{t('about.seTitle')}</h3>
            <p className="text-slate-400 text-sm">{t('about.seDesc')}</p>
          </div>
          
          <div className="sm:col-span-2 mt-4 flex items-center gap-5 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 p-5 rounded-r-xl shadow-lg">
            <div className="p-3 bg-orange-500/20 rounded-lg shrink-0">
              <Cloud className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <p className="text-xs text-orange-400/80 font-mono font-bold uppercase tracking-wider mb-1">{t('about.certBadge')}</p>
              <p className="text-lg md:text-xl font-bold text-orange-50">AWS Certified Cloud Practitioner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
