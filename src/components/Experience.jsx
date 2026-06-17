import { Briefcase, Cloud, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      company: "Sempre Comigo",
      role: t('experience.sempreRole'),
      period: t('experience.semprePeriod'),
      type: t('experience.sempreType'),
      icon: <Shield className="w-5 h-5 text-indigo-400" />,
      description: t('experience.sempreDesc')
    },
    {
      id: 2,
      company: "Compass UOL",
      role: t('experience.compassRole'),
      period: t('experience.compassPeriod'),
      type: t('experience.compassType'),
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      description: t('experience.compassDesc')
    },
    {
      id: 3,
      company: "Dois A Tecnologia",
      role: t('experience.doisaRole'),
      period: t('experience.doisaPeriod'),
      type: t('experience.doisaType'),
      icon: <Briefcase className="w-5 h-5 text-slate-400" />,
      description: t('experience.doisaDesc')
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-800/50">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{t('experience.title')}</h2>
        <p className="text-slate-400 font-light">{t('experience.subtitle')}</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-900 text-slate-200 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
              {exp.icon}
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-bold text-lg text-slate-100">{exp.role}</span>
                <span className="text-xs font-medium text-blue-400 px-2 py-1 bg-blue-500/10 rounded-full">{exp.type}</span>
              </div>
              <h4 className="text-md font-semibold text-slate-400 mb-1">{exp.company}</h4>
              <time className="block text-xs font-mono text-slate-500 mb-4">{exp.period}</time>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
