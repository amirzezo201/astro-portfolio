import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: "https://amirgeek.com",
  integrations: [tailwind(), mdx(), sitemap()],
});
