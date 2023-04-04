import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import path, { join } from 'path';

const srcPath = './src';
const distPath = './dist';

export default defineConfig({
  base: './',
  root: path.resolve(__dirname, srcPath),
  publicDir: 'public',
  build: {
    outDir: path.resolve(__dirname, distPath),
    emptyOutDir: true,
    rollupOptions: {
      // input: [path.resolve(__dirname, `${srcPath}/assets/js/index.js`), path.resolve(__dirname, `${srcPath}/assets/scss/styles.scss`)],
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = 'fonts';
          }
          if (/css/i.test(extType)) {
            extType = 'css';
          }
          if (/js/i.test(extType)) {
            extType = 'js';
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js'
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), 'node_modules/$1')
      }
    ]
  },
  plugins: [sassGlobImports()],
  server: {
    port: 8000
  }
});
