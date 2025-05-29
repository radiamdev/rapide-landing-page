import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '../language/en.json'
import translationFR from '../language/fr.json'
import translationZH from '../language/zh.json'

i18n
  .use(LanguageDetector) // détecte la langue depuis cookie/localStorage/navigateur
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      zh: { translation: translationZH },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React échappe déjà
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  })

export default i18n
