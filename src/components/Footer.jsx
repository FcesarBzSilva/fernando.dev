import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800/50 py-8 text-center text-slate-500 font-light text-sm">
      <p>&copy; {new Date().getFullYear()} Fernando Cesar Bezerra Silva. {t('footer.rights')}</p>
      <p className="mt-2">{t('footer.developed')} (React, Vite & Tailwind CSS).</p>
    </footer>
  )
}
