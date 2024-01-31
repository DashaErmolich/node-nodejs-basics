import fsp from "fs/promises";
import path from "path";
import url from "url";

const list = async () => {
  const folderName = "files";

  let errorMessage = "FS operation failed";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const files = await fsp.readdir(path.resolve(__dirname, folderName));

    files.forEach((file) => {
      console.log(path.parse(file).name);
    });
  } catch (error) {
    if (error.code !== "ENOENT") {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
};

await list();
