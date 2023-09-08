import RemoteComponent from '@/components/RemoteComponent'

const remoteUrl = 'http://localhost:3333'

const Index = () => {
	return (
		<div>
			<div className='container m-4 border-2 border-slate-500 p-5'>
				<h1 className='mb-4 text-3xl'>
					Next Micro front-end (Module Federation)
				</h1>
				HOST Micro front-end
				<p className='mt-4'>Content:</p>
				<div className='mb-4 border-2 border-red-500 p-5'>
					<RemoteComponent
						// Which remote to fetch the component from
						scope='header'
						// Url of the remote
						url={remoteUrl}
						// Name of the React component exposed in our remote app
						module='index'
						//  and any props you want to pass to micro-frontend
					/>
				</div>
			</div>
		</div>
	)
}

export default Index
