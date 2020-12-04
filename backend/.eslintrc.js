module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-throw-literal": 0,
    "max-len": ["error", { code: 150 }],
    "no-underscore-dangle": 0,
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": 0,
    "no-undef": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
      },
    },
  },
};
