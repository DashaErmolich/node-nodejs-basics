import fsp from "fs/promises";
import path from "path";
import url from "url";

const remove = async () => {
    const folderName = "files";
    const removeFileName = "fileToRemove.txt";
  
    let errorMessage = "FS operation failed";
  
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
  
    try {
      await fsp.unlink(path.resolve(__dirname, folderName, removeFileName));
    } catch (error) {
      if (error.code !== "ENOENT") {
        errorMessage = error.message;
      }
      throw new Error(errorMessage);
    }
};

await remove();