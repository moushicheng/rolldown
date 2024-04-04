import { rolldown } from 'rolldown'

const bundle = await rolldown({
  input: 'app.js',
  plugins: [
    {
      name: 'test1',
      buildStart: {
        order: 'post',
        handler: () => {
          console.log('test1');
        }
      }
    },
    {
      name: 'pre',
      buildStart: {
        order: 'pre',
        handler: () => {
          console.log('test2');
        }
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
