import fs from 'fs';
import process from 'process';
import path from "path";
import url from "url";

const write = async () => {
    const folderName = "files";
    const fileName = "fileToWrite.txt";

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const writeStream = fs.createWriteStream(path.resolve(__dirname, folderName, fileName));

    process.stdin.pipe(writeStream);
};

await write();