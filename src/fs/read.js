import fsp from "fs/promises";
import path from "path";
import url from "url";

const read = async () => {
  const folderName = "files";
  const readFileName = "fileToRead.txt";

  let errorMessage = "FS operation failed";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const content = await fsp.readFile(
      path.resolve(__dirname, folderName, readFileName),
      { encoding: "utf8" }
    );
    console.log(content);
  } catch (error) {
    if (error.code !== "ENOENT") {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
};

await read();
