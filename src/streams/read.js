import fs from 'fs';
import process from 'process';
import path from "path";
import url from "url";

const read = async () => {
    const folderName = "files";
    const fileName = "fileToRead.txt";

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const readStream = fs.createReadStream(path.resolve(__dirname, folderName, fileName));

    readStream.pipe(process.stdout);
};

await read();