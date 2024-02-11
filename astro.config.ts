import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import { remarkReadingTime } from "./src/utils/remarkReadingTime";
import AstroPWA from "@vite-pwa/astro";
import remarkMath from "remark-math";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    AstroPWA(),
    tailwind({
      applyBaseStyles: false
    }),
    react(),
    sitemap(),
    mdx()
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkToc,
      remarkReadingTime,
      'remark-gfm',
    ],
    rehypePlugins: [
      'rehype-slug', ['rehype-autolink-headings', { behavior: 'append' }],
      ['rehype-katex', {}]
    ]
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  scopedStyleStrategy: "where"
});