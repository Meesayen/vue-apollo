import esbuild from 'esbuild'
import path from 'path'
import pkg from 'esbuild-node-externals'
const { nodeExternalsPlugin } = pkg

;(async () => {
  const builds = [
    { format: 'esm', file: 'index.esm.js' },
    { format: 'cjs', file: 'index.js' },
  ]
  for (const { format, file } of builds) {
    await esbuild.build({
      entryPoints: ['./src/index.ts'],
      bundle: true,
      platform: 'neutral',
      format,
      outfile: path.join('dist', file),
      sourcemap: true,
      plugins: [nodeExternalsPlugin()],
    })
  }
})()
