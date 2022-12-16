module.exports = {
    index: true,
    icon: true,
    typescript: true,
    replaceAttrValues: {
        "#282828": "currentColor",
    },
    template: require("./templates/svgr-template"),
    indexTemplate: require("./templates/svgr-index-template"),
    filenameCase: "kebab",
    outDir: "./src/icon",
};
