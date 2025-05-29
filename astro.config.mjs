// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/content/sidebar';

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  integrations: [
    starlight({
      title: 'Documentación de Instadruna',
	  customCss: ['/src/styles/starlight.css'],
	  sidebar,
    }),
  ]
});
