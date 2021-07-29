import i18next from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { enLang } from "./en";
import { ruLang } from "./ru";

i18next
  //  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enLang,
      },
      ru: {
        translation: ruLang,
      },
    },
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    // debug: true,
  });

export default i18next;
