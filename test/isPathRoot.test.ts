import { expect, test } from 'vitest';
import { isPathRoot } from '../src/scripts/isPathRoot';

test('isPathRoot should return true with given path en', () => {
	const pathname = '/en/';
	const result = isPathRoot(pathname);
	expect(result).toBe(true);
});

test('isPathRoot should return true with given path es', () => {
	const pathname = '/es/';
	const result = isPathRoot(pathname);
	expect(result).toBe(true);
});

test('isPathRoot should return false with given path', () => {
	const pathname = '/es/projects/';
	const result = isPathRoot(pathname);
	expect(result).toBe(false);
});
