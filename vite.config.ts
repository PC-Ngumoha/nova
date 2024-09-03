import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import PrettyModuleClassnames from 'vite-plugin-pretty-module-classnames';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    PrettyModuleClassnames()
  ],
  resolve: {
    alias: {
      "@": resolve( __dirname , 'src')
    }
  }
});
