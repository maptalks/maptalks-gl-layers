const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const pkg = require('./package.json');
const terser = require('rollup-plugin-terser').terser;

const outputFile = pkg.main;

const banner = `/*!\n * ${pkg.name} v${pkg.version}\n * LICENSE : ${pkg.license}\n * (c) 2016-${new Date().getFullYear()} maptalks.com\n */`;

let outro = pkg.name + ' v' + pkg.version;
outro = `typeof console !== 'undefined' && console.log('${outro}');`;

module.exports = [
    {
        input: 'index.mjs',
        plugins: [
            nodeResolve({
                module: true,
                // jsnext : true,
                main: true
            }),
            commonjs(),
            terser({
                mangle: false,
                compress: {
                    pure_getters: true
                },
                output: {
                    ecma: 2017,
                    // keep_quoted_props: true,
                    beautify: false,
                    comments: '/^!/'
                }
            })
        ],
        external: ['maptalks'],
        output: {
            globals: {
                'maptalks': 'maptalks'
            },
            sourcemap: true,
            banner,
            outro,
            extend: true,
            name: 'maptalks',
            file: outputFile,
            format: 'umd'
        }
    }
];
