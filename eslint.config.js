import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslint from 'typescript-eslint';
import eslintBaseConfig from './fixtures/eslintConfigs/baseConfig.js';
import jsxA11yConfig from './fixtures/eslintConfigs/jsxA11yConfig.js';
import eslintReact from './fixtures/eslintConfigs/reactConfig.js';
import eslintTypescriptConfig from './fixtures/eslintConfigs/typescriptConfig.js';
import unicornConfig from './fixtures/eslintConfigs/unicornConfig.js';

const client = ['apps/client/**/*.{js,jsx,ts,tsx}'];

export default [
  eslintConfigPrettier,
  //Eslint JS
  ...typescriptEslint.config(eslintBaseConfig, unicornConfig).map((config) => {
    config.files = [client];
    return config;
  }),
  //Typescript
  ...typescriptEslint
    .config({
      ...eslintTypescriptConfig,
      languageOptions: {
        ...eslintTypescriptConfig.languageOptions,
        parserOptions: {
          ...eslintTypescriptConfig.languageOptions.parserOptions,
          projectService: true
          // project: 'apps/client/tsconfig.json'
        }
      }
    })
    .map((config) => {
      config.files = [client];
      return config;
    }),
  //React
  ...typescriptEslint.config(eslintReact, jsxA11yConfig).map((config) => {
    config.files = [client];
    return config;
  })
];
