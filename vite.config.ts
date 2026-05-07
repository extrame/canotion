import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs'
  },
  assetsInclude: ['**/*.md'],
  server: {
    fs: {
      allow: ['..']
    }
  }
});
