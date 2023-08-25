import { useState } from 'react'
import { Button, Input } from 'neon'

const Home = (props) => {
	const [text, setText] = useState<string>('')

	console.log('header props: ', props)

	return (
		<div className='p-5'>
			<Button>Header app button</Button>
			<Input
				type='text'
				placeholder='Header app input'
				// value={text}
				// onChange={(e) => setText(e.target.value)}
				className='mt-2 w-9'
			/>

			{props?.welcomeText && <p>{props.welcomeText}</p>}
		</div>
	)
}

export default Home
