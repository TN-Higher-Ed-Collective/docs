import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Set BASE_URL env var for GitHub Pages (e.g., BASE_URL=/astro-terminal-docs/)
const site = process.env.SITE_URL || "https://tn-higher-ed-collective.github.io";
const base = process.env.BASE_URL || "/docs/";

export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
