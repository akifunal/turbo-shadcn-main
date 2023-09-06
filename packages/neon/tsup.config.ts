import { defineConfig, type Options } from 'tsup'

export default defineConfig((options: Options) => ({
	treeshake: true,
	entry: ['src/styles.css', 'src/**/*.tsx'],
	// entry: ['src/**/*.tsx'],
	format: ['esm', 'cjs'],
	// format: ['esm'],
	dts: true,
	minify: true,
	clean: true,
	external: ['react'],
	banner: {
		js: '"use client";',
	},
	...options,
}))
