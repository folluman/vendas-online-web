const js = require('@eslint/js');
const pluginSimpleImportSort = require('eslint-plugin-simple-import-sort');
const pluginImport = require('eslint-plugin-import');
const pluginReact = require('eslint-plugin-react');

module.exports = [
  js.configs.recommended,
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
      import: pluginImport,
      react: pluginReact,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'react/jsx-no-target-blank': ['error', { allowReferrer: false }],
    },
  },
];
