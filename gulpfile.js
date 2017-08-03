const gulp = require('gulp')
const rollup = require('rollup')
const rollupTypescript = require('rollup-plugin-typescript2')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const uglify = require('rollup-plugin-uglify')

const strategyList = [
    'CrossMA65'
]

function generateRollupTypeScriptTask(name) {
    return rollup.rollup({
        input: './src/' + name + '.ts',
        plugins: [
            rollupTypescript(),
            nodeResolve({ jsnext: true, main: true }),
            commonjs({
                include: 'node_modules/**'
            }),
            // uglify()
        ],
    })
    .then(function (bundle) {
        bundle.write({
            format: 'iife',
            name: 'main',
            file: './dist/' + name + '.js'
        });
    })
}

gulp.task('default', function () {
    return Promise.all(strategyList.map(generateRollupTypeScriptTask))
})

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.ts'], gulp.series('default'))
})