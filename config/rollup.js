var pkg = require('../package.json')

var version = pkg.version

var banner = `/*!
 * ${pkg.name} ${version}
 * (c) 2017-${new Date().getFullYear()} ${pkg.author}
 * Released under the ${pkg.license} License.
 */
`

function getCompiler(opt) {
  return babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers:
              'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
            node: '0.12',
          },
          modules: false,
          loose: true,
        },
      ],
    ],
    exclude: 'node_modules/**',
  })
}

exports.banner = banner
