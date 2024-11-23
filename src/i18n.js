import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/locales/en/translation.json";
import am from "../public/locales/am/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    am: { translation: am },
  },
  lng: "am", // язык по умолчанию
  fallbackLng: "am", // язык по умолчанию, если перевод отсутствует
  interpolation: { escapeValue: false },
});

export default i18n;
