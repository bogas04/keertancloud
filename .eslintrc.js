module.exports = {
    extends: [
      
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint",  "eslint-plugin-react", "react-hooks"],
    parserOptions: {
      project: "./tsconfig.json"
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
        }
      }
    },
    rules: {
      "react/jsx-uses-react": "error",
      "@typescript-eslint/interface-name-prefix": ["error", "always"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "prettier/prettier": ["error", { singleQuote: true }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      quotes: [
        "error",
        "single",
        { avoidEscape: true, allowTemplateLiterals: false }
      ]
    }
  };