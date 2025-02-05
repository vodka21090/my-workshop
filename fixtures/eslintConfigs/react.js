import eslintReact from '@eslint-react/eslint-plugin';
import eslintJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
/**
 * Declare the ESLint configuration.
 */
/** @type {import('eslint').Linter.Config[]} */
export default tsEslint.config({
  files: ['./apps/client.{ts,tsx}'],
  extends: [
    eslintJs.configs.recommended,
    tsEslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintReact.configs.recommended,
    prettierConfig
  ],
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh
  },
  languageOptions: {
    ecmaVersion: 2020,
    parser: tsEslint.parsers,
    parserOptions: {
      projectService: true,
      project: './apps/client/tsconfig.json'
    },
    globals: {
      ...globals.browser,
      ...globals.node
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
          '**/cypress.config.ts',
          '**/vite.config.ts',
          '**/src/setupTests.ts',
          '**/src/testUtils.tsx',
          '**/src/mocks/**',
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
});

// /** @type {import('eslint').Linter.Config[]} */
// export default tsEslint.config({
//   files: ['apps/**/*.{ts,tsx}'],
//   extends: [
//     eslintJs.configs.recommended,
//     tsEslint.configs.recommended,
//     eslintReact.configs['recommended-typescript'],
//     eslintPluginReact.configs.flat['jsx-runtime'],
//     prettierConfig
//   ],
//   plugins: {
//     'react-hooks': reactHooks,
//     'react-refresh': reactRefresh,
//     unicorn
//   },
//   languageOptions: {
//     ecmaVersion: 2020,
//     parser: tsEslint.parsers,
//     parserOptions: {
//       projectService: true
//       // project: 'apps/client/tsconfig.js`on'
//     },
//     globals: {
//       ...globals.browser,
//       ...globals.node
//     }
//   },
//   settings: {
//     react: {
//       version: 'detect'
//     }
//   },
//   rules: {
//     ...reactHooks.configs.recommended.rules,
//     'no-dupe-else-if': 'error',
//     'no-promise-executor-return': 'error',
//     'no-unreachable-loop': 'error',
//     'no-useless-backreference': 'error',
//     'require-atomic-updates': 'error',
//     'default-case-last': 'error',
//     'grouped-accessor-pairs': 'error',
//     'no-constructor-return': 'error',
//     'no-implicit-coercion': 'error',
//     'prefer-regex-literals': 'error',
//     'capitalized-comments': 'error',
//     'no-restricted-syntax': [
//       'error',
//       {
//         selector: 'ForInStatement',
//         message:
//           'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
//       },
//       {
//         selector: 'LabeledStatement',
//         message:
//           'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
//       },
//       {
//         selector: 'WithStatement',
//         message:
//           '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
//       }
//     ],
//     'no-void': 'off',
//     '@typescript-eslint/padding-line-between-statements': 'off',
//     '@typescript-eslint/prefer-enum-initializers': 'off',
//     '@typescript-eslint/prefer-readonly-parameter-types': 'off',
//     '@typescript-eslint/prefer-regexp-exec': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/init-declarations': 'off',
//     '@typescript-eslint/no-confusing-void-expression': [
//       'error',
//       {
//         ignoreArrowShorthand: true
//       }
//     ],
//     '@typescript-eslint/non-nullable-type-assertion-style': 'off',
//     '@typescript-eslint/strict-boolean-expressions': 'off',
//     '@typescript-eslint/no-implicit-any-catch': 'off',
//     '@typescript-eslint/member-ordering': 'off',
//     '@typescript-eslint/prefer-includes': 'off',
//     '@typescript-eslint/no-restricted-imports': 'off',
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true }
//     ],
//     'unicorn/no-nested-ternary': ['error']
//     // '@typescript-eslint/no-magic-numbers': [
//     //   'error',
//     //   {
//     //     ignoreEnums: true,
//     //     ignore: [0],
//     //     enforceConst: true,
//     //     detectObjects: true
//     //   }
//     // ],
//     // 'import/no-deprecated': 'error',
//     // 'import/order': 'off',
//     // 'import/no-extraneous-dependencies': [
//     //   'error',
//     //   {
//     //     devDependencies: [
//     //       '**/cypress.config.ts',
//     //       '**/vite.config.ts',
//     //       '**/src/setupTests.ts',
//     //       '**/src/testUtils.tsx',
//     //       '**/src/mocks/**',
//     //       '**/__tests__/*.{ts,tsx}'
//     //     ]
//     //   }
//     // ],
//     // 'react/no-did-update-set-state': 'off',
//     // 'react/no-find-dom-node': 'off',
//     // 'react/no-is-mounted': 'off',
//     // 'react/no-redundant-should-component-update': 'off',
//     // 'react/no-render-return-value': 'off',
//     // 'react/no-string-refs': 'off',
//     // 'react/no-this-in-sfc': 'off',
//     // 'react/no-will-update-set-state': 'off',
//     // 'react/prefer-es6-class': 'off',
//     // 'react/no-unused-state': 'off',
//     // 'react/prefer-stateless-function': 'off',
//     // 'react/require-render-return': 'off',
//     // 'react/sort-comp': 'off',
//     // 'react/state-in-constructor': 'off',
//     // 'react/static-property-placement': 'off',
//     // 'react/boolean-prop-naming': [
//     //   'error',
//     //   {
//     //     validateNested: true
//     //   }
//     // ],
//     // 'react/function-component-definition': [
//     //   'error',
//     //   {
//     //     namedComponents: 'function-declaration'
//     //   }
//     // ],
//     // 'react/no-unstable-nested-components': 'error',
//     // 'react/jsx-handler-names': [
//     //   'error',
//     //   {
//     //     eventHandlerPrefix: 'on',
//     //     eventHandlerPropPrefix: 'on',
//     //     checkLocalVariables: true,
//     //     checkInlineFunction: true
//     //   }
//     // ],
//     // 'react/jsx-key': 'error',
//     // 'react/jsx-no-bind': [
//     //   'error',
//     //   {
//     //     ignoreRefs: false,
//     //     allowArrowFunctions: true,
//     //     allowFunctions: true,
//     //     allowBind: false,
//     //     ignoreDOMComponents: false
//     //   }
//     // ],
//     // 'react/jsx-no-constructed-context-values': 'error',
//     // 'react/jsx-no-script-url': 'error',
//     // 'react/jsx-no-useless-fragment': 'error'
//     // 'unicorn/filename-case': [
//     //   'error',
//     //   {
//     //     cases: {
//     //       camelCase: true,
//     //       pascalCase: true
//     //     }
//     //   }
//     // ],
//   }
// });
