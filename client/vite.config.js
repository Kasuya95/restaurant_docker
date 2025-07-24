import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss() ],
  // allow ให้คนอื่นเข้าถึง เพราะมันอยู่ container
  server: {
    // อนุญาติให้คนอื่นเข้ามาได้หมด host: '0.0.0.0', ที่ port 5173
    host: '0.0.0.0',
    port: 5173,
  }
});

