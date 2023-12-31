import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: './index.js',
    output: {
        file: './dist/rollup-output.js',
        format: 'es'
    },
    plugins: [nodeResolve()]
}
