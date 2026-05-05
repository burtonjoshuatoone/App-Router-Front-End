import js from "@eslint/js"
import next from "eslint-config-next"
import globals from "globals"

export default [
  js.configs.recommended,
  ...next.configs["core-web-vitals"],
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        React: "readonly",
      },
    },
  },
]
