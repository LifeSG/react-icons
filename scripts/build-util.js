const { readdirSync } = require("fs-extra");

export function getFiles(dir) {
    const files = readdirSync(dir);
    return files;
}
