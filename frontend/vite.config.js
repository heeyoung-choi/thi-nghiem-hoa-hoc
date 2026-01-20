// Source - https://stackoverflow.com/a
// Posted by flydev, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-20, License - CC BY-SA 4.0

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    }),
  ], 
})
