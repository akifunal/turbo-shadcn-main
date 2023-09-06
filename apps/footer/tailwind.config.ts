import baseConfig from 'tailwind-config'
// export default baseConfig

import type { Config } from 'tailwindcss'

// export default {
//   content: [...baseConfig.content, '../../packages/neon/src/**/*.{ts,tsx}'],
//   presets: [baseConfig],
// } satisfies Config;

export default {
	content: [...baseConfig.content],
	presets: [baseConfig],
} satisfies Config

// export default {
// 	content: [...baseConfig.content],
// 	presets: [],
// } satisfies Config
