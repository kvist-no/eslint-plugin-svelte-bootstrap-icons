# eslint-plugin-svelte-bootstrap-icons

An ESLint plugin that enforces direct imports of [Svelte Bootstrap Icons](https://www.npmjs.com/package/svelte-bootstrap-icons) to improve application performance.

## Installation

```bash
npm install eslint-plugin-svelte-bootstrap-icons
```

## Usage

To use the recommended configuration, add the following to your eslint configuration:

```javascript

import eslintPluginSvelteBootstrapIcons from 'eslint-plugin-svelte-bootstrap-icons';

export default tseslint.config({
	eslintPluginSvelteBootstrapIcons.configs.recommended,
});
```

## The Problem

When importing icons from `svelte-bootstrap-icons` using the barrel file (index), like this:

```svelte
import { Alarm, Bell } from 'svelte-bootstrap-icons';
```

This will import all icons, which can lead to a large bundle size and slow down your application.

## The Solution

This ESLint plugin will enforce direct imports of icons, like this:

```svelte
import Alarm from 'svelte-bootstrap-icons/lib/Alarm.svelte';
```

## Rule Details

The rule `svelte-bootstrap-icons/direct-icon-imports` will:

- ❌ Prevent imports from the barrel file
- ✅ Allow direct imports from individual icon files
- 🔧 Automatically fix incorrect import
