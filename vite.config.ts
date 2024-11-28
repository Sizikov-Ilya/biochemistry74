import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/biochemistry74/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});
