module.exports = {
  extends: [
    'alloy',
    'alloy/typescript',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  env: {
    // 环境变量（包含多个预定义的全局变量）
    browser: true,
    node: true,
    es6: true,
    // mocha: true,
    // jest: true,
    // jequery: true
  },
  globals: {
    // 全局变量（设置为false表示它不允许被重新赋值）
    // myGlobal: false
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: [
    // '@typescript-eslint'
  ],
  settings: {
    "import/extensions": [
      ".js",
      ".ts"
    ],
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ts"
        ]
      }
    }
  },
  rules: {
    // 禁止使用var
    'no-var': "error",
    // 优先使用interface而不是type
    '@typescript-eslint/consistent-type-definitions': [
      "error",
      "interface"
    ]
  }
}

// off|warn|error
// 关闭|警告|报错
