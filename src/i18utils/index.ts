import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {
  translationsRussian,
  translationsEnglish,
  translationsSpanish,
  translationsFrench,
  translationsGerman,
  translationsChinese,
  translationsArabic,
  translationsJapanese,
  translationsPortuguese,
  translationsHindi,
  translationsKorean,
  translationsItalian,
} from "../Utils/constats";

// i18next setup--------------------------

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: translationsEnglish,
      },
      ar: {
        translation: translationsArabic,
      },
      es: { translation: translationsSpanish },
      fr: { translation: translationsFrench },
      de: { translation: translationsGerman },
      zh: { translation: translationsChinese },
      ja: { translation: translationsJapanese },
      ru: { translation: translationsRussian },
      pt: { translation: translationsPortuguese },
      hi: { translation: translationsHindi },
      ko: { translation: translationsKorean },
      it: { translation: translationsItalian },
    }
  });

export default i18n;