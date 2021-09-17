import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';

// whenever rollup runs in watch mode, it automatically sets this environment variable to 'development'
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/main.js",
    output: {
        sourcemap: true,
        format: 'iife',
        file: 'public/build/bundle.js'
    },
    // watch: {
    //     clearScreen: false
    // },
    plugins: [
        svelte({
            include: 'src/*.svelte',
        }),
        css({
            output: 'bundle.css'
        }),
        resolve({
            browser: true, // respect the browser property in package.json
            dedupe: ["svelte"] // avoids duplicating svelte files every time they are imported 
        }),
        !production && livereload({
            watch: 'public'
        }),
        !production && serve({
            open: true,
            openPage: '/index.html',
            contentBase: './public',
            host: 'localhost',
            port: 3000,
        }),
    ]
}