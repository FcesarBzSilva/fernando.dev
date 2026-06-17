import { createContext, useState, useContext, useEffect } from 'react';
import { pt } from '../locales/pt';
import { en } from '../locales/en';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt');

  // Load saved language from local storage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
    localStorage.setItem('portfolio-lang', newLang);
    // Optional: update html lang attribute
    document.documentElement.lang = newLang === 'pt' ? 'pt-br' : 'en';
  };

  const t = (key) => {
    const keys = key.split('.');
    const dictionary = language === 'pt' ? pt : en;
    
    let value = dictionary;
    for (const k of keys) {
      if (value[k] === undefined) return key;
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
