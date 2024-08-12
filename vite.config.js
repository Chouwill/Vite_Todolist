import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vite_Todolist/', //  Vite_2024 github專案名稱要一樣
  plugins: [vue()],
})
