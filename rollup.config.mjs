import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { createRequire } from "node:module";
import postcssImport from "postcss-import";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { getFiles } from "./scripts/build-util.mjs";

// Rollup >=3 loads this config as native ESM, so package.json is read through
// createRequire instead of a bare JSON import.
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

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
        plugins: [postcssImport],
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
                // Rollup 3 changed the default to "if-default-prop", which drops
                // the __esModule marker from these named-export-only modules and
                // changes default-import interop for consumers. Keep it.
                esModule: true,
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
                esModule: true, // keeps the __esModule marker; see note above
            },
        ],
        plugins,
        external: ["react", "react-dom", "styled-components"],
    },
    ...individualFileBuildConfigs,
];
