import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: { chunkSizeWarningLimit: 2500 },
  server: {
    port: 3700,
  },
  preview: {
    port: 3700,
  },
});
