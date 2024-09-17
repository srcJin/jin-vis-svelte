import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			// base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
			// set base path
			base: process.env.NODE_ENV === 'production' ? '/jin-vis-svelte' : '',
		},
	},
};

export default config;