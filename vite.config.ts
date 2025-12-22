import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: Change this line to your repo name!
  // If your repo is https://github.com/username/my-portfolio
  // Then use base: '/my-portfolio/'
  // If it is a user site (username.github.io), use base: '/'
  base: '/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});