import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: /script\.js$/,
    })
  ],
  esbuild: {
    loader: 'js',
    include: /\.(js)$/,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
