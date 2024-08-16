import { expect, test } from 'vitest';
import { getLocaleAndLang } from '../src/scripts/getLocaleAndLang';

test('getLocaleAndLang should return en code', () => {
	const pathname = '/en/';
	const [language, locale] = getLocaleAndLang(pathname);
	expect(language).toBe('en');
	expect(locale).toBe('en-US');
});

test('getLocaleAndLang should return es code', () => {
	const pathname = '/es/';
	const [language, locale] = getLocaleAndLang(pathname);
	expect(language).toBe('es');
	expect(locale).toBe('es-419');
});
