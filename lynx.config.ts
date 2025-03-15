import { defineConfig } from '@lynx-js/rspeedy'

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin'
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'

import { pluginTailwindCSS} from  'rsbuild-plugin-tailwindcss' // Import TW plugin


export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`
      },
    }),
    pluginReactLynx(),
    // Add the plugin
    pluginTailwindCSS({
      config: './tailwind.config.ts', // Path to the Tailwind CSS config file
      include: /\.[jt]sx?/, // All js, jsx, ts, and tsx files
      exclude: ["./src/store/**", /[\\/]node_modules[\\/]/], // Skip these directories  
    })
  ],
})
