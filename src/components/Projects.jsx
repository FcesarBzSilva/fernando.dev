import { Github, Code2, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Microservices Events Tickets",
      description: t('projects.proj1Desc'),
      tech: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "Docker"],
      github: "https://github.com/FcesarBzSilva/microservices-events-tickets"
    },
    {
      id: 2,
      title: "Java SQL Desafios",
      description: t('projects.proj2Desc'),
      tech: ["Java", "MySQL", "JDBC", "SQL"],
      github: "https://github.com/FcesarBzSilva/java-sql-desafios"
    },
    {
      id: 4,
      title: "Payroll Engine API",
      description: t('projects.proj4Desc'),
      tech: ["TypeScript", "Node.js", "Clean Architecture", "eSocial", "Jest"],
      private: true
    },
    {
      id: 5,
      title: "Gastro-engine",
      description: t('projects.proj5Desc'),
      tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker"],
      private: true
    }
  ]

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{t('projects.title')}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light">{t('projects.subtitle')}</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="group relative flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800/50 hover:border-slate-700 transition-all overflow-hidden duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                {project.private ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700/50">
                    <Lock className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-xs font-medium text-slate-400">{t('projects.wipBadge')}</span>
                  </div>
                ) : (
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">{project.description}</p>
            </div>
            
            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(tech => (
                <li key={tech} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
