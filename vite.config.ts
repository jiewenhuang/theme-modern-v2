import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/

export default ({ mode }: { mode: string }) => {

  const isProduction = mode === "production";

  return defineConfig({
    root: "./src",
    base: isProduction ? "/themes/theme-modern-v2/assets/dist/" : "",
    define: {
      "process.env": process.env,
    },
    plugins: [preact()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      manifest: isProduction,
      minify: isProduction,
      rollupOptions: {
        input: path.resolve(__dirname, "src/main.ts"),
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name][extname]",
        },
        treeshake: false,
        preserveEntrySignatures: "allow-extension",
      },
      outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
      emptyOutDir: true,
    },
  });
};
