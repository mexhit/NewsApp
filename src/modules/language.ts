import {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContext';

const english: {[key: string]: string} = {
  hello: 'Hello',
  settings: 'Settings',
  news: 'News',
  details: 'Details',
  language: 'Language',
  typeHere: 'Type Here...',
};

const french: {[key: string]: string} = {
  hello: 'Bonjour',
  settings: 'Paramètres',
  news: 'Nouvelles',
  details: 'Détails',
  language: 'Langue',
  typeHere: 'Tapez ici...',
};

export const useTranslation = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  const t = (key: string) => {
    switch (language) {
      case 'en':
        return english[key] || key;
      case 'fr':
        return french[key] || key;
      default:
        return key;
    }
  };

  return {
    t,
    setLanguage: setLanguage,
    language,
  };
};
