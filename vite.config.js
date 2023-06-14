import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/telval/',

  // resolve: {
  //   alias: {
  //     $images: resolve('./public/images')
  //   }
  // },
  server: {
    host: true
  }
})
