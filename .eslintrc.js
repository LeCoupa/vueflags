module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:vue/strongly-recommended"],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
}
