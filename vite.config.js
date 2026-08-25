import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^style-it$/,
        replacement: new URL("./src/utils/style-it.js", import.meta.url).pathname,
      },
    ],
  },
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
