const NextFederationPlugin = require('@module-federation/nextjs-mf')
const { createDelegatedModule } = require('@module-federation/utilities')
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const path = require('node:path')
const remotes = (isServer) => {
	const location = isServer ? 'ssr' : 'chunks'

	// const headerHost = process.env.PRODUCTION
	//   ? 'https://next-mf-header.vercel.app'
	//   : 'http://localhost:4201';
	const headerHost = process.env.PRODUCTION
		? 'http://localhost:3333'
		: 'http://localhost:3333'

	// const footerHost = process.env.PRODUCTION
	// 	? 'http://localhost:4202'
	// 	: 'http://localhost:4202'
	const footerHost = process.env.PRODUCTION
		? 'http://localhost:3334'
		: 'http://localhost:3334'

	const plpHost = process.env.PRODUCTION
		? 'https://next-mf-plp.vercel.app'
		: 'http://localhost:4300'

	const pdpHost = process.env.PRODUCTION
		? 'https://next-mf-plp.vercel.app'
		: 'http://localhost:4205'

	return {
		header: createDelegatedModule(
			require.resolve('./remote-delegate.cjs'),
			{
				remote: `header@${headerHost}/_next/static/${location}/remoteEntry.js`,
			},
		),
		plp: createDelegatedModule(require.resolve('./remote-delegate.cjs'), {
			remote: `plp@${plpHost}/_next/static/${location}/remoteEntry.js`,
		}),
		pdp: createDelegatedModule(require.resolve('./remote-delegate.cjs'), {
			remote: `pdp@${pdpHost}/_next/static/${location}/remoteEntry.js`,
		}),
		footer: createDelegatedModule(
			require.resolve('./remote-delegate.cjs'),
			{
				remote: `footer@${footerHost}/_next/static/${location}/remoteEntry.js`,
			},
		),
	}
}

/** @type {import("next").NextConfig} */
module.exports = {
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
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	experimental: {
		outputFileTracingRoot: path.join(__dirname, '../../'),
		scrollRestoration: true,
		typedRoutes: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	basePath: '',
	webpack(config, options) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'home',
				filename: 'static/chunks/remoteEntry.js',
				remotes: remotes(options.isServer),
				shared: {
					neon: {
						singleton: true,
						eager: true,
					},
				},
			}),
		)

		return config
	},
}
