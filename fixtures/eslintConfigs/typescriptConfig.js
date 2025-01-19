import { fixupPluginRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

const patchedImportPlugin = fixupPluginRules(eslintPluginImport);

const eslintTypescriptConfig = {
  name: 'typescript',
  extends: [
    ...typescriptEslint.configs.recommendedTypeChecked,
    typescriptEslint.configs.stylistic
  ],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: { modules: true },
      ecmaVersion: 'latest',
      project: ['./tsconfig.json', './apps/**/tsconfig.json']
    },
    globals: {
      ...globals.builtin,
      ...globals.browser,
      ...globals.es2025
    }
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error'
  },
  plugins: {
    import: patchedImportPlugin
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false
        }
      }
    ],
    //Extra
    '@typescript-eslint/padding-line-between-statements': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
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
    // 'import/no-deprecated': 'error',
    'import/order': 'off'
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: [
    //       '**/cypress.config.ts',
    //       '**/vite.config.ts',
    //       '**/src/setupTests.ts',
    //       '**/src/testUtils.tsx',
    //       '**/src/mocks/**',
    //       '**/__tests__/*.{ts,tsx}'
    //     ]
    //   }
    // ]
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    }
  }
};

export default eslintTypescriptConfig;
