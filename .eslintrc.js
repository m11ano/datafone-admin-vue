module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended', 'prettier'],
    plugins: ['unused-imports'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-return-await': 'warn',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'no-useless-catch': 'off',
        'no-restricted-syntax': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
};
