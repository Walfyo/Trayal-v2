import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import sr from "./locales/sr.json"
import en from "./locales/en.json"

const resources = {
  sr: {
    translation: sr,
  },
  en: {
    translation: en,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "sr", // default language
    fallbackLng: "sr",

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  })

export default i18n
