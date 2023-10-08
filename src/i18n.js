import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

// the translations
const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
};

i18n
	// Подключение бэкенда i18next
	// .use(Backend)
	// Автоматическое определение языка
	// .use(LanguageDetector)
	// модуль инициализации
	.use(initReactI18next)
	.init({
		// Стандартный язык
		fallbackLng: 'ru',
		resources,
		debug: true,

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
