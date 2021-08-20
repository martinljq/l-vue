module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-recommended'
  ],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    extraFileExtensions: ['.vue']
  },
  rules: {
    'vue/require-default-prop': 'warn', // props不能定义位Function类型
    'vue/require-explicit-emits': 'warn', // 组件必须定义emits数组，有时emit是动态的
    '@typescript-eslint/strict-boolean-expressions': 'off', // ts的if判断必须为boolean值，有时要判断是否存在
    '@typescript-eslint/explicit-function-return-type': 'off', // 强制加上function返回类型
    '@typescript-eslint/promise-function-async': 'off' // 强制加上async await

  }
}
