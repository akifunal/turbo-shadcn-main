const NextFederationPlugin = require('@module-federation/nextjs-mf')
const path = require('node:path')

/** @type {import("next").NextConfig} */
const config = {
	output: 'standalone',
	transpilePackages: ['neon'],
	reactStrictMode: true,
	images: {
		domains: [''],
	},
	/**
	 * If you are using `appDir` then you must comment the below `i18n` config out.
	 *
	 * @see https://github.com/vercel/next.js/issues/41980
	 */
	// i18n: {
	// 	locales: ['en'],
	// 	defaultLocale: 'en',
	// },

	experimental: {
		outputFileTracingRoot: path.join(__dirname, '../../'),
		scrollRestoration: true,
		typedRoutes: true,
	},
	basePath: '',
	webpack(config) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'header',
				filename: 'static/chunks/remoteEntry.js',
				exposes: {
					'./index': './src/pages/index.tsx',
				},
			}),
		)

		return config
	},
}

module.exports = config
