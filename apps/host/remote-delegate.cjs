// eslint-disable-next-line no-async-promise-executor
const test = new Promise(async (resolve, reject) => {
	const { importDelegatedModule } = await import(
		'@module-federation/utilities'
	)

	//Logging the delegate being called for the resourceQuery from the webpack runtime ID
	console.log(
		'Delegate being called for',
		__resourceQuery,
		'from',
		__webpack_runtime_id__,
	)

	// eslint-disable-next-line no-undef
	const currentRequest = new URLSearchParams(__resourceQuery).get('remote')

	if (!currentRequest) {
		reject(new Error('No remote request found'))
		return
	}

	const [global, url] = currentRequest.split('@')

	console.log('remote delegate', global, url)

	try {
		const remote = await importDelegatedModule({
			global,
			url,
		})
		console.log('resolved remote', remote)

		resolve(remote)
	} catch (error) {
		reject(error)
	}
})

module.exports = test

// // eslint-disable-next-line no-async-promise-executor
// module.exports = new Promise(async (resolve, reject) => {
// 	const { importDelegatedModule } = await import(
// 		'@module-federation/utilities'
// 	)

// 	// eslint-disable-next-line no-undef
// 	const currentRequest = new URLSearchParams(__resourceQuery).get('remote')
// 	const [global, url] = currentRequest.split('@')
// 	console.log('remote delegate', global, url)

// 	importDelegatedModule({
// 		global,
// 		url,
// 	})
// 		.then(async (remote) => {
// 			console.log('resolved remote', remote)
// 			resolve(remote)
// 		})
// 		.catch((error) => {
// 			reject(error)
// 		})
// })
