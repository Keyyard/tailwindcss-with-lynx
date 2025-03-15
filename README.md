# Lynx with TailwindCSS

Welcome to the ReactLynx project with TailwindCSS! You can clone this repository to get started with a new ReactLynx project that uses TailwindCSS for styling or follow the instructions below to add TailwindCSS to an existing project.

I'll be using TypeScript in this guide, make your own adjustments if you're not.

## Getting Started

### Create a New ReactLynx Project

```bash
npm create rspeedy@latest
```

This command will set up a new ReactLynx project with the latest version.

### Install TailwindCSS

```bash
npm add tailwindcss@3 rsbuild-plugin-tailwindcss @lynx-js/tailwind-preset -D
```

Here's what each package does:
- `tailwindcss@3`: The core Tailwind CSS framework (version 3).
- `rsbuild-plugin-tailwindcss`: A plugin to integrate Tailwind CSS with Rsbuild, the build tool used by LynxJS.
- `@lynx-js/tailwind-preset`: A pre-configured Tailwind setup tailored for LynxJS projects.

### Add the Tailwind Plugin to lynx.config.ts

Add the TailwindCSS plugin to the Rsbuild configuration in the lynx.config.ts file:

```typescript
import { pluginTailwindCSS } from "rsbuild-plugin-tailwindcss"; // Import the TailwindCSS plugin

export default defineConfig({
  plugins: [
    pluginTailwindCSS({
      config: "./tailwind.config.ts", // Path to the Tailwind CSS config file
      include: /\.[jt]sx?/, // Include all js, jsx, ts, and tsx files
      exclude: ["./src/store/**", /[\\/]node_modules[\\/]/], // Exclude these directories
    }),
  ],
});
```

### Create a TailwindCSS Config File

Create a tailwind.config.ts file in the root of your project. Here's a sample configuration:

```typescript
const lynxPreset = require("@lynx-js/tailwind-preset");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Just-in-time mode
  presets: [lynxPreset], // Use Lynx's Tailwind preset
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan for Tailwind classes
  purge: ["./src/**/*.{js,jsx,ts,tsx}"], // Purge unused CSS
  plugins: [],
  theme: {
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
```

### PostCSS Configuration

Create a postcss.config.ts file at the root of your project:

```typescript
export default {
  plugins: {
    cssnano: process.env["NODE_ENV"] === "production" ? {} : false,
  },
};
```

### Use TailwindCSS

Import TailwindCSS in your index.tsx file:

```typescript
import "tailwindcss/utilities.css";
```

### Run the Project

```bash
npm run dev
```

