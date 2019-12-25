import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
	const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
	const messages: LocaleMessages = {};
	locales.keys().forEach(key => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i);
		if (matched && matched.length > 1) {
			const locale = matched[1];
			messages[locale] = locales(key);
		}
	});
	return messages;
}

const defaultDate = {
	short: { year: 'numeric', month: 'short', day: 'numeric' },
	long: { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short', hour: 'numeric', minute: 'numeric' }
};

function setCurrency(code: string) {
	return { currency: { style: 'currency', currency: code } };
}

export default new VueI18n({
	locale: process.env.VUE_APP_I18N_LOCALE || 'en',
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
	messages: loadLocaleMessages(),
	numberFormats: {
		en: setCurrency('gbp'),
		mt: setCurrency('eur')
	},
	dateTimeFormats: {
		en: defaultDate,
		mt: defaultDate
	}
});
