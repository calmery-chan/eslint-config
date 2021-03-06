export = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/order": ["error", { alphabetize: { order: "asc" } }],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
