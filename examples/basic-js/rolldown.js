import { rolldown } from 'rolldown'

const bundle = await rolldown({
  input: 'app.js',
  plugins: [
    {
      buildStart: (...params) => {
        console.log('build start', params);
      }
    }
  ]
})


await bundle.write({
  // format: 'esm',
  sourcemap: true,
  // dir: 'build',
  file: 'rolldown_build/rolldown.js'
})
