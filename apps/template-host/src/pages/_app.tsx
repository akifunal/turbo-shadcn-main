import { type AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import '@/styles/globals.css'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Host App</title>
			</Head>
			<main className={`${inter.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
		</>
	)
}
