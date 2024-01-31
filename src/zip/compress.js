import zlib from "zlib";
import fs from "fs";
import path from "path";
import url from "url";
import stream from "stream";

const compress = async () => {
  const folderName = "files";
  const fileName = "fileToCompress.txt";
  const archiveName = "archive.gz";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const readStream = fs.createReadStream(
    path.resolve(__dirname, folderName, fileName), { encoding: 'utf-8' },
  );
  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, folderName, archiveName)
  );

  stream.pipeline(readStream, zlib.createGzip(), writeStream, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
};

await compress();
