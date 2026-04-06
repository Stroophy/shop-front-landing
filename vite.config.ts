import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { astro } from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [tailwind(), astro()],
});
