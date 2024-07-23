import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './localisation/eng.json';
import fr from './localisation/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
