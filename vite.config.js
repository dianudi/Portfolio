import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // depending on your application, base can also be "/"
  base: "",
  plugins: [react()],
  base: '/my-portfolio/',
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
  },
});
