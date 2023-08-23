import { type AppProps } from 'next/app'
import Head from 'next/head'

import 'neon/styles.css'
import '@/styles/globals.css'

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Welcome to next-host-2!</title>
			</Head>
			<main>
				<Component {...pageProps} />
			</main>
		</>
	)
}

export default CustomApp
