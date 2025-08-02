import next from "@next/eslint-plugin-next";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs"],
    plugins: {
      "@next/next": next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      // The following rule was causing the unescaped apostrophe error.
      // This is the standard Next.js way to configure it.
      "react/no-unescaped-entities": "off",
    },
  },
];
