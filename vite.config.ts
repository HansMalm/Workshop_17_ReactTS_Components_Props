import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Workshop_17_ReactTS_Components_Props/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "docs",
  },
});
