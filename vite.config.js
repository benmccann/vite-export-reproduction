export default {
	build: {
		lib: {
			entry: './index.js',
			name: 'app',
			formats: ['es']
		},
		rollupOptions: {
			output: {
				entryFileNames: 'vite-output.js'
			}
		},
		outDir: 'dist'
	},
	publicDir: false
}
