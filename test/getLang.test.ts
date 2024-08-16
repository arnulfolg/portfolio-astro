import { expect, test } from 'vitest';
import { getLang } from '../src/scripts/getLang';

test('getLang should return en code', () => {
	const pathname = '/en/';
	const result = getLang(pathname);
	expect(result).toBe('en');
});

test('getLang should return es code', () => {
	const pathname = '/es/';
	const result = getLang(pathname);
	expect(result).toBe('es');
});
