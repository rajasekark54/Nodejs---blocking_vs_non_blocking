const timmerProcess = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const msg = `Millisecond Passed Successfully - ${ms}`;
      resolve(msg);
    }, ms);
  });
};

const sequentialProcess = (ms) => {
  for (let index = 0; index < ms; index++) {
    console.log(index);
  }
  return `Millisecond Passed Successfully - ${ms}`;
};

module.exports = { timmerProcess, sequentialProcess };
