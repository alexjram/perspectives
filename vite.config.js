import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        loadPaths: [path.resolve(__dirname, "./src/styles")],
        additionalData: `@use "variables" as *;`,
      },
    },
  },
});
