const esbuild = require('esbuild')
const path = require('path')

esbuild.buildSync({
  entryPoints: [path.join(__dirname, '../index.js')],
  outfile: path.join(__dirname, '../build/index.js'),
})