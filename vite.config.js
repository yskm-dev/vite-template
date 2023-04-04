import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import inputPlugin from '@macropygia/vite-plugin-glob-input';
// import nunjucks from '@vituum/vite-plugin-nunjucks';
import { eleventyPlugin } from 'vite-plugin-eleventy';
import liveReload from 'vite-plugin-live-reload';

import path from 'path';
const srcPath = './src';
const distPath = './dist';

export default defineConfig({
  base: './',
  root: path.resolve(__dirname, srcPath),
  publicDir: path.resolve(__dirname, './public'),
  build: {
    emptyOutDir: true,
    // polyfillModulePreload: false,
    outDir: path.resolve(__dirname, distPath),
    rollupOptions: {
      // input: [`${path.resolve(__dirname, srcPath)}/assets/js/main.js`, `${path.resolve(__dirname, srcPath)}/assets/scss/styles.scss`, ...glob.sync([`./src/**/*.html`], { dot: true })],
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
        chunkFileNames: (chunkInfo) => {
          return 'assets/js/[name].js';
        },
        entryFileNames: (entryInfo) => {
          return 'assets/js/[name].js';
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@styles',
        replacement: new URL('./src/assets/scss', import.meta.url).pathname
      },
      {
        find: '@script',
        replacement: new URL('./src/assets/js', import.meta.url).pathname
      },
      {
        find: /~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1')
      }
    ]
  },
  plugins: [
    sassGlobImports(),
    eleventyPlugin({
      dir: {
        includes: './includes',
        data: './_data'
      },
      pathPrefix: '/'
    }),
    liveReload('./src/**/*.ejs')
  ],
  server: {
    cors: true,
    port: 8000
  }
});
