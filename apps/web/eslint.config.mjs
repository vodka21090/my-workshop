import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import reactPreferFunctionComponent from 'eslint-plugin-react-prefer-function-component'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default [
	...fixupConfigRules(
		compat.extends(
			'eslint:all',
			'plugin:@typescript-eslint/all',
			'plugin:import/recommended',
			'plugin:import/typescript',
			'plugin:react/all',
			'plugin:jsx-a11y/recommended',
			'airbnb',
			'airbnb-typescript',
			'airbnb/hooks',
			'plugin:react/jsx-runtime',
			'plugin:unicorn/all',
			'plugin:react-prefer-function-component/recommended',
			'prettier'
		)
	),
	{
		plugins: {
			'react-prefer-function-component': fixupPluginRules(
				reactPreferFunctionComponent
			)
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},

			parser: tsParser
		},

		settings: {
			react: {
				version: 'detect'
			}
		},

		rules: {
			'no-dupe-else-if': 'error',
			'no-promise-executor-return': 'error',
			'no-unreachable-loop': 'error',
			'no-useless-backreference': 'error',
			'require-atomic-updates': 'error',
			'default-case-last': 'error',
			'grouped-accessor-pairs': 'error',
			'no-constructor-return': 'error',
			'no-implicit-coercion': 'error',
			'prefer-regex-literals': 'error',
			'capitalized-comments': 'error',

			'no-restricted-syntax': [
				'error',
				{
					selector: 'ForInStatement',
					message:
						'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
				},
				{
					selector: 'LabeledStatement',
					message:
						'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
				},
				{
					selector: 'WithStatement',
					message:
						'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
				}
			],

			'no-void': 'off',
			'@typescript-eslint/padding-line-between-statements': 'off',
			'@typescript-eslint/prefer-enum-initializers': 'off',
			'@typescript-eslint/prefer-readonly-parameter-types': 'off',
			'@typescript-eslint/prefer-regexp-exec': 'off',

			'@typescript-eslint/no-magic-numbers': [
				'error',
				{
					ignoreEnums: true,
					ignore: [0],
					enforceConst: true,
					detectObjects: true
				}
			],

			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/init-declarations': 'off',

			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{
					ignoreArrowShorthand: true
				}
			],

			'@typescript-eslint/non-nullable-type-assertion-style': 'off',
			'@typescript-eslint/strict-boolean-expressions': 'off',
			'@typescript-eslint/no-implicit-any-catch': 'off',
			'@typescript-eslint/member-ordering': 'off',
			'@typescript-eslint/prefer-includes': 'off',
			'@typescript-eslint/no-restricted-imports': 'off',
			'import/no-deprecated': 'error',
			'import/order': 'off',

			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: [
						'cypress.config.ts',
						'vite.config.ts',
						'src/setupTests.ts',
						'src/testUtils.tsx',
						'src/mocks/**',
						'**/__tests__/*.{ts,tsx}'
					]
				}
			],

			'react/no-did-update-set-state': 'off',
			'react/no-find-dom-node': 'off',
			'react/no-is-mounted': 'off',
			'react/no-redundant-should-component-update': 'off',
			'react/no-render-return-value': 'off',
			'react/no-string-refs': 'off',
			'react/no-this-in-sfc': 'off',
			'react/no-will-update-set-state': 'off',
			'react/prefer-es6-class': 'off',
			'react/no-unused-state': 'off',
			'react/prefer-stateless-function': 'off',
			'react/require-render-return': 'off',
			'react/sort-comp': 'off',
			'react/state-in-constructor': 'off',
			'react/static-property-placement': 'off',

			'react/boolean-prop-naming': [
				'error',
				{
					validateNested: true
				}
			],

			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'function-declaration'
				}
			],

			'react/no-unstable-nested-components': 'error',

			'react/jsx-handler-names': [
				'error',
				{
					eventHandlerPrefix: 'on',
					eventHandlerPropPrefix: 'on',
					checkLocalVariables: true,
					checkInlineFunction: true
				}
			],

			'react/jsx-key': 'error',

			'react/jsx-no-bind': [
				'error',
				{
					ignoreRefs: false,
					allowArrowFunctions: true,
					allowFunctions: true,
					allowBind: false,
					ignoreDOMComponents: false
				}
			],

			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-no-script-url': 'error',
			'react/jsx-no-useless-fragment': 'error',

			'unicorn/filename-case': [
				'error',
				{
					cases: {
						camelCase: true,
						pascalCase: true
					}
				}
			],

			'unicorn/no-nested-ternary': ['error']
		}
	},
	{
		files: ['src/**/*.ts?(x)'],

		languageOptions: {
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				project: ['./tsconfig.json']
			}
		}
	},
	{
		files: ['**/vite.config.ts', '**/cypress.config.ts'],

		languageOptions: {
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				project: ['./tsconfig.node.json']
			}
		}
	},
	...compat.extends('plugin:testing-library/react').map(config => ({
		...config,
		files: ['**/__tests__/**/*.ts?(x)']
	})),
	{
		files: ['**/__tests__/**/*.ts?(x)'],

		rules: {
			'@typescript-eslint/no-magic-numbers': ['off'],

			'testing-library/no-await-sync-events': [
				'error',
				{
					eventModules: ['fire-event']
				}
			],

			'testing-library/no-manual-cleanup': 'error',
			'testing-library/prefer-explicit-assert': 'error',
			'testing-library/prefer-user-event': 'error'
		}
	}
]
