import * as dotenv from 'dotenv';
dotenv.config();
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const portT = 
// const serverPort = import.meta.env.VITE_SERVER_POST

// https://vitejs.dev/config/
export default defineConfig({
  // envDir: './env',
  plugins: [react()],
  // envPrefix: 'VITE_',
  server:{
    port: process.env.VITE_PORT,
    host:true
  }
})
