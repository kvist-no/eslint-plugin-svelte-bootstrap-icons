import { RuleTester } from 'eslint';
import directIconImportsRule from '../rules/direct-icon-imports.js';

const ruleTester = new RuleTester({
	// New flat config format
	languageOptions: {
		ecmaVersion: 2015,
		sourceType: 'module',
	},
});

ruleTester.run('direct-icon-imports', directIconImportsRule, {
	valid: [
		// Valid cases - direct imports
		{
			code: "import Alarm from 'svelte-bootstrap-icons/lib/Alarm.svelte';",
		},
		{
			code: "import Something from 'other-package';", // Should allow other imports
		},
	],
	invalid: [
		// Invalid case - importing from root package
		{
			code: "import { Alarm } from 'svelte-bootstrap-icons';",
			errors: [
				{
					message:
						'Icons from svelte-bootstrap-icons should be imported from the specific icon file',
				},
			],
			output: "import Alarm from 'svelte-bootstrap-icons/lib/Alarm.svelte';",
		},
		// Test multiple imports
		{
			code: "import { Alarm, Bell } from 'svelte-bootstrap-icons';",
			errors: [
				{
					message:
						'Icons from svelte-bootstrap-icons should be imported from the specific icon file',
				},
			],
			output:
				"import Alarm from 'svelte-bootstrap-icons/lib/Alarm.svelte';\nimport Bell from 'svelte-bootstrap-icons/lib/Bell.svelte';",
		},
	],
});
