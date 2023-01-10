const { resolve, join } = require("path");
const { readdir, readFile, writeFile, unlink } = require("fs-extra");
const { transform } = require("@svgr/core");

const packagePath = process.cwd();
const assetPath = join(packagePath, "./assets");
const destinationPath = join(packagePath, "./src");
const storyPath = join(packagePath, "./stories/icon");

// =============================================================================
// HELPERS
// =============================================================================
function format(text) {
    return text.replace(/-/, "").toUpperCase();
}

function getComponentName(fileName) {
    // Converts svg file name to component name
    // e.g. arrow-left.svg > ArrowLeftIcon
    return `${fileName.replace(".svg", "").replace(/(^\w|-\w)/g, format)}Icon`;
}

function getComponentFileName(fileName) {
    // Converts the extension
    return fileName.replace(".svg", ".tsx");
}

function trimTsxExtension(fileName) {
    return fileName.replace(".tsx", "");
}

async function transformToJSX(file) {
    const svgData = await readFile(resolve(assetPath, file), "utf8");

    return await transform(
        svgData,
        {
            icon: true,
            typescript: true,
            replaceAttrValues: {
                "#282828": "currentColor",
            },
            template: require("../templates/svgr-template"),
        },
        // This will be passed to the template
        { componentName: getComponentName(file) }
    );
}

// =============================================================================
// RUNNABLE
// =============================================================================
async function deleteFiles() {
    const files = await readdir(destinationPath);

    for (const file of files) {
        const fullPath = join(destinationPath, file);
        await unlink(fullPath);
    }

    console.log(`Deleted ${files.length} files`);
}

async function writeComponentFiles() {
    const svgFiles = await readdir(assetPath);

    for (const file of svgFiles) {
        const jsxCode = await transformToJSX(file);
        const fileName = getComponentFileName(file);
        const fullPath = join(destinationPath, fileName);
        await writeFile(fullPath, jsxCode);
    }

    console.log(`Created ${svgFiles.length} component files`);
}

async function generateIndexFile() {
    const componentFiles = await readdir(destinationPath);

    let data = "";
    for (const file of componentFiles) {
        if (file !== "index.ts") {
            data = data.concat(
                `export * from "./${trimTsxExtension(file)}";\n`
            );
        }
    }

    const fullPath = join(destinationPath, "index.ts");
    await writeFile(fullPath, data);
    console.log("Successfully written index file");
}

async function run() {
    try {
        await deleteFiles();
        await writeComponentFiles();
        await generateIndexFile();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
