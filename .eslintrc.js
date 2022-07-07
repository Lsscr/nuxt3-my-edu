module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/no-unused-components': 'off', // 当存在定义而未使用的组件时，关闭报错
    'vue/multi-word-component-names': 0, //关闭vue文件和组件命名校验
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'max-len': ['error', { code: 140 }], //单行最大长度
    'no-multi-spaces': 'error', // 禁止表达式多个空格
    semi: ['error', 'never'], // 禁止分号
    //"quotes": ["error", "single"], // 使用单引号
    'comma-dangle': ['error', 'never'], //禁止尾逗号
    'arrow-parens': ['error', 'as-needed'], //箭头函数省略括号
    'no-trailing-spaces': ['error', { skipBlankLines: true }], //禁止末尾多余空格
    'key-spacing': ['error', { afterColon: true }], //字面量对象冒号后空格
    'object-curly-spacing': ['error', 'always'], //字面量对象格式化一致的空格
    'comma-spacing': ['error', { before: false, after: true }], //禁止在逗号前使用空格，要求在逗号后使用空格
    'prettier/prettier': [
      'error',
      {
        printWidth: 140, //代码单行长度
        tabWidth: 2, //tab键缩进为2空格
        useTabs: false, //使用空格缩进
        singleQuote: true, //js单引号
        semi: false, //去分号
        trailingComma: 'none', //无尾逗号
        arrowParens: 'avoid', //箭头函数尽可能省略括号
        jsxBracketSameLine: true //标签换行后>单独一行
      }
    ]
  }
}
