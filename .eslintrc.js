module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  plugins: ['no-only-tests'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-only-tests/no-only-tests': 'error',
  },
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@babel/eslint-parser',
}
