import pkg from './package.json'
import camelCase from 'lodash.camelcase'
import startCase from 'lodash.startcase'
import buble from 'rollup-plugin-buble'
import sourcemaps from 'rollup-plugin-sourcemaps'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'

const input = `compiled/${pkg.name}.js`
const name = camelCase(pkg.name)
const outputFile = format => `dist/${pkg.name}.${format}.js`
const banner = `/*!
 * ${startCase(pkg.name)}. ${pkg.description}.
 * ${pkg.homepage}
 * Copyright (c) 2015-${(new Date()).getFullYear()} ${pkg.author.name}
 * Licensed under the ${pkg.license} license
 * Version: ${pkg.version}
 */`
const bannerMin = `/*! ${startCase(pkg.name)} v${pkg.version} | ` +
  `Copyright (c) 2015-${(new Date()).getFullYear()} ${pkg.author.name} | ${pkg.license} | ${pkg.homepageShort} */`

export default [
  // UMD
  {
    input,
    output: {
      file: outputFile('umd'),
      name,
      format: 'umd',
      sourcemap: true,
      banner,
    },
    plugins: [
      buble(),
      sourcemaps(),
    ],
  },

  // UMD minified
  {
    input,
    output: {
      file: outputFile('umd.min'),
      name,
      format: 'umd',
      sourcemap: false,
      banner: bannerMin,
    },
    plugins: [
      buble(),
      uglify({
        output: {
          comments: /^!/,
        },
      }),
    ],
  },

  // ES Module
  {
    input,
    output: {
      file: outputFile('esm'),
      name,
      format: 'esm',
      sourcemap: true,
      banner,
    },
    plugins: [
      sourcemaps(),
    ]
  },

  // ES Module minified
  {
    input,
    output: {
      file: outputFile('esm.min'),
      name,
      format: 'esm',
      sourcemap: false,
      banner: bannerMin,
    },
    plugins: [
      terser({
        output: {
          comments: /^!/,
        },
      }),
    ],
  },
]
