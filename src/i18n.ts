import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files will be imported here
import zhTW from './locales/zh-TW.json';
import en from './locales/en.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import de from './locales/de.json';
import pt from './locales/pt.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';
import hi from './locales/hi.json';
import tr from './locales/tr.json';
import it from './locales/it.json';
import nl from './locales/nl.json';
import id from './locales/id.json';
import th from './locales/th.json';
import vi from './locales/vi.json';

const resources = {
  'zh-TW': { translation: zhTW },
  en: { translation: en },
  ko: { translation: ko },
  ja: { translation: ja },
  fr: { translation: fr },
  es: { translation: es },
  de: { translation: de },
  pt: { translation: pt },
  ar: { translation: ar },
  ru: { translation: ru },
  hi: { translation: hi },
  tr: { translation: tr },
  it: { translation: it },
  nl: { translation: nl },
  id: { translation: id },
  th: { translation: th },
  vi: { translation: vi },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-TW',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
