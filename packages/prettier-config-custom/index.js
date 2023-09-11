// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig & import('prettier-plugin-tailwindcss').options}} */
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
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderBuiltinModulesToTop: true,
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderMergeDuplicateImports: true,
	importOrderCombineTypeAndValueImports: true,

	tailwindFunctions: ['clsx', 'cva', 'tw'],

	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
	pluginSearchDirs: false, // needed for tailwindcss plugin
}

export default config
