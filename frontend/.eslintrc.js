module.exports = {
  root: true,

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb-typescript",
    "airbnb/hooks",
  ],
  parserOptions: {
    debugLevel: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "react/button-has-type": 0,
    "react/prop-types": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-throw-literal": 0,
    "max-len": ["error", { code: 150 }],
    "no-underscore-dangle": 0,
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/no-unused-vars": "warn",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
