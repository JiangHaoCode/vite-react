import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import pxtovw from "postcss-px-to-viewport";
import path from "path";
import {AntdResolve, createStyleImportPlugin} from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 8090,
    cors: true, // 允许跨域
    // proxy: {}, 代理
  },

  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        // css文件名
        assetFileNames: `[name].[hash].[ext]`,
        // 比如你想构建出来的css为dist/index.css，那么你可以这样
        //  assetFileNames: `index.[ext]`
      },
    },
  },

  css: {
    preprocessorOptions: {
      // 配置less
      less: {
        modifyVars: {
          // 更改主题在这里
          "primary-color": "#52c41a",
          "link-color": "#1DA57A",
          "border-radius-base": "2vw",
        },
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        pxtovw({
          // px to vw
          viewportWidth: 1080,
          viewportUnit: "vw",
        }),
      ],
    },
  },
});
