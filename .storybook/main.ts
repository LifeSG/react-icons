import { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
    ],
    staticDirs: ["../public"],
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    webpackFinal: async (config) => {
        config.resolve!.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];
        return config;
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic",
                },
            },
        },
    }),
};
export default config;
