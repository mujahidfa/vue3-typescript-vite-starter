module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // Prettier rules must be placed at the end
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  // To allow Headwind class sorting
  plugins: ["prettier"],
  rules: {
    // To allow Headwind class sorting
    "prettier/prettier": "off",
    // To allow usage of script setup
    "vue/script-setup-uses-vars": "error",
    // 'no-unused-vars': 'off',
    "@typescript-eslint/no-unused-vars": ["off"],
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};
