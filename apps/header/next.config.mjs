/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
import path from 'path'
import { fileURLToPath } from 'url'
import NextFederationPlugin from '@module-federation/nextjs-mf'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
	webpack(config, options) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'header',
				// filename: 'standalone/remoteEntry.js',
				filename: 'static/chunks/remoteEntry.js',
				exposes: {
					'./index': './src/pages/index.tsx',
				},
			}),
		)

		return config
	},
}

export default config
