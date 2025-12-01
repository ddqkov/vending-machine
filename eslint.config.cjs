module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Enable JSX syntax parsing
      },
    },
    globals: { 
      '$': 'writable' 
    },
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'react-refresh'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-refresh/recommended'],
  rules: {
    'no-console': 2,
    'no-unused-vars': ['error', {
      'ignoreRestSiblings': true
    }],
  },
};
