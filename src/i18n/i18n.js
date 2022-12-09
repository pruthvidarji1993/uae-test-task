import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translator/en.json';
import ar from './translator/ar.json';
// the translations
// (tip: move them in separate JSON files and import them)
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: localStorage.getItem("langcode") || 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
