import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { watchAndRun } from 'vite-plugin-watch-and-run';

export default defineConfig({
	server: { open: '/' },
	plugins: [
		viteReact(),
		sassGlobImports(),
		watchAndRun([
			{ watch: '**/styles/**/*.scss', watchKind: 'add', run: 'touch ./src/styles/style.scss', quiet: true },
		]),
	],
	resolve: { alias: { '@': '/src' } },
});
