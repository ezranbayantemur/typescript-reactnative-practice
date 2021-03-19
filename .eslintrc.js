module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-else-return': 'warn',
    'consistent-return': 'warn',
    'default-case': 'error',
    'no-eq-null': 'error',
    'no-magic-numbers': [
      'warn',
      {ignore: [-1, 0, 1], ignoreArrayIndexes: true},
    ],
    'prefer-const': 'warn',
    'no-var': 'error',
    'no-use-before-define': 'warn',
  },
};
