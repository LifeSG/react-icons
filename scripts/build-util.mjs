import { readdirSync } from "node:fs";

export function getFiles(dir) {
    const files = readdirSync(dir);
    return files;
}
