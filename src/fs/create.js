import fsp from "fs/promises";
import path from "path";
import url from "url";

const create = async () => {
  const content = "I am fresh and young";
  const fileName = "fresh.txt";
  const folderName = "files";

  let errorMessage = "FS operation failed";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    await fsp.writeFile(
      path.resolve(__dirname, folderName, fileName),
      content,
      {
        flag: "wx",
      }
    );
  } catch (error) {
    if (error.code !== "EEXIST") {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

await create();
