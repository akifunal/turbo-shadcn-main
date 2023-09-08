/** @type {import("syncpack").RcFile} */
const config = {
	dependencyTypes: ['dev', 'peer', 'prod'],
	semverRange: '^',
	source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
	versionGroups: [
		{
			label: 'Internal config packages should be pinned to "workspace:*" (meaning any version is acceptable)',
			packages: ['**'],
			dependencies: [
				'eslint-config-custom',
				'prettier-config-custom',
				'tailwind-config',
				'tsconfig',
			],
			dependencyTypes: ['dev'],
			pinVersion: 'workspace:*',
		},
	],
}

module.exports = config
