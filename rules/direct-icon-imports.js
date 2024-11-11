const directIconImportsRule = {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Enforces that svelte-bootstrap-icons are imported using direct file imports to avoid slow running applications due to loading all icons.',
			recommended: 'error',
		},
		fixable: 'code',
		schema: [],
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value === 'svelte-bootstrap-icons') {
					const importSpecifiers = node.specifiers.filter(
						(specifier) => specifier.type === 'ImportSpecifier'
					);

					if (importSpecifiers.length > 0) {
						context.report({
							node,
							message:
								'Icons from svelte-bootstrap-icons should be imported from the specific icon file',
							fix(fixer) {
								const newImports = importSpecifiers
									.map(
										(specifier) =>
											`import ${specifier.imported.name} from 'svelte-bootstrap-icons/lib/${specifier.imported.name}.svelte';`
									)
									.join('\n');
								return fixer.replaceText(node, newImports);
							},
						});
					}
				}
			},
		};
	},
};

export default directIconImportsRule;
