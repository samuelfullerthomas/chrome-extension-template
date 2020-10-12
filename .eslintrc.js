module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    document: 'readonly',
    window: 'readonly',
    Event: 'readonly',
    cardCVV: 'readonly',
    chrome: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': 'error',
    quotes: [2, 'single', 'avoid-escape'],
  },
}
