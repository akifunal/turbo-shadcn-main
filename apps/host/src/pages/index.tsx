import { useState } from 'react'
import RemoteComponent from '@/components'
import { createDelegatedModule } from '@module-federation/utilities'
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from 'neon'

// import Footer from 'footer/index'
// import Plp from 'plp/index'

// import Footer from 'footer/index';

// const Header = dynamic(() => import('header/index'), {
// 	loading: () => <p>Header Loading.....</p>,
// 	ssr: false,
// })

// const Footer = dynamic(() => import('footer/index'), {
// 	loading: () => <p>Footer Loading.....</p>,
// 	ssr: false,
// })

// const url = 'footer/index'

// const paths = {
// 	header: 'header/index',
// 	footer: 'footer/index',
// }

// const dynamicComponents = {
// 	// Header: dynamic(() => import('header/index'), {
// 	// 	loading: () => <p>Header Loading.....</p>,
// 	// 	ssr: false,
// 	// }),
// 	// Footer: dynamic(() => import('footer/index'), {
// 	// 	loading: () => <p>Header Loading.....</p>,
// 	// 	ssr: false,
// 	// }),
// 	Dynamic: dynamic(() => import(url), {
// 		loading: () => <p>Header Loading.....</p>,
// 		ssr: false,
// 	}),
// }

// const getDynamicComponent = (c: string) => dynamicComponents?.[c]

// const Header = lazy(() => import('header/index'))

// const Footer = lazy(() => import('footer/index'))

// const getDynamicComponent = (c: string) =>
// 	dynamic(() => import(c), {
// 		loading: () => <p>Header Loading.....</p>,
// 		ssr: false,
// 	})

interface IndexProps {
	data: string
}

const remote = 'header@http://localhost:3333/_next/static/chunks/remoteEntry.js'

const Test = () =>
	createDelegatedModule(require.resolve('../../remote-delegate.cjs'), {
		remote: remote,
	})

export function Index({ data }: IndexProps) {
	const [pageName, setPageName] = useState<string>('Header')
	const [pageUrl, setPageUrl] = useState<string>('header/index')
	const [isHeader, setIsHeader] = useState<boolean>(false)
	const [port, setPort] = useState<number>(3333)

	console.log('🚀 ~ Index ~ TEST:', Test())
	// console.log('🚀 ~ Index ~ port:', port)

	// const DynamicComponent = getDynamicComponent('header/index')
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	// const DynamicComponent = dynamicComponents?.[pageName]
	// const DynamicComponent = getDynamicComponent(pageUrl)

	// if (!DynamicComponent) {
	// 	return <div>Component not found</div>
	// }

	return (
		<div>
			<div className='container m-4 border-2 border-slate-500 p-5'>
				<h1 className='mb-4 text-3xl'>
					Next Micro front-end PoC (Module Federation)
				</h1>
				HOST Micro front-end
				<div className='mt-4'>
					<Button variant='link' onClick={() => setIsHeader(true)}>
						Get Header
					</Button>
					<Button variant='link' onClick={() => setPort('3334')}>
						Get Footer
					</Button>
					{/* <Button
						variant='link'
						onClick={() => setPort('footer/index')}
					>
						Get Dynamic
					</Button> */}
				</div>
				<p className='mt-4'>Content:</p>
				<div className='mb-4 border-2 border-red-500 p-5'>
					{/* <Suspense fallback={<div>Loading...</div>}> */}
					{/* <DynamicComponent /> */}
					{/* {typeof window !== 'undefined' && ( */}
					<RemoteComponent
						// Text displayed while the component is being fetched
						fallback='Loading...'
						// Which remote to fetch the component from
						remote='header'
						remoteUrl={`http://localhost:3333/_next/static/chunks`}
						// Name of the React component exposed in our remote app
						module='index'
					/>

					{Test()}

					{isHeader && (
						<RemoteComponent
							// Text displayed while the component is being fetched
							fallback='Loading...'
							// Which remote to fetch the component from
							remote='footer'
							remoteUrl={`http://localhost:3334/_next/static/chunks`}
							// Name of the React component exposed in our remote app
							module='index'
						/>
					)}
					{/* )} */}
					{/* </Suspense> */}
				</div>
				{/* <p className='mt-8'>Header Micro-frontend:</p>
				<div className='mb-4 border-2 border-red-500 p-5'>
					<Header />
				</div> */}
				{/* <p>PLP Micro-frontend:</p>
				<Suspense fallback={<div>Plp Loading...</div>}>
					<div className='mb-4 border-2 border-green-500'>
						<Plp />
					</div>
				</Suspense> */}
				{/* <p className='mt-8'>Footer Micro-frontend:</p>
				<div className='border-2 border-red-500 p-5'>
					<Footer />
				</div> */}
			</div>
		</div>
	)
}

type JSONResponse =
	| undefined
	| {
			userId: number
			id: number
			title: string
			completed: boolean
	  }

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
	const data = (await res.json()) as JSONResponse

	return { props: { data: data?.title } }
}

export default Index
