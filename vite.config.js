import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./",
    build: { chunkSizeWarningLimit: 1600 },
    define: {
        __APP_ENV__: process.env.VITE_SERVER_URL,
    },
});
