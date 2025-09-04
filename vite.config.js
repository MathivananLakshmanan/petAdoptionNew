export default defineConfig({
  plugins: [react()],
  base: '/petAdoption/',
  build: {
    outDir: '../dist'  // put build outside pawpal folder
  }
})
y