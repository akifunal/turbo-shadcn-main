// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
import path from 'path'
import { fileURLToPath } from 'url'
import NextFederationPlugin from '@module-federation/nextjs-mf'
import { createDelegatedModule } from '@module-federation/utilities'
import { resolve } from 'import-meta-resolve'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const remotes = (/** @type {boolean} */ isServer) => {
	const location = isServer ? 'ssr' : 'chunks'

	const test = resolve('./remote-delegate.cjs', import.meta.url)

	// const headerHost = process.env.PRODUCTION
	//   ? 'https://next-mf-header.vercel.app'
	//   : 'http://localhost:4201';
	const headerHost = process.env.PRODUCTION
		? 'http://localhost:4201'
		: 'http://localhost:4201'

	const footerHost = process.env.PRODUCTION
		? 'http://localhost:4202'
		: 'http://localhost:4202'

	const plpHost = process.env.PRODUCTION
		? 'https://next-mf-plp.vercel.app'
		: 'http://localhost:4300'

	const pdpHost = process.env.PRODUCTION
		? 'https://next-mf-plp.vercel.app'
		: 'http://localhost:4205'

	console.log('test remote delegate file', test)
	console.log(`header@${headerHost}/_next/static/${location}/remoteEntry.js`)
	const test2 = createDelegatedModule(
		resolve('./remote-delegate.cjs', import.meta.url),
		{
			remote: `header@${headerHost}/_next/static/${location}/remoteEntry.js`,
		},
	)

	console.log('test2', test2)

	return {
		// header: createDelegatedModule(
		// 	resolve('./remote-delegate.cjs', import.meta.url),
		// 	{
		// 		remote: `header@${headerHost}/_next/static/${location}/remoteEntry.js`,
		// 	},
		// ),
		header: '/Users/akifunal/Projects/turbo-shadcn-main/apps/host/remote-delegate.cjs?remote=header@http://localhost:3333/_next/static/ssr/remoteEntry.js',
		plp: createDelegatedModule(
			resolve('./remote-delegate.cjs', import.meta.url),
			{
				remote: `plp@${plpHost}/_next/static/${location}/remoteEntry.js`,
			},
		),
		pdp: createDelegatedModule(
			resolve('./remote-delegate.cjs', import.meta.url),
			{
				remote: `pdp@${pdpHost}/_next/static/${location}/remoteEntry.js`,
			},
		),
		footer: createDelegatedModule(
			resolve('./remote-delegate.cjs', import.meta.url),
			{
				remote: `footer@${footerHost}/_next/static/${location}/remoteEntry.js`,
			},
		),
	}
}

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
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},

	experimental: {
		// outputFileTracingRoot: path.join(__dirname, '../../'),
		scrollRestoration: true,
	},
	basePath: '',
	webpack(config, options) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'home',
				filename: 'static/chunks/remoteEntry.js',
				remotes: remotes(options.isServer),
			}),
		)

		return config
	},
}

export default config
