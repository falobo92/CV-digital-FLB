import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Base path para GitHub Pages
    // En GitHub Actions, usar el nombre del repositorio
    // En desarrollo local, usar "/"
    const getBasePath = () => {
        // Si está en GitHub Actions
        if (process.env.GITHUB_REPOSITORY) {
            const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
            return `/${repoName}/`;
        }
        // Si hay una variable de entorno personalizada
        if (process.env.VITE_BASE_PATH) {
            return process.env.VITE_BASE_PATH;
        }
        // Por defecto, raíz (para desarrollo local)
        return '/';
    };
    
    return {
      base: getBasePath(),
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      }
    };
});
