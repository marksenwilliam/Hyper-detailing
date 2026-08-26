// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with the client's real production domain before launch.
  // Used for canonical URLs, og:url and absolute og:image.
  site: 'https://hyperdetailingumea.se',
  server: { port: 4322 },
  integrations: [
    // React renderer — required solely by the dev-only Agentation widget, which
    // renders as a client:only island in BaseLayout. Nothing else on the site
    // uses React, and the island is gated behind import.meta.env.DEV, so no
    // React ships to production.
    react(),
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
