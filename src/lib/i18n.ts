"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../lang/en.json";
import idTranslation from "../lang/de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    id: { translation: idTranslation },
  },
  lng: "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
