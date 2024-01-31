import crypto from 'crypto';
import fsp from "fs/promises";
import path from "path";
import url from "url";

const calculateHash = async () => {
    const folderName = "files";
    const fileName = "fileToCalculateHashFor.txt";

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileBuffer = await fsp.readFile(path.resolve(__dirname, folderName, fileName));
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer)

    const hex = hashSum.digest('hex');

    console.log(hex);
};

await calculateHash();