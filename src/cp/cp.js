import { fork } from "child_process";
import fs from "fs";
import process from "process";
import path from "path";
import url from "url";

const spawnChildProcess = async (args) => {
  const folderName = "files";
  const fileName = "script.js";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fork(path.resolve(__dirname, folderName, fileName), [...args], {
    stdio: [process.stdin, process.stdout, "pipe", "ipc"],
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hey", "hola", "ciao"]);
