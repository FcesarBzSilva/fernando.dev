import { Database, Server, Cloud, Code, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.catBackend'),
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js / Express", "Java / Spring Boot", "TypeScript", "Hasura / GraphQL", "RESTful APIs & OpenAPI"]
    },
    {
      title: t('skills.catFrontend'),
      icon: <Code className="w-6 h-6" />,
      skills: ["React & TypeScript", "Tailwind CSS", "React Query / Zod", "React Hook Form", "JavaScript & HTML5/CSS3"]
    },
    {
      title: t('skills.catCloud'),
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS (S3, Lambda, SES, EC2)", "Docker & CI/CD", "Git & GitHub Workflow", "Observabilidade (n8n / Slack)"]
    },
    {
      title: t('skills.catDb'),
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL / SQL", "Prisma ORM v2", "Redis Cache", "MySQL", "MongoDB & JPA"]
    },
    {
      title: t('skills.catEngineering'),
      icon: <Shield className="w-6 h-6" />,
      skills: ["Clean Architecture & SOLID", "Keycloak IAM (RBAC / SSO)", "Microsserviços & ADRs", "Testes Automatizados (Jest/E2E)", "Integrações Bancárias & IoT"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{t('skills.title')}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light">{t('skills.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-slate-700 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center text-slate-400 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
