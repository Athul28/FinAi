import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
}