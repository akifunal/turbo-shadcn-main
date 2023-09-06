import { memo } from 'react'
import dynamic from 'next/dynamic'
import { importRemote } from '@module-federation/utilities'

import ErrorBoundary from '@/components/ErrorBoundary'

interface RemoteComponentProps {
	url: string
	scope: string
	module: string
	fallback?: React.ReactNode
}

const getFormattedUrl = (url: string) => {
	const isServer = typeof window === 'undefined'
	const location = isServer ? 'ssr' : 'chunks'

	return `${url}/_next/static/${location}`
}

const RemoteComponent = ({
	url,
	scope = 'default',
	module,
	fallback = null,
	...props
}: RemoteComponentProps) => {
	const Component = dynamic(
		() => {
			return importRemote({
				url: getFormattedUrl(url),
				scope,
				module,
			})
		},
		{
			loading: () => <p>Loading...</p>,
			//! Ssr getting error for window is not defined
			ssr: false,
		},
	)

	return (
		<ErrorBoundary>
			<Component {...props} />
		</ErrorBoundary>
	)
}

export default memo(RemoteComponent)
