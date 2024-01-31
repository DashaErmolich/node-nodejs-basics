const parseEnv = () => {
  const dataArr = Object.entries(process.env);
  const result = dataArr.map((data) => `RSS_${data[0]}=${data[1]}`);
  console.log(result.join('; '));
};

parseEnv();
