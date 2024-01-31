import fsp from "fs/promises";
import path from "path";
import url from "url";

const copy = async () => {
  const source = "files";
  const destination = "files_copy";

  let errorMessage = "FS operation failed";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    await fsp.cp(
      path.resolve(__dirname, source),
      path.resolve(__dirname, destination),
      {
        force: false,
        errorOnExist: true,
        recursive: true,
      }
    );
  } catch (error) {
    if (error.code !== "ERR_FS_CP_EEXIST" && error.code !== "ENOENT") {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

await copy();
