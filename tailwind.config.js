/** @type {import('tailwindcss').Config} */
const themeSwapper = require("tailwindcss-theme-swapper");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    themeSwapper({
      themes: [
        // The only required theme is `base`. Every property used in
        // other themes must exist in here.
        {
          name: "base",
          selectors: [":root"],
          theme: {
            colors: {
              primary: {
                50: "#fef2f2",
                100: "#fee2e2",
                200: "#ffc9c9",
                300: "#fda4a4",
                400: "#fa6f6f",
                500: "#f14242",
                600: "#de2424",
                700: "#c91c1c", // main
                800: "#9b1919",
                900: "#801c1c",
                950: "#460909",
              },
              secondary: {
                50: "#f9fafb",
                100: "#f3f4f6",
                200: "#e5e7eb",
                300: "#d1d5db",
                400: "#9ca3af",
                500: "#6b7280",
                600: "#4b5563",
                700: "#374151",
                800: "#1f2937",
                900: "#111827",
                950: "#030712",
              },
            },
          },
        },
        {
          name: "dark",
          selectors: [".dark"],
          mediaQuery: "@media (prefers-color-scheme: dark)",
          theme: {
            colors: {
              primary: "#fff",
            },
          },
        },
        {
          name: "matrix",
          selectors: [".matrix"],
          theme: {
            colors: {
              primary: "#0f0",
            },
          },
        },
      ],
    }),
  ],
};
