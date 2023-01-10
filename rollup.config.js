import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import { getFiles } from "./scripts/build-util";

const plugins = [
    peerDepsExternal(), // Add the externals for me. [react, react-dom, styled-components]
    nodeResolve(), // Locates modules in the project's node_modules directory
    commonjs(), // converts CommonJS to ES6 modules
    typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: "tsconfig.json",
        tsconfigOverride: {
            // Override base tsconfig.json during build
            exclude: [
                "**/stories/**",
                "**/__tests__/**",
                "**/__mocks__/**",
                "**/util/**",
                "**/custom-types/**",
            ],
        },
    }),
    postcss({
        extract: true,
        modules: false,
        plugins: [require("postcss-import")],
    }),
    json(),
    terser(), // Helps remove comments, whitespace or logging codes
];

const individualFileBuildConfigs = getFiles("./src").map((file) => {
    const fileNameWithNoExtension = file.replace(".tsx", "");

    return {
        input: `src/${file}`,
        output: [
            {
                file: `dist/${fileNameWithNoExtension}.esm.js`,
                exports: "named",
                format: "esm",
            },
            {
                file: `dist/${fileNameWithNoExtension}.js`,
                exports: "named",
                format: "cjs",
            },
        ],
        plugins,
    };
});

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
                exports: "named",
            },
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: true,
                exports: "named",
            },
        ],
        plugins,
        external: ["react", "react-dom", "styled-components"],
    },
    ...individualFileBuildConfigs,
];
