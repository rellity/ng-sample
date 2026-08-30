import { defineConfig } from 'vite'
import angular from '@rellity/vite-plugin-angular'
import ngRouter from '@rellity/ng-router/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [angular(), ngRouter(), tailwindcss()],
})
