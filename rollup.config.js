import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

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
        }),
        uglify()
    ]
}
