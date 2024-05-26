import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // depending on your application, base can also be "/"
  plugins: [react()],
  base: '/Portfolio/',
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
  },
});
