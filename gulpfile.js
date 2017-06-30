const gulp = require('gulp')
const rollup = require('rollup')
const rollupTypescript = require('rollup-plugin-typescript')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify')

const strategyList = [
    '倒币',
    '计时器',
]

function generateRollupTypeScriptTask(name) {
    return rollup.rollup({
        entry: './src/' + name + '.ts',
        plugins: [
            rollupTypescript(),
            nodeResolve({ jsnext: true, main: true }),
            commonjs({
                include: 'node_modules/**'
            }),
            uglify()
        ],
    })
        .then(function (bundle) {
            bundle.write({
                format: 'iife',
                moduleName: 'main',
                dest: './dist/' + name + '.js'
            });
        })
}

gulp.task('default', function () {
    return Promise.all(strategyList.map(generateRollupTypeScriptTask))
})

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.ts'], ['default'])
})