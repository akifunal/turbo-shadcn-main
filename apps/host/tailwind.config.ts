import baseConfig from 'tailwind-config'
// export default baseConfig

// '../../packages/neon/src/**/*.{ts,tsx}',
// './node_modules/neon/dist/**/*.{js,jsx,ts,tsx}',

import type { Config } from 'tailwindcss'

export default {
	presets: [baseConfig],
	content: [
		...baseConfig.content,
		'./node_modules/neon/dist/**/*.{js,jsx,ts,tsx}',
	],
} satisfies Config
