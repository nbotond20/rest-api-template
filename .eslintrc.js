module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['no-only-tests'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  'rules': {
    'no-only-tests/no-only-tests': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'no-console': 1,
    'no-only-tests/no-only-tests': 'error',
    'no-restricted-imports': 'error',
  },
}
