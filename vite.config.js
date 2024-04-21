import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Importuj moduł path

const __dirname = new URL(import.meta.url).pathname;

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./Pages"),
    },
  },
});
