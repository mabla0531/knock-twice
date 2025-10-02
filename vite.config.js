import {defineConfig} from 'vite';
import {hydrogen} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {vitePlugin as remix} from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      appDirectory: 'src',
      ignoredRouteFiles: ['**/.*'],
      future: {
        v3_fetcherPersist: false,
        v3_relativeSplatPath: false,
        v3_throwAbortReason: false,
        v3_routeConfig: false,
      },
    }),
    tsconfigPaths(),
    tailwindcss()
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0,
  },
  optimizeDeps: {
    include: [
      'react-image-zoom',
      '@shopify/polaris',
      '@shopify/polaris-icons',
      'react',
      'react-dom',
      'react-device-detect'
    ],
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: [
        'react-image-zoom',
        'react-device-detect',
        'prop-types',
        'react-fast-compare',
        'deepmerge',
        '@shopify/polaris',
        '@shopify/polaris-icons',
        'react',
        'react-dom'
      ],
    },
  },
});
