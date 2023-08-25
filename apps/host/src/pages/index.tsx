import { useState } from 'react'
import { Button, Input } from 'neon'

import RemoteComponent from '@/components/RemoteComponent'

interface IndexProps {
	data: string
}

const Index = ({ data }: IndexProps) => {
	const [isHeader, setIsHeader] = useState<boolean>(false)
	const [isFooter, setIsFooter] = useState<boolean>(false)
	const [number, setNumber] = useState<number>(0)

	const handleHostClick = (n: number) => {
		console.log('handleHostClick called with n: ', n)
		setNumber(n)
	}

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
					<Button variant='link' onClick={() => setIsFooter(true)}>
						Get Footer
					</Button>
				</div>
				<p className='mt-4'>Content:</p>
				<Input type="text" />
				<div className='mb-4 border-2 border-red-500 p-5'>
					<RemoteComponent
						// Text displayed while the component is being fetched
						fallback='Loading...'
						// Which remote to fetch the component from
						scope='header'
						url='http://localhost:3333'
						// Name of the React component exposed in our remote app
						module='index'
						welcomeText='welcome'
					/>
					<RemoteComponent
						// Text displayed while the component is being fetched
						fallback='Loading...'
						// Which remote to fetch the component from
						scope='footer'
						url='http://localhost:3334'
						// Name of the React component exposed in our remote app
						module='index'
						customerId={123 + 10}
					/>

					{isHeader && (
						<RemoteComponent
							// Text displayed while the component is being fetched
							fallback='Loading...'
							// Which remote to fetch the component from
							scope='header'
							url='http://localhost:3333'
							// Name of the React component exposed in our remote app
							module='index'
						/>
					)}

					{isFooter && (
						<RemoteComponent
							// Text displayed while the component is being fetched
							fallback='Loading...'
							// Which remote to fetch the component from
							scope='footer'
							url='http://localhost:3334'
							// Name of the React component exposed in our remote app
							module='index'
							cb={handleHostClick}
						/>
					)}
				</div>
				{/* <p className='mt-8'>Header Micro-frontend:</p>
				<div className='mb-4 border-2 border-red-500 p-5'>
					<Header />
				</div>
				<p>PLP Micro-frontend:</p>
				<Suspense fallback={<div>Plp Loading...</div>}>
					<div className='mb-4 border-2 border-green-500'>
						<Plp />
					</div>
				</Suspense>
				<p className='mt-8'>Footer Micro-frontend:</p>
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
