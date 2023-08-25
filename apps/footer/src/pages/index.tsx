import { Button } from 'neon'

export default function Home(props) {
	console.log('footer props: ', props)

	if (props.customerId) {
		console.log('footer props.customerId: ', props.customerId)
	}

	if (props.cb) {
		console.log('footer props.cb: ', props.cb)
	}

	return (
		<div className='p-5'>
			<Button variant='secondary' onClick={() => props.cb(95)}>
				Footer app button
			</Button>
		</div>
	)
}
