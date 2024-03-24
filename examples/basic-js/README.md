# rolldown-output-repro1

This repositry is reproduction for rolldown

## reproduction step

```sh
npm install

npm run build

tree -L 2
.
├── README.md
├── app.js
├── dist
│   ├── app.js
│   └── app.js.map
├── node_modules
│   ├── @rolldown
│   ├── @rollup
│   ├── @types
│   ├── fsevents
│   └── rollup
├── package-lock.json
├── package.json
├── rolldown.js
├── rollup.js
└── rollup_build
    ├── rollup.js
    └── rollup.js.map

9 directories, 10 files
```

rolldown `write` output option:

```js
import { rolldown } from '@rolldown/node'

const bundle = await rolldown({
  input: 'app.js',
})

await bundle.write({
  format: 'esm',
  sourcemap: true,
  file: 'rolldown_build/rolldown.js'
})
```

rolldown cannot output to `'rolldown_build/rolldown.js'` with `file` option.

rollup can ouput with `file` option.

rolldown `write` should have the same result as rollup.