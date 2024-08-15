import { expect, test } from 'vitest';
import { getLocale } from '../src/scripts/getLocale';

test('getLocale es should return spanish code', () => {
	const result = getLocale('es');
	expect(result).toBe('es-419');
});

test('getLocale en should return english code', () => {
	const result = getLocale('en');
	expect(result).toBe('en-US');
});

test('getLocale empty should return english code', () => {
	const result = getLocale('');
	expect(result).toBe('en-US');
});

test('getLocale fr should return english code', () => {
	const result = getLocale('fr');
	expect(result).toBe('en-US');
});
