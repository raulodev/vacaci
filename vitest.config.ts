import { defineConfig } from 'vitest/config'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react() , viteTsconfigPaths()],
  test: {
    environment: 'jsdom',
  },
})
