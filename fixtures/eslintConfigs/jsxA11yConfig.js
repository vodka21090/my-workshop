//import eslintPluginStorybook from "eslint-plugin-storybook" // does not support eslint v9
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

const jsxA11yConfig = {
  name: 'jsxA11y',
  ...jsxA11yPlugin.flatConfigs.recommended,
  plugins: {
    'jsx-a11y': jsxA11yPlugin
  },
  rules: {
    'jsx-a11y/alt-text': ['error', { elements: ['img'], img: ['Image'] }],
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error'
  }
};

export default jsxA11yConfig;
