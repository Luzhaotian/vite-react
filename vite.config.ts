import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
// import styleImport, { AntdResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
// GitHub project Pages: set VITE_BASE_PATH=/repo-name/ in CI (see deploy workflow).
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [
    react(),
    // styleImport({
    //   resolves: [AntdResolve()],
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './public'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
