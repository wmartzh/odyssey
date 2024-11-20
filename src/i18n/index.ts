import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import { ILocaleKeys } from './locale-keys';

i18next.use(initReactI18next).init<ILocaleKeys>({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
  },
});
