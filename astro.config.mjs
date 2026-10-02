// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://eyeswideopen.dev',
	trailingSlash: 'always',
	integrations: [sitemap()],
	build: {
		// Inline the single small stylesheet: one request per page.
		inlineStylesheets: 'always',
	},
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
	},
});
