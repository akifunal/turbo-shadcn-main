import { defineConfig, type Options } from 'tsup'

export default defineConfig((options: Options) => ({
	treeshake: true,
	entry: ['src/styles.css', 'src/**/*.tsx', 'tailwind.config.ts'],
	// entry: ['src/**/*.tsx'],
	// format: ['esm', 'cjs'],
	format: ['esm'],
	dts: true,
	minify: true,
	clean: true,
	banner: {
		js: '"use client";',
	},
	...options,
}))
