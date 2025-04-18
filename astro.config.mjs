// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    // We need to ensure static files in public/ are being served
    site: "https://compmotifs.com",
    base: '/', // Ensure we're serving from root
});
