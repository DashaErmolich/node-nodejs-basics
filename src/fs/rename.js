import fsp from "fs/promises";
import path from "path";
import url from "url";

const rename = async () => {
  const folderName = "files";
  const wrongFileName = "wrongFilename.txt";
  const properFileName = "properFilename.md";

  let errorMessage = "FS operation failed";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const properFilePath = path.resolve(__dirname, folderName, properFileName);

  try {
    await fsp.access(properFilePath, fsp.constants.F_OK);
    throw new Error(errorMessage); // if properFilename.md already exists
  } catch (error) {
    if (error.code !== "ENOENT") {
      errorMessage = error.message;
      throw new Error(errorMessage);
    }
  }

  try {
    await fsp.rename(
      path.resolve(__dirname, folderName, wrongFileName),
      path.resolve(__dirname, folderName, properFileName)
    );
  } catch (error) {
    if (error.code !== "ENOENT") {
      errorMessage = error.message;
    }
    throw new Error(errorMessage); // if there's no file wrongFilename.txt
  }
};

await rename();
