import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

// whenever rollup runs in watch mode, it automatically sets this environment variable to 'development'
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/main.js",
    output: {
        format: 'iife',
        file: 'public/build/bundle.js'
    },
    watch: {
        clearScreen: false
    },
    plugins: [
        svelte({
            include: 'src/*.svelte'
        }),
        resolve({
            browser: true
        }),
        !production && livereload({
            watch: 'public'
        }),
        !production && serve({
            open: true,
            openPage: '/index.html',
            contentBase: './public',
            host: 'localhost',
            port: 10001,
        }),
    ]
}