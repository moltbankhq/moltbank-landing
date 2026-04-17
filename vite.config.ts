import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Inject <meta name="robots" content="noindex"> on non-production builds
// (Vercel preview deployments, local builds) so preview URLs don't leak into search.
function nonProdNoindex() {
  const isProd = process.env.VERCEL_ENV === 'production'
  return {
    name: 'non-prod-noindex',
    transformIndexHtml(html: string) {
      if (isProd) return html
      return html.replace(
        /<head>/i,
        '<head>\n    <meta name="robots" content="noindex, nofollow, noarchive" />',
      )
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    nonProdNoindex(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
