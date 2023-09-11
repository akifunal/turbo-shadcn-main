import type { Config } from 'tailwindcss'

import remoteConfig from './remote-tw.config'

export default {
	presets: [remoteConfig],
	content: [
		...remoteConfig.content,
		'./node_modules/ui/dist/**/*.{js,jsx,ts,tsx,mdx}',
	],
} satisfies Config
