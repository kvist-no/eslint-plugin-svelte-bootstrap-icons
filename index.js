import directIconImports from './rules/direct-icon-imports.js';

const plugin = {
	meta: { name: 'eslint-svelte-bootstrap-icons', version: '1.0.0' },
	rules: { 'direct-icon-imports': directIconImports },
	configs: {
		recommended: {
			plugins: {
				'eslint-svelte-bootstrap-icons': {
					rules: { 'direct-icon-imports': directIconImports },
				},
			},
			rules: {
				'eslint-svelte-bootstrap-icons/direct-icon-imports': 'error',
			},
		},
	},
};

export default plugin;
