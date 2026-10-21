import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["_site/**", "node_modules/**"] },
  js.configs.recommended,
  {
    files: ["src/assets/js/**/*.js"],
    languageOptions: { sourceType: "module", globals: globals.browser },
  },
  {
     files: ["scripts/**/*.js", "lib/**/*.js", "eleventy.config.js", "src/_data/**/*.js"],
    languageOptions: { sourceType: "module", globals: globals.node },
  },
];