import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Check if you're running on Vercel
const isVercel = process.env.VERCEL === "1";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  base: isVercel ? "/" : "/Bharath-Portfolio", // ✅ Dynamic base
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
