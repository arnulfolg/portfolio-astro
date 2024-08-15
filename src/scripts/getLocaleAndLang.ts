import { getLang } from './getLang';
import { getLocale } from './getLocale';

export const getLocaleAndLang = (pathname: string) => {
	const language = getLang(pathname);
	const locale = getLocale(language);

	return [language, locale];
};
