import { useState } from 'react'
import { Badge, Button, Input } from 'ui'

// import 'tailwindcss/tailwind.css'
import 'tailwindcss/utilities.css'

type HomeProps = {
	welcomeText?: string
}

const Home = (props: HomeProps) => {
	const [text, setText] = useState<string>('')

	console.log('header props: ', props)

	return (
		<div className='p-2 pb-1 '>
			<Button>Header app button</Button>
			<Button variant={'secondary'}>Header app button</Button>
			<Input
				type='text'
				placeholder='Header app input'
				// value={text}
				// onChange={(e) => setText(e.target.value)}
				className='mt-2 w-9'
			/>
			<Badge className='mt-9'>Header app badge</Badge>

			{props?.welcomeText && <p>{props.welcomeText}</p>}
		</div>
	)
}

export default Home
