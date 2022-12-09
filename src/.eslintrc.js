module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // Best Practices
    eqeqeq: "error",
    "no-invalid-this": "error",
    "no-return-assign": "error",
    "no-useless-concat": [0],
    "no-useless-return": "error",
    "no-unused-vars": [0],

    // Stylistic Issues
    "array-bracket-newline": ["off"],
    "array-bracket-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": "error",
    "comma-dangle": "off",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    "implicit-arrow-linebreak": "off",
    "keyword-spacing": "error",
    "multiline-ternary": "off",
    "no-mixed-operators": "off",
    "no-tabs": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],
    "quote-props": ["error", "as-needed"],
    semi: [0],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",

    // ES6
    "arrow-spacing": "error",
    "no-confusing-arrow": "off",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": 0,
    "prefer-const": "off",
    "prefer-template": "off",
  },
};
