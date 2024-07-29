import containerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss";

export default {
  content: [
    "./node_modules/preline/preline.js",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [containerQueries, require("preline/plugin")],
} satisfies Config;
