import path from "path";
import url from "url";
import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const fileName = "worker.js";

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  let i = 10;

  const allPromises = os.cpus().map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.resolve(__dirname, fileName), {
        workerData: i++,
      });
      worker.on("message", (value) => resolve(value));
      worker.on("error", (value) => reject(value));
    });
  });

  const workerResult = await Promise.allSettled(allPromises);

  const result = workerResult.map(({ status, value }) => ({
    status: status === "rejected" ? "error" : "resolved",
    data: status === "rejected" ? null : value,
  }));

  console.log(result);
};

await performCalculations();
