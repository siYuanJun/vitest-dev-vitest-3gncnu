/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@@": fileURLToPath(new URL("./tests", import.meta.url)),
    },
  },
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    root: __dirname,
    // globals: true,
    // 启用类似 jest 的全局测试 API
    globals: true,
    // 使用 happy-dom 模拟 DOM
    // 这需要你安装 happy-dom 作为对等依赖（peer dependency）
    environment: "happy-dom",
    coverage: {
      // reportsDirectory: "./tests/unit/coverage",
      provider: "istanbul",
      reporter: ["text", "json", "html"],
    },
  },
});
