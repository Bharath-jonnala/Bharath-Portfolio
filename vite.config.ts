import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const isVercel = process.env.VERCEL === "1";

export default defineConfig(() => ({
  base: isVercel ? "/" : "/Bharath-Portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
}));
