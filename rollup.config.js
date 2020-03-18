import babel from 'rollup-plugin-babel';

export default {
    input: './scripts/firebase.js',
    output: {
        file: './dist/bundle.min.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
