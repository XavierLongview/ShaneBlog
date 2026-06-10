import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When the custom domain is purchased: set a repository variable named
// CUSTOM_DOMAIN (e.g. "shanecarroll.com") in GitHub Settings → Secrets and
// variables → Actions → Variables, and configure the same domain in
// Settings → Pages. Nothing in the code needs to change.
const customDomain = process.env.CUSTOM_DOMAIN;

export default defineConfig({
  site: customDomain ? `https://${customDomain}` : 'https://xavierlongview.github.io',
  base: customDomain ? '/' : '/ShaneBlog',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
