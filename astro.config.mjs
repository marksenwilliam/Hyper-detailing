// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// `astro dev` vs `astro build`/`astro preview`. The React renderer only exists
// for the dev-only Agentation widget (src/components/DevTools.astro); leaving
// it registered during `build` still emits its client entry into dist/_astro.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with the client's real production domain before launch.
  // Used for canonical URLs, og:url, absolute og:image and the sitemap.
  site: 'https://hyperdetailingumea.se',
  server: { port: 4322 },
  integrations: [
    // React renderer — dev only, see above. Nothing on the site itself uses
    // React, so production builds carry neither React nor the renderer.
    ...(isDev ? [react()] : []),
    // Emits /sitemap-index.xml at build time (linked from robots.txt and the
    // <head>). Needs `site` above.
    sitemap(),
  ],
  vite: {
    // Force a single React copy. Vite's dep pre-bundling otherwise gives the
    // island its own React instance, separate from the one @astrojs/react uses
    // — which surfaces as "Invalid hook call" in the client:only island.
    // (Same fix as the marksenmedia repos.)
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        '@astrojs/react/client.js',
      ],
    },
  },
});
