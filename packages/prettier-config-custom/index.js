// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig & import("prettier-plugin-tailwindcss").PluginOptions	}} */
const config = {
	jsxSingleQuote: true,
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	semi: false,

	importOrder: [
		'^(react/(.*)$)|^(react$)',
		'^(next/(.*)$)|^(next$)',
		'<THIRD_PARTY_MODULES>',
		'',
		'^types$',
		'^@/types/(.*)$',
		'^@/config/(.*)$',
		'^@/lib/(.*)$',
		'^@/hooks/(.*)$',
		'^@/components/ui/(.*)$',
		'^@/components/(.*)$',
		'^@/registry/(.*)$',
		'^@/styles/(.*)$',
		'^@/app/(.*)$',
		'',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.2.2',

	tailwindFunctions: ['clsx', 'cva', 'tw'],

	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
}

module.exports = config
