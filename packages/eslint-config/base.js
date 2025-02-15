import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";

/**
 * Shared ESLint flat configuration for the repository
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn: onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
];
