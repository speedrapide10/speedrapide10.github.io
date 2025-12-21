import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  // site: 'https://speedrapide10.github.io', // Uncomment when ready to deploy
  integrations: [react()], // This allows the 'Cpu' and other icons to work
  vite: {
    plugins: [tailwindcss()]
  }
});