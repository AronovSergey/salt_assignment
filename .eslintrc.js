module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'simple-import-sort', 'react-hooks'],
  rules: {
    'prettier/prettier': ['warn'],
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // React dependencies first
          ['^react', '^react-dom', '^react-dom/*', '^react/*'],
          // External packages next
          ['^@?((\\w+)(-|,|.)?)+'],
          // Relative imports next
          ['^\\.'],
          // CSS Styles last
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
};
