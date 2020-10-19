module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018, // 允许解析最新的 ECMAScript 特性
    sourceType: 'module', // 允许使用 import
    ecmaFeatures: {
      jsx: true // 允许对JSX进行解析
    }
  },
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
