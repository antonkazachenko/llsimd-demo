module.exports = {
  env: { browser: true, node: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
  ],
  plugins: ['react'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
};
