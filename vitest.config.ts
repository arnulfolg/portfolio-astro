/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import { configDefaults } from 'vitest/config';

export default getViteConfig({
	test: {
		// Vitest configuration options
		globals: true,
		coverage: {
			provider: 'v8',
			exclude: [
				'**/**.config.*',
				'**/**.d.ts'
			]
		},
	},
});
