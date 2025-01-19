import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const unicornConfig = {
  name: 'unicorn',
  plugins: {
    unicorn: eslintPluginUnicorn
  },
  rules: {
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-null': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          db: false,
          arg: false,
          args: false,
          env: false,
          fn: false,
          func: {
            fn: true,
            function: false
          },
          prop: false,
          props: false,
          ref: false,
          refs: false
        },
        ignore: ['semVer', 'SemVer']
      }
    ]
  }
};

export default unicornConfig;
