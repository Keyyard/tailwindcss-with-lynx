const lynxPreset = require("@lynx-js/tailwind-preset");

/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit", // Just-in-time mode
    presets: [lynxPreset], // Use Lynx's TW preset
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan for tw classes
    purge: ["./src/**/*.{js,jsx,ts,tsx}"], // Purge unused CSS
    plugins: [],
    theme: { // Color scheme
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  };