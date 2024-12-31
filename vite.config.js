import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ghPages from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/Portfolio-JatinMittal/', // Set the repository name as the base
});
