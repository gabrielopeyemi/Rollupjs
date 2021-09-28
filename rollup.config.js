import babel from "rollup-plugin-babel";
import scss from 'rollup-plugin-scss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import css from "rollup-plugin-import-css";

export default [
    {
        input: "src/main.js",
        output: {
            name: "reusable",
            file: "dist/main.js",
            format: "esm"
        },
        external: ["react"],
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            scss(),
            resolve(),
            image(),
            css(),
            scss(),
        ]
    }
]