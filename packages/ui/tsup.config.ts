import { defineConfig, type Options } from 'tsup'

export default defineConfig((options: Options) => ({
	entry: ['src/**/*.{tsx,ts,css}', 'config/*.config.ts'],
	format: ['esm'],
	dts: true,
	minify: true,
	clean: true,
	// treeshake: true,
	// banner: {
	// 	js: '"use client";',
	// },
	...options,
}))
