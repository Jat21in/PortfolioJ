import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages"; // Check if 'ghPages' is a named export

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/PortfolioJ/', // Ensure this matches your GitHub repo name
});
