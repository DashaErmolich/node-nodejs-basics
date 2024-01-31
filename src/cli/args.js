const parseArgs = () => {
  const dataArr = process.argv.slice(2);
  const result = [];

  for (let i = 0; i < dataArr.length; i += 2) {
    if (dataArr[i].startsWith('--')) {
        result.push(`${dataArr[i].slice(2)} is ${dataArr[i + 1]}`)
    }
  }

  console.log(result.join(", "));
};

parseArgs();
