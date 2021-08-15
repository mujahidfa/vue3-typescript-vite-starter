/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: "media",
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "light-primary": colors.white,
      "light-secondary": colors.gray[100],
      "dark-primary": colors.gray[900],
      "dark-secondary": colors.gray[800],
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "light-primary": colors.gray[900],
      "light-secondary": colors.gray[600],
      "dark-primary": colors.gray[100],
      "dark-secondary": colors.gray[400],
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
