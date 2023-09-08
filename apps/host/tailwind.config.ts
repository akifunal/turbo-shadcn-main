import baseConfig from 'neon/tailwind.config'
// export default baseConfig

import type { Config } from 'tailwindcss'

export default {
	presets: [baseConfig],
	content: [
		...baseConfig.content,
		'./node_modules/neon/dist/**/*.{js,jsx,ts,tsx,mdx}',
	],
} satisfies Config
