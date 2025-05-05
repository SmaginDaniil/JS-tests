const eslintPluginPrettier = require("eslint-plugin-prettier");

module.exports = [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
];
