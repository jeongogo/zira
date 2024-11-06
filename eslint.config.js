import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/display-name": "off",
      "react/prop-types": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-unused-vars": "warn",
      "no-useless-catch": "off"
    }
  },
  {languageOptions: { globals: globals.browser }},
];