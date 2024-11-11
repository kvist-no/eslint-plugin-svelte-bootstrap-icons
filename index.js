import directIconImports from './rules/direct-icon-imports.js';

export default {
	name: 'eslint-plugin-svelte-bootstrap-icons',
	files: ['**/*.svelte'],
	rules: { 'direct-icon-imports': directIconImports },
	configs: {
		recommended: {
			plugins: {
				'svelte-bootstrap-icons': {
					rules,
				},
			},
			rules: {
				'svelte-bootstrap-icons/direct-icon-imports': 'error',
			},
		},
	},
};
