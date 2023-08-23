/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
	const content: any
	export const ReactComponent: any
	export default content
}

declare module 'checkout/useAddToCartHook' {
	export * from '@checkout/hooks/useAddToCart'
	export { default } from '@checkout/hooks/useAddToCart'
}

declare module 'checkout/buy-button' {
	export * from '@checkout/components/buy-button/buy-button'
	export { default } from '@checkout/components/buy-button/buy-button'
}

declare module 'plp/ProductsPage' {
	export * from '@plp/pages/index.tsx'
}
declare module 'plp/ProductList' {
	export * from '@plp/components/ProductList'
}
declare module 'plp/ProductCard' {
	export * from '@plp/components/ProductCard'
}

declare module 'header/Header' {
	export * from '@header/components/Header'
}

declare module 'button/Button' {
	export * from '@button/components/Button/index.tsx'
}
