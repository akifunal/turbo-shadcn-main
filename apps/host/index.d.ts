/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
	const content: any
	export const ReactComponent: any
	export default content
}

declare module 'header/index' {
	export { default } from '@header/src/pages/index.tsx'
}

declare module 'footer/index' {
	export { default } from '@footer/src/pages/index.tsx'
}
