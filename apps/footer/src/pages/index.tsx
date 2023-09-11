import { Button } from 'ui'

// import '../styles/globals.css'

import 'tailwindcss/utilities.css'

type HomeProps = {
	customerId?: number
	cb?: (id: number) => void
}

export default function Home(props: HomeProps) {
	console.log('footer props: ', props)

	if (props.customerId) {
		console.log(
			'footer props.customerId: ',

			props.customerId,
		)
	}

	if (props.cb) {
		console.log('footer props.cb: ', props.cb)
	}

	return (
		<div className='m-[12px] p-3'>
			<Button
				variant='secondary'
				onClick={() => props?.cb && props.cb(95)}
			>
				Footer app button
			</Button>
		</div>
	)
}
