import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(
        new URL("./src/components/index.ts", import.meta.url)
      ),
      name: "components",
      fileName: "react-antd-template-components",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "antd"],
    },
  },
});
