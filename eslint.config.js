import antfu from '@antfu/eslint-config';
import tse from '@typescript-eslint/eslint-plugin';

export default antfu(
  {
    vue: false,
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    plugins: {
      tse,
    },
    rules: {
      'antfu/top-level-function': 'off',
      'antfu/if-newline': 'off',
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'style/curly': 'off',
      'style/semi': ['error', 'always'],
      'style/member-delimiter-style': ['error', { singleline: { delimiter: 'semi', requireLast: false } }],
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'unknown',
          ],
          'newlines-between': 'always',
          'alphabetize': { order: 'asc' },
        },
      ],
      'ts/brace-style': 'off',
      // 'ts/consistent-type-definitions': ['error', 'type'],
      // 'ts/array-type': ['error', { default: 'generic' }],
      // 'ts/consistent-type-imports': 'error',
    },
  },
);
