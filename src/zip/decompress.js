import zlib from "zlib";
import fs from "fs";
import path from "path";
import url from "url";
import stream from "stream";

const decompress = async () => {
  const folderName = "files";
  const fileName = "fileToCompress.txt";
  const archiveName = "archive.gz";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const readStream = fs.createReadStream(
    path.resolve(__dirname, folderName, archiveName),
  );
  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, folderName, fileName)
  );

  stream.pipeline(readStream, zlib.createUnzip(), writeStream, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
};

await decompress();
