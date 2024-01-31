import process from "process";
import stream from "stream";

const transform = async () => {
  const reverseInput = new stream.Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).split("").reverse().join(""));
    },
  });

  stream.pipeline(process.stdin, reverseInput, process.stdout, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
};

await transform();
